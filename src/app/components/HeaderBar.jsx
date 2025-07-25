'use client';
import { Icon } from '@iconify/react';

export default function HeaderBar() {
  return (
    <header className="w-full bg-[#4a1616] text-white flex items-center justify-between px-4 py-2">
      {/* LEFT: Home + back + user info */}
      <div className="flex items-center gap-3">
        <button className="text-white text-xl">
          <Icon icon="mdi:home" />
        </button>
        <button className="text-white text-xl">
          <Icon icon="mdi:arrow-left" />
        </button>
        <div className='text-sm leading-tight'>
          <div className="font-semibold text-white">Melani ADAM</div>
        </div>
        <img
          src="/girl.webp"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-sm leading-tight">
          <div className="text-xs text-white/80">San Francisco, USA</div>
        </div>
      </div>

      {/* CENTER: Logo image */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="object-contain"
          style={{ width: '150px' }}
        />
      </div>

      {/* RIGHT: Search + buttons */}
      <div className="flex items-center gap-2">
        {/* Search input with inline icon */}
        <div className="relative">
          <span className="absolute -left-10 top-1/2 -translate-y-1/2">
            <Icon icon="mdi:magnify" fontSize={45} className="text-white" />
          </span>
          <input
            type="text"
            placeholder="Recherche adherents par nom"
            className="text-white text-sm pl-2 pr-1 py-1 bg-transparent placeholder-white/80 w-[220px]"
          />
        </div>

        {/* Plus button */}
        <button className="w-8 h-8 flex items-center justify-center border border-white rounded text-white">
          <Icon icon="mdi:plus" className="text-lg" />
        </button>

        {/* Dropdown button */}
        <button className="w-8 h-8 flex items-center justify-center border border-white rounded text-white">
          <Icon icon="mdi:chevron-down" className="text-lg" />
        </button>
      </div>
    </header>
  );
}
