import { useState, useCallback } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  blockDurationMs?: number;
}

interface RateLimitState {
  attempts: number;
  lastAttempt: number;
  blockedUntil?: number;
}

export const useRateLimit = (key: string, config: RateLimitConfig) => {
  const [state, setState] = useState<RateLimitState>(() => {
    const stored = localStorage.getItem(`rateLimit_${key}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Clean up expired blocks
        if (parsed.blockedUntil && Date.now() > parsed.blockedUntil) {
          return { attempts: 0, lastAttempt: 0 };
        }
        return parsed;
      } catch {
        return { attempts: 0, lastAttempt: 0 };
      }
    }
    return { attempts: 0, lastAttempt: 0 };
  });

  const isBlocked = useCallback(() => {
    if (state.blockedUntil && Date.now() < state.blockedUntil) {
      return true;
    }

    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    // Reset attempts if outside the window
    if (state.lastAttempt < windowStart) {
      return false;
    }

    return state.attempts >= config.maxAttempts;
  }, [state, config]);

  const attempt = useCallback(() => {
    if (isBlocked()) {
      return false;
    }

    const now = Date.now();
    const windowStart = now - config.windowMs;
    
    let newAttempts = state.attempts;
    
    // Reset attempts if outside the window
    if (state.lastAttempt < windowStart) {
      newAttempts = 0;
    }
    
    newAttempts += 1;
    
    const newState: RateLimitState = {
      attempts: newAttempts,
      lastAttempt: now,
    };

    // Block if exceeded attempts
    if (newAttempts >= config.maxAttempts && config.blockDurationMs) {
      newState.blockedUntil = now + config.blockDurationMs;
    }

    setState(newState);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(newState));
    
    return newAttempts < config.maxAttempts;
  }, [state, config, isBlocked]);

  const reset = useCallback(() => {
    const newState = { attempts: 0, lastAttempt: 0 };
    setState(newState);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(newState));
  }, [key]);

  const getTimeUntilReset = useCallback(() => {
    if (state.blockedUntil) {
      return Math.max(0, state.blockedUntil - Date.now());
    }
    
    const windowStart = Date.now() - config.windowMs;
    if (state.lastAttempt < windowStart) {
      return 0;
    }
    
    return Math.max(0, (state.lastAttempt + config.windowMs) - Date.now());
  }, [state, config]);

  return {
    isBlocked: isBlocked(),
    attempt,
    reset,
    attemptsRemaining: Math.max(0, config.maxAttempts - state.attempts),
    timeUntilReset: getTimeUntilReset(),
  };
};