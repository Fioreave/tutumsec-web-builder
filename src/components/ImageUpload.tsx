import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploadProps {
  value?: string;
  alt?: string;
  onImageChange: (url: string) => void;
  onAltChange: (alt: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
  value, 
  alt, 
  onImageChange, 
  onAltChange 
}) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Solo se permiten archivos de imagen.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Error",
        description: "El archivo es demasiado grande. Máximo 5MB.",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
      const filePath = `public/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('blog-images').getPublicUrl(filePath);
      
      setPreview(data.publicUrl);
      onImageChange(data.publicUrl);

      toast({
        title: "Éxito",
        description: "Imagen subida correctamente.",
      });
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Error al subir la imagen.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onImageChange('');
    onAltChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      <Label>Imagen destacada</Label>
      
      {preview ? (
        <div className="space-y-4">
          <div className="relative">
            <img
              src={preview}
              alt={alt || 'Preview'}
              className="w-full max-w-md h-48 object-cover rounded-lg border"
            />
            <Button
              type="button"
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="image-alt">Texto alternativo *</Label>
            <Input
              id="image-alt"
              type="text"
              value={alt || ''}
              onChange={(e) => onAltChange(e.target.value)}
              placeholder="Describe la imagen para accesibilidad"
              required={!!preview}
            />
          </div>
        </div>
      ) : (
        <div>
          <Button
            type="button"
            variant="outline"
            className="w-full h-32 border-dashed"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
          >
            <div className="text-center">
              {uploading ? (
                <div className="space-y-2">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto"></div>
                  <p className="text-sm text-muted-foreground">Subiendo...</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Subir imagen</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, WebP (máx. 5MB)</p>
                  </div>
                </div>
              )}
            </div>
          </Button>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;