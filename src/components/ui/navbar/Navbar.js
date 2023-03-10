import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Menu', 
    href: '#menu',
  },
  {
    name: 'Gallery',
    href: '#gallery',
  },
  {
    name: 'Social Media',
    href: '#media'
  },
  {
    name: 'Contact',
    href: '#contact',
  }
]

const Navbar = () => {
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
    <header>

      <nav className='mx-auto flex items-center justify-center gap-x-6 p-4 lg:px-8' aria-hidden='Global'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5 font-bold text-rose-600 text-2xl font-chiquita'>
            Chiquita's
          </a>
        </div>

        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-sm text-rose-600 font-lamode font-semibold leading-6'>
              {item.name}
            </a>
          ))}
        </div>
        <div className='flex flex-1 items-center justify-end gap-x-6'>
          <a href='#' className='hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-rose-600'>
            Log in
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-rose-600'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open Main Menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-purple-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <a href="#" className="-m-1.5 p-1.5 font-chiquita font-bold text-xl text-rose-600">
              Chiquita's
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-rose-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-rose-600" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-rose-600 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-rose-600 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar