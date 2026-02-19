"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b">
      <div ref={containerRef} className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://www.clopos.com/favicon.ico"
              alt="Clopos Logo"
              width={32}
              height={32}
            />
            <span className="text-2xl font-bold text-gray-900 ml-2">Clopos</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <div className="relative" onMouseEnter={() => setOpenMenu('urunler')} onMouseLeave={() => setOpenMenu(null)}>
              <button aria-expanded={openMenu === 'urunler'} onClick={() => setOpenMenu(openMenu === 'urunler' ? null : 'urunler')} className="text-gray-500 hover:text-gray-900 focus:outline-none">Ürünler</button>
              <div className={`absolute left-0 mt-3 w-[680px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 transition-all duration-200 transform pointer-events-none opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 ${openMenu === 'urunler' ? 'opacity-100 pointer-events-auto translate-y-0' : ''}`}>
                {/* simplified content omitted for brevity */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">🧾 POS Adisyon sistemi</div>
                        <div className="text-sm text-gray-500">Modern bir POS sistemi ile satış sürecinizi hızlandırın</div>
                      </div>
                    </div>
                    {/* ...more items... */}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2h-6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">🍳 Mutfak Ekranı Sistemi</div>
                        <div className="text-sm text-gray-500">İş akışını geliştirmek için mutfaktaki operasyonları dijitalleştirin</div>
                      </div>
                    </div>
                    {/* ...more items... */}
                  </div>
                </div>
                <div className="mt-5 border-t pt-4">
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                    Yazılımları indirin
                  </a>
                </div>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => setOpenMenu('fonksiyonlar')} onMouseLeave={() => setOpenMenu(null)}>
              <button onClick={() => setOpenMenu(openMenu === 'fonksiyonlar' ? null : 'fonksiyonlar')} className="text-gray-500 hover:text-gray-900 focus:outline-none">Fonksiyonlar</button>
              <div className={`absolute left-0 mt-3 w-[520px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 pointer-events-none opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 transform ${openMenu === 'fonksiyonlar' ? 'opacity-100 pointer-events-auto translate-y-0' : ''}`}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">🧾 POS Adisyon</div>
                        <div className="text-sm text-gray-500">Sipariş ve ödeme süreçlerini hızlıca yönetin</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2h-6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">🍳 Mutfak Ekranı</div>
                        <div className="text-sm text-gray-500">Mutfak operasyonlarını dijitalleştirerek hız kazanın</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">📱 QR Menü</div>
                        <div className="text-sm text-gray-500">Temassız menü ve hızlı sipariş deneyimi</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-blue-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">📊 Raporlama</div>
                        <div className="text-sm text-gray-500">Satış verilerinizi anlık ve kapsamlı görün</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 border-t pt-4">
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">Tüm Fonksiyonları Gör</a>
                </div>
              </div>
            </div>

            <div className="relative group">
              <a href="/pricing" className="text-gray-500 hover:text-gray-900 focus:outline-none">Fiyatlar</a>
              <div className="absolute left-0 mt-3 w-[420px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 pointer-events-none opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 transform">
                <div className="space-y-4">
                  <div className="font-semibold text-gray-900">💳 Esnek ödeme planları</div>
                  <div className="text-sm text-gray-500">İhtiyacınıza uygun Başlangıç, Standart ve Kurumsal paketleri keşfedin.</div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="p-3 bg-gray-50 rounded-md text-center">
                    <div className="font-semibold">🔰 Başlangıç</div>
                    <div className="text-sm text-gray-600">Uygun fiyat</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md text-center border-2 border-blue-100">
                    <div className="font-semibold">⭐ Standart</div>
                    <div className="text-sm text-gray-600">En çok tercih edilen</div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-md text-center">
                    <div className="font-semibold">🏢 Kurumsal</div>
                    <div className="text-sm text-gray-600">Ölçeklenebilir</div>
                  </div>
                </div>
                <div className="mt-5 border-t pt-4">
                  <a href="/pricing" className="inline-flex items-center text-blue-600 font-medium hover:underline">Fiyatlandırmayı Gör</a>
                </div>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => setOpenMenu('yardim')} onMouseLeave={() => setOpenMenu(null)}>
              <button onClick={() => setOpenMenu(openMenu === 'yardim' ? null : 'yardim')} className="text-gray-500 hover:text-gray-900 focus:outline-none">Yardım Merkezi</button>
              <div className={`absolute left-0 mt-3 w-[420px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 pointer-events-none opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 transform ${openMenu === 'yardim' ? 'opacity-100 pointer-events-auto translate-y-0' : ''}`}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-semibold text-gray-900">❓ SSS</div>
                    <div className="text-sm text-gray-500 mt-1">Sıkça sorulan sorular ve hızlı çözümler</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">📚 Dokümantasyon</div>
                    <div className="text-sm text-gray-500 mt-1">Kurulum ve kullanım rehberleri</div>
                  </div>
                </div>
                <div className="mt-5 border-t pt-4">
                  <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">Yardımı Keşfet</a>
                </div>
              </div>
            </div>

            <div className="relative group" onMouseEnter={() => setOpenMenu('sirket')} onMouseLeave={() => setOpenMenu(null)}>
              <button onClick={() => setOpenMenu(openMenu === 'sirket' ? null : 'sirket')} className="text-gray-500 hover:text-gray-900 focus:outline-none">Şirket</button>
              <div className={`absolute left-0 mt-3 w-[420px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 pointer-events-none opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 transform ${openMenu === 'sirket' ? 'opacity-100 pointer-events-auto translate-y-0' : ''}`}>
                <div className="space-y-3">
                  <div className="font-semibold text-gray-900">🏢 Hakkımızda</div>
                  <div className="text-sm text-gray-500">Misyonumuz, vizyonumuz ve ekibimiz hakkında bilgi alın.</div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <a href="#" className="p-3 bg-gray-50 rounded-md text-sm hover:bg-gray-100">Hakkımızda</a>
                    <a href="#" className="p-3 bg-gray-50 rounded-md text-sm hover:bg-gray-100">Kariyer</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2v20" />
              </svg>
              <span className="hidden sm:inline">TR</span>
            </div>
            <a href="tel:05325955266" className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md font-medium">0532 595 52 66</a>
            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full bg-white">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}
