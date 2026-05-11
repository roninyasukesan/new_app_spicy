'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';
import { 
  Flame, 
  Wallet, 
  BarChart3, 
  Users2, 
  Eye, 
  ArrowRight,
  FileText,
  RefreshCcw,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export default function ModelDashboard() {
  const chartData = [
    { day: 'Seg', current: 160, prev: 180 },
    { day: 'Ter', current: 230, prev: 170 },
    { day: 'Qua', current: 120, prev: 100 },
    { day: 'Qui', current: 240, prev: 98 },
    { day: 'Sex', current: 150, prev: 102 },
    { day: 'Sáb', current: 220, prev: 170 },
    { day: 'Dom', current: 240, prev: 120 },
  ];

  return (
    <DashboardLayout role="model">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Dashboard Financeiro
              <button className="p-2 bg-zinc-900 rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-all">
                <Eye size={18} className="text-zinc-500" />
              </button>
            </h1>
            <p className="text-zinc-500 font-medium mt-1">Acompanhe seu desempenho e faturamento.</p>
          </div>
          <button className="bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-bold text-sm hover:bg-zinc-800">
            <RefreshCcw size={16} className="text-zinc-500" />
            Comparar Período
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ModelStatCard title="Vendas de hoje" value="R$ 0,00" icon={<span className="text-rose-500">$</span>} />
          <ModelStatCard title="Vendas do mês" value="R$ 0,00" icon={<BarChart3 size={18} className="text-rose-500" />} />
          <ModelStatCard title="Saldo a receber" value="R$ 0,00" icon={<Wallet size={18} className="text-rose-500" />} />
          <ModelStatCard title="Saldo disponível" value="R$ 0,00" icon={<Wallet size={18} className="text-rose-500" />} />
          <ModelStatCard title="Assinantes" value="0" icon={<Users2 size={18} className="text-rose-500" />} />
          <ModelStatCard title="Comissão do mês" value="R$ 0,00" extra={<span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">0 indicações totais</span>} />
        </div>

        {/* Faturamento Chart Section */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 relative">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-lg font-bold text-white">Faturamento</h3>
            <div className="p-1 bg-zinc-950 rounded-xl flex gap-1 border border-zinc-800">
              {['1D', '7D', '30D', '3M', '1A', 'Total'].map(t => (
                <button key={t} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${t === '30D' ? 'bg-zinc-800 text-white' : 'text-zinc-600 hover:text-zinc-400'}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm font-bold mb-8">
              <div className="w-3 h-3 rounded-full bg-rose-500/50 animate-pulse"></div>
              <span className="text-zinc-400">Total Últimos 30 dias</span>
              <span className="ml-auto text-3xl font-black text-white">R$ 0,00</span>
            </div>

            {/* Achievement Milestones */}
            <div className="flex justify-between items-center px-10 relative">
              <div className="absolute left-10 right-10 h-0.5 top-1/2 -translate-y-1/2 bg-rose-900/20"></div>
              {[100, 250, 500, 750, 1000].map((k) => (
                <div key={k} className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-20 bg-zinc-800 border border-zinc-700/50 rounded-xl flex flex-col items-center justify-center grayscale overflow-hidden group hover:grayscale-0 transition-all cursor-help">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
                    <span className="relative z-10 font-black text-zinc-500 text-[10px] tracking-widest">{k}K</span>
                    <div className="w-8 h-8 rounded-lg absolute bottom-4 bg-zinc-700/50"></div>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">A conquistar</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-zinc-600 italic mt-6 px-1">*Placas ilustrativas de reconhecimento</p>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorCur" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#18181b', 
                    borderRadius: '12px', 
                    border: '1px solid #27272a',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="current" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorCur)" />
                <Area type="monotone" dataKey="prev" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-zinc-900 border border-zinc-800 px-8 py-3 rounded-xl flex items-center gap-3 transition-all font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 shadow-2xl">
              <FileText size={16} className="text-zinc-500" />
              Acessar Relatório Completo
              <ArrowRight size={14} className="text-zinc-600" />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ModelStatCard({ title, value, icon, extra }: { title: string, value: string, icon?: React.ReactNode, extra?: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl transition-all hover:border-brand/30 group">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-zinc-950 rounded-2xl group-hover:scale-110 transition-transform">
          {icon || <span className="text-rose-500">$</span>}
        </div>
        {extra}
      </div>
      <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{title}</h4>
      <div className="text-3xl font-black text-white">{value}</div>
    </div>
  );
}
