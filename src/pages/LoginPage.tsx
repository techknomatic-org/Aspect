import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('ceo@aspectone.com');
  const [password, setPassword] = useState('Aspect@123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setErrorMsg(err.message || 'Invalid credentials provided.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillDemoCredentials = () => {
    setEmail('ceo@aspectone.com');
    setPassword('Aspect@123');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen bg-[#070C18] relative flex items-center justify-center p-4 overflow-hidden select-none">
      {/* Background Radial Lights & Grid Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08)_0%,rgba(7,12,24,1)_75%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Decorative Golden Ring Halo */}
      <div className="absolute w-[650px] h-[650px] rounded-full border border-gold/10 animate-spin-slow pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute w-[800px] h-[800px] rounded-full border border-teal-500/5 animate-pulse-glow pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-[#101935]/90 backdrop-blur-xl border border-gold/20 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          {/* Logo & Header Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold/40 mb-3 shadow-lg shadow-gold/10 group">
              <span className="font-extrabold text-2xl text-gold font-serif tracking-widest group-hover:scale-110 transition-transform">A</span>
            </div>
            <h1 className="text-2xl font-bold tracking-wider text-white font-sans uppercase">
              ASPECT ONE
            </h1>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-gold uppercase mt-1">
              EXECUTIVE COMMAND CENTER
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Secure CEO & Leadership Portal
            </p>
          </div>

          {/* Error Banner */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-6 p-3 rounded-lg bg-red-950/60 border border-red-500/40 flex items-start gap-2.5 text-xs text-red-200"
            >
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-300">Authentication Error</p>
                <p className="text-[11px] opacity-90">{errorMsg}</p>
              </div>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Executive Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ceo@aspectone.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0B132B] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-3 bg-[#0B132B] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded bg-[#0B132B] border-slate-700 text-gold focus:ring-gold"
                />
                <span>Remember Session</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Contact Aspect One IT Security Administrator to reset key"); }} className="text-gold hover:underline">
                Forgot Access?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-[#D4AF37] via-[#C9A227] to-[#A37E19] hover:brightness-110 text-navy-950 font-bold text-sm rounded-xl shadow-lg shadow-gold/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                  <span>AUTHENTICATING...</span>
                </>
              ) : (
                <>
                  <span>SIGN IN TO COMMAND CENTER</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Autofill Helper */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Demo Executive Credentials:</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs">
              <span className="font-mono bg-navy-950 px-2.5 py-1 rounded text-gold border border-gold/20">
                ceo@aspectone.com
              </span>
              <span className="font-mono bg-navy-950 px-2.5 py-1 rounded text-slate-300 border border-slate-700">
                Aspect@123
              </span>
              <button
                onClick={fillDemoCredentials}
                className="p-1 rounded text-teal-400 hover:text-white bg-teal-950/60 border border-teal-500/30 text-[10px] uppercase font-bold tracking-wider px-2"
                title="Autofill credentials"
              >
                Autofill
              </button>
            </div>
          </div>

          {/* Footer Security Stamp */}
          <div className="mt-4 text-center text-[10px] text-slate-500 tracking-wider">
            ASPECT GLOBAL ENTERPRISE SECURITY ENCRYPTION • 256-BIT REAL-TIME VERIFICATION
          </div>
        </div>
      </motion.div>
    </div>
  );
};
