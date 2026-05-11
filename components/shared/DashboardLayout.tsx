'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/shared/Sidebar';
import { Bell, Search, Menu } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'affiliate' | 'model' | 'client';
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-bg-darker text-white overflow-hidden relative">
      <Sidebar 
        role={role} 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full">
        <header className="h-20 border-b border-border-subtle/50 px-4 md:px-8 flex items-center justify-between shrink-0 sticky top-0 z-50 bg-bg-darker/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Menu size={24} />
            </button>
            <div className="relative hidden sm:block">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                className="bg-zinc-900 border border-zinc-800 text-white rounded-2xl py-2.5 pl-12 pr-6 text-sm font-medium outline-none focus:border-brand/50 transition-all w-64 lg:w-96"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2.5 bg-zinc-900 rounded-xl text-zinc-400 hover:bg-zinc-800 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-brand rounded-full border-2 border-zinc-950"></span>
            </button>
            <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center font-bold text-brand border border-zinc-700/50 uppercase">
              {role[0]}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
