'use client';

import React, { useState } from 'react';
import { 
  Flame, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Users2, 
  UserCircle 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'modelo' && loginForm.password === 'modelo1') {
      router.push('/model');
    } else if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      router.push('/admin');
    } else if (loginForm.username === 'afiliado' && loginForm.password === 'afiliado1') {
      router.push('/affiliate');
    } else if (loginForm.username === 'cliente' && loginForm.password === 'cliente1') {
      router.push('/client');
    } else {
      setLoginError('Credenciais inválidas');
    }
  };

  return (
    <div className="min-h-screen bg-bg-darker flex items-center justify-center p-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand mb-6 shadow-2xl shadow-brand/20">
            <Flame size={32} className="text-white fill-white" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Bem-vindo de volta</h1>
          <p className="text-zinc-500 mt-2">Entre com suas credenciais para acessar o painel</p>
        </div>

        <div className="bg-bg-card border border-border-subtle rounded-3xl p-8 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 px-1">Usuário / Email</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type="text"
                  required
                  value={loginForm.username}
                  onChange={e => setLoginForm({...loginForm, username: e.target.value})}
                  placeholder="modelo"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-700 outline-none focus:border-brand transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2 px-1">Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  value={loginForm.password}
                  onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                  placeholder="modelo1"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-zinc-700 outline-none focus:border-brand transition-colors"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm py-3 px-4 rounded-xl font-medium">
                {loginError}
              </div>
            )}

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-800 bg-zinc-900 text-brand focus:ring-0 focus:ring-offset-0 transition-all" />
                <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">Lembrar-me</span>
              </label>
              <button type="button" className="text-xs text-zinc-600 hover:text-brand transition-colors font-medium">Esqueceu a senha?</button>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand hover:bg-brand-hover text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] shadow-xl shadow-brand/20 uppercase tracking-widest text-sm"
            >
              Entrar na conta
            </button>
          </form>

          <div className="mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-zinc-800"></div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Acesso Rápido (Teste)</span>
              <div className="h-px flex-1 bg-zinc-800"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setLoginForm({ username: 'admin', password: 'admin123' })}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 p-3 rounded-xl flex flex-col items-center gap-1 transition-all group"
              >
                <ShieldCheck size={16} className="text-rose-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Admin</span>
              </button>
              <button 
                onClick={() => setLoginForm({ username: 'modelo', password: 'modelo1' })}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 p-3 rounded-xl flex flex-col items-center gap-1 transition-all group"
              >
                <Flame size={16} className="text-rose-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Modelo</span>
              </button>
              <button 
                onClick={() => setLoginForm({ username: 'afiliado', password: 'afiliado1' })}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 p-3 rounded-xl flex flex-col items-center gap-1 transition-all group"
              >
                <Users2 size={16} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Afiliado</span>
              </button>
              <button 
                onClick={() => setLoginForm({ username: 'cliente', password: 'cliente1' })}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/30 p-3 rounded-xl flex flex-col items-center gap-1 transition-all group"
              >
                <UserCircle size={16} className="text-rose-400 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase">Cliente</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
