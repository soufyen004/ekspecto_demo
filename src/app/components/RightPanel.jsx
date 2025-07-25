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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % summaryItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-1/4 p-4 flex flex-col items-left text-sm fixed top-20 right-0">
      <div className="grid grid-cols-5 gap-2 mb-4">
        {actionIcons.map((icon, idx) => (
          <div key={idx} className="rounded bg-red-600/5 p-2 hover:bg-slate-300 cursor-pointer justify-self-center">
            <Icon icon={icon} className="text-xl text-[#581313]" />
          </div>
        ))}
      </div>

      <div className="text-center text-red-600 font-bold mb-2 w-full my-5">Sommaire</div>

      <div className="h-full overflow-hidden relative w-full text-left">
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
  );
}
