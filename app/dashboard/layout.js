/* eslint-disable @next/next/no-img-element */
'use client'


import Link from 'next/link';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-black shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={isMobileMenuOpen ? 'hidden' : 'block h-6 w-6'}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={isMobileMenuOpen ? 'block h-6 w-6' : 'hidden'}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <Link href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">
                    Dashboard
                  </Link>
                  <Link href="#" className="text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Campains
                  </Link>
                  <Link href="#" className="text-black hover:bg-gray-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Reports
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isProfileMenuOpen ? 'true' : 'false'}
                    aria-haspopup="true"
                    onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {/* Dropdown menu */}
                {isProfileMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1">
                      Your Profile
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1">
                      Settings
                    </Link>
                    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200" role="menuitem" tabIndex="-1">
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
                Dashboard
              </Link>
              <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Team
              </Link>
              <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Projects
              </Link>
              <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                Calendar
              </Link>
            </div>
          </div>
        )}
      </nav>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <header className="px-6 py-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </header>
        <main className="flex-grow px-6">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
