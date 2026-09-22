
import { useState } from "react";

import {
  Wrench,
  Monitor,
  Ruler,
  Users,
  Sparkles,
} from "lucide-react";

import cardImg from "../assets/cardImg.png";

const skills = [
  {
    title: "Technical Skills",
    icon: Wrench,
    image: cardImg,
    skills: [
      "Site Surveying",
      "Quantity Estimation",
      "Gypsum Board Execution",
      "Computer Fundamentals",
      "Basic IT Operations",
    ],
  },
  {
    title: "Computer Skills",
    icon: Monitor,
    image: cardImg,
    skills: [
      "MS Excel",
      "MS Word",
      "MS PowerPoint",
      "Data Entry",
      "Record Keeping",
    ],
  },
  {
    title: "Field Skills",
    icon: Ruler,
    image: cardImg,
    skills: [
      "Site Surveying",
      "Quantity Estimation",
      "Site Execution",
      "Technical Evaluation",
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    image: cardImg,
    skills: [
      "Client Relations",
      "Account Books",
      "Business Operations",
      "Teamwork",
      "Problem Solving",
    ],
  },
];

const Skills = () => {
  const [flipped, setFlipped] = useState(null);

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        px-5
        py-28
        sm:px-10
        lg:px-20
      "
    >
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-700/10
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-180px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-700/10
          blur-[140px]
        "
      />
<div className="skill-light skill-light-1"></div>
<div className="skill-light skill-light-2"></div>
<div className="skill-light skill-light-3"></div>
<div className="skill-light skill-light-4"></div>
<div className="skill-light skill-light-5"></div>
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/5
              px-5
              py-2.5
              text-xs
              font-medium
              tracking-[3px]
              text-purple-300
            "
          >
            <Sparkles size={14} />
            MY EXPERTISE
          </div>

          <h2
            className="
              text-5xl
              font-black
              tracking-tight
              text-white
              sm:text-6xl
            "
          >
            Skills &{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-300
                via-violet-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Expertise
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-gray-400
            "
          >
            A collection of technical knowledge, field experience
            and professional abilities developed through my journey.
          </p>

        </div>


        {/* ================= PLAYING CARDS ================= */}
{/* ================= CENTER ANIMATED DIAMOND ================= */}
<div className="pointer-events-none absolute left-[44%] top-[59%] z-30 hidden -translate-x-1/2 -translate-y-1/2 sm:block">

  {/* Outer Glow */}
  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[18px] bg-purple-600/10 blur-2xl animate-pulse" />

  {/* Main Diamond */}
  <div className="relative h-16 w-16 rotate-45 rounded-[12px] border border-purple-300/40 bg-gradient-to-br from-purple-500/20 via-violet-500/10 to-indigo-600/20 backdrop-blur-md shadow-[0_0_35px_rgba(139,92,246,0.45)] animate-diamond-float">

    {/* Inner Diamond */}
    <div className="absolute inset-2 rounded-[7px] border border-purple-300/25" />

    {/* Center Light */}
    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200 shadow-[0_0_18px_rgba(196,181,253,1)] animate-diamond-pulse" />

  </div>

  {/* Four Small Particles */}
  <span className="absolute -left-5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)] animate-particle-left" />

  <span className="absolute -right-5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(196,181,253,0.9)] animate-particle-right" />

  <span className="absolute left-1/2 -top-5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_10px_rgba(165,180,252,0.9)] animate-particle-top" />

  <span className="absolute left-1/2 -bottom-5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_10px_rgba(196,181,253,0.9)] animate-particle-bottom" />

</div>
        <div
          className="
    relative
    mx-auto
    grid
    max-w-5xl
    grid-cols-1
    gap-8
    sm:grid-cols-2
    xl:gap-6
  "
        >

          {skills.map((item, index) => {

            const Icon = item.icon;
            const isFlipped = flipped === index;

            return (
              <div
                key={item.title}
                onClick={() =>
                  setFlipped(isFlipped ? null : index)
                }
                className="
                  group
                  h-[560px]
                  w-[340px]
                  cursor-pointer
                  [perspective:1400px]
                  sm:h-[580px]
                  sm:w-[350px]
                  xl:h-[590px]
                  xl:w-[360px]
                "
              >

                {/* ================= 3D CARD ================= */}

                <div
                  className={`
                    relative
                    h-full
                    w-full
                    transition-transform
                    duration-1000
                    ease-in-out
                    [transform-style:preserve-3d]
                    ${
                      isFlipped
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    }
                  `}
                >

                  {/* ================= BACK ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-purple-300/30
                      bg-[#0b0813]
                      shadow-[0_25px_80px_rgba(0,0,0,0.6)]
                      [backface-visibility:hidden]
                    "
                  >

                    {/* Image */}

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Dark Overlay */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-b
                        from-black/15
                        via-[#10091d]/35
                        to-[#05030a]/85
                      "
                    />

                    {/* Inner Border */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-4
                        rounded-[22px]
                        border
                        border-white/15
                      "
                    />

                    {/* Center Icon */}

                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        h-24
                        w-24
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-purple-200/30
                        bg-black/40
                        text-purple-200
                        backdrop-blur-md
                        shadow-[0_0_45px_rgba(139,92,246,0.45)]
                        transition
                        duration-500
                        group-hover:scale-110
                      "
                    >
                      <Icon size={40} />
                    </div>

                    {/* Bottom Text */}

                    <div
                      className="
                        absolute
                        bottom-9
                        left-0
                        right-0
                        text-center
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-medium
                          uppercase
                          tracking-[5px]
                          text-purple-200/80
                        "
                      >
                        Click to Reveal
                      </p>
                    </div>

                  </div>


                  {/* ================= FRONT ================= */}

                  <div
                    className="
                      absolute
                      inset-0
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-purple-300/30
                      bg-gradient-to-br
                      from-[#19102b]
                      via-[#0d0918]
                      to-[#07050d]
                      p-8
                      shadow-[0_25px_80px_rgba(88,28,135,0.35)]
                      [backface-visibility:hidden]
                      [transform:rotateY(180deg)]
                      sm:p-9
                    "
                  >

                    {/* Inner Border */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-4
                        rounded-[22px]
                        border
                        border-purple-300/15
                      "
                    />

                    {/* Top Glow */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-[-60px]
                        top-[-60px]
                        h-48
                        w-48
                        rounded-full
                        bg-purple-600/20
                        blur-[80px]
                      "
                    />
<div className="relative z-10 -translate-y-6">
                    {/* Icon */}

                    <div
                      className="
                        relative
                        z-10
                        mb-7
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-purple-300/25
                        bg-purple-500/10
                        text-purple-300
                        shadow-[0_0_30px_rgba(168,85,247,0.25)]
                      "
                    >
                      <Icon size={30} />
                    </div>

                    {/* Title */}

                    <h3
                      className="
                        relative
                        z-10
                        max-w-[280px]
                        text-3xl
                        font-black
                        leading-tight
                        text-white
                        sm:text-4xl
                      "
                    >
                      {item.title}
                    </h3>

                    {/* Divider */}

                    <div
                      className="
                        relative
                        z-10
                        my-6
                        h-[2px]
                        w-24
                        bg-gradient-to-r
                        from-purple-400
                        via-violet-400/50
                        to-transparent
                      "
                    />

                    {/* Skills List */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        flex-col
                        gap-2
                      "
                    >

                      {item.skills.map((skill) => (

                        <div
                          key={skill}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.035]
                            px-4
                            py-3
                            transition
                            duration-300
                            hover:border-purple-400/30
                            hover:bg-purple-500/10
                          "
                        >

                          <span
                            className="
                              h-2.5
                              w-2.5
                              shrink-0
                              rounded-full
                              bg-purple-400
                              shadow-[0_0_12px_rgba(168,85,247,0.9)]
                            "
                          />

                          <span
                            className="
                              text-base
                              font-medium
                              text-gray-200
                              sm:text-[17px]
                            "
                          >
                            {skill}
                          </span>

                        </div>

                      ))}

                    </div>
</div>
                    {/* Bottom */}

                    <div
                      className="
                        absolute
                        bottom-7
                        left-0
                        right-0
                        text-center
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[3px]
                          text-gray-600
                        "
                      >
                        Click to Flip Back
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;
