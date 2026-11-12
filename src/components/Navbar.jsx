
import { Zap, Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["How it Works", "#about"],
    ["Pricing", "#pricing"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#080816]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="bg-violet-600 p-2 rounded-xl">
            <Zap size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight">
            FlowSync<span className="text-violet-400">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([name, href]) => (
            <a key={name} href={href}
              className="text-sm text-gray-400 hover:text-white transition">
              {name}
            </a>
          ))}
        </div>

        <a href="#contact"
          className="hidden md:flex items-center gap-2 bg-violet-600 hover:bg-violet-500 px-5 py-2.5 rounded-full text-sm font-semibold transition">
          Get Started <ArrowUpRight size={16} />
        </a>

        <button className="md:hidden text-white"
          onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-4">
          {links.map(([name, href]) => (
            <a key={name} href={href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white">
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
