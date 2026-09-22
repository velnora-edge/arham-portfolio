const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-purple-500/20 bg-[#05030a]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-700/10 blur-[130px]" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-transparent via-indigo-500/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">

        {/* Main Content */}
        <div className="flex flex-col items-center text-center">

          {/* Small Label */}
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[5px] text-purple-300/70">
            Thanks for visiting
          </p>

          {/* Name */}
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Arham{" "}
            <span className="bg-gradient-to-r from-purple-300 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Ali
            </span>
          </h2>

          {/* Role */}
          <p className="mt-3 text-sm font-medium uppercase tracking-[3px] text-gray-500">
            Operations & Technical Specialist
          </p>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
            Combining technical knowledge, field experience and
            creative problem-solving to build meaningful results.
          </p>

          {/* Navigation */}
          <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">

            <a
              href="#home"
              className="text-gray-500 transition duration-300 hover:text-purple-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-500 transition duration-300 hover:text-purple-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-500 transition duration-300 hover:text-purple-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-500 transition duration-300 hover:text-purple-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-500 transition duration-300 hover:text-purple-300"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Arham Ali. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="text-xs font-medium uppercase tracking-[2px] text-gray-600 transition duration-300 hover:text-purple-300"
          >
            Back to Top ↑
          </button>

          <p className="text-xs text-gray-600">
            Built with{" "}
            <span className="text-purple-400">React</span>
            {" "}×{" "}
            <span className="text-violet-400">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;