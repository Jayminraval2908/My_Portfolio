import React, { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import gsap from "gsap";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[999] backdrop-blur-xl bg-[#020617]/70 border-b border-white/10"
      >
        <div className="flex items-center justify-between px-6 md:px-20 py-5">
          
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            JAYMIN.
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
            {["About", "Skills", "Experience", "Projects", "Footer"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item}`}
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  {item === "Footer" ? "Contact" : item}
                </a>
              )
            )}

            <a
              href="/MERN_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </ul>

          {/* Mobile Icon */}
          <div className="md:hidden z-[1000]">
            {menu ? (
              <RiCloseLine
                size={30}
                className="cursor-pointer"
                onClick={() => setMenu(false)}
              />
            ) : (
              <RiMenu3Line
                size={30}
                className="cursor-pointer"
                onClick={() => setMenu(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menu && (
        <div className="fixed inset-0 z-[998] bg-[#020617] flex flex-col items-center justify-center gap-10 text-2xl font-semibold md:hidden">
          
          {["About", "Skills", "Experience", "Projects", "Footer"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => setMenu(false)}
                className="hover:text-cyan-400 transition-all duration-300"
              >
                {item === "Footer" ? "Contact" : item}
              </a>
            )
          )}

          <a
            href="/MERN_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
}

export default NavBar;