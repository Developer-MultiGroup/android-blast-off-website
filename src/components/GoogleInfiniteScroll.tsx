"use client";
import React, { useEffect, useState, useRef } from "react";

interface GoogleLogoInfiniteScrollProps {
  /**
   * Arka plan rengi
   * @default "bg-green-400"
   */
  backgroundColor?: string;

  /**
   * Logo yazı rengi
   * @default "text-white"
   */
  textColor?: string;

  /**
   * Logo yazı boyutu
   * @default "text-2xl"
   */
  fontSize?: string;

  /**
   * Otomatik kaydırma hızı (piksel/animasyon karesi)
   * @default 1
   */
  scrollSpeed?: number;

  /**
   * Başlangıçtaki logo sayısı
   * @default 20
   */
  initialLogoCount?: number;

  /**
   * Her yüklemede eklenecek yeni logo sayısı
   * @default 10
   */
  batchSize?: number;
}

const GoogleLogoInfiniteScroll: React.FC<GoogleLogoInfiniteScrollProps> = ({
  backgroundColor = "bg-green-400",
  textColor = "text-white",
  fontSize = "text-2xl",
  scrollSpeed = 1,
  initialLogoCount = 20,
  batchSize = 10,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [logoItems, setLogoItems] = useState<string[]>(
    Array(initialLogoCount).fill("Google")
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Kullanıcı sayfanın sonuna yaklaştığında kontrol et
  useEffect(() => {
    const checkScroll = (): void => {
      const container = containerRef.current;
      if (!container) return;

      if (
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 200 &&
        !isLoading
      ) {
        setIsLoading(true);

        // Yeni logolar ekle
        setTimeout(() => {
          setLogoItems((prev) => [...prev, ...Array(batchSize).fill("Google")]);
          setIsLoading(false);
        }, 300);
      }
    };

    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", checkScroll);
      }
    };
  }, [isLoading, batchSize]);

  // Otomatik scroll animasyonu
  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPos = 0;

    const autoScroll = (): void => {
      scrollPos += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-20 overflow-x-auto whitespace-nowrap ${backgroundColor} flex items-center font-montserrat-mid`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="inline-flex items-center">
        {logoItems.map((_, index) => (
          <div key={index} className="inline-block px-4">
            <span className={`${textColor} ${fontSize} font-bold`}>Google</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleLogoInfiniteScroll;
