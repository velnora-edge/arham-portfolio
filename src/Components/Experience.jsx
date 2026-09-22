import {
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import backExp from '../assets/backExp.avif';
const experiences = [
  {
    year: "2026 – Present",
    title: "Gypsum Board Ceiling Specialist",
    company: "Interior Contracting",
    location: "Madinah, Saudi Arabia",
    details: [
      "Site execution and gypsum board ceiling installation.",
      "Layout alignment, site measurements and quality finishing.",
      "Material estimation according to project requirements.",
      "Working according to client specifications and site plans.",
    ],
  },
  {
    year: "2024 – 2026",
    title: "Business Operator – Net Metering",
    company: "Independent Contracting",
    location: "Pakistan",
    details: [
      "Managed solar net-metering related operations.",
      "Maintained accounts, client records and documentation.",
      "Prepared Excel-based proposals and project information.",
      "Performed field assessments and technical evaluations.",
    ],
  },
  {
    year: "3 Months",
    title: "Data Entry Specialist & Field Surveyor",
    company: "Valuation Company",
    location: "Pakistan",
    details: [
      "Conducted property and site surveys.",
      "Performed land verification and field data collection.",
      "Managed data entry and document records.",
      "Reviewed and audited collected information.",
    ],
  },
  {
    year: "2 Months",
    title: "Assistant Surveyor",
    company: "Government Internship",
    location: "Pakistan",
    details: [
      "Assisted senior surveyors during field activities.",
      "Performed site measurements and surveying tasks.",
      "Helped prepare technical documentation.",
      "Gained practical experience in infrastructure projects.",
    ],
  },
  {
    year: "3 Months",
    title: "Assistant Surveyor Trainee",
    company: "Private Surveying Firm",
    location: "Pakistan",
    details: [
      "Assisted with land surveying activities.",
      "Worked with surveying instruments and equipment.",
      "Supported preliminary mapping and measurements.",
      "Developed practical field surveying skills.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        px-5
        py-24
        sm:px-10
        lg:px-20
      "
    >
        {/* Experience Background Image */}
<img
  src={backExp}
  alt=""
  className="
    pointer-events-none
    absolute
    inset-0
    z-0
    h-full
    w-full
    object-cover
    object-center
    opacity-100
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
      {/* ⚔️ Animated Sword Slash Background */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="slash slash-one" />
        <div className="slash slash-two" />
        <div className="slash slash-three" />

        <div className="spark spark-one" />
        <div className="spark spark-two" />
        <div className="spark spark-three" />
        <div className="spark spark-four" />
      </div>

      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-40
          z-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-purple-700/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-20
          right-[-180px]
          z-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-indigo-700/10
          blur-[150px]
        "
      />

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-8 text-center">

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
              font-semibold
              tracking-[3px]
              text-purple-300
            "
          >
            <Sparkles size={15} />
            MY JOURNEY
          </div>

          <h2
            className="
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-white
              sm:text-6xl
            "
          >
            Professional
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
              sm:text-lg
            "
          >
            A journey built through practical field experience, technical
            responsibilities, business operations and continuous growth.
          </p>
        </div>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.035]
                px-5 pb-5 pt-0
                backdrop-blur-xl
                transition
                duration-500
                hover:-translate-y-2
                hover:border-purple-400/35
                hover:bg-purple-500/[0.05]
                hover:shadow-[0_0_45px_rgba(88,28,135,0.18)]
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[-80px]
                  h-40
                  w-40
                  rounded-full
                  bg-purple-600/10
                  blur-3xl
                  transition
                  duration-500
                  group-hover:bg-purple-500/20
                "
              />

              {/* Date */}

              <div className="relative mb-5 flex items-center gap-2">
                <CalendarDays
                  size={18}
                  className="text-purple-400"
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[2px]
                    text-purple-300
                  "
                >
                  {experience.year}
                </span>
              </div>

              {/* Job Title */}

              <h3
                className="
                  relative
                  text-2xl
                  font-extrabold
                  leading-snug
                  text-white
                  sm:text-3xl
                "
              >
                {experience.title}
              </h3>

              {/* Company */}

              <div className="relative mt-3 flex items-center gap-2">
                <BriefcaseBusiness
                  size={17}
                  className="text-violet-400"
                />

                <p
                  className="
                    text-base
                    font-semibold
                    text-violet-300
                    sm:text-lg
                  "
                >
                  {experience.company}
                </p>
              </div>

              {/* Location */}

              <div
                className="
                  relative
                  mt-3
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-gray-500
                "
              >
                <MapPin
                  size={16}
                  className="text-purple-400"
                />

                {experience.location}
              </div>

              {/* Divider */}

              <div
                className="
                  my-6
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-purple-400/30
                  via-white/10
                  to-transparent
                "
              />

              {/* Details */}

              <ul className="relative space-y-3">
                {experience.details.map((detail) => (
                  <li
                    key={detail}
                    className="
                      flex
                      gap-3
                      text-sm
                      leading-7
                      text-gray-400
                      sm:text-base
                    "
                  >
                    <span
                      className="
                        mt-3
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-purple-400
                        shadow-[0_0_8px_rgba(168,85,247,0.8)]
                      "
                    />

                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;