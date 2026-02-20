"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Çalışmaya başladığımız ilk günden beri Clopos kullanıyoruz. Clopos'un hem hesap verme hem de veri analizleri için sağladığı özellikler işimizi oldukça kolaylaştırıyor. Clopos yazılımı geliştirdikçe işbirliğimizin de gelişeceğine inancımız tam.",
      name: "Said Memmadov",
      title: "Gelateca'da Yönetici",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "Çok fonksiyonlu Clopos sistemi sayesinde tüm finansal akışları kontrol etmek artık çok daha kolay. Clopos uygulamaları ve eğitim aldığımız ekip sayesinde işimiz çok daha kolay, hızlı ve verimli hale geldi.",
      name: "Nicat Məmmədov",
      title: "Tendir & Mendir Yönetici",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 3,
      text: "Clopos çalışanları, ürün geliştirmeden müşteri hizmetlerine kadar her seviyede profesyonel olduklarını kanıtlamıştır. Sistem kullanımı oldukça basit ve intuitif.",
      name: "Məmmədağa Məmmədov",
      title: "ROOM'un Kurucusu",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      rating: 5,
    },
    {
      id: 4,
      text: "Restoran işletmeciliğinde karşılaştığımız tüm sorunların çözümünü Clopos'ta bulduk. Müşteri desteği hızlı ve yardımcı.",
      name: "Fatih Yılmaz",
      title: "Fatih Restaurant Müdürü",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      rating: 5,
    },
    {
      id: 5,
      text: "Clopos ile depo yönetimi çok kolaylaştı. Stok takibi otomatik olarak yapılıyor ve hiç veri kaybı yaşamıyoruz.",
      name: "Ayşe Kaya",
      title: "Kaya Cafe Sahibi",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      rating: 5,
    },
  ];

  const currentTestimonial = testimonials[testimonialIndex];
  
  return (
    <div className="min-h-screen bg-white">
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
                width={600}
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
            <div className="order-1 lg:order-1 flex justify-start">
              <div className="w-[340px] h-[340px] flex items-center justify-center bg-white rounded-3xl shadow-md">
                <Image
                  src="https://www.clopos.com/_next/static/media/pointOfsale.7d9406d1.jpg"
                  alt="POS Adisyon Sistemi"
                  width={370}
                  height={370}
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
            <div className="order-2 lg:order-2 flex flex-col items-start">
              <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-base font-medium">POS Adisyon Sistemi</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Sunum sürenizi hızlandırın</h2>
              <p className="mb-6 text-gray-600 max-w-xl">
                Siparişlerinizi ve ödemelerinizi masada, yerinde veya teslimat için kolayca kabul etmenizi sağlayan Clopos'un POS Adisyon ürünü ile sipariş ve ödeme sürecinizi kolaylaştırın
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-y-2 gap-x-8 text-lg text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Çevrimdışı kullanılabilirlik</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Garson uygulaması</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Çalışan izinlerinin yönetimi</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Merkezi sipariş yönetimi</li>
              </ul>
              <a href="#" className="text-blue-700 font-semibold hover:underline text-lg">POS adisyon hakkında detaylı <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Restoran Otomasyon Sistemi */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-start">
              <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-base font-medium">Restoran Otomasyon Sistemi</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">İşinizi her yerden yönetin</h2>
              <p className="mb-6 text-gray-600 max-w-xl">
                Evde, yolda, tatilde... Clopos, internet bağlantısı olan her yerden işinizi kolayca yönetmenizi sağlar. Hareket halindeyken bile siparişleri takip edip, sistem değişiklikleri yaparak, nerede olursanız olun restoran ve cafe işletmenizin sorunsuz çalışmasını sağlarsınız
              </p>
              <ul className="mb-8 grid grid-cols-2 gap-y-2 gap-x-8 text-lg text-gray-700">
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Depolama yönetimi</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Mali tablolar</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Merkezi yönetim</li>
                <li className="flex items-center"><span className="text-blue-600 mr-2">✔</span>Çalışan denetimi</li>
              </ul>
              <a href="#" className="text-blue-700 font-semibold hover:underline text-lg">Restoran otomasyon hakkında detaylı <span aria-hidden="true">→</span></a>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="https://www.clopos.com/_next/static/media/mainBakcOffice.87e021fe.jpg"
                alt="Restoran Otomasyon Sistemi"
                width={500}
                height={300}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* İşlere kolaylık uygulayın */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl bg-[#f7fafc]">
            <div className="flex flex-col justify-center items-start px-8 py-8">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">İşleri elden bırakmayın!</h2>
              <p className="mb-6 text-lg text-gray-700 max-w-xl">
                İş yerinizden uzaklaşsanız bile, Clopos Manager uygulaması ile işinize kaldığınız yerden devam edebilirsiniz.
              </p>
              <a href="#" className="text-blue-700 font-semibold hover:underline text-lg">Clopos Manager hakkında detaylı <span aria-hidden="true">→</span></a>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="https://www.clopos.com/_next/static/media/clopos-manager-app.6824bfdd.webp"
                alt="Clopos Manager App"
                width={400}
                height={400}
                className="rounded-3xl object-cover"
              />
            </div>
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              {/* Removed phone image as requested */}
            </div>
          </div>
        </div>
      </section>

      {/* Her tür işletmeye uygun POS çözümleri */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-extrabold text-gray-900">Her hizmet alanı için POS çözümleri</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="flex rounded-3xl bg-white shadow-md overflow-hidden">
              <Image
                src="https://www.clopos.com/_next/static/media/pos-solution-img1.c249940e.webp"
                alt="Tam xidmət"
                width={260}
                height={260}
                className="rounded-3xl object-cover"
              />
              <div className="flex flex-col justify-center px-8 py-6">
                <h4 className="text-2xl font-semibold mb-4 text-black">Tam hizmet</h4>
                <hr className="mb-4 border-blue-100" />
                <ul className="space-y-4 text-lg text-black">
                  <li className="flex items-center"><span className="mr-3">🍽️</span>Restoran</li>
                  <li className="flex items-center"><span className="mr-3">🌍</span>Lounge</li>
                  <li className="flex items-center"><span className="mr-3">🍸</span>Bar</li>
                  <li className="flex items-center"><span className="mr-3">🌐</span>Kulüp</li>
                </ul>
              </div>
            </div>
            <div className="flex rounded-3xl bg-white shadow-md overflow-hidden">
              <Image
                src="https://www.clopos.com/_next/static/media/pos-solution-img2.75b40085.webp"
                alt="Sürətli xidmət"
                width={260}
                height={260}
                className="rounded-3xl object-cover"
              />
              <div className="flex flex-col justify-center px-8 py-6">
                <h4 className="text-2xl font-semibold mb-4 text-black">Hızlı hizmet</h4>
                <hr className="mb-4 border-blue-100" />
                <ul className="space-y-4 text-lg text-black">
                  <li className="flex items-center"><span className="mr-3">☕</span>Kafe</li>
                  <li className="flex items-center"><span className="mr-3">🍕</span>Pizzacı</li>
                  <li className="flex items-center"><span className="mr-3">🍔</span>Fast food</li>
                  <li className="flex items-center"><span className="mr-3">🍦</span>Tatlıcı</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white rounded-3xl shadow-md px-8 py-8">
            <div className="flex items-center mr-6">
              <span className="inline-block text-black text-3xl mr-4">🍔</span>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2 text-black">Sanal restoranlar</h4>
              <p className="text-black text-lg">
                Clopos restoran programı ile Cloud Kitchen tipi restoranlarda teslimat ve takeaway odaklı restoranlarda tüm süreçleri izleyebilir, operasyonları optimize edebilir ve aynı sistemden birden fazla restoranı yönetebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Menü */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* QR Menü */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">QR Menü</h3>
                <p className="text-gray-700 mb-4">Müşterilerinizin telefonlarıyla menünüzün dijital versiyonunu görebilir ve kolayca sipariş verebilirler.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Detaylı <span aria-hidden="true">→</span></a>
              </div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-qr-menu.cf4e5d45.webp"
                alt="QR Menü"
                width={120}
                height={120}
                className="mt-6 mx-auto transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            {/* Yazar Kasa */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Yazar Kasa ile Entegrasyon</h3>
                <p className="text-gray-700 mb-4">Satışlarınız yazar kasa operatörlerinin sistemine otomatik olarak aktarılır.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Detaylı <span aria-hidden="true">→</span></a>
              </div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-kassa.00b93869.webp"
                alt="Yazar Kasa"
                width={120}
                height={120}
                className="mt-6 mx-auto transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            {/* Agregatör */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Agregatörlerle Entegrasyon</h3>
                <p className="text-gray-700 mb-4">Wolt gibi harici platformlardan gelen siparişler doğrudan sisteminize aktarılır.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Detaylı <span aria-hidden="true">→</span></a>
              </div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-wolt.6cf9d4d8.webp"
                alt="Agregatör"
                width={120}
                height={120}
                className="mt-6 mx-auto transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            {/* CloposPay */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">CloposPay</h3>
                <p className="text-gray-700 mb-4">Müşterileriniz telefonlarıyla hesabı ödeyebilir ve bahşiş verebilirler.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Detaylı <span aria-hidden="true">→</span></a>
              </div>
              <Image
                src="https://www.clopos.com/_next/static/media/our-services-qr-clopos-pay.4fabf67c.webp"
                alt="CloposPay"
                width={120}
                height={120}
                className="mt-6 mx-auto transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
            {/* Mutfak Ekranı */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-105">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mutfak Ekranı Sistemi</h3>
                <p className="text-gray-700 mb-4">Siparişleri mutfağa iletmek ve hazırlık süreçlerini dijital olarak takip etmek için.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Detaylı <span aria-hidden="true">→</span></a>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=120&h=120&fit=crop"
                alt="Mutfak Ekranı"
                width={120}
                height={120}
                className="mt-6 mx-auto transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 text-blue-600 font-semibold text-lg">4500+ memnun müşteri</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Hakkımızda ne diyorlar?</h2>
          
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              {currentTestimonial.text}
            </p>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4 object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</div>
                <div className="text-sm text-gray-500 mb-2">{currentTestimonial.title}</div>
                <div className="flex justify-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setTestimonialIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === testimonialIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section className="bg-white py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Teknik yardım</span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Yardıma koşmaya her an hazırız!</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Eğer bir yardım etmesye hep hazır. Clopos viya ürünlerimiz hakkında herhangi bir sorunuz varsa, güvenilir cevaplar için bizimle iletişime geçin
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.024a11.042 11.042 0 01-5.516 5.516l-1.024-2.048a1 1 0 00-.756-.502L5.677 9.228a1 1 0 00-.684-.948A2 2 0 003 7.172V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-500">listelğı̇ızde arayın</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth={2}/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">1 dakika</div>
                    <div className="text-sm text-gray-500">Hemen cevaplıyalım</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Video öğütimler</span>
                </a>
                <a href="#" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                  </svg>
                  <span>Makaleler</span>
                </a>
                <a href="#" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Video talimatlar</span>
                </a>
              </div>
            </div>

            <div className="flex justify-end">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Teknik Yardım"
                width={500}
                height={350}
                className="rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900">Clopos ile iş yönetimininiz daha da kolaylaşacak!</h3>
            <div className="flex items-center space-x-6">
              <a href="tel:05325955266" className="text-blue-600 text-2xl font-semibold hover:text-blue-700">0532 595 52 66</a>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 whitespace-nowrap">
                Demo talep →
              </button>
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
