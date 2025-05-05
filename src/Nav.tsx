// // components/Nav.tsx
// import React from 'react';
// import MagnetButton from './Button'; // adjust path as needed

// const Nav: React.FC = () => {
//   return (
//     <nav className="w-full bg-[#FFEDE1] py-4 px-4 md:px-20 text-[#1A1A1A] font-medium relative mb-20 ">
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        
//         {/* Left Links */}
//         <div className="flex gap-6 md:gap-8 text-base md:text-lg">
//           <a href="#examples" className="hover:underline">Project</a>
//           <a href="#how" className="hover:underline">How it Works</a>
//           <a href="#pricing" className="hover:underline">Service</a>
//           <a href="#faq" className="hover:underline">Contact</a>
//         </div>

//         {/* Right Button */}
//         <div className="ml-auto flex-shrink-0">
//           <MagnetButton>Hire an Editor</MagnetButton>
//         </div>
//       </div>

//       {/* Center Logo */}
//       <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//         <h1 className="text-xl md:text-4xl font-extrabold">Kunal</h1>
//       </div>
//     </nav>
//   );
// };

// export default Nav;


import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MagnetButton from './Button';

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full bg-[#FFEDE1] py-4 px-4 md:px-20 text-[#1A1A1A] font-medium relative z-50 ">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">

        {/* Menu Icon on Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Logo - always centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl md:text-2xl font-extrabold">
        <img src="/logo.png" alt="" className='md:h-5 h-3'/>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-base md:text-lg">
        <a href="#about" className="hover:underline">About</a>
          <a href="#Project" className="hover:underline">Project</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Always show button on right */}
        <div className="z-20">
        <a href="#contact">

          <MagnetButton className="px-5 py-2 text-sm md:text-base">
            Hire Me
          </MagnetButton>
          </a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-2">
          <ul className="flex flex-col gap-4 text-base font-medium bg-[#FFEDE1] p-4 rounded shadow-md">
            <li><a href="#examples" className="hover:underline">Project</a></li>
            <li><a href="#how" className="hover:underline">How it Works</a></li>
            <li><a href="#pricing" className="hover:underline">Service</a></li>
            <li><a href="#faq" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
