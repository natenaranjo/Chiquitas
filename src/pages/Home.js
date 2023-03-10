import React, { useState } from 'react'

import Notification from '../components/ui/notifications/notibar';
import Navbar from '../components/ui/navbar/Navbar';

import menuData from '../data/defaultMenu.json';

import StreetPhoto from '../assets/streetphoto.PNG';
import Catering from '../assets/platter.png';

const socialMedia = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  }
]

const Home = () => {
  const [menusData, setMenusData] = useState(menuData);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-purple-50">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl hidden lg:block">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-purple-50 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl hidden lg:block">
                <div className="hidden sm:mb-10 sm:flex">
                </div>
                <h1 className="text-4xl font-bold tracking-wider text-rose-600 font-chiquita sm:text-6xl">
                  Chiquita's
                </h1>
                <p className="mt-6 text-lg leading-8 text-rose-600">
                  A LA MODE
                </p>
                <p className="mt-6 text-lg leading-8 text-rose-600">
                  Street Food Meets Excellence
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a href="#" className="text-sm font-semibold leading-6 text-rose-600">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={StreetPhoto}
            alt=""
          />
        </div>
      </div>

      {/* About Section */}
      

      {/* Menu Section */}
      <div className='w-screen py-8 px-2 lg:py-16 lg:px-8' id='menu'>
        <div className="max-w-7xl p-8 flex flex-col items-center mx-auto text-center bg-chalkboard bg-no-repeat bg-cover rounded-lg outline-2 outline-dashed outline-gray-100 -outline-offset-8">
          <h2 className='text-6xl tracking-wide text-rose-400 font-chalk lg:text-6xl'>Menu</h2>
          <hr className='w-48 h-0.5 mx-auto my-2  bg-yellow-100 border-0 rounded' />
          <p className='text-xl leading-8 font-chalk text-gray-50'>
            Our street food list.
          </p>
          <div className='flex flex-col'>
            <h2 className='text-3xl lg:text-4xl font-chalk text-orange-200 underline p-8'>Tacos & Flautas</h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {menuData && 
                  menuData.tacos.map(({ id, name, description, servings}) => (
                    <div className='max-w-sm overflow-hidden' key={id}>
                        <h2 className='font-chalk text-2xl lg:text-2xl text-green-200 tracking-widest mb-2 pt-2 overflow-hidden'>{name}</h2>
                        <p className='font-chalk text-gray-100 tracking-widest p-1 overflow-hidden'>{description}</p>
                        <p className='font-chalk text-gray-100 tracking-widest p-1'>Servings: {servings}</p>
                    </div>
                ))}
              </div>
              <hr className='w-full h-0.5 mx-auto my-4 bg-gray-400 border-0 rounded' />
              <h2 className='text-4xl font-chalk text-orange-200 underline p-8'>Addon's</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {menuData && 
                    menuData.addons.map(({ id, name, description, servings}) => (
                      <div className='max-w-sm overflow-hidden' key={id}>
                          <h2 className='font-chalk text-2xl lg:text-2xl text-green-200 tracking-widest mb-2 pt-2 overflow-hidden'>{name}</h2>
                      </div>
                  ))}
                </div>
                <hr className='w-full h-0.5 mx-auto my-4 bg-gray-400 border-0 rounded' />
                <h2 className='text-4xl font-chalk text-orange-200 underline p-8'>Beverage's</h2>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {menuData && 
                      menuData.beverages.map(({ id, name, description, servings}) => (
                        <div className='max-w-sm overflow-hidden' key={id}>
                            <h2 className='font-chalk text-2xl lg:text-2xl text-green-200 tracking-widest mb-2 pt-2 overflow-hidden'>{name}</h2>
                        </div>
                    ))}
                  </div>
            </div>
        </div>
      </div>

      {/* Gallery Section */}

      {/* Social Media Section */}

      {/* Contact Section */}
      <div className='relative' id='contact'>
        <div className='pt-4 lg:absolute lg:inset-0 lg:left-1/2'>
          <img
            className='h-64 w-full bg-gray-50 object-cover rounded sm:h-80 lg:absolute lg:h-full'
            src={Catering}
            alt=''
          />
        </div>
        <div className='pt-16 pb-24 sm:pt-24 sm:pb-32 lg:m-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32'>
          <div className='px-6 lg:px-8'>
            <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
              <h2 className='text-3xl font-bold tracking-light text-gray-900 text-center'>Contact Us</h2>
              <p className='mt-2 text-lg leading-8 text-gray-600 text-center'>
                Let discuss cathering possibities!
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="phone" className="block font-semibold text-gray-900">
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        How can we help you?
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-center border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Section */}
      <footer>
        <div className='mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='flex justify-center space-x-6 md:order-2'>
            {socialMedia.map((item) => (
              <a key={item.name} href={item.href} className='text-rose-400 hover:text-rose-600'>
                <span className='sr-only'>{item.name}</span>
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </a>
            ))}
          </div>
          <div className='mt-8 md:order-1 md:mt-0'>
            <p className='text-center text-xs leading-5 text-rose-400'>
              &copy; 2023 Chiquita's, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>

  )
}

export default Home