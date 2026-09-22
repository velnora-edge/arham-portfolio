
import {
  GraduationCap,
  BookOpen,
  School,
  Sparkles,
  CalendarDays,
} from "lucide-react";

import comp from "../assets/comp.avif";
import construct from "../assets/construct.jfif";
import science from "../assets/science.jpg";

const education = [
  {
    title: "ADP Computer Science",
    institute: "Virtual University of Pakistan",
    year: "2026 – Present",
    status: "In Progress",
    icon: GraduationCap,
    image: comp,
    description:
      "Computer science studies focused on programming, computer systems and modern IT technologies.",
  },
  {
    title: "DAE Civil Engineering",
    institute: "Government Staff Training College, Faisalabad",
    year: "2020 – 2023",
    status: "Completed",
    icon: BookOpen,
    image: construct,
    description:
      "Civil engineering education covering surveying, quantity estimation, site execution and technical field operations.",
  },
  {
    title: "Matriculation – Science",
    institute: "Government AV Modern High School, Faisalabad",
    year: "2018 – 2020",
    status: "Completed",
    icon: School,
    image: science,
    description:
      "Science-based secondary education providing the academic foundation for further technical studies.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        px-5
        py-32
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
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-700/10
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[-180px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-indigo-700/10
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-24 text-center">

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
            MY EDUCATION
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
            Education{" "}
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
              Journey
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
            From civil engineering to computer science,
            every step has added something new to my journey.
          </p>

        </div>

        {/* Education Timeline */}

        <div className="relative mx-auto max-w-6xl">

          {/* CENTER GLOWING LINE */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-[2px]
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-purple-400/60
              to-transparent
              shadow-[0_0_15px_rgba(168,85,247,0.6)]
              lg:block
            "
          />

          <div className="space-y-20">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    relative
                    flex
                    items-center
                    gap-10
                    lg:gap-16
                    ${
                      index % 2 === 0
                        ? "lg:flex-row"
                        : "lg:flex-row-reverse"
                    }
                    flex-col
                  `}
                >

                  {/* DIAMOND / STONE MARKER */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-1/2
                      z-30
                      hidden
                      h-8
                      w-8
                      -translate-x-1/2
                      -translate-y-1/2
                      rotate-45
                      border
                      border-purple-200/70
                      bg-gradient-to-br
                      from-purple-300
                      via-violet-500
                      to-indigo-700
                      shadow-[0_0_10px_rgba(255,255,255,0.8),0_0_25px_rgba(139,92,246,0.9),0_0_45px_rgba(124,58,237,0.5)]
                      lg:block
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-[5px]
                        bg-[#0d0918]
                      "
                    />
                  </div>

                  {/* STONE CARD */}

                  <div className="w-full lg:w-1/2">

                    <div
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[38px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-[#292332]
                        via-[#17131f]
                        to-[#09070d]
                        px-8
                        py-10
                        shadow-[0_25px_80px_rgba(0,0,0,0.65)]
                        transition
                        duration-700
                        hover:-translate-y-3
                        hover:border-purple-300/30
                        hover:shadow-[0_30px_100px_rgba(88,28,135,0.4)]
                        sm:px-10
                        sm:py-12
                      "
                    >

                      {/* Stone Texture */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          opacity-30
                          [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08)_0,transparent_2px),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08)_0,transparent_2px)]
                          [background-size:45px_45px,60px_60px]
                        "
                      />

                      {/* Inner Stone Border */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-3
                          rounded-[31px]
                          border
                          border-white/[0.06]
                        "
                      />

                      {/* Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          right-[-80px]
                          top-[-80px]
                          h-56
                          w-56
                          rounded-full
                          bg-purple-600/15
                          blur-[80px]
                          transition
                          duration-700
                          group-hover:bg-purple-500/25
                        "
                      />

                      <div className="relative z-10">

                        {/* Icon + Status */}

                        <div className="flex items-center justify-between gap-4">

                          <div
                            className="
                              flex
                              h-16
                              w-16
                              items-center
                              justify-center
                              rounded-2xl
                              border
                              border-purple-300/20
                              bg-purple-500/10
                              text-purple-300
                              shadow-[0_0_25px_rgba(139,92,246,0.18)]
                              transition
                              duration-500
                              group-hover:scale-110
                            "
                          >
                            <Icon size={30} />
                          </div>

                          <span
                            className="
                              rounded-full
                              border
                              border-purple-300/20
                              bg-black/20
                              px-4
                              py-2
                              text-xs
                              font-bold
                              uppercase
                              tracking-[1px]
                              text-purple-200
                            "
                          >
                            {item.status}
                          </span>

                        </div>

                        {/* Year */}

                        <div
                          className="
                            mt-7
                            flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-purple-300
                          "
                        >
                          <CalendarDays size={17} />
                          {item.year}
                        </div>

                        {/* Title */}

                        <h3
                          className="
                            mt-4
                            text-3xl
                            font-black
                            leading-tight
                            tracking-tight
                            text-white
                            transition
                            duration-300
                            group-hover:text-purple-200
                            sm:text-4xl
                          "
                        >
                          {item.title}
                        </h3>

                        {/* Institute */}

                        <p
                          className="
                            mt-4
                            text-lg
                            font-semibold
                            leading-7
                            text-gray-200
                          "
                        >
                          {item.institute}
                        </p>

                        <div
                          className="
                            my-6
                            h-[2px]
                            w-28
                            bg-gradient-to-r
                            from-purple-400
                            via-violet-400/60
                            to-transparent
                          "
                        />

                        {/* Description */}

                        <p
                          className="
                            text-base
                            leading-8
                            text-gray-300
                          "
                        >
                          {item.description}
                        </p>

                      </div>
                    </div>
                  </div>

                  {/* IMAGE */}

                  <div className="w-full lg:w-1/2">

                    <div
                      className="
                        group
                        relative
                        h-[420px]
                        overflow-hidden
                        rounded-[38px]
                        border
                        border-purple-300/15
                        bg-[#0b0812]
                        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-700
                          group-hover:scale-105
                        "
                      />

                      {/* Image Overlay */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-[#080612]/80
                          via-[#080612]/20
                          to-transparent
                        "
                      />

                      {/* Purple Glow */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          ring-1
                          ring-inset
                          ring-purple-300/10
                        "
                      />

                      <div className="absolute bottom-7 left-7">

                        <p
                          className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[3px]
                            text-purple-200
                          "
                        >
                          Education Journey
                        </p>

                        <p className="mt-2 text-xl font-bold text-white">
                          {item.title}
                        </p>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
