import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Check, X } from 'lucide-react';

interface PasswordStrengthProps {
  password: string;
}

interface PasswordRule {
  test: (password: string) => boolean;
  message: string;
}

const passwordRules: PasswordRule[] = [
  { test: (p) => p.length >= 8, message: 'Al menos 8 caracteres' },
  { test: (p) => /[A-Z]/.test(p), message: 'Al menos una mayúscula' },
  { test: (p) => /[a-z]/.test(p), message: 'Al menos una minúscula' },
  { test: (p) => /\d/.test(p), message: 'Al menos un número' },
  { test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), message: 'Al menos un símbolo especial' },
];

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const passedRules = passwordRules.filter(rule => rule.test(password));
  const strength = (passedRules.length / passwordRules.length) * 100;
  
  const getStrengthColor = () => {
    if (strength < 40) return 'bg-destructive';
    if (strength < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = () => {
    if (strength < 40) return 'Débil';
    if (strength < 80) return 'Media';
    return 'Fuerte';
  };

  if (!password) return null;

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Fortaleza de la contraseña</span>
          <span className={`font-medium ${strength >= 80 ? 'text-green-600' : strength >= 40 ? 'text-yellow-600' : 'text-destructive'}`}>
            {getStrengthText()}
          </span>
        </div>
        <Progress value={strength} className={`h-2 ${getStrengthColor()}`} />
      </div>
      
      <div className="space-y-1">
        {passwordRules.map((rule, index) => {
          const passed = rule.test(password);
          return (
            <div key={index} className="flex items-center gap-2 text-xs">
              {passed ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <X className="h-3 w-3 text-muted-foreground" />
              )}
              <span className={passed ? 'text-green-600' : 'text-muted-foreground'}>
                {rule.message}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};