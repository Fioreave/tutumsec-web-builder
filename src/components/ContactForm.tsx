import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.tutumsec.io/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.name,
          last_name: '',
          email: formData.email,
          company: formData.company,
          message: formData.message,
          privacy: true,
        }),
      });

      const result = await response.json().catch(() => ({}));
      
      if (!response.ok || !result?.ok) {
        const errorMessage = result?.errors
          ? Object.values(result.errors).join(' · ')
          : result?.error || 'No se pudo enviar el formulario.';
        throw new Error(errorMessage);
      }
      
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
    } catch (error: any) {
      toast({
        title: "Error",
        description: error?.message || "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
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