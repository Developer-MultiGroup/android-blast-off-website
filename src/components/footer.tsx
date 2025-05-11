"use client";

import { useEffect, useState } from "react";
import {
  InstagramLogo,
  XLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";


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
    <footer className="relative text-color-background py-6 px-6 md:px-12 md:py-12 flex flex-col items-center justify-center min-h-60 bg-color-secondary w-5/6 2xl:w-2/3 mx-auto mb-12 mt-12 rounded-2xl font-montserrat-semi">
      <div className="w-full flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full gap-6">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/images/dmg-logo.webp"
              alt="MultiGroup Logo"
              width={240}
              height={40}
            />
          </div>
          <p className="italic text-sm text-gray-300">
            “Where Developers Become Together”
          </p>
        </div>

        <hr className="border-gray-600 mb-2" />

        {/* Main Grid Content */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm w-full text-center md:text-left text-white">
          {/* Hızlı Linkler */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-400 mb-3">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-accent transition-all duration-300"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/etkinlikler"
                  className="hover:text-accent transition-all duration-300"
                >
                  Etkinlikler
                </Link>
              </li>
              <li>
                <Link
                  href="/icerik#konusmacilar"
                  className="hover:text-accent transition-all duration-300"
                >
                  Konuşmacılar
                </Link>
              </li>
              <li>
                <Link
                  href="https://kommunity.com/devmultigroup/events/android-blast-off-jetpack-compose-bootcamp-18857d79/tickets/"
                  className="hover:text-accent transition-all duration-300"
                >
                  Biletler
                </Link>
              </li>
            </ul>
          </div>

          {/* Topluluk */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-400 mb-3">
              Topluluk
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://kommunity.com/devmultigroup"
                  target="_blank"
                  className="hover:text-accent transition-all duration-300"
                >
                  Kommunity
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Developer-MultiGroup"
                  target="_blank"
                  className="hover:text-accent transition-all duration-300"
                >
                  Github
                </Link>
              </li>
            </ul>
          </div>

          {/* Projeler */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-400 mb-3">
              Projeler
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://android-blast-off.devmultigroup.com"
                  className="hover:text-accent transition-all duration-300"
                >
                  Android Blast-Off
                </Link>
              </li>
              <li>
                <Link
                  href="https://genai.devmultigroup.com"
                  className="hover:text-accent transition-all duration-300"
                >
                  GenAI Fundamentals
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Developer-MultiGroup/DMG-Data-Science-Awesome"
                  className="hover:text-accent transition-all duration-300"
                >
                  Data Science Awesome
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-400 mb-3">
              Hala Kayıt Yapmadın Mı?
            </h3>
            <p className="text-sm mb-4">
              Etkinliklerden geri kalmamak için hemen aramıza katıl!
            </p>
            <Link
              href="https://kommunity.com/devmultigroup/events/android-blast-off-jetpack-compose-bootcamp-18857d79"
              className="inline-block border border-accent px-4 py-2 rounded-md hover:bg-accent transition"
              target="_blank"
            >
              Yerini Ayırt
            </Link>
          </div>
        </div>

        <hr className="border-gray-600 mt-2" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 w-full text-center md:text-left">
          <p>© Copyright Developer MultiGroup 2020–2025</p>
          <div className="flex gap-4 justify-center text-white text-xl">
            <Link
              href="https://www.instagram.com/devmultigroup/"
              aria-label="Instagram"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
            >
              <InstagramLogo />
            </Link>
            <Link
              href="https://x.com/devmultigroup"
              aria-label="X"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
            >
              <XLogo />
            </Link>
            <Link
              href="https://www.linkedin.com/company/devmultigroup/"
              aria-label="LinkedIn"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
            >
              <LinkedinLogo />
            </Link>
            <Link
              href="https://github.com/Developer-MultiGroup"
              aria-label="Github"
              className="hover:text-accent transition-all duration-300"
              target="_blank"
            >
              <GithubLogo />
            </Link>
          </div>
        </div>
      </div>

      
    </footer>
  );
}