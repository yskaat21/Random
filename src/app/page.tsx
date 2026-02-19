"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="https://www.clopos.com/favicon.ico"
                alt="Clopos Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <h1 className="text-2xl font-bold text-gray-900">Clopos</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {/* Ürünler - Mega menu */}
              <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                <button aria-expanded={productsOpen} className="text-gray-500 hover:text-gray-900 focus:outline-none">Ürünler</button>
                <div className={`absolute left-0 mt-3 w-[680px] bg-white rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 p-6 z-50 transition-all duration-200 transform ${productsOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">POS Adisyon sistemi</div>
                          <div className="text-sm text-gray-500">Modern bir POS sistemi ile satış sürecinizi hızlandırın</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h4l3 8 4-16 3 8h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Restoran Otomasyon Sistemi</div>
                          <div className="text-sm text-gray-500">İşle ilgili tüm operasyonları tek bir yazılımdan yönetin</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Clopos Manager uygulaması</div>
                          <div className="text-sm text-gray-500">Uzakta olsanız bile iş operasyonlarınızı izleyin</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2h-6" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Mutfak Ekranı Sistemi</div>
                          <div className="text-sm text-gray-500">İş akışını geliştirmek için mutfaktaki operasyonları dijitalleştirin</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">QR Menü</div>
                          <div className="text-sm text-gray-500">Müşterilerin menünüzü hemen açıp sipariş vermesine izin verin</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-blue-50 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Merkezi Zincir Yönetimi</div>
                          <div className="text-sm text-gray-500">Tüm şubeleri tek bir şubeymiş gibi kolayca yönetin</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 border-t pt-4">
                    <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 3v14h14V3H3zm2 4h10v2H5V7z" />
                      </svg>
                      Yazılımları indirin
                    </a>
                  </div>
                </div>
              </div>

              {/* Fonksiyonlar - küçük hover list */}
              <div className="relative group">
                <button className="text-gray-500 hover:text-gray-900 focus:outline-none">Fonksiyonlar</button>
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 transform -translate-y-2 group-hover:translate-y-0 absolute left-0 mt-3 w-56 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 p-3 z-50">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="block hover:text-gray-900">POS Adisyon</a></li>
                    <li><a href="#" className="block hover:text-gray-900">Mutfak Ekranı</a></li>
                    <li><a href="#" className="block hover:text-gray-900">QR Menü</a></li>
                  </ul>
                </div>
              </div>

              <a href="/pricing" className="text-gray-500 hover:text-gray-900">Fiyatlar</a>

              <div className="relative group">
                <button className="text-gray-500 hover:text-gray-900 focus:outline-none">Yardım Merkezi</button>
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 transform -translate-y-2 group-hover:translate-y-0 absolute left-0 mt-3 w-64 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 p-3 z-50">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="block hover:text-gray-900">SSS</a></li>
                    <li><a href="#" className="block hover:text-gray-900">Dokümantasyon</a></li>
                    <li><a href="#" className="block hover:text-gray-900">İletişim</a></li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-500 hover:text-gray-900 focus:outline-none">Şirket</button>
                <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-150 transform -translate-y-2 group-hover:translate-y-0 absolute left-0 mt-3 w-56 bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 p-3 z-50">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><a href="#" className="block hover:text-gray-900">Hakkımızda</a></li>
                    <li><a href="#" className="block hover:text-gray-900">Kariyer</a></li>
                    <li><a href="#" className="block hover:text-gray-900">Ortaklık</a></li>
                  </ul>
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

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                Restoran yönetimini kolaylaştıran bulut tabanlı otomasyon sistemi ve POS adisyon programı
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-gray-500 leading-relaxed">
                Clopos POS restoran & cafe otomasyon sistemi ile satışlarınız, çalışanlarınız, depo ve mali durumunuz gibi işle alakalı her şeyi her zaman, her yerde yönetebilirsiniz
              </p>
              <div className="mt-10 flex items-center space-x-6">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300">
                  Demo talebi
                </button>
                <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 00-1 1v6H5l4 4 4-4h-2V3a1 1 0 00-1-1H8z" />
                    <path d="M3 15a2 2 0 002 2h10a2 2 0 002-2v-1H3v1z" />
                  </svg>
                  Sunumu indir
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <Image
                src="https://www.clopos.com/_next/static/media/pos-kassa.49b0284a.webp"
                alt="POS Adisyon Sistemi"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex flex-col md:flex-row md:divide-x md:divide-gray-200">
            <div className="md:px-8 py-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Kullanım kolaylığı</h4>
                <p className="mt-2 text-gray-500">Clopos POS otomasyon, yeni kullanıcıların bile hızlıca uyum sağlamasını sağlayan kullanıcı dostu bir arayüze sahiptir.</p>
              </div>
            </div>
            <div className="md:px-8 py-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6m0 0H9m3 0h3" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Ulaşılabilirlik</h4>
                <p className="mt-2 text-gray-500">Tüm yazılımlar farklı platform ve cihazlarda çalışır; işinizi her yerden yönetmenize olanak tanır.</p>
              </div>
            </div>
            <div className="md:px-8 py-6 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Depo kontrolü</h4>
                <p className="mt-2 text-gray-500">Clopos POS'un depo stok takibi ile ürünlerinizi kolayca yönetebilir, olası kayıpların önüne geçebilirsiniz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POS Adisyon Sistemi */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/pointOfsale.7d9406d1.jpg"
                alt="POS Adisyon Sistemi"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900">POS Adisyon Sistemi</h3>
              <p className="mt-4 text-xl text-gray-500">
                Siparişlerinizi ve ödemelerinizi masada, yerinde veya teslimat için kolayca kabul etmenizi sağlayan Clopos'un POS Adisyon ürünü ile sipariş ve ödeme sürecinizi kolaylaştırın
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Çevrimdışı kullanılabilirlik</h4>
                  <p className="mt-2 text-gray-500">İnternet bağlantısı olmadan çalışabilir.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Garson uygulaması</h4>
                  <p className="mt-2 text-gray-500">Kolay sipariş alma.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Çalışan izinlerinin yönetimi</h4>
                  <p className="mt-2 text-gray-500">İzin takibi.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Merkezi sipariş yönetimi</h4>
                  <p className="mt-2 text-gray-500">Tüm siparişleri merkezden yönetin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restoran Otomasyon Sistemi */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900">Restoran Otomasyon Sistemi</h3>
              <p className="mt-4 text-xl text-gray-500">
                Evde, yolda, tatilde... Clopos, internet bağlantısı olan her yerden işinizi kolayca yönetmenizi sağlar.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Depolama yönetimi</h4>
                  <p className="mt-2 text-gray-500">Stok takibi.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Mali tablolar</h4>
                  <p className="mt-2 text-gray-500">Finansal raporlar.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Merkezi yönetim</h4>
                  <p className="mt-2 text-gray-500">Tüm lokasyonları yönetin.</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="text-lg font-medium text-gray-900">Çalışan denetimi</h4>
                  <p className="mt-2 text-gray-500">Personel yönetimi.</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/mainBakcOffice.87e021fe.jpg"
                alt="Restoran Otomasyon Sistemi"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* İşlere kolaylık uygulayın */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-gray-900">İşlere kolaylık uygulayın!</h3>
            <p className="mt-4 text-xl text-gray-500">
              Clopos Manager Uygulaması ile nerede olursanız olun, işlere kaldığınız yerden devam ede ve işinizi kolaylıkla yönete bilirsiniz
            </p>
            <div className="mt-8">
              <Image
                src="https://www.clopos.com/_next/static/media/clopos-manager-app.6824bfdd.webp"
                alt="Clopos Manager App"
                width={600}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Her tür işletmeye uygun POS çözümleri */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">Her tür işletmeye uygun POS çözümleri</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/pos-solution-img1.c249940e.webp"
                alt="Tam servis yerleri"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Tam servis yerleri</h4>
              <ul className="mt-2 text-gray-500">
                <li>Restoran</li>
                <li>Lounge</li>
                <li>Bar</li>
                <li>Kulüp</li>
              </ul>
            </div>
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/pos-solution-img2.75b40085.webp"
                alt="Hızlı servis yerleri"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Hızlı servis yerleri</h4>
              <ul className="mt-2 text-gray-500">
                <li>Kafe</li>
                <li>Pizzacı</li>
                <li>Fast food</li>
                <li>Tatlıcı</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <h4 className="text-xl font-semibold">Bulut mutfaklar</h4>
            <p className="mt-2 text-gray-500">
              Clopos POS, teslimat ve paket servis tabanlı restoranlara süreçleri yönetme, operasyonları optimize etme ve tek bir sistemden birden fazla lokasyonu denetleme gibi olanaklar sağlar
            </p>
          </div>
        </div>
      </section>

      {/* QR Menü */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-qr-menu.cf4e5d45.webp"
                alt="QR Menü"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900">QR Menü</h3>
              <p className="mt-4 text-xl text-gray-500">
                Müşterilerinizin Sadece QR kodunu tarayarak menünüze erişmesini ve kolayca sipariş vermesini sağlayın
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yazar kasa ile entegrasyon */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">Yazar kasa ile entegrasyon</h3>
            <p className="mt-4 text-xl text-gray-500">
              Satış verilerinizi Yazar kasa operatörlerinin veritabanlarına aktarımını otomatikleştirin
            </p>
            <div className="mt-8">
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-kassa.00b93869.webp"
                alt="Yazar Kasa Entegrasyon"
                width={600}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agregatörlerle entegrasyon */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">Agregatörlerle entegrasyon</h3>
            <p className="mt-4 text-xl text-gray-500">
              Wolt gibi harici platformlar üzerinden yapılan siparişleri zahmetsizce doğrudan sisteminize alın
            </p>
            <div className="mt-8">
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-wolt.6cf9d4d8.webp"
                alt="Agregatör Entegrasyon"
                width={600}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CloposPay */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">CloposPay</h3>
            <p className="mt-4 text-xl text-gray-500">
              Müşterilerinizin mobil cihazları aracılığıyla kolayca ödeme yapmalarını ve bahşiş göndermelerini sağlayarak deneyimlerini geliştirin
            </p>
            <div className="mt-8">
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-qr-clopos-pay.4fabf67c.webp"
                alt="CloposPay"
                width={600}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mutfak ekranı sistemi */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900">Mutfak ekranı sistemi</h3>
              <p className="mt-4 text-xl text-gray-500">
                Sipariş iletimini kolaylaştıran ve mutfak verimliliğini artıran bir mutfak sistemiyle siparişleri zahmetsizce yönetin
              </p>
              <p className="mt-4 text-2xl font-bold text-blue-600">4500+ memnun müşteri</p>
            </div>
            <div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-kitchen-system.ffc5a049.webp"
                alt="Mutfak Ekranı Sistemi"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">Hakkımızda ne diyorlar?</h3>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">"Çok fonksiyonlu Clopos sistemi sayesinde tüm finansal akışları kontrol etmek artık çok daha kolay."</p>
              <p className="mt-4 font-semibold">Nicat Məmmədov - Tendir & Mendir</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">"Clopos çalışanları, ürün geliştirmeden müşteri hizmetlerine kadar her seviyede profesyonel olduklarını kanıtlamıştır."</p>
              <p className="mt-4 font-semibold">Məmmədağa Məmmədov - ROOM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold">Clopos</h4>
              <p className="mt-2 text-gray-400">Restoran yönetimini kolaylaştıran çözümler.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Ürünler</h4>
              <ul className="mt-2 text-gray-400">
                <li>POS Adisyon sistemi</li>
                <li>Mutfak Ekranı Sistemi</li>
                <li>Restoran Otomasyon Sistemi</li>
                <li>QR Menü</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Şirket</h4>
              <ul className="mt-2 text-gray-400">
                <li>Hakkımızda</li>
                <li>Ortaklık</li>
                <li>Fiyatlar</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">İletişim</h4>
              <p className="mt-2 text-gray-400">0532 595 52 66</p>
              <p className="text-gray-400">turkiye@clopos.com</p>
              <p className="text-gray-400">BARBAROS MAH. BEGONYA SOK. NIDAKULE ATAŞEHİR BATI NO: 1 İÇ KAPI NO: 2 - ATAŞEHİR / İSTANBUL</p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2023 Clopos Teknoloji A.Ş - Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
