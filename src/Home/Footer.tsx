const Footer = () => {
  return (
    <footer className="relative w-full bg-[#ffede1] text-[#2C2C2C] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-sm font-medium">
      
      {/* Left: Logo */}
      <div className="text-3xl md:text-4xl font-bold tracking-tight z-10">
        <span className="italic">Kunal</span>
      </div>

      {/* Center: Designer Credit */}
      <div className="text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-md z-0">
        <a
          href="https://dev.impic.tech/"
          className="underline font-li hover:text-[#a0869a] transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site design by <span className="font-bold">Dev</span>
        </a>
      </div>

      {/* Right: Terms & Scroll-to-top */}
      <div className="flex items-center gap-4 md:gap-6 z-10">
        <a
          href="#"
          className="hover:underline text-md whitespace-nowrap transition-colors duration-200"
        >
          Terms of Service
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-[#d2c1ff] hover:bg-[#bba6f1] transition-colors duration-200 flex items-center justify-center text-2xl"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
