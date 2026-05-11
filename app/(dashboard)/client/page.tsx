'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';
import { 
  Crown, 
  Search, 
  Sun, 
  Plus,
  Flame
} from 'lucide-react';
import { motion } from 'motion/react';
import { INITIAL_USERS } from '@/lib/constants';

export default function ClientDashboard() {
  const models = INITIAL_USERS.filter(u => u.role === 'Modelo');

  return (
    <DashboardLayout role="client">
      <div className="space-y-10 pb-20">
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-white">Destaques da Semana</h2>
              <p className="text-zinc-500 text-sm font-medium">As criadoras mais populares do momento</p>
            </div>
            <button className="text-[10px] font-black text-rose-400 uppercase tracking-widest hover:underline">Ver todas</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model, idx) => (
              <div key={model.id} className="group relative bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden transition-all hover:-translate-y-2 hover:border-rose-500/30">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + idx * 123456}?auto=format&fit=crop&w=400&q=80`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={model.name} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute top-6 left-6 flex gap-2">
                     <span className="bg-rose-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">Popular</span>
                  </div>
                  
                  <button className="absolute top-6 right-6 p-2.5 bg-black/40 backdrop-blur-md rounded-xl text-white hover:bg-rose-600 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
                    <Sun size={18} />
                  </button>
                </div>
                
                <div className="p-6 relative">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-black tracking-tight text-white group-hover:text-rose-400 transition-colors">{model.name}</h3>
                      <p className="text-xs text-zinc-500 font-medium">@{model.name.toLowerCase().replace(' ', '')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1">A partir de</p>
                      <p className="text-lg font-black text-emerald-500">R$ 49,90</p>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-3.5 bg-zinc-800 hover:bg-rose-600 text-white rounded-2xl font-black transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest shadow-xl group/btn overflow-hidden relative">
                    <span className="relative z-10">Assinar agora</span>
                    <Crown size={14} className="relative z-10 transform group-hover/btn:rotate-12 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-900/40 border border-zinc-800 rounded-[3rem] p-10 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6 inline-block">Plano VIP</span>
              <h2 className="text-4xl font-black tracking-tighter text-white mb-4 leading-tight">Acesso Ilimitado ao conteúdo Premium</h2>
              <p className="font-medium text-lg leading-relaxed text-zinc-500 mb-8">
                Assine o plano VIP e tenha acesso a todas as galerias exclusivas de nossas top modelos sem restrições.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">Seja VIP Agora</button>
                <button className="px-8 py-4 bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">Saiba Mais</button>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-96 bg-zinc-800 border-8 border-zinc-900 rounded-[3rem] shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover grayscale opacity-50" alt="VIP Content Preview" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Crown size={64} className="text-rose-500/20" />
                 </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-rose-600 p-6 rounded-3xl shadow-2xl shadow-rose-600/40">
                <Flame size={32} className="text-white fill-white" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        </section>
      </div>
    </DashboardLayout>
  );
}
