'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';
import { 
  Users2, 
  Wallet, 
  TrendingUp, 
  ArrowRight,
  Share2,
  Copy
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AffiliateDashboard() {
  return (
    <DashboardLayout role="affiliate">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Painel de Afiliado</h1>
            <p className="text-zinc-500 font-medium mt-1">Gerencie suas indicações e acompanhe seus ganhos.</p>
          </div>
          <button className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-bold text-sm shadow-lg shadow-brand/20">
            <Share2 size={16} />
            Novo Link de Afiliado
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AffiliateStatCard title="Cliques Totais" value="1,240" icon={<TrendingUp size={24} className="text-blue-500" />} />
          <AffiliateStatCard title="Conversões" value="48" icon={<Users2 size={24} className="text-emerald-500" />} />
          <AffiliateStatCard title="Comissão a Receber" value="R$ 1.840,00" icon={<Wallet size={24} className="text-rose-500" />} />
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-bold text-white mb-6">Seus Links Ativos</h3>
          <div className="space-y-4">
            <LinkItem 
              label="Campanha Verão 2026" 
              url="spicy.models/ref/verao26" 
              clicks={842} 
              conversions={12} 
            />
            <LinkItem 
              label="Instagram Bio" 
              url="spicy.models/ref/instabio" 
              clicks={345} 
              conversions={34} 
            />
            <LinkItem 
              label="Twitter Promo" 
              url="spicy.models/ref/twpromo" 
              clicks={53} 
              conversions={2} 
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function AffiliateStatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl transition-all hover:border-brand/30 group">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-zinc-950 rounded-2xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
      <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{title}</h4>
      <div className="text-3xl font-black text-white">{value}</div>
    </div>
  );
}

function LinkItem({ label, url, clicks, conversions }: { label: string, url: string, clicks: number, conversions: number }) {
  return (
    <div className="flex items-center justify-between p-6 bg-zinc-950/50 border border-zinc-800/50 rounded-2xl hover:bg-zinc-950 transition-all">
      <div className="flex-1">
        <h4 className="font-bold text-white mb-1">{label}</h4>
        <div className="flex items-center gap-2 text-zinc-500 text-xs">
          <span>{url}</span>
          <button className="p-1 hover:text-brand transition-colors"><Copy size={12} /></button>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-center">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Cliques</div>
          <div className="font-black text-white">{clicks}</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Conversões</div>
          <div className="font-black text-emerald-500">{conversions}</div>
        </div>
        <ArrowRight size={20} className="text-zinc-800" />
      </div>
    </div>
  );
}
