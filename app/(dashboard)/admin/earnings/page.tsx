'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';

export default function EarningsPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-3xl font-black tracking-tight text-white">Financeiro</h1>
        <p className="text-zinc-500">Relatórios de faturamento e pagamentos.</p>
        <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 h-64 flex items-center justify-center">
          <span className="text-zinc-600 font-bold">Módulo em desenvolvimento</span>
        </div>
      </div>
    </DashboardLayout>
  );
}
