"use client";

import Image from "next/image";
import GoogleLogoInfiniteScroll from "../components/GoogleInfiniteScroll";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const bootcampBenefits = [
  {
    title: "Güncel ve Yetkin Müfredat",
    content:
      "Google'ın resmi kaynakları ve Jetpack Compose'un en son sürümlerine göre hazırlanmış içeriklerle, sektörün ihtiyaçlarına %100 uyumlu içerik.",
  },
  {
    title: "Proje Tabanlı Öğrenme",
    content:
      "Sadece teori değil! Her modülde gerçek dünya uygulamaları geliştirerek portfolyonuzu şekillendirin. Farklı projeler ile işverenlerin dikkatini çekin.",
  },
  {
    title: "Topluluk ve Mentor Desteği",
    content:
      "Türkçe kaynak eksikliğini ortadan kaldıran yerel bir toplulukla, deneyimli mentörler eşliğinde sorunlarınızı anında çözün.",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the scroll indicator when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("main");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section - Responsive for all devices */}
      <section className="min-h-screen bg-[#1F2326] flex flex-col items-center justify-center text-white relative px-4 sm:px-6 md:px-8">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-tan-nimbus text-center leading-tight sm:leading-snug">
          Android <span className="text-secondary">Blast Off</span>{" "}
        </h1>
        <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-montserrat-mid text-center text-accent">
          Jetpack Compose Bootcamp
        </p>
        <button
          className="
        relative text-xl md:text-2xl mt-8 py-1 md:py-2 px-4 md:px-6 font-semibold border-none cursor-pointer
        inline-flex items-center gap-2 transition-all duration-250
        bg-[#41DF9A] text-white rounded-lg
        shadow-[inset_0_1px_0_0_#65e4a1,0_1px_0_0_#38d17e,0_3px_0_0_#35c979,0_5px_0_0_#31bd72,0_7px_0_0_#2eb46d,0_9px_0_0_#2bab68,0_11px_0_0_#28a263,0_11px_10px_0_rgba(40,162,99,0.5)]
        hover:translate-y-[6px]
        hover:shadow-[inset_0_1px_0_0_#65e4a1,0_1px_0_0_#38d17e,0_2px_0_0_#35c979,0_3px_0_0_#31bd72,0_4px_0_0_#2eb46d,0_5px_0_0_#2bab68,0_6px_0_0_#28a263,0_6px_8px_0_rgba(40,162,99,0.5)]
        active:translate-y-[10px]
        active:shadow-[inset_0_1px_0_0_#65e4a1,0_1px_0_0_#38d17e,0_1px_0_0_#35c979,0_1px_0_0_#31bd72,0_1px_0_0_#2eb46d,0_1px_0_0_#2bab68,0_2px_0_0_#28a263,0_2px_4px_0_rgba(40,162,99,0.5)]
      "
        >
          <a href="https://kommunity.com/devmultigroup" target="_blank">
            <span>Hemen Başvur</span>
          </a>
        </button>

        {/* Scroll Animation */}
        <div
          className={`absolute bottom-8 flex flex-col items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <p className="text-base sm:text-lg md:text-xl mb-2 text-secondary font-montserrat-mid">
            Öğrenmeye Başla
          </p> */}
          <div className="animate-bounce bg-primary rounded-full p-2">
            <ChevronDownIcon
              onClick={handleScroll}
              className="hover:cursor-pointer h-5 w-5 sm:h-8 sm:w-8 text-secondary"
            />
          </div>
        </div>
      </section>

      <span id="main" />
      <GoogleLogoInfiniteScroll />

      {/* Main Content Section */}
      <div className="bg-background">
        {/* Second Info Section */}
        <section className="bg-background">
          {/* Backdrop Containers Section - Centered and Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 py-8 sm:py-12 md:py-24 max-w-7xl mx-auto">
            {/* First Backdrop Container */}
            <div className="relative group mx-auto w-full max-w-md md:max-w-none">
              {/* Shadow effect with fixed shadow size */}
              <div className="relative p-4 sm:p-6 bg-primary rounded-lg h-full shadow-[8px_8px_0px_0px_#41DF99]">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Başlamadan Önce
                </h2>
                <p className="text-white mb-4 font-montserrat-mid text-sm sm:text-base w-5/6 text-left md:text-justify">
                  Android geliştirmeye başlamak isteyenler için{" "}
                  <span className="text-secondary">en güncel ve kapsamlı</span>{" "}
                  eğitim içeriği. Bu kursa adım atmadan önce tek yapmanız
                  gereken şey,{" "}
                  <span className="text-secondary">
                    kararlılıkla hedeflerinize odaklanmaktır.
                  </span>
                </p>
                <div className="flex justify-end group-hover:-translate-y-2 transition-all duration-300">
                  <Image
                    src="/android-icon.svg"
                    alt="Android Icon"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Second Backdrop Container */}
            <div className="relative group mx-auto w-full max-w-md md:max-w-none">
              {/* Shadow effect with fixed shadow size */}
              <div className="relative p-4 sm:p-6 bg-primary rounded-lg h-full shadow-[8px_8px_0px_0px_#41DF99]">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Bootcamp Hedefleri
                </h2>
                <p className="text-white mb-4 font-montserrat-mid text-sm sm:text-base w-5/6 text-left md:text-justify">
                  <span className="text-secondar">
                    Kotlin ve Jetpack Compose
                  </span>{" "}
                  kullanarak sıfırdan bir mobil uygulama geliştirebilecek, aynı
                  zamanda bu teknolojilerin{" "}
                  <span className="text-secondary">mantığını kavrayarak</span>{" "}
                  kendinizi ileri seviye içeriklere hazırlayabileceksiniz.
                </p>
                <div className="flex justify-end group-hover:-translate-y-2 transition-all duration-300">
                  <Image
                    src="/android-icon.svg"
                    alt="Android Icon"
                    width={32}
                    height={32}
                    className="opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Jetpack Compose Section */}
          <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-12 px-4 sm:px-6 md:px-8">
            <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
              <span className="text-accent text-stroke">Jetpack Compose</span>{" "}
              <span className="text-black dark:text-white">ile modern</span>{" "}
              <span className="text-secondary text-stroke underline underline-offset-3 md:no-underline decoration-secondary">Android</span>{" "}
              <br className="sm:hidden" />
              <span className="text-secondary text-stroke underline underline-offset-3 md:no-underline decoration-secondary">
                geliştirmeye
              </span>{" "}
              <span className="text-black dark:text-white">ilk adımı at!</span>
            </h2>

            <p className="text-center max-w-3xl mx-auto text-lg sm:text-base md:text-lg my-6 sm:my-8 md:my-12 px-4">
              Jetpack Compose ile Android geliştirici olmak istiyorsan, en
              güncel müfredat ve yeniliklerle güçlü bir başlangıç yap!
            </p>
          </div>
        </section>

        {/* Video and Text Section */}
        <section className="max-w-5/6 xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 md:gap-30 pb-36 md:pb-64 lg:pb-64 pt-12 md:pt-24 lg:pt-32 ">
          {/* Video Container */}
          <div className="relative group mx-auto w-full max-w-lg lg:max-w-none my-auto">
            {/* Using fixed box-shadow instead of translating element */}
            <div className="bg-secondary rounded-lg overflow-hidden shadow-[12px_12px_0px_0px_#1F2226]">
              <div className="p-2 sm:p-3 md:p-4 ">
                <Image
                  src="/placeholder.png"
                  alt="Video Placeholder"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Canlı Kodlama ile %80 Daha Kalıcı Öğrenin!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 my-4 sm:my-6 text-sm sm:text-base text-justify">
              Araştırmalar gösteriyor ki video tabanlı eğitimler, metin tabanlı
              kaynaklara göre 3 kat daha etkili öğrenme sağlıyor! Bootcamp
              boyunca tüm dersleri gerçek zamanlı proje geliştirme videolarıyla
              işliyoruz.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="relative h-11 px-6 text-zinc-900 group transition-all duration-300 ease-in-out">
                <a
                  href="https://www.youtube.com/@devmultigroup"
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-secondary transition-transform duration-300 ease-in-out rounded-md" />
                  <div className="absolute inset-0 bg-primary group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-md flex items-center justify-center">
                    <span
                      data-umami-event="Youtube Link"
                      className="relative z-10 font-medium text-md text-white"
                    >
                      Eğitimler
                    </span>
                  </div>
                </a>
                <span className="invisible font-medium text-sm">Kayıt Ol</span>
              </button>
            </div>
          </div>
        </section>

        {/* Google Content Section */}
        <section className="bg-[#F8F9FB]">
          <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-36">
              {/* Google Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 flex flex-wrap items-center justify-center text-center md:justify-start md:text-left">
                  {/* Google logosu */}
                  <img
                    src="/google-logo.png"
                    alt="Google Logo"
                    className="w-auto h-10 sm:h-12  md:h-14  lg:h-16 mr-2"
                  />
                  <span className="text-black dark:text-white">
                    'ın Hazırladığı&nbsp;
                  </span>
                  <span className="leading-relaxed">
                    En Güncel İçeriği{" "}
                    <span className="text-secondary text-stroke">
                      Sizin İçin Düzenledik
                    </span>
                  </span>
                </h2>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Kotlin ile Modern Programlama Temelleri",
                  "Jetpack Compose ile Responsive UI Tasarımı",
                  "ViewModel & LiveData ile State Yönetimi",
                  "Compose Navigation ile Gezinme Sistemleri",
                  "Material Design 3 Uygulamaları",
                  "Room Database ile Lokal Veri Yönetimi",
                  "Retrofit & Coroutines ile Network İşlemleri",
                  "Clean Architecture & MVVM Pattern",
                  "Unit Test & UI Test Otomasyonu",
                  "Performans Optimizasyonu ve Debugging Teknikleri",
                ].map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 group cursor-pointer transition-all duration-300 ease-in-out"
                  >
                    <img
                      src="/jetpack-compose.svg"
                      alt="Android Icon"
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 group-hover:rotate-90"
                    />
                    <span className="text-sm sm:text-lg md:text-base font-medium transition-all duration-300 group-hover:translate-x-2 relative">
                      {topic}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-5/6"></span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto py-12 sm:py-18 md:py-48">
          <h2 className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            <span className="text-black dark:text-white">Kısaca </span>
            <span className="text-accent text-stroke">3</span>
            <span className="text-black dark:text-white"> Madde ile </span>
            <span className="text-accent text-stroke">
              Neden Bu Bootcamp'e Katılmalısın?
            </span>
          </h2>

          {/* Benefits Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 mt-8">
            {bootcampBenefits.map((benefit, index) => (
              <div
                key={index}
                className="relative group mx-auto w-full max-w-md md:max-w-none"
              >
                {/* Using box-shadow instead of translated element */}
                <div className="bg-primary rounded-lg p-4 sm:p-5 md:p-6 border-2 sm:border-3 md:border-4 border-primary relative min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between shadow-[8px_8px_0px_0px_#41DF99]">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base font-montserrat-mid text-justify">
                    {benefit.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <GoogleLogoInfiniteScroll />
    </>
  );
}
