"use client";

import Image from "next/image";
import GoogleLogoInfiniteScroll from "../components/GoogleInfiniteScroll";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const route = useRouter();

  function handleLessonRoute() {
    route.push("https://www.youtube.com/@devmultigroup");
  }

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

  return (
    <>
      {/* Hero Section - Responsive for all devices */}
      <section className="min-h-screen bg-[#1F2326] flex flex-col items-center justify-center text-white relative px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-tan-nimbus text-center leading-tight sm:leading-snug">
          Android <span className="text-secondary">Blast Off</span>{" "}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-4 font-extrabold font-montserrat-mid text-center">
          <span className="text-accent">Jetpack Compose</span> Bootcamp
        </p>
        <button className="px-4 py-2 bg-secondary rounded-lg mt-6 md:mt-8 text-black font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl font-montserrat-mid hover:bg-opacity-90 transition-colors">
          Tamamıyla Ücretsiz
        </button>

        {/* Scroll Animation */}
        <div
          className={`absolute bottom-8 flex flex-col items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl mb-2 text-secondary font-montserrat-mid">
            Öğrenmeye Başla
          </p>
          <div className="animate-bounce bg-primary rounded-full p-2">
            <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
          </div>
        </div>
      </section>

      <GoogleLogoInfiniteScroll />

      {/* Main Content Section */}
      <section className="bg-background">
        {/* Backdrop Containers Section - Centered and Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto">
          {/* First Backdrop Container */}
          <div className="relative group mx-auto w-full max-w-md md:max-w-none">
            {/* Shadow effect with fixed shadow size */}
            <div className="relative p-4 sm:p-6 bg-primary rounded-lg h-full shadow-[4px_4px_0px_0px_#41DF99]">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Başlamadan Önce
              </h2>
              <p className="text-white mb-4 font-montserrat-mid text-sm sm:text-base">
                Android geliştirmeye başlamak isteyenler için{" "}
                <span className="text-secondary">en güncel ve kapsamlı</span>{" "}
                eğitim içeriği. Bu kursa adım atmadan önce tek yapmanız gereken
                şey,{" "}
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
            <div className="relative p-4 sm:p-6 bg-primary rounded-lg h-full shadow-[4px_4px_0px_0px_#41DF99]">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Bootcamp Hedefleri
              </h2>
              <p className="text-white mb-4 font-montserrat-mid text-sm sm:text-base">
                <span className="text-secondary">
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
        <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            <span className="text-accent">Jetpack Compose</span>{" "}
            <span className="text-black dark:text-white">ile modern</span>{" "}
            <span className="text-secondary">Android</span>{" "}
            <br className="sm:hidden" />
            <span className="text-secondary">geliştirmeye</span>{" "}
            <span className="text-black dark:text-white">ilk adımı at!</span>
          </h2>

          <p className="text-center max-w-3xl mx-auto text-sm sm:text-base md:text-lg my-6 sm:my-8 md:my-12 px-4">
            Jetpack Compose ile Android geliştirici olmak istiyorsan, en güncel
            müfredat ve yeniliklerle güçlü bir başlangıç yap!
          </p>

          {/* Video and Text Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-12 md:mt-16 pt-8">
            {/* Video Container */}
            <div className="relative group mx-auto w-full max-w-lg lg:max-w-none">
              {/* Using fixed box-shadow instead of translating element */}
              <div className="bg-secondary rounded-lg overflow-hidden shadow-[6px_6px_0px_0px_#1F2226]">
                <div className="p-2 sm:p-3 md:p-4">
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
              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Araştırmalar gösteriyor ki video tabanlı eğitimler, metin
                tabanlı kaynaklara göre 3 kat daha etkili öğrenme sağlıyor!
                Bootcamp boyunca tüm dersleri gerçek zamanlı proje geliştirme
                videolarıyla işliyoruz.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Bize katılın ve hiçbir detay atlanmadan, gerçek bir developer
                workflow'uyla ilerleyin!
              </p>
              <div>
                <button
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base hover:cursor-pointer"
                  onClick={handleLessonRoute}
                >
                  Eğitimler
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Google Content Section */}
        <div className="max-w-7xl mx-auto py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Google Text */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
                <span className="text-[#4285F4]">Google</span>
                <span className="text-black dark:text-white">
                  'ın Hazırladığı{" "}
                </span>
                <span className="text-[#34A853]">En </span>
                <span className="text-[#FBBC05]">Güncel</span>
                <span className="text-black dark:text-white">
                  {" "}
                  İçeriği <span className="text-[#EA4335]">Sizin</span> İçin
                  Düzenledik!
                </span>
              </h2>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
                <div key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-secondary flex-shrink-0"></span>
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl px-4 sm:px-6 md:px-8 mx-auto py-8 sm:py-12 md:py-16">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-12">
            <span className="text-black dark:text-white">Kısaca </span>
            <span className="text-[#DD3E34]">3</span>
            <span className="text-black dark:text-white"> Madde ile </span>
            <span className="text-secondary">
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
                <div className="bg-accent rounded-lg p-4 sm:p-5 md:p-6 border-2 sm:border-3 md:border-4 border-primary relative min-h-[150px] sm:min-h-[180px] md:min-h-[200px] flex flex-col justify-between shadow-[4px_4px_0px_0px_#41DF99]">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm md:text-base font-montserrat-mid">
                    {benefit.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleLogoInfiniteScroll />
    </>
  );
}
