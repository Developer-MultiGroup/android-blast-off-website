"use client";

import Image from "next/image";
import GoogleLogoInfiniteScroll from "../components/GoogleInfiniteScroll";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

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
      <section className="min-h-screen bg-[#1F2326] flex flex-col items-center align-middle justify-center text-white relative">
        <h1 className="text-5xl lg:text-6xl xl:text-8xl font-tan-nimbus text-center px-4 leading-snug">
          Android <span className="text-secondary">Blast Off</span>{" "}
        </h1>
        <p className="text-xl lg:text-2xl xl:text-4xl pt-4 font-extrabold font-montserrat-mid text-center px-4">
          <span className="text-accent">Jetpack Compose</span> Bootcamp
        </p>
        <button className="px-4 py-2 bg-secondary rounded-lg mt-8 text-black font-extrabold text-lg lg:text-xl xl:text-2xl font-montserrat-mid">
          Tamamıyla Ücretsiz
        </button>

        {/* Scroll Animation */}
        <div
          className={`absolute bottom-8 flex flex-col items-center transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg lg:text-xl mb-2 text-secondary font-montserrat-mid">
            Öğrenmeye Başla
          </p>
          <div className="animate-bounce bg-primary rounded-full p-2">
            <ChevronDown className="h-6 w-6 text-secondary" />
          </div>
        </div>
      </section>

      <GoogleLogoInfiniteScroll />

      <section className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 sm:p-8 py-8 sm:py-16 max-w-7xl mx-auto">
          <div className="p-6 bg-[#1F2326] rounded-lg border-4 border-secondary group">
            <h2 className="text-2xl font-bold text-white mb-3">
              Başlamadan Önce
            </h2>
            <p className="text-white mb-4 font-montserrat-mid ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem
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

          <div className="p-6 bg-[#1F2326] rounded-lg border-4 border-secondary group">
            <h2 className="text-2xl font-bold text-white mb-3">
              Bootcamp Hedefleri
            </h2>
            <p className="text-white mb-4 font-montserrat-mid">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem I
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

        <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            <span className="text-accent">Jetpack Compose</span>{" "}
            <span className="text-black dark:text-white">ile modern</span>{" "}
            <span className="text-secondary">Android</span> <br />
            <span className="text-secondary">geliştirmeye</span>{" "}
            <span className="text-black dark:text-white">ilk adımı at!</span>
          </h2>

          <p className="text-center max-w-3xl mx-auto text-base sm:text-lg my-8 sm:my-12 px-4">
            Jetpack Compose ile Android geliştirici olmak istiyorsan, en güncel
            müfredat ve yeniliklerle güçlü bir başlangıç yap!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-8 sm:mt-16 pt-8 sm:pt-16">
            <div className="bg-secondary rounded-lg overflow-hidden relative">
              <div className="p-4">
                <Image
                  src="/placeholder.png"
                  alt="Video Placeholder"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              {/* <div className="absolute bottom-0 right-0">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-20 sm:h-20"
                >
                  <path
                    d="M40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0Z"
                    fill="#DD3E34"
                    fillOpacity="0.2"
                  />
                  <path d="M50 40L35 50V30L50 40Z" fill="#DD3E34" />
                </svg>
              </div> */}
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                80% of people prefer live video over text
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                People are tired of picture-perfect content and overly rehearsed
                scripts. They want authentic stories and real human moments.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Whether you're a creator, content marketer, business, or just
              </p>
              <div>
                <button
                  className="px-6 py-3 bg-[#1F2326] text-white rounded-md font-medium hover:cursor-pointer"
                  onClick={handleLessonRoute}
                >
                  Eğitimler
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl  mx-auto py-16 sm:py-32 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
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

            <div className="grid grid-cols-2 gap-4">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary flex-shrink-0"></span>
                    <span className="text-sm md:text-base font-medium">
                      Your first Android app
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl px-4 mx-auto py-8 sm:py-16">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            <span className="text-black dark:text-white">Kısaca </span>
            <span className="text-[#DD3E34]">3</span>
            <span className="text-black dark:text-white"> Madde ile </span>
            <span className="text-secondary">
              Neden Bu Bootcampe Katılmalısın?
            </span>
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-4 sm:gap-6 mt-8">
            <div className="bg-[#E86C60] rounded-lg p-4 sm:p-6 border-2 sm:border-4 border-secondary relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Başlamadan Önce:
              </h3>
              <p className="text-white text-sm sm:text-base font-montserrat-mid">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </p>
            </div>

            <div className="bg-[#E86C60] rounded-lg p-4 sm:p-6 border-2 sm:border-4 border-secondary relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Bootcamp Hedefleri
              </h3>
              <p className="text-white text-sm sm:text-base font-montserrat-mid">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </p>
            </div>

            <div className="bg-[#E86C60] rounded-lg p-4 sm:p-6 border-2 sm:border-4 border-secondary relative">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">
                Bootcamp Hedefleri
              </h3>
              <p className="text-white text-sm sm:text-base font-montserrat-mid">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoogleLogoInfiniteScroll />
    </>
  );
}
