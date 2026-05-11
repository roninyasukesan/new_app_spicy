'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Info, 
  Flame,
  Plus 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';

type OnboardingStep = 1 | 2 | 3 | 4 | 5;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<OnboardingStep>(2);
  const [docType, setDocType] = useState<'RG' | 'CNH' | null>(null);

  return (
    <div className="min-h-screen bg-bg-darker text-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
              <Flame size={20} className="text-white fill-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight italic">SPICY</h1>
          </div>
          <button 
            onClick={() => router.push('/model')}
            className="text-zinc-500 hover:text-white transition-colors text-sm font-bold"
          >
            Sair do Onboarding
          </button>
        </header>

        {/* Stepper */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">
              {step === 2 && "Seleção de Documento"}
              {step === 3 && "Upload de Documentos"}
            </h2>
            <div className="bg-brand/20 text-brand text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-brand/30">
              Etapa {step} de 5
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <React.Fragment key={s}>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                    s === step 
                      ? 'bg-brand text-white scale-110 shadow-lg shadow-brand/20' 
                      : s < step 
                        ? 'bg-brand/20 text-brand' 
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-600'
                  }`}
                >
                  {s < step ? '✓' : s}
                </div>
                {s < 5 && (
                  <div className={`h-1 flex-1 min-w-[20px] transition-all duration-500 ${s < step ? 'bg-brand' : 'bg-zinc-800'}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <DocTypeCard 
                  title="RG (Registro Geral)"
                  desc="Documento de identidade emitido pela SSP"
                  icon={<FileText size={32} />}
                  selected={docType === 'RG'}
                  onClick={() => setDocType('RG')}
                />
                <DocTypeCard 
                  title="CNH (Carteira de Habilitação)"
                  desc="Carteira Nacional de Habilitação"
                  icon={<div className="font-bold border-2 border-current rounded px-1 text-sm uppercase">CNH</div>}
                  selected={docType === 'CNH'}
                  onClick={() => setDocType('CNH')}
                />
              </div>

              <button 
                onClick={() => docType && setStep(3)}
                disabled={!docType}
                className={`w-full py-4 rounded-xl font-bold transition-all uppercase tracking-widest text-sm ${
                  docType 
                    ? 'bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/20' 
                    : 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50'
                }`}
              >
                {docType ? 'Continuar' : 'Selecione um documento'}
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10"
            >
              <div className="mb-8">
                <button 
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold"
                >
                  <ArrowRight className="rotate-180" size={16} />
                  Voltar
                </button>
              </div>

              <div className="space-y-12">
                <UploadSection 
                  title={`1. ${docType} do titular`}
                  subtitle="Envie foto da frente do documento e verso se disponível"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <UploadField label="Frente do Documento" />
                    <UploadField label="Verso do Documento" />
                  </div>
                </UploadSection>

                <UploadSection 
                  title="2. Foto do Rosto (Selfie)"
                  subtitle="Apenas uma foto normal do seu rosto, sem segurar documento"
                >
                  <UploadField label="Tire uma foto ou envie sua selfie" />
                </UploadSection>
              </div>

              <div className="mt-12">
                <button 
                  onClick={() => router.push('/model')}
                  className="w-full py-4 bg-brand hover:bg-brand-hover text-white rounded-xl font-bold transition-all uppercase tracking-widest text-sm shadow-xl shadow-brand/20"
                >
                  Finalizar Envio
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function DocTypeCard({ title, desc, icon, selected, onClick }: { title: string, desc: string, icon: React.ReactNode, selected: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`p-8 rounded-3xl border text-left transition-all ${
        selected 
          ? 'bg-brand/10 border-brand text-brand shadow-lg shadow-brand/10' 
          : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-700'
      }`}
    >
      <div className={`mb-6 ${selected ? 'text-brand' : 'text-zinc-600'}`}>{icon}</div>
      <h3 className={`text-lg font-bold mb-1 ${selected ? 'text-white' : 'text-zinc-400'}`}>{title}</h3>
      <p className="text-sm font-medium opacity-60">{desc}</p>
    </button>
  );
}

function UploadSection({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-zinc-500 text-sm">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function UploadField({ label }: { label: string }) {
  return (
    <div className="border-2 border-dashed border-zinc-800 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 hover:border-brand/50 transition-all cursor-pointer bg-zinc-900/30 group">
      <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-600 group-hover:text-brand transition-colors">
        <Plus size={24} />
      </div>
      <span className="text-sm font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">{label}</span>
    </div>
  );
}
