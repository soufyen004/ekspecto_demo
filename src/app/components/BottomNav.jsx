'use client';
import { Icon } from '@iconify/react';

const navIcons = [
  'mdi:email-outline',
  'mdi:account-multiple',
  'mdi:heart-outline',
  'mdi:heart-broken-outline',
  'mdi:glass-wine',
//   'mdi:knife-fork',
  'mdi:drama-masks',
  'mdi:gift-outline',
  'mdi:play-circle-outline',
  'mdi:book-open-outline',
  'mdi:briefcase-outline',
  'mdi:contacts-outline',
  'mdi:account-group-outline',
  'mdi:cog-outline',
  'mdi:map-marker-outline',
  'mdi:flash-outline',
  'mdi:face-man-outline',
  'mdi:face-woman-outline',
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-pink-100 border-t border-red-300 py-2 z-50">
      <div className="flex flex-wrap gap-3 px-4">
        {navIcons.map((icon, idx) => (
          <div key={idx} className="rounded bg-white hover:bg-slate-300 border border-red-300 cursor-pointer p-2 shadow transition">
            <Icon icon={icon} className="text-2xl text-[#581313]" />
          </div>
        ))}
        <div className="flex items-center border border-red-300 gap-1 text-sm ml-auto bg-white text-red-700 px-2 py-1 rounded">
          <span className="font-semibold">Adhérents en ligne</span>
          <span className="font-bold text-slate-800">0</span>
          <button className="text-sm font-bold">
            <Icon icon="mdi:chevron-down" className="text-slate-800 text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
