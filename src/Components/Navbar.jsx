
import { useEffect, useState } from "react";

import {
  House,
  UserRound,
  BriefcaseBusiness,
  Code2,
  FolderKanban,
  Mail,
} from "lucide-react";

const items = [
  { name: "Home", icon: House, id: "home" },
  { name: "About", icon: UserRound, id: "about" },
    { name: "Skills", icon: Code2, id: "skills" },
  { name: "Experience", icon: BriefcaseBusiness, id: "experience" },
  { name: "Projects", icon: FolderKanban, id: "projects" },
  { name: "Contact", icon: Mail, id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  // Scroll ke according active navbar item change hoga
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeItem = items.find(
              (item) => item.id === entry.target.id
            );

            if (activeItem) {
              setActive(activeItem.name);
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (item) => {
    setActive(item.name);

    document.getElementById(item.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed top-5 left-1/2 z-50 w-full -translate-x-1/2 px-3 sm:top-8">

      {/* Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-32
          w-[280px]
          -translate-x-1/2
          rounded-full
          bg-purple-600/20
          blur-[90px]
          sm:w-[500px]
        "
      />

      {/* Logo */}
      <a
        href="#home"
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-5xl
          font-bold
          text-purple-200
          drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]
          transition
          duration-300
          hover:scale-105
          hover:text-white
        "
      >
        ➳𝕬𝖗𝔥𝖆𝖒➳
      </a>

      {/* Navbar Container */}
      <div
        className="
          relative
          mx-auto
          h-[76px]
          w-full
          max-w-[850px]
          rounded-[24px]
          border
          border-purple-300/15
          bg-[#0b0815]/90
          px-2
          shadow-[0_15px_70px_rgba(0,0,0,0.65)]
          backdrop-blur-2xl
          sm:h-24
          sm:rounded-[30px]
          sm:px-4
        "
      >

        {/* Navigation Items */}
        <div className="flex h-full items-center justify-around">

          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className="
                  group
                  relative
                  flex
                  h-full
                  min-w-0
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  gap-1
                "
              >

                {/* Active Icon Circle */}
                {isActive && (
                  <div
                    className="
                      absolute
                      -top-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-[#0b0815]
                      bg-gradient-to-br
                      from-purple-300
                      via-purple-500
                      to-indigo-700
                      shadow-[0_0_30px_rgba(139,92,246,0.65)]
                      transition-all
                      duration-500
                      sm:-top-8
                      sm:h-16
                      sm:w-16
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className="text-white sm:size-7"
                    />
                  </div>
                )}

                {/* Normal Icon */}
                <Icon
                  size={21}
                  strokeWidth={1.7}
                  className={`
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "translate-y-3 opacity-0"
                        : "text-gray-500 group-hover:-translate-y-1 group-hover:text-purple-300"
                    }
                  `}
                />

                {/* Label */}
                <span
                  className={`
                    text-[10px]
                    transition-all
                    duration-300
                    sm:text-xs
                    ${
                      isActive
                        ? "font-semibold text-purple-200"
                        : "font-medium text-gray-500 group-hover:text-gray-200"
                    }
                  `}
                >
                  {item.name}
                </span>

                {/* Active Bottom Line */}
                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-1
                      h-[2px]
                      w-5
                      rounded-full
                      bg-purple-400
                      shadow-[0_0_12px_rgba(168,85,247,0.9)]
                    "
                  />
                )}

              </button>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
