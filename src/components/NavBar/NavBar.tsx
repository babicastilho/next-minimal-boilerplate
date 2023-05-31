'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import ToggleDarkMode from '@/utils/ToggleDarkMode';

import { HiMenu, HiOutlineX } from 'react-icons/hi';

import Logo from './Logo';
import SocialLinks from '@/components/SocialLinks';
import { menuItems } from '@/data/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="top-0 z-40 mx-auto w-full flex-none bg-white transition-all duration-100 ease-in dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 sticky">
      <div className="flex items-center justify-between xl:py-3 xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
        <h1 className="flex font-bold">
          <Link href="/"><Logo /></Link>
        </h1>

        <button
          type="button"
          className="lg:hidden ml-1.5 inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-700"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiOutlineX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } container w-full lg:flex lg:items-center lg:justify-between lg:w-auto`}
        >
          <ul className="text-base text-gray-600 lg:flex lg:justify-between">
            {menuItems.map((menu, index) => {
              const isActive = pathname.startsWith(menu.url);
              return (
                <li key={index}>
                  <Link
                    className={`${
                      isActive ? 'text-red-600' : 'text-black'
                    } lg:px-5 py-2 block hover:text-blue-700`}
                    href={menu.url}
                  >
                    {menu.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } container w-full lg:flex items-center lg:justify-between lg:w-auto`}
        >
          <div className="py-4 items-center text-base text-gray-600 flex justify-between ">
            <SocialLinks />
            <div className="lg:ml-6 lg:-mb-1">
              <ToggleDarkMode />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
