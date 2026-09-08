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
    <div className="h-screen max-h-screen w-screen relative flex flex-col md:flex-row items-stretch overflow-hidden font-sans select-none">
      {/* Full Continuous Panoramic Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/industries_backdrop_light.jpg"
          alt="Aspect Global Landscape"
          className="w-full h-full object-cover object-center scale-[1.01]"
        />
        {/* Left Dark Gradient Scrim to guarantee high contrast for left text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d24]/95 via-[#03222a]/85 to-transparent w-full md:w-[55%]" />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#021419]/40 via-transparent to-transparent" />
      </div>

      {/* ================= LEFT 50% PARTITION: HERO SECTION (Shifted Rightwards) ================= */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full md:w-1/2 h-full relative z-10 hidden md:flex flex-col justify-center items-center lg:items-end pl-8 sm:pl-12 lg:pl-16 pr-6 sm:pr-10 lg:pr-14 xl:pr-16 py-8 text-white"
      >
        <div className="max-w-lg xl:max-w-xl w-full">
          {/* Official Brand Logo */}
          <div className="mb-2">
            <AspectLogo isLight={false} showText={true} size="lg" className="scale-110 origin-left" />
          </div>

          <div className="text-xs font-bold tracking-[0.28em] text-[#00E5BE] uppercase mb-6 pl-0.5 mt-2">
            CONNECT <span className="text-teal-400/60 mx-1.5">/</span> COLLABORATE <span className="text-teal-400/60 mx-1.5">/</span> CREATE IMPACT
          </div>

          {/* Large Hero Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white mb-4">
            Powering a Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5BE] to-[#00D1B2]">
              More Connected
            </span> Future
          </h1>

          {/* Subtext */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-lg mb-8 font-medium">
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
        </div>
      </motion.div>

      {/* ================= RIGHT 50% PARTITION: ENLARGED GLASSMORPHISM LOGIN ================= */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="w-full md:w-1/2 h-full relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-6 overflow-y-auto"
      >
        {/* Enlarged Frosted Glassmorphism Card */}
        <div className="w-full max-w-[500px] lg:max-w-[540px] xl:max-w-[560px] bg-slate-900/40 md:bg-slate-900/35 backdrop-blur-3xl rounded-[32px] p-8 sm:p-9 lg:p-10 border border-white/30 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.5)] text-white relative transition-all">
          
          {/* Header Row: Logo + Login Heading + Secure Badge */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div>
              <AspectLogo isLight={false} showText={true} size="md" />
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mt-2 tracking-tight">
                Login
              </h2>
            </div>

            {/* Secure Login Pill */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#00E5BE] bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-teal-400/40 shrink-0 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#00E5BE]" />
              <span>Secure Login</span>
            </div>
          </div>

          {/* Error Notification */}
          {errorMsg && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-4 p-3 rounded-xl bg-red-500/30 backdrop-blur-md border border-red-400/50 flex items-start gap-2.5 text-xs lg:text-sm text-red-100 font-semibold"
            >
              <AlertCircle className="w-4 h-4 text-red-300 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </motion.div>
          )}

          {/* Sign-in Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs lg:text-sm font-bold text-white/95 uppercase tracking-wider mb-1.5">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username@gmail.com"
                  className="w-full px-4 py-3 bg-white text-slate-900 rounded-xl text-sm lg:text-base font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00E5BE] shadow-md transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs lg:text-sm font-bold text-white/95 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full pl-4 pr-11 py-3 bg-white text-slate-900 rounded-xl text-sm lg:text-base font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00E5BE] shadow-md transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Remember Me & Forgot Password Row */}
              <div className="flex items-center justify-between text-xs lg:text-sm pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-white font-semibold">
                  <div 
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors shadow-xs ${
                      rememberMe ? 'bg-[#00E5BE] border-[#00E5BE] text-[#03222a]' : 'bg-white/30 border-white/50'
                    }`}
                  >
                    {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => { e.preventDefault(); alert("Contact Aspect Global IT Administrator to reset key"); }}
                  className="text-[#00E5BE] hover:text-teal-200 font-bold hover:underline transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 bg-[#00E5BE] hover:bg-[#00D1B2] active:scale-[0.99] text-[#03222a] font-black text-sm lg:text-base rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transition-all cursor-pointer tracking-wider uppercase disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#03222a] border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span>Sign in</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* OR Continue With Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="border-t border-white/25 w-full" />
            <span className="bg-transparent px-3 text-xs font-bold text-white/80 tracking-wider uppercase">
              or continue with
            </span>
          </div>

          {/* Social Icons & Demo Autofill Row */}
          <div className="flex items-center gap-3">
            {/* Google Pill */}
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="w-14 h-11 rounded-xl bg-white flex items-center justify-center shadow-md hover:bg-slate-100 transition-all cursor-pointer shrink-0"
              title="Sign in with Google"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
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
            </button>

            {/* Quick Demo Credentials Autofill Pill */}
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="flex-1 h-11 px-3.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/35 backdrop-blur-md text-xs lg:text-sm font-semibold text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer truncate shadow-xs"
            >
              <span>Demo:</span>
              <span className="font-mono text-[#00E5BE] font-bold">ceo@aspect.global</span>
            </button>
          </div>

          {/* Footer Security Badges */}
          <div className="mt-5 pt-3.5 border-t border-white/20 flex items-center justify-between text-xs font-semibold text-white/85">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E5BE]" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#00E5BE]" />
              <span>Global Access</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#00E5BE]" />
              <span>256-Bit SSL</span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

