import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Activity, 
  Sparkles,
  Check
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { AspectLogo } from '../components/common/AspectLogo';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('ceo@aspect.global');
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
    setEmail('ceo@aspect.global');
    setPassword('Aspect@123');
    setErrorMsg(null);
  };

  return (
    <div className="h-screen max-h-screen w-screen relative flex items-center justify-between overflow-hidden font-sans select-none px-6 sm:px-12 lg:px-16 xl:px-20 py-4">
      {/* Full Continuous Panoramic Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/industries_backdrop_light.jpg"
          alt="Aspect Global Landscape"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Left Dark Gradient Scrim to guarantee high contrast for left text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d24]/95 via-[#03222a]/80 to-transparent w-full md:w-[65%]" />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021419]/35 via-transparent to-transparent" />
      </div>

      {/* Main 50/50 Partition Split Layout */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-14 my-auto">
        
        {/* ================= LEFT 50% PARTITION: HERO SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 max-w-lg lg:max-w-xl text-white hidden md:block"
        >
          {/* Official Brand Logo */}
          <div className="mb-2">
            <AspectLogo isLight={false} showText={true} size="lg" className="scale-110 origin-left" />
          </div>

          <div className="text-xs font-bold tracking-[0.28em] text-[#00E5BE] uppercase mb-6 pl-0.5 mt-2">
            CONNECT <span className="text-teal-400/60 mx-1.5">/</span> COLLABORATE <span className="text-teal-400/60 mx-1.5">/</span> CREATE IMPACT
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-[54px] font-extrabold leading-[1.12] tracking-tight text-white mb-4">
            Powering a Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5BE] to-[#00D1B2]">
              More Connected
            </span> Future
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg mb-8 font-medium">
            Your central hub for executive insights, strategic collaboration and informed decision-making across all business verticals.
          </p>

          {/* 3 Executive Pillars Badges */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20 max-w-md">
            {/* Pillar 1 */}
            <div className="flex flex-col items-start group">
              <div className="w-11 h-11 rounded-full border border-teal-400/40 bg-[#06333d]/80 backdrop-blur-md flex items-center justify-center text-[#00E5BE] mb-2 group-hover:border-teal-400 group-hover:scale-105 transition-all shadow-inner">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white leading-snug">
                Real-time<br />Performance
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-start group">
              <div className="w-11 h-11 rounded-full border border-teal-400/40 bg-[#06333d]/80 backdrop-blur-md flex items-center justify-center text-[#00E5BE] mb-2 group-hover:border-teal-400 group-hover:scale-105 transition-all shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white leading-snug">
                Strategic<br />Insights
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-start group">
              <div className="w-11 h-11 rounded-full border border-teal-400/40 bg-[#06333d]/80 backdrop-blur-md flex items-center justify-center text-[#00E5BE] mb-2 group-hover:border-teal-400 group-hover:scale-105 transition-all shadow-inner">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white leading-snug">
                Global<br />Perspective
              </span>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT 50% PARTITION: LOGIN CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="w-full max-w-[430px] shrink-0 ml-auto"
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-7 sm:p-8 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)] relative border border-white/90">
            
            {/* Top Right Secure Login Badge */}
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#00A896] bg-teal-50 px-3 py-1 rounded-full border border-teal-100 absolute top-7 right-7">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
              <span>Secure Login</span>
            </div>

            {/* Card Header with Original Aspect Global Brand Logo */}
            <div className="mb-2">
              <p className="text-xs text-slate-500 font-semibold leading-tight mb-1">
                Welcome to
              </p>
              <AspectLogo isLight={true} showText={true} size="md" />
              <p className="text-[10px] font-black text-[#0B3B43] tracking-[0.22em] uppercase mt-2">
                EXECUTIVE COMMAND CENTER
              </p>
            </div>

            <p className="text-xs text-slate-600 mt-1 mb-5 font-medium">
              Secure access to your strategic intelligence platform.
            </p>

            {/* Error Notification */}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-3.5 p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2 text-xs text-red-700 font-medium"
              >
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Sign-in Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  EXECUTIVE EMAIL
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
                    placeholder="ceo@aspect.global"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition-all shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                  PASSWORD
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
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 transition-all shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-700 font-semibold">
                  <div 
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                      rememberMe ? 'bg-[#00A896] border-[#00A896] text-white' : 'bg-slate-100 border-slate-300'
                    }`}
                  >
                    {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-xs">Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => { e.preventDefault(); alert("Contact Aspect Global IT Security Administrator to reset key"); }}
                  className="text-xs text-[#00A896] hover:text-[#0B3B43] font-bold hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-4 bg-[#0B3B43] hover:bg-[#07252b] active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer tracking-wider uppercase disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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

            {/* OR Divider */}
            <div className="relative my-3.5 flex items-center justify-center">
              <div className="border-t border-slate-200 w-full" />
              <span className="bg-white px-3 text-[11px] font-bold text-slate-400 absolute tracking-wider">
                OR
              </span>
            </div>

            {/* Sign in with Google Button */}
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="w-full py-2.5 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 rounded-xl flex items-center justify-center gap-2.5 text-xs font-bold text-slate-800 transition-all shadow-xs cursor-pointer"
            >
              {/* Google 4-color SVG Icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* Quick Demo Credentials Autofill Pill */}
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="text-[11px] font-semibold text-slate-600 hover:text-[#00A896] transition-colors inline-flex items-center gap-1.5 cursor-pointer bg-slate-100 hover:bg-teal-50 px-3 py-1 rounded-lg border border-slate-200 hover:border-teal-200"
              >
                <span>Demo Account:</span>
                <span className="font-mono text-slate-900 font-bold">ceo@aspect.global</span>
                <span className="text-[#00A896] font-extrabold">(Autofill)</span>
              </button>
            </div>

            {/* Footer Trust & Security Badges */}
            <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between text-[10px] font-semibold text-slate-500">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#00A896]" />
                <span>Global Access</span>
              </div>
              <div className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#00A896]" />
                <span>256-Bit SSL</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

