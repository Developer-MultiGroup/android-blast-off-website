"use client";

import { useEffect, useState } from "react";
import {
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
  ArrowUp,
  GithubLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingActionButton from "./floating-action-button";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative text-white py-6 px-2 md:px-12 flex flex-col items-center justify-center min-h-60 bg-primary font-montserrat-mid">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Anasayfa">
            <Image
              src="/multigroup.webp"
              alt="MultiGroup Logo"
              className="w-[200px] md:w-[300px]"
              width={300} // Maksimum genişlik
              height={300} // Oranları korumak için height, orijinal görsel oranına göre ayarlanmalı
            />
          </Link>
        </div>
        <nav className="mt-4 lg:mt-0 flex flex-col md:flex-row gap-6 text-sm md:text-lg items-center justify-center w-full text-center align-middle">
          {/* <Link
            aria-label="Kaynaklar sayfası"
            href="/kaynaklar"
            className="hover:text-[#3682F1] transition-colors ease-in-out duration-300"
          >
            Kaynaklar
          </Link> */}
          <Link
            aria-label="Kaynaklar sayfası"
            href="/kaynaklar"
            className="hover:text-secondary transition-colors ease-in-out duration-300"
          >
            Kaynaklar
          </Link>
          <Link
            aria-label="Konuşmacılar sayfası"
            href="/konusmacilar"
            className="hover:text-secondary transition-colors ease-in-out duration-300"
          >
            Konuşmacılar
          </Link>
          <Link
            aria-label="takvim"
            href="/takvim"
            className="hover:text-secondary transition-colors ease-in-out duration-300"
          >
            Takvim
          </Link>
          <Link
            aria-label="takvim"
            href="https://kommunity.com/devmultigroup"
            className="hover:text-secondary transition-colors ease-in-out duration-300"
          >
            Topluluk
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <Link
            aria-label="DMG Instagram Hesabı"
            href="https://instagram.com/devmultigroup"
            target="_blank"
            data-umami-event="Instagram"
          >
            <InstagramLogo className="text-xl text-pink-500 hover:text-pink-400" />
          </Link>
          <Link
            aria-label="DMG X Hesabı"
            href="https://x.com/devmultigroup"
            target="_blank"
            data-umami-event="X (Twitter)"
          >
            <XLogo className="text-xl text-white hover:text-gray-300" />
          </Link>
          <Link
            aria-label="DMG Youtube Hesabı"
            href="https://www.youtube.com/@devmultigroup"
            target="_blank"
            data-umami-event="Youtube"
          >
            <YoutubeLogo className="text-xl text-red-600 hover:text-red-500" />
          </Link>
          <Link
            aria-label="DMG Linkedin Hesabı"
            href="https://www.linkedin.com/company/devmultigroup/posts/?feedView=all"
            target="_blank"
            data-umami-event="LinkedIn"
          >
            <LinkedinLogo className="text-xl text-blue-600 hover:text-blue-500" />
          </Link>
          <Link
            aria-label="DMG Github Hesabı"
            href="https://github.com/Developer-MultiGroup"
            target="_blank"
            data-umami-event="Github"
          >
            <GithubLogo className="text-xl text-white hover:text-gray-300" />
          </Link>
        </div>
      </div>
      {/* {showButton && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-secondary text-white p-3 rounded-full shadow-lg hover:secondary/60 transition hover:cursor-pointer"
        >
          <ArrowUp />
        </motion.button>
      )} */}
      
    </footer>
  );
}
