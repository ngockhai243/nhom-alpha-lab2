
import React from 'react';
import FallingDecor from './components/FallingDecor';
import Countdown from './components/Countdown';
import XongDatTool from './components/XongDatTool';
import AIWishGenerator from './components/AIWishGenerator';
import { TET_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FallingDecor />
      
      {/* Hero Section */}
      <header className="tet-gradient text-white pt-20 pb-32 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-traditional mb-4 text-yellow-400 drop-shadow-lg">
            Mừng Xuân Bính Ngọ 2026
          </h1>
          <p className="text-xl md:text-2xl font-medium text-red-100 opacity-90 max-w-2xl mx-auto mb-8">
            Chào mừng năm mới với sự bứt phá của mãnh hổ, mang lại may mắn và thành công!
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 inline-block">
            <h2 className="text-xl font-semibold mb-2 text-yellow-300">Countdown Tết 2026</h2>
            <Countdown />
          </div>
        </div>

        {/* Traditional wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 fill-red-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,136,117.22,216,108.07,262.24,102.83,283.42,70,321.39,56.44Z"></path>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 pb-20 space-y-12">
        
        {/* General Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-red-600 flex flex-col justify-center items-center text-center">
            <div className="text-4xl mb-3">🧧</div>
            <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs">Can Chi</h4>
            <p className="text-2xl font-bold text-red-800">{TET_INFO.canChi}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-yellow-500 flex flex-col justify-center items-center text-center">
            <div className="text-4xl mb-3">🐎</div>
            <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs">Con Giáp</h4>
            <p className="text-2xl font-bold text-yellow-600">Ngựa (Bính Ngọ)</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border-l-4 border-teal-500 flex flex-col justify-center items-center text-center">
            <div className="text-4xl mb-3">🌊</div>
            <h4 className="font-bold text-gray-500 uppercase tracking-widest text-xs">Bản Mệnh</h4>
            <p className="text-xl font-bold text-teal-700">{TET_INFO.menh}</p>
          </div>
        </section>

        {/* Feature Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <XongDatTool />
          <AIWishGenerator />
        </div>

        {/* Year Overview Section */}
        <section className="bg-red-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-traditional text-yellow-400 mb-6">Tổng Quan Năm Bính Ngọ 2026</h2>
              <div className="space-y-4 text-red-50 leading-relaxed text-lg">
                <p>Năm 2026 theo âm lịch là năm <strong>Bính Ngọ</strong>, mệnh <strong>Thiên Hà Thủy</strong>. Đây là hình ảnh nước từ trên trời rơi xuống, mát lành và mang tính gột rửa.</p>
                <p>Năm nay hứa hẹn nhiều biến động tích cực cho những người tuổi <strong>Dần, Tuất, Mùi</strong>. Tính chất "Ngựa" tượng trưng cho tốc độ, sự linh hoạt và khả năng đi xa.</p>
                <div className="flex gap-4 pt-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">#LinhHoat</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">#BinhAn</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">#PhanDau</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
               <img 
                 src="https://picsum.photos/seed/tet2026/600/400" 
                 alt="Tết Decoration" 
                 className="rounded-2xl shadow-2xl border-4 border-yellow-400/30 transform rotate-2 hover:rotate-0 transition-transform duration-500"
               />
            </div>
          </div>
          {/* Subtle background horse silhouette or pattern could go here */}
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
             <span className="text-[200px]">🐎</span>
          </div>
        </section>

        {/* Traditions Footer Info */}
        <section className="text-center space-y-6">
           <h3 className="text-3xl font-traditional text-red-800">Nét Đẹp Văn Hóa Tết Việt</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { icon: '🥘', title: 'Bánh Chưng' },
               { icon: '🌺', title: 'Hoa Đào' },
               { icon: '🧧', title: 'Lì Xì' },
               { icon: '👨‍👩‍👧‍👦', title: 'Sum Vầy' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow">
                 <div className="text-3xl mb-1">{item.icon}</div>
                 <div className="font-bold text-gray-700">{item.title}</div>
               </div>
             ))}
           </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 text-red-500 font-bold uppercase tracking-widest text-sm">Chúc Mừng Năm Mới 2026</p>
          <p className="text-xl font-traditional text-yellow-500 mb-6">Mã Đáo Thành Công - Vạn Sự Như Ý</p>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Tết Bính Ngọ Application. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Văn hóa Tết</a>
              <a href="#" className="hover:text-white transition-colors">Tử vi 2026</a>
              <a href="#" className="hover:text-white transition-colors">Liên hệ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
