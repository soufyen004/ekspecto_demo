'use client';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const actionIcons = [
  'mdi:gamepad', 'mdi:palette', 'mdi:book', 'mdi:account', 'mdi:video',
  'mdi:camera', 'mdi:robot', 'mdi:face-woman', 'mdi:movie-open', 'mdi:star',
  'mdi:music', 'mdi:television-classic', 'mdi:briefcase', 'mdi:account-group',
  'mdi:gift', 'mdi:map-marker', 'mdi:earth', 'mdi:weather-sunny', 'mdi:flash',
  'mdi:face-man'
];

const summaryItems = [
  'Ma publication publique',
  'Ma galerie artistique',
  'Mes hobbies.',
  'Mes amis.',
  'Mes groupes.',
  'Mes photos.',
  'Mes vidéos.',
  'Mon business en ligne.',
];

export default function RightPanel() {
  const [current, setCurrent] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % summaryItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-15 right-4 z-50 bg-[#581313] text-white p-2 rounded-full shadow"
        onClick={() => setIsMobileOpen((prev) => !prev)}
      >
        <Icon icon={isMobileOpen ? 'mdi:close' : 'mdi:menu'} className="text-xl" />
      </button>

      {/* Mobile Panel */}
      <aside
        className={`lg:hidden fixed top-0 right-0 h-screen max-w-screen sm:w-3/4 bg-white shadow-lg z-40 p-4 pt-15 text-sm transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <p className="text-left text-red-900 font-bold mb-4 italic">
          Jeux, dessins, photos, vidéos, musiques, livres, films, etc.
        </p>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {actionIcons.map((icon, idx) => (
            <div key={idx} className="rounded bg-red-600/5 p-2 hover:bg-slate-300 cursor-pointer justify-self-center">
              <Icon icon={icon} className="text-xl text-[#581313]" />
            </div>
          ))}
        </div>

        <div className="text-center text-red-600 font-bold my-5">Sommaire</div>

        <div className="h-[8rem] overflow-hidden relative w-full text-left">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${current * 2}rem)` }}
          >
            {summaryItems.map((item, idx) => (
              <div key={idx} className="h-8">{item}</div>
            ))}
          </div>
        </div>
      </aside>

      {/* Desktop Panel */}
      <aside className="hidden lg:flex fixed top-0 right-0 w-1/4 h-screen p-4 text-sm overflow-y-auto flex-col bg-white shadow pt-20">
        <p className="text-left text-red-900 font-bold mb-4 italic">
          Jeux, dessins, photos, vidéos, musiques, livres, films, etc.
        </p>

        <div className="grid grid-cols-5 gap-2 mb-4">
          {actionIcons.map((icon, idx) => (
            <div key={idx} className="rounded bg-red-600/5 p-2 hover:bg-slate-300 cursor-pointer justify-self-center">
              <Icon icon={icon} className="text-xl text-[#581313]" />
            </div>
          ))}
        </div>

        <div className="text-center text-red-600 font-bold my-5">Sommaire</div>

        <div className="h-[8rem] overflow-hidden relative w-full text-left">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateY(-${current * 2}rem)` }}
          >
            {summaryItems.map((item, idx) => (
              <div key={idx} className="h-8">{item}</div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
