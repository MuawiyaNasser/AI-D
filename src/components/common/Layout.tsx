import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingChat } from '../features/chat/FloatingChat';

interface LayoutProps {
  children: React.ReactNode;
  hideChat?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, hideChat = false }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      {!hideChat && <FloatingChat />}
    </div>
  );
};