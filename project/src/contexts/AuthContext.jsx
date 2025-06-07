import React, { createContext, useContext, useState } from 'react';

// type UserRole = 'donor' | 'ngo' | 'organizer';

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
//   logout: () => void;
// }

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // This would normally call an API
    // For demo purposes, we're just simulating a successful login
    const mockUser = {
      id: '123',
      name: 'John Doe',
      email,
      role: 'donor',
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (name, email, password, role) => {
    // This would normally call an API
    // For demo purposes, we're just simulating a successful registration
    const mockUser = {
      id: '123',
      name,
      email,
      role,
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};