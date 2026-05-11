'use client';

import React from 'react';
import DashboardLayout from '@/components/shared/DashboardLayout';

export default function MarketplacePage() {
  return (
    <DashboardLayout role="affiliate">
      <div className="space-y-6">
        <h1 className="text-3xl font-black tracking-tight text-white">Marketplace</h1>
        <p className="text-zinc-500">Encontre criadoras para promover.</p>
        <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 h-64 flex items-center justify-center">
          <span className="text-zinc-600 font-bold">Módulo em desenvolvimento</span>
        </div>
      </div>
    </DashboardLayout>
  );
}
