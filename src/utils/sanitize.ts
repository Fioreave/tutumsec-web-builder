import DOMPurify from 'dompurify';

interface SanitizeOptions {
  allowedTags?: string[];
  allowedAttributes?: string[];
  stripTags?: boolean;
}

const DEFAULT_ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'code', 'pre'
];

const DEFAULT_ALLOWED_ATTRIBUTES = [
  'href', 'src', 'alt', 'title', 'class', 'id'
];

export const sanitizeHtml = (dirty: string, options: SanitizeOptions = {}): string => {
  const {
    allowedTags = DEFAULT_ALLOWED_TAGS,
    allowedAttributes = DEFAULT_ALLOWED_ATTRIBUTES,
    stripTags = false
  } = options;

  if (stripTags) {
    return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [] });
  }

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: allowedTags,
    ALLOWED_ATTR: allowedAttributes,
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_DOM: false,
  });
};

export const sanitizeText = (dirty: string): string => {
  return sanitizeHtml(dirty, { stripTags: true });
};

export const isValidPassword = (password: string): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('La contraseña debe tener al menos 8 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una mayúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('La contraseña debe contener al menos una minúscula');
  }
  
  if (!/\d/.test(password)) {
    errors.push('La contraseña debe contener al menos un número');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('La contraseña debe contener al menos un símbolo especial');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};