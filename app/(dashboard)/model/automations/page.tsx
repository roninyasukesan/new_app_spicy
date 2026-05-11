'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';
import { 
  Settings, 
  Bot, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Plus,
  PlayCircle,
  Clock
} from 'lucide-react';
import { motion } from 'motion/react';

export default function AutomationsPage() {
  return (
    <DashboardLayout role="model">
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
              Automações
              <Bot size={28} className="text-brand" />
            </h1>
            <p className="text-zinc-500 font-medium mt-1">Configure suas mensagens automáticas e funis de venda.</p>
          </div>
          <button className="bg-brand text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-all font-bold text-sm hover:bg-brand-hover shadow-lg shadow-brand/20">
            <Plus size={18} />
            Nova Automação
          </button>
        </div>

        {/* Automation Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AutomationCard 
            title="Mensagem de Boas-vindas" 
            description="Enviada automaticamente quando alguém assina seu perfil."
            icon={<MessageSquare className="text-blue-500" />}
            status="Ativo"
          />
          <AutomationCard 
            title="Recuperação de Carrinho" 
            description="Lembrete enviado para quem não concluiu a assinatura."
            icon={<Zap className="text-yellow-500" />}
            status="Inativo"
          />
          <AutomationCard 
            title="Funil de Upsell" 
            description="Ofertas automáticas baseadas no comportamento do fã."
            icon={<ArrowRight className="text-emerald-500" />}
            status="Configurando"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 shadow-2xl">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Clock size={20} className="text-zinc-500" />
            Atividade Recente
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <PlayCircle size={18} className="text-zinc-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Boas-vindas enviada para fã #{1234 + i}</p>
                  <p className="text-xs text-zinc-500">Há {i * 5} minutos</p>
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full">Sucesso</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function AutomationCard({ title, description, icon, status }: { title: string, description: string, icon: React.ReactNode, status: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-bg-card border border-border-subtle p-6 rounded-3xl shadow-xl hover:border-brand/30 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
          status === 'Ativo' ? 'bg-emerald-500/10 text-emerald-500' : 
          status === 'Inativo' ? 'bg-zinc-800 text-zinc-500' : 'bg-brand/10 text-brand'
        }`}>
          {status}
        </span>
      </div>
      <h3 className="font-bold text-white mb-2 group-hover:text-brand transition-colors">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{description}</p>
      <button className="w-full py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-xs hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2">
        Configurar <Settings size={14} />
      </button>
    </motion.div>
  );
}
