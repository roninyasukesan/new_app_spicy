'use client';

import React from 'react';
import { 
  Flame, 
  LayoutDashboard, 
  Users2, 
  Check, 
  Wallet, 
  Bell, 
  Settings, 
  LogOut,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  role: 'admin' | 'affiliate' | 'model' | 'client';
}

export function Sidebar({ isOpen, onClose, role }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = {
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
      { id: 'creators', label: 'Criadoras', icon: <Users2 size={20} />, href: '/admin/creators' },
      { id: 'approvals', label: 'Aprovações', icon: <Check size={20} />, href: '/admin/approvals' },
      { id: 'earnings', label: 'Financeiro', icon: <Wallet size={20} />, href: '/admin/earnings' },
      { id: 'notifications', label: 'Notificações', icon: <Bell size={20} />, href: '/admin/notifications' },
      { id: 'settings', label: 'Configurações', icon: <Settings size={20} />, href: '/admin/settings' },
    ],
    affiliate: [
      { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/affiliate' },
      { id: 'marketplace', label: 'Marketplace', icon: <Users2 size={20} />, href: '/affiliate/marketplace' },
      { id: 'requests', label: 'Solicitações', icon: <Check size={20} />, href: '/affiliate/requests' },
      { id: 'finance', label: 'Financeiro', icon: <Wallet size={20} />, href: '/affiliate/finance' },
    ],
    model: [
      { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/model' },
      { id: 'automations', label: 'Automações', icon: <Settings size={20} />, href: '/model/automations' },
    ],
    client: [
      { id: 'explore', label: 'Explorar', icon: <LayoutDashboard size={20} />, href: '/client' },
      { id: 'wallet', label: 'Carteira', icon: <Wallet size={20} />, href: '/client/wallet' },
    ],
  };

  const currentMenuItems = menuItems[role] || [];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[60] md:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`fixed inset-y-0 left-0 z-[70] w-64 border-r bg-bg-card border-border-subtle flex flex-col transition-transform duration-300 md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 flex items-center justify-between gap-3 h-20 border-b border-border-subtle/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center shrink-0 shadow-lg shadow-brand/40">
              <Flame size={20} className="text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter italic text-white">SPICY</span>
          </div>
          <button onClick={onClose} className="md:hidden text-zinc-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 flex-1">
          <nav className="space-y-1">
            <p className="px-3 text-[10px] uppercase font-black tracking-[0.2em] text-zinc-600 mb-4 mt-2">Menu Principal</p>
            {currentMenuItems.map((item) => (
              <Link 
                key={item.id}
                href={item.href}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all font-bold text-sm ${
                  pathname === item.href 
                    ? 'bg-brand text-white shadow-lg shadow-brand/20' 
                    : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border-subtle/50">
          <Link 
            href="/login"
            className="w-full flex items-center gap-4 p-4 rounded-2xl text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all font-bold text-sm"
          >
            <LogOut size={20} />
            <span>Sair</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
