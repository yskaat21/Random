import React from "react";

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-20 pb-12">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800">Deneme</h2>
          <p className="text-center text-gray-500 mt-3">Yıllık ödeme yaparak 20% daha az harcayın.</p>
        </div>
      </section>

      <section className="pb-40">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-12">
              {/* Left feature list */}
              <div className="col-span-6 p-10">
                <ul className="text-gray-700">
                  <li className="py-7 border-b border-gray-200">Ürün ve yemekler</li>
                  <li className="py-7 border-b border-gray-200">Finansal raporlar</li>
                  <li className="py-7 border-b border-gray-200">Ambar kontrolü</li>
                  <li className="py-7 border-b border-gray-200">CRM ve Sadakat programı</li>
                  <li className="py-7">Telefon uygulaması</li>
                </ul>
              </div>

              {/* Middle pale column */}
              <div className="col-span-3 bg-gray-50 p-10 flex items-center justify-center">
                <div className="w-full max-w-sm bg-white rounded-lg p-6 text-center shadow-sm border border-gray-100">
                  <div className="text-sm text-gray-500">Start</div>
                  <div className="text-4xl font-bold mt-2 text-gray-700">99 $ <span className="text-base font-medium">/ Aylık</span></div>
                  <div className="mt-6 text-green-500">∞</div>
                </div>
              </div>

              {/* Right highlighted card */}
              <div className="col-span-3 p-10 flex items-center justify-center">
                <div className="w-full max-w-sm rounded-lg p-6 text-center shadow-2xl bg-gradient-to-b from-purple-500 to-indigo-500 text-white transform -translate-y-8">
                  <div className="text-sm opacity-90">Standart</div>
                  <div className="text-4xl font-bold mt-2">129 $ <span className="text-base font-medium">/ Aylık</span></div>
                  <div className="mt-6">∞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
