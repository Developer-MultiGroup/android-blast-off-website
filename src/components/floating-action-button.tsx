import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  Coffee,
  YoutubeLogo,
  UsersThree,
} from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const FloatingActionButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const socialItems = [
    {
      icon: InstagramLogo,
      label: "Instagram",
      link: "https://instagram.com/devmultigroup",
    },
    {
      icon: LinkedinLogo,
      label: "Linkedin",
      link: "https://www.linkedin.com/company/devmultigroup/",
    },
    {
      icon: YoutubeLogo,
      label: "Youtube",
      link: "https://www.youtube.com/@devmultigroup",
    },
    {
      icon: UsersThree,
      label: "Kommunity",
      link: "https://kommunity.com/devmultigroup/events",
    },
    {
      icon: GithubLogo,
      label: "GitHub",
      link: "https://github.com/Developer-MultiGroup",
    },
    {
      icon: Coffee,
      label: "Buy Me a Coffee",
      link: "https://buymeacoffee.com/multigroup",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.5;
      setShowButton(shouldShow);
    };

    // Debounce scroll handler
    const debouncedScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = debouncedScroll();

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div
        className={`relative w-12 h-12 sm:w-14 sm:h-14 bg-[#41df9a] rounded-full shadow-lg cursor-pointer transition-all duration-300 ${
          isActive ? "scale-105 shadow-xl" : "shadow-md"
        }`}
        onClick={() => setIsActive(!isActive)}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
      >
        <span
          className={`select-none absolute inset-0 flex items-center justify-center text-[#1f2226] text-xl sm:text-2xl font-bold transition-transform duration-300 ${
            isActive ? "rotate-45" : ""
          }`}
        >
          +
        </span>

        <ul
          className={`absolute bottom-14 sm:bottom-16 right-0 bg-[#1f2226] rounded-xl shadow-2xl p-3 sm:p-4 space-y-2 sm:space-y-3 min-w-[180px] sm:min-w-[200px] transition-all duration-300 ${
            isActive
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2"
          }`}
        >
          {socialItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a key={index} href={item.link}>
                <li className="flex items-center py-1.5 px-2 sm:py-2 sm:px-3 hover:bg-[#ffffff15] rounded-lg transition-all duration-200 group">
                  <IconComponent
                    color="white" // Makes the icon white
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-[#ffffffdd] text-xs sm:text-sm group-hover:text-[#ff5757] transition-colors duration-200">
                    {item.label}
                  </span>
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FloatingActionButton;
