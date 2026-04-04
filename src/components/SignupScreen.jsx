import React, { useState } from 'react';

const SignupScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-white flex flex-col items-center justify-center p-6 font-['SFPro',system-ui,sans-serif] relative overflow-hidden">
    
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-10 z-10">
        <h1 className="text-[#002D62] text-2xl font-black tracking-tighter uppercase mb-1">Campus Curated</h1>
        <p className="text-gray-400 text-[10px] font-bold tracking-[0.3em] uppercase">The Digital Flagship</p>
      </div>

      
      <div className="w-full max-w-[460px] bg-white rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col z-10">
        
        
        <div className="px-10 pt-10 pb-4">
          <div className="flex justify-between items-end mb-4">
            <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">Step 1 of 3</span>
            <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">Account Basics</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-blue-600 rounded-full transition-all duration-700 ease-out"></div>
          </div>
        </div>
        <div className="px-12 pt-8 pb-10">
          <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">Create your profile</h2>
          <p className="text-gray-500 text-sm font-medium mb-10 leading-relaxed">
            Join the exclusive network of curated campus essentials.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Alex Morgan"
                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4.5 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Email or Phone</label>
              <input 
                type="email" 
                placeholder="alex@university.edu"
                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4.5 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none shadow-sm"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4.5 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none shadow-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full bg-[#0057C2] hover:bg-[#0047A1] text-white font-bold py-5 rounded-full mt-4 transition-all active:scale-[0.98] shadow-xl shadow-blue-500/20 text-base">
              Create Account
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-gray-400 font-medium">
            Already have an account? <button className="text-blue-600 font-black hover:underline ml-1">Login</button>
          </p>
        </div>
        <div className="h-44 bg-gray-50 relative mt-auto border-t border-gray-50">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=800" 
            alt="Campus life" 
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>
      </div>
      <div className="mt-10 flex gap-10">
        <button className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Terms of Service</button>
        <button className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase hover:text-blue-600 transition-colors">Privacy Policy</button>
      </div>
    </div>
  );
};

export default SignupScreen;