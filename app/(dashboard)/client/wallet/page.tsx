'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';

export default function WalletPage() {
  return (
    <DashboardLayout role="client">
      <div className="space-y-6">
        <h1 className="text-3xl font-black tracking-tight text-white">Carteira</h1>
        <p className="text-zinc-500">Gerencie seu saldo e métodos de pagamento.</p>
        <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 h-64 flex items-center justify-center">
          <span className="text-zinc-600 font-bold">Módulo em desenvolvimento</span>
        </div>
      </div>
    </DashboardLayout>
  );
}
