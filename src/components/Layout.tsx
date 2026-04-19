import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';

export function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
