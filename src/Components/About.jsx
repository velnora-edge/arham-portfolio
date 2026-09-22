import {
  Sparkles,
  MapPin,
  GraduationCap,
} from "lucide-react";

import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        px-5
        py-24
        sm:px-10
        lg:px-20
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-150px]
          top-20
          h-[350px]
          w-[350px]
          animate-pulse
          rounded-full
          bg-purple-700/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-120px]
          h-[350px]
          w-[350px]
          animate-pulse
          rounded-full
          bg-indigo-700/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/5
              px-4
              py-2
              text-xs
              font-medium
              tracking-[2px]
              text-purple-300
            "
          >
            <Sparkles size={14} />
            GET TO KNOW ME
          </div>

          <h2
            className="
              text-4xl
              font-black
              text-white
              sm:text-5xl
            "
          >
            About{" "}
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
              Me
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            A combination of practical experience, technical
            knowledge and continuous learning.
          </p>
        </div>

        {/* Main About Content */}
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >

          {/* ================= LEFT TEXT ================= */}
          <div className="text-center lg:text-left">

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
                px-4
                py-2
                text-xs
                font-medium
                tracking-[2px]
                text-purple-300
              "
            >
              <Sparkles size={14} />
              WHO I AM
            </div>

            <h3
              className="
                text-4xl
                font-black
                leading-tight
                text-white
                sm:text-5xl
              "
            >
              More Than
              <br />

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
                Just A Title
              </span>
            </h3>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-8
                text-gray-400
                sm:text-base
              "
            >
              I am a versatile and hardworking professional
              combining civil engineering field experience with
              computer science, technical support, site operations
              and business management.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-8
                text-gray-500
                sm:text-base
              "
            >
              My experience includes site surveying, quantity
              estimation, technical evaluation, client relations,
              data entry and independent business operations. I am
              continuously developing my technical and computer
              science skills.
            </p>

            {/* Info Cards */}
            <div
              className="
                mt-8
                grid
                max-w-xl
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >

              {/* Location */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  text-left
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/30
                  hover:bg-purple-500/[0.05]
                "
              >
                <MapPin
                  size={20}
                  className="mb-3 text-purple-400"
                />

                <p className="text-xs text-gray-500">
                  Based In
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-200">
                  Madinah, Saudi Arabia
                </p>
              </div>

              {/* Education */}
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  text-left
                  backdrop-blur-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-indigo-400/30
                  hover:bg-indigo-500/[0.05]
                "
              >
                <GraduationCap
                  size={20}
                  className="mb-3 text-indigo-400"
                />

                <p className="text-xs text-gray-500">
                  Education
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-200">
                  ADP Computer Science
                </p>
              </div>

            </div>

            {/* Strength Tags */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">

              {[
                "Hardworking",
                "Quick Learner",
                "Adaptable",
                "Team Player",
                "Problem Solving",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-purple-400/15
                    bg-purple-500/5
                    px-4
                    py-2
                    text-xs
                    text-gray-400
                    transition
                    duration-300
                    hover:border-purple-400/40
                    hover:text-purple-200
                  "
                >
                  {item}
                </span>
              ))}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative mx-auto w-full max-w-[500px]">

            {/* Main Glow */}
            <div
              className="
                absolute
                inset-10
                rounded-full
                bg-purple-600/20
                blur-[100px]
              "
            />

            {/* Image Container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-purple-300/15
                bg-[#0b0815]
                shadow-[0_0_80px_rgba(88,28,135,0.2)]
              "
            >

              <img
                src={aboutImg}
                alt="Cinematic candle artwork"
                className="
                  relative
                  z-10
                  h-[520px]
                  w-full
                  object-cover
                  transition
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image Gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-20
                  bg-gradient-to-t
                  from-[#080612]/80
                  via-transparent
                  to-transparent
                "
              />

              {/* Purple Light */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2
                  z-20
                  h-40
                  w-72
                  -translate-x-1/2
                  rounded-full
                  bg-purple-600/20
                  blur-[70px]
                "
              />
            </div>

            {/* Floating Label */}
            <div
              className="
                absolute
                bottom-6
                left-6
                z-30
                rounded-2xl
                border
                border-white/10
                bg-black/50
                px-5
                py-4
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-gray-500
                "
              >
                Journey
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  font-semibold
                  text-purple-200
                "
              >
                Experience • Growth • Future
              </p>
            </div>

            {/* Top Floating Icon */}
            <div
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                border
                border-purple-300/20
                bg-purple-500/10
                text-purple-300
                backdrop-blur-md
              "
            >
              <Sparkles size={20} />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;