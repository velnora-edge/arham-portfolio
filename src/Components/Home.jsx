import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";
import arham from '../assets/arham.png'
import backImg from "../assets/backImg.jfif";
// import arhamImage from "../assets/arham.png";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-5
        pb-20
        pt-36
        sm:px-10
        lg:px-20
      "
    >
      {/* ========================================
          FULL HERO BACKGROUND IMAGE
      ======================================== */}

      <img
        src={backImg}
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-[center_-10%]
          opacity-500
        "
      />
      {/* Moon Glow */}
<div
  className="
    pointer-events-none
    absolute
    right-[48%]
    top-[10%]
    z-1
    h-32
    w-32
    rounded-full
    bg-white/99
    blur-2xl
  "
/>

      {/* Dark Overlay */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[#080612]/70
        "
      />

      {/* ========================================
          BACKGROUND PURPLE GLOW + GRID
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Left Glow */}

        <div
          className="
            absolute
            left-[-180px]
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-purple-700/20
            blur-[140px]
          "
        />

        {/* Right Glow */}

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-indigo-700/15
            blur-[140px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-20
            [background-image:linear-gradient(rgba(168,85,247,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.12)_1px,transparent_1px)]
            [background-size:55px_55px]
          "
        />
      </div>

      {/* ========================================
          MAIN CONTENT
      ======================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-14
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-8
        "
      >
        {/* ========================================
            LEFT CONTENT
        ======================================== */}

        <div className="text-center lg:text-left">
          {/* Badge */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-purple-300/20
              bg-purple-400/5
              px-4
              py-2
              text-xs
              font-medium
              tracking-[2px]
              text-purple-200
            "
          >
            <Sparkles size={14} className="text-purple-400" />

            WELCOME TO MY PORTFOLIO
          </div>

          {/* Heading */}

          <h1
            className="
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-7xl
              lg:text-8xl
            "
          >
            ARHAM

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
              ALI
            </span>
          </h1>

          {/* Subtitle */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-3
              text-sm
              font-semibold
              uppercase
              tracking-[2px]
              text-gray-300
              lg:justify-start
            "
          >
            <span className="h-px w-8 bg-purple-400" />

            Operations & Technical Specialist
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-gray-400
              sm:text-base
              lg:mx-0
            "
          >
            A versatile professional combining civil engineering field
            experience with computer science, technical support, site
            operations and business management.
          </p>

          {/* Location */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-sm
              text-gray-400
              lg:justify-start
            "
          >
            <MapPin
              size={16}
              className="text-purple-400"
            />

            Madinah, Saudi Arabia
          </div>

          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-4
              lg:justify-start
            "
          >
            {/* Explore Button */}

            <button
              onClick={scrollToAbout}
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-purple-500
                to-indigo-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_0_30px_rgba(139,92,246,0.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(139,92,246,0.5)]
              "
            >
              Explore Portfolio

              <ArrowRight
                size={17}
                className="
                  transition
                  group-hover:translate-x-1
                "
              />
            </button>

            {/* Contact Button */}

            <a
              href="#contact"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.03]
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-200
                transition
                duration-300
                hover:-translate-y-1
                hover:border-purple-400/50
                hover:text-purple-200
              "
            >
              Contact Me
            </a>
          </div>

          {/* Bottom Stats */}

          <div
            className="
              mt-12
              flex
              justify-center
              gap-8
              border-t
              border-white/10
              pt-6
              lg:justify-start
            "
          >
            <div>
              <h3 className="text-2xl font-bold text-white">
                5+
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Experiences
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                CS
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Student
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">
                2+
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Skill Areas
              </p>
            </div>
          </div>
        </div>

    </div>
    {/* Right Image Section */}
<div
  className="
    relative
    flex
    h-[520px]
    w-full
     overflow-hidden
    items-center
    justify-center
    overflow-visible
    sm:h-[620px]
    lg:h-[700px]
  "
>
  {/* Purple Background Glow */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[360px]
      w-[360px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-purple-600/20
      blur-[100px]
      sm:h-[480px]
      sm:w-[480px]
    "
  />

  {/* Outer Decorative Circle */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[460px]
      w-[460px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-purple-400/25
      sm:h-[590px]
      sm:w-[590px]
      lg:h-[696px]
      lg:w-[696px]
    "
  />

  {/* Inner Decorative Circle */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2
      h-[400px]
      w-[400px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      border
      border-violet-300/25
      sm:h-[500px]
      sm:w-[500px]
    "
  />

  {/* Small Purple Light */}
  <div
    className="
      pointer-events-none
      absolute
      right-[12%]
      top-[15%]
      h-3
      w-3
      rounded-full
      bg-purple-300
      shadow-[0_0_25px_rgba(168,85,247,0.9)]
    "
  />

  {/* Arham Image */}
  <img
    src={arham}
    alt="Arham Ali"
    className="
      relative
      z-10
      mt-[-55px]
      -translate-x-[50px]
      h-[112%]
      w-[112%]
      max-w-none
      object-contain
      object-center
      drop-shadow-[0_0_35px_rgba(139,92,246,0.45)]
      transition-all
      duration-700
      hover:scale-[1.02]
    "
  />
</div>
      {/* ========================================
          SCROLL INDICATOR
      ======================================== */}

      <button
        onClick={scrollToAbout}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-gray-500
          transition
          hover:text-purple-300
          sm:flex
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[3px]
          "
        >
          Scroll Down
        </span>

        <ArrowDown
          size={16}
          className="animate-bounce"
        />
      </button>
    </section>
  );
};

export default Home;