'use client';

import Image from 'next/image';

export default function LeftPanel() {
  return (
    <div className="w-1/4 p-4 flex flex-col gap-6 items-center h-[80vh] pb-20">
      {/* Top Banner Box */}
      <div className="relative bg-[#f8f6f6] rounded-t-lg px-6 py-4 shadow text-center text-sm leading-snug w-full">
        {/* Paper Clip - top right */}
        <div className="absolute top-10 -right-2 w-10 h-10 z-10">
          <Image src="/paper_clip.png" alt="Paper Clip" fill className="object-contain" />
        </div>

        {/* Small Avatar - top right */}
        <div className="absolute top-2 right-0 w-13 h-13 z-1 rounded-full border-4 border-white shadow-md overflow-hidden">
          <Image src="/girl.webp" alt="Avatar" fill className="object-cover" />
        </div>

        {/* Text Content - constrained to 80% width */}
        <div className="w-[80%] mx-auto relative z-0">
          <p className="italic">En ce moment vous êtes à</p>
          <p className="font-semibold -mt-1">San Francisco</p>
          <p className="text-[#d04b5f] font-medium mt-1">Et vous êtes dans votre page d’accueil</p>
          <p className="text-[13px] text-gray-600 mt-2">
            Dans cette page, vous trouverez des adhérents et adhérentes à <span className="font-semibold">San Francisco</span> et à travers le monde qui peuvent correspondre à vos critères
          </p>
        </div>
      </div>

      {/* User Card */}
      <div className="bg-white rounded-lg shadow p-4 relative text-center w-full max-w-xs">
        {/* Main avatar with curved mask */}
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-md">
          <Image
            src="/girl.webp"
            alt="Melani ADAM"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Vertical red dots */}
        <div className="absolute top-8 right-4 flex flex-col gap-2 z-20">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <p className="font-medium text-lg text-gray-800 mt-4">Melani ADAM</p>
        <p className="italic text-sm text-gray-500">San Francisco, USA</p>
      </div>

      {/* Membership Message */}
      <div className="text-red-600 text-center text-[13px] leading-snug w-full px-4">
        <p className="text-red-600">
          Vous êtes membre du <span className="font-bold">MAFClub</span>,
        </p>
        <p className="mt-1 font-medium">
          "Le Monde au féminin<br />
          <span className="font-bold">de San Francisco</span>"
        </p>
      </div>
    </div>
  );
}
