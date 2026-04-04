import React, { useState } from 'react';

const FinalizeStoreScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-white flex flex-col items-center py-12 px-6 font-['SFPro',system-ui,sans-serif] relative overflow-hidden">
      
      <div className="w-full max-w-2xl mb-10 z-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">Step 3 of 3</span>
            <h1 className="text-[#002D62] text-2xl font-black tracking-tight mt-1">Finalize Store Profile</h1>
          </div>
          <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-1">100% Complete</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 rounded-full">
          <div className="h-full w-full bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
        </div>
      </div>
      <div className="w-full max-w-2xl bg-white rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden z-10 p-10 md:p-12">
        
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Store Name</label>
              <input type="text" placeholder="e.g. Blue Devil Vintage" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Primary Category</label>
              <select className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-400 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none appearance-none">
                <option>Select category</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Store Description</label>
            <textarea 
              rows="4" 
              placeholder="Tell students what makes your store unique..." 
              className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none"
            ></textarea>
          </div>
          <div className="pt-2">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-50 pb-2">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Official Email</label>
                <input type="email" placeholder="vendor@university.edu" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2.5 ml-1">Phone Number</label>
                <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-300 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Store Logo / Feature Image</label>
              <span className="bg-gray-900 text-[8px] font-bold text-white px-2 py-0.5 rounded tracking-tighter uppercase">Optional</span>
            </div>
            <div className="w-full border-2 border-dashed border-gray-100 rounded-[24px] bg-gray-50/50 p-10 flex flex-col items-center justify-center group hover:border-blue-200 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-500">
                Drag and drop or <span className="text-blue-600 font-bold">browse</span>
              </p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold">PNG, JPG up to 5MB</p>
            </div>
          </div>
          <div className="flex items-start gap-4 py-2">
            <input 
              type="checkbox" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mt-1 w-5 h-5 rounded border-gray-200 text-blue-600 focus:ring-blue-500/20 cursor-pointer" 
            />
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              I verify that all provided information is accurate and represents a legitimate campus entity. I agree to the Campus Curated Vendor Terms of Service and Privacy Policy.
            </p>
          </div>
          <div className="space-y-4 pt-4">
            <button className="w-full bg-[#1D7AFC] hover:bg-blue-600 text-white font-bold py-5 rounded-full transition-all active:scale-[0.98] shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2">
              Submit for Approval
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 011 9.9" />
              </svg>
            </button>
            <button className="w-full text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-gray-600 transition-colors py-2">
              Save as Draft
            </button>
          </div>
        </form>
      </div>
      <p className="mt-10 text-center text-gray-400 text-[10px] max-w-xs leading-relaxed font-medium">
        Your application will be reviewed by the Campus Curator board within 48 hours. You will receive a notification via your institutional email.
      </p>
    </div>
  );
};

export default FinalizeStoreScreen;