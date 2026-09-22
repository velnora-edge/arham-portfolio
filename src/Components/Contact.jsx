import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 sm:px-10 lg:px-20"
    >
      {/* Background Glow */}
      <div className="glow-blob absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-purple-700/20" />

      <div className="glow-blob absolute bottom-0 right-[-180px] h-[420px] w-[420px] rounded-full bg-indigo-700/20" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-5 py-2.5 text-xs font-medium tracking-[3px] text-purple-300">
            <Sparkles size={14} />
            GET IN TOUCH
          </div>

          <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
            Looking for opportunities in civil, technical, site operations
            and IT-related roles.
          </p>

        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* CONTACT INFORMATION */}
          <div className="contact-card reveal rounded-[28px] p-8 sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-purple-300">
              Contact Information
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
              Let's discuss opportunities.
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Feel free to contact me for professional opportunities,
              technical work, site operations or collaboration.
            </p>

            <div className="mt-10 space-y-5">

              {/* Phone */}
              <a
                href="tel:+966537675842"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-purple-400/40 hover:bg-purple-500/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    +966 53 767 5842
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:arhamalia799@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-purple-400/40 hover:bg-purple-500/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    arhamalia799@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/arham799"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-purple-400/40 hover:bg-purple-500/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <span className="text-lg font-bold">
                    in
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    linkedin.com/in/arham799
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-500 hover:border-purple-400/30 hover:bg-purple-500/5">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Madinah, Saudi Arabia
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* MESSAGE FORM */}
          <div className="contact-card reveal rounded-[28px] p-8 sm:p-10">

            <p className="text-xs font-semibold uppercase tracking-[3px] text-purple-300">
              Send A Message
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
              Have a project or opportunity?
            </h3>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder=" "
                />

                <label>
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="input-box">
                <input
                  type="email"
                  placeholder=" "
                />

                <label>
                  Email Address
                </label>
              </div>

              {/* Message */}
              <div className="input-box">
                <textarea
                  rows="5"
                  placeholder=" "
                />

                <label>
                  Message
                </label>
              </div>

              {/* Button */}
              <button
                type="button"
                className="
                  btn-shine
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-purple-600
                  to-violet-600
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_0_30px_rgba(139,92,246,0.25)]
                "
              >
                <Send size={17} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;