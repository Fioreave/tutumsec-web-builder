import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useRateLimit } from '@/hooks/useRateLimit';
import { sanitizeText } from '@/utils/sanitize';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const rateLimit = useRateLimit('contact-form', {
    maxAttempts: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
    blockDurationMs: 30 * 60 * 1000, // 30 minutes
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check rate limiting
    if (rateLimit.isBlocked) {
      const minutes = Math.ceil(rateLimit.timeUntilReset / (1000 * 60));
      toast({
        title: "Demasiados intentos",
        description: `Por favor, espera ${minutes} minutos antes de intentar de nuevo.`,
        variant: "destructive",
      });
      return;
    }

    if (!rateLimit.attempt()) {
      toast({
        title: "Límite alcanzado",
        description: "Has alcanzado el límite de envíos. Inténtalo más tarde.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Validación y sanitización
      const sanitizedName = sanitizeText(formData.name.trim());
      const sanitizedCompany = sanitizeText(formData.company.trim());
      const sanitizedMessage = sanitizeText(formData.message.trim());
      
      if (!sanitizedName || !formData.email.trim()) {
        throw new Error('Nombre y email son requeridos');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        throw new Error('Por favor, ingresa un email válido');
      }

      // Guardar en la base de datos
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: sanitizedName,
          email: formData.email.trim().toLowerCase(),
          company: sanitizedCompany || null,
          message: sanitizedMessage
        }]);

      if (error) throw error;
      
      // Trigger PDF download
      const link = document.createElement('a');
      link.href = '/checklist-nis2.pdf';
      link.download = 'checklist-nis2.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "¡Gracias!",
        description: "Un consultor se pondrá en contacto en menos de 4 horas.",
      });

      onSuccess?.();
      setFormData({ name: '', email: '', company: '', message: '' });
      rateLimit.reset(); // Reset on successful submission
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nombre *</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="company">Empresa</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos tu mayor reto de ciberseguridad…"
          className="mt-1"
          rows={4}
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-dark"
      >
        {isSubmitting ? 'Enviando...' : 'Descargar Checklist NIS2'}
      </Button>
    </form>
  );
};