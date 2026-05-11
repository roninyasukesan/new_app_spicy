'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';
import { 
  Users2, 
  BarChart3, 
  Wallet, 
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';

import { AdminStatsGrid } from '@/components/features/admin/AdminStatsGrid';

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">Dashboard Admin</h1>
            <p className="text-zinc-500 font-medium mt-1">Bem-vindo de volta, aqui está o resumo da plataforma.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Sistema Online</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <AdminStatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-bg-card border border-border-subtle rounded-[2.5rem] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Atividades Recentes</h3>
              <button className="text-xs font-bold text-brand hover:underline uppercase tracking-widest">Ver Tudo</button>
            </div>
            <div className="space-y-6">
              <ActivityItem 
                type="approval"
                title="Nova criadora aprovada"
                user="Laura Diamond"
                time="Há 2 horas"
                status="success"
              />
              <ActivityItem 
                type="payment"
                title="Pagamento processado"
                user="João Silva"
                time="Há 3 horas"
                status="success"
              />
              <ActivityItem 
                type="report"
                title="Nova denúncia recebida"
                user="Perfil Suspeito"
                time="Há 5 horas"
                status="warning"
              />
              <ActivityItem 
                type="system"
                title="Backup concluído"
                user="Servidor Principal"
                time="Há 12 horas"
                status="info"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-bg-card border border-border-subtle rounded-[2.5rem] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-white mb-8">Ações Rápidas</h3>
            <div className="grid grid-cols-1 gap-4">
              <QuickActionButton label="Aprovar Documentos" icon={<CheckCircle2 size={18} />} color="text-emerald-500" />
              <QuickActionButton label="Gerar Relatório Financeiro" icon={<BarChart3 size={18} />} color="text-blue-500" />
              <QuickActionButton label="Notificar Usuários" icon={<AlertCircle size={18} />} color="text-amber-500" />
              <QuickActionButton label="Bloquear Conteúdo" icon={<XCircle size={18} />} color="text-rose-500" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function ActivityItem({ type, title, user, time, status }: { type: string, title: string, user: string, time: string, status: 'success' | 'warning' | 'info' | 'error' }) {
  const statusColors = {
    success: 'bg-emerald-500/20 text-emerald-500',
    warning: 'bg-amber-500/20 text-amber-500',
    info: 'bg-blue-500/20 text-blue-500',
    error: 'bg-rose-500/20 text-rose-500',
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-zinc-900/50 transition-all border border-transparent hover:border-border-subtle/50">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${statusColors[status]}`}>
        {type === 'approval' && <CheckCircle2 size={20} />}
        {type === 'payment' && <Wallet size={20} />}
        {type === 'report' && <AlertCircle size={20} />}
        {type === 'system' && <Clock size={20} />}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-white truncate">{title}</h4>
        <p className="text-xs text-zinc-500 font-medium">{user} • {time}</p>
      </div>
      <ArrowRight size={16} className="text-zinc-700" />
    </div>
  );
}

function QuickActionButton({ label, icon, color }: { label: string, icon: React.ReactNode, color: string }) {
  return (
    <button className="w-full flex items-center justify-between p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-border-subtle/50 hover:border-brand/30 rounded-2xl transition-all group">
      <div className="flex items-center gap-3">
        <span className={color}>{icon}</span>
        <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors">{label}</span>
      </div>
      <ArrowRight size={16} className="text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
    </button>
  );
}
