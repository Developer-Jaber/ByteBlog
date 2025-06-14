'use client';

import { createContext, useContext, useState } from 'react';

type AuthModalType = 'login' | 'register' | null;

interface AuthContextProps {
  authModal: AuthModalType;
  openAuthModal: (type: AuthModalType) => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authModal, setAuthModal] = useState<AuthModalType>(null);

  const openAuthModal = (type: AuthModalType) => {
    setAuthModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeAuthModal = () => {
    setAuthModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <AuthContext.Provider value={{ authModal, openAuthModal, closeAuthModal }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}