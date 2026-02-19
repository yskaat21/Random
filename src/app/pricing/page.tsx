"use client";
import React, { useState } from "react";

export default function Pricing() {
  const [plan, setPlan] = useState<"monthly" | "yearly">("monthly");
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="pt-24 pb-10 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Fiyatlandırma</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun paketler. Şeffaf, esnek ve yıllık ödemelerde fırsatlar.
            </p>
            <div className="mt-6 relative z-30">
              <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg ring-1 ring-gray-200 mx-auto">
                <button
                  onClick={() => setPlan("monthly")}
                  className={`px-6 py-2 rounded-full text-base font-semibold transition-colors duration-150 whitespace-nowrap ${plan === "monthly" ? "bg-blue-600 text-white shadow" : "text-gray-600 bg-transparent"}`}
                >
                  Aylık
                </button>
                <button
                  onClick={() => setPlan("yearly")}
                  className={`ml-1 px-6 py-2 rounded-full text-base font-semibold transition-colors duration-150 whitespace-nowrap ${plan === "yearly" ? "bg-blue-600 text-white shadow" : "text-gray-600 bg-transparent"}`}
                >
                  Yıllık (20% indirim)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="mt-8 pb-20">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-sm text-gray-500">Başlangıç</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-gray-900">99</span>
                <span className="text-sm text-gray-500">TL / aylık</span>
              </div>
              <p className="mt-4 text-gray-600">Temel POS fonksiyonları, 1 lokasyon, telefon uygulaması.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>Ürün & Menü yönetimi</li>
                <li>Satış raporları</li>
                <li>Garson uygulaması</li>
              </ul>
              <div className="mt-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium">Demo Talep Et</button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-600 to-indigo-600 text-white rounded-2xl shadow-2xl p-8">
              <div className="text-sm opacity-90">Standart</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">129</span>
                <span className="text-sm opacity-80">TL / aylık</span>
              </div>
              <p className="mt-4 opacity-90">Orta ölçekli işletmeler için tam paket: çoklu lokasyon, merkezi yönetim, gelişmiş raporlar.</p>
              <ul className="mt-6 space-y-3 opacity-95">
                <li>Çoklu lokasyon yönetimi</li>
                <li>Gelişmiş finansal raporlar</li>
                <li>Depo ve stok takibi</li>
                <li>Sadakat & CRM</li>
              </ul>
              <div className="mt-6">
                <button className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold">Hemen Başla</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="text-sm text-gray-500">Kurumsal</div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-gray-900">Özel</span>
                <span className="text-sm text-gray-500">Teklif ile</span>
              </div>
              <p className="mt-4 text-gray-600">Büyük ölçekli zincirler ve özel entegrasyon isteyen işletmeler için özel çözümler.</p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li>SLA & 7/24 destek</li>
                <li>Özel entegrasyonlar</li>
                <li>Merkezi zincir yönetimi</li>
              </ul>
              <div className="mt-6">
                <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-medium bg-white">Teklif Al</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & comparison (simple) */}
      <section className="pb-28">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Paketlere dahil özellikler</h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div>
                <h4 className="font-medium text-gray-900">Satış & POS</h4>
                <p className="mt-2 text-sm">Hızlı sipariş, masabaşı, paket servis ve ödeme entegrasyonları.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Depo & Stok</h4>
                <p className="mt-2 text-sm">Barkod, reçete ve otomatik stok güncellemeleri.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Raporlama</h4>
                <p className="mt-2 text-sm">Günlük, haftalık ve aylık finansal raporlar, kârlılık analizleri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
