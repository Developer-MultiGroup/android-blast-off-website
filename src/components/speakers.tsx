"use client";
import type React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { Speaker } from "@/types";
import { slugify } from "@/lib/slugify";
import Image from "next/image";

interface SpeakerCarouselProps {
  speakers: Speaker[];
}

const Speakers: React.FC<SpeakerCarouselProps> = ({ speakers }) => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleCardClick = (speakerName: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [speakerName]: !prev[speakerName],
    }));
  };

  return (
    <section className="w-full max-w-7xl mx-auto font-montserrat-mid">
      <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0">
        {speakers.map((speaker) => (
          <div
            key={speaker.fullName}
            className={`w-[calc(50%-0.5rem)] sm:w-[200px] h-[250px] cursor-pointer group [perspective:1000px] ${
              flippedCards[speaker.fullName] ? "flip-active" : ""
            }`}
            onClick={() => handleCardClick(speaker.fullName)}
          >
            <div
              className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                flippedCards[speaker.fullName]
                  ? "[transform:rotateY(180deg)]"
                  : ""
              } group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front Side */}
              <Card className="absolute w-full h-full overflow-hidden [backface-visibility:hidden] p-0">
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/speakers/${slugify(speaker.fullName)}.webp`}
                    alt={speaker.fullName}
                    className="object-cover object-[top_center] sm:object-center"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    loading="lazy"
                  />
                </div>
              </Card>

              {/* Back Side */}
              <Card className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-4">
                <h3 className="text-lg font-semibold text-center mb-2">
                  {speaker.fullName}
                </h3>

                <div className="flex-grow flex items-center justify-center">
                  <p className="text-sm text-gray-500 text-center line-clamp-3">
                    {speaker.title}
                  </p>
                </div>

                {speaker.company && (
                  <div className="flex justify-center w-full h-12 mt-2">
                    <div className="relative w-24 h-12">
                      <Image
                        src={`/images/sponsors/${slugify(
                          speaker.company
                        )}.webp`}
                        alt={`${speaker.company} logo`}
                        className="object-contain"
                        fill
                        sizes="96px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
