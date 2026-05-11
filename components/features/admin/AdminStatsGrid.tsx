'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Users2, Wallet, TrendingUp, BarChart3 } from 'lucide-react';

export function AdminStatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total de Usuários" 
        value="1,284" 
        change="+12% este mês"
        icon={<Users2 size={24} className="text-blue-500" />}
      />
      <StatCard 
        title="Receita Total" 
        value="R$ 42.500,00" 
        change="+8% vs mês anterior"
        icon={<Wallet size={24} className="text-emerald-500" />}
      />
      <StatCard 
        title="Novas Criadoras" 
        value="24" 
        change="+4 esta semana"
        icon={<TrendingUp size={24} className="text-rose-500" />}
      />
      <StatCard 
        title="Taxa de Conversão" 
        value="3.2%" 
        change="+0.5% hoje"
        icon={<BarChart3 size={24} className="text-purple-500" />}
      />
    </div>
  );
}

function StatCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-bg-card border border-border-subtle p-6 rounded-3xl shadow-sm hover:border-brand/30 transition-all group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-zinc-900 rounded-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">{change}</span>
      </div>
      <div>
        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{title}</h4>
        <div className="text-2xl font-black text-white">{value}</div>
      </div>
    </motion.div>
  );
}
