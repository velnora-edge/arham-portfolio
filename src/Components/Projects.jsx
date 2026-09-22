
import {
  Building2,
  Sun,
  Ruler,
  Sparkles,
  MapPin,
  CalendarDays,
} from "lucide-react";

const projects = [
  {
    title: "Gypsum Board Ceiling Project",
    category: "Interior Contracting",
    location: "Madinah, Saudi Arabia",
    year: "2026 – Present",
    description:
      "Professional site execution work involving gypsum board ceiling installation, layout alignment, site measurements, finishing quality and material estimation according to client requirements.",
    icon: Building2,
    tags: [
      "Site Execution",
      "Gypsum Board",
      "Measurements",
      "Material Estimation",
    ],
  },
  {
    title: "Solar Net Metering Operations",
    category: "Technical & Business Operations",
    location: "Pakistan",
    year: "2024 – 2026",
    description:
      "Independent technical and business operations for solar net-metering services, including client records, accounting, Excel proposals, field assessments and technical evaluations.",
    icon: Sun,
    tags: [
      "Net Metering",
      "Excel",
      "Client Management",
      "Technical Evaluation",
    ],
  },
  {
    title: "Land Survey & Property Valuation",
    category: "Surveying & Field Work",
    location: "Pakistan",
    year: "Professional Experience",
    description:
      "Field surveying and property valuation work involving site visits, land verification, measurements, data entry, documentation and auditing of property-related information.",
    icon: Ruler,
    tags: [
      "Land Surveying",
      "Property Valuation",
      "Data Entry",
      "Site Measurement",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-700/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-700/10
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
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
            PROFESSIONAL WORK
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
            Projects &{" "}
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
              Experience
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
            A selection of professional work and practical experience
            developed through civil engineering, technical operations
            and field-based projects.
          </p>
        </div>

        {/* Project Cards */}
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#0d0918]/90
                  p-7
                  shadow-[0_20px_70px_rgba(0,0,0,0.4)]
                  backdrop-blur-md
                  transition
                  duration-500
                  hover:-translate-y-3
                  hover:border-purple-400/30
                  hover:shadow-[0_25px_80px_rgba(88,28,135,0.3)]
                "
              >

                {/* Card Glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-70px]
                    top-[-70px]
                    h-44
                    w-44
                    rounded-full
                    bg-purple-600/15
                    blur-[70px]
                    transition
                    duration-500
                    group-hover:bg-purple-500/25
                  "
                />

                {/* Icon */}
                <div
                  className="
                    relative
                    mb-7
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-purple-300/20
                    bg-purple-500/10
                    text-purple-300
                    shadow-[0_0_35px_rgba(139,92,246,0.18)]
                    transition
                    duration-500
                    group-hover:scale-110
                    group-hover:border-purple-300/40
                  "
                >
                  <Icon size={38} strokeWidth={1.5} />
                </div>

                {/* Category */}
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-purple-300
                  "
                >
                  {project.category}
                </p>

                {/* Title */}
                <h3
                  className="
                    mt-3
                    text-2xl
                    font-black
                    leading-tight
                    text-white
                    transition
                    duration-300
                    group-hover:text-purple-200
                  "
                >
                  {project.title}
                </h3>

                {/* Location + Year */}
                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-4
                    text-xs
                    text-gray-500
                  "
                >
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-purple-400" />
                    {project.location}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CalendarDays
                      size={14}
                      className="text-purple-400"
                    />
                    {project.year}
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-6
                    text-sm
                    leading-7
                    text-gray-400
                  "
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-purple-400/15
                        bg-purple-500/5
                        px-3
                        py-1.5
                        text-xs
                        font-medium
                        text-purple-200/80
                        transition
                        duration-300
                        hover:border-purple-400/30
                        hover:bg-purple-500/10
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Line */}
                <div
                  className="
                    mt-8
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-purple-500/30
                    via-violet-400/10
                    to-transparent
                  "
                />

                <p
                  className="
                    mt-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Professional Experience
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
