import React, { useState } from 'react';

const FinalizeStoreScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/50 to-white flex flex-col items-center py-12 px-6 font-sans relative overflow-hidden">
      
      <div className="w-full max-w-2xl mb-10 z-10">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-blue-600 text-sm font-extrabold tracking-widest uppercase">Step 3 of 3</span>
            <h1 className="text-gray-900 text-4xl font-black tracking-tight mt-2">Finalize Store Profile</h1>
          </div>
          <span className="text-gray-500 text-sm font-extrabold tracking-widest uppercase mb-1">100% Complete</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full w-full bg-blue-600 rounded-full"></div>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-gray-100 p-10 md:p-14 z-10">
        
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                Store Name
              </label>
              <input 
                type="text" 
                placeholder="e.g. Blue Devil Vintage" 
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 font-bold placeholder-gray-300 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
                Primary Category
              </label>
              <div className="relative">
                <select className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 font-bold appearance-none cursor-pointer focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm">
                  <option>Select category</option>
                  <option>Apparel</option>
                  <option>Handmade</option>
                  <option>Services</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">
              Store Description
            </label>
            <textarea 
              rows="4" 
              placeholder="Tell students what makes your store unique..." 
              className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 font-bold placeholder-gray-300 focus:border-blue-600 focus:bg-white outline-none transition-all shadow-sm resize-none"
            ></textarea>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col">
                <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">Official Email</label>
                <input type="email" placeholder="vendor@university.edu" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 font-bold focus:border-blue-600 focus:bg-white outline-none transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest mb-4">Phone Number</label>
                <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 text-gray-900 font-bold focus:border-blue-600 focus:bg-white outline-none transition-all" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-extrabold text-gray-900 uppercase tracking-widest">Store Logo / Feature Image</label>
              <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Optional</span>
            </div>
            <div className="w-full border-4 border-dashed border-gray-100 rounded-[32px] bg-gray-50 p-12 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <p className="text-lg font-extrabold text-gray-900">Drag and drop or <span className="text-blue-600 underline">browse</span></p>
              <p className="text-xs text-gray-400 mt-2 font-black uppercase tracking-widest">PNG, JPG up to 5MB</p>
            </div>
          </div>

       
          <div className="flex items-center gap-4 p-6 bg-blue-50/30 rounded-3xl border border-blue-100/50">
            <input 
              type="checkbox" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-6 h-6 rounded-md border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
            />
            <p className="text-xs text-gray-700 font-extrabold leading-tight">
              I verify that all provided information is accurate. I agree to the <span className="text-blue-600 underline">Terms</span> and <span className="text-blue-600 underline">Privacy Policy</span>.
            </p>
          </div>

         
          <div className="space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-3">
              Submit for Approval
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </button>
            <button className="w-full text-gray-400 font-black text-xs uppercase tracking-[0.3em] hover:text-gray-900 transition-colors">
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinalizeStoreScreen;