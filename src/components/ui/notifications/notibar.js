import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const Notification = () => {
  return (
    <div className="w-full m-auto relative isolate text-center bg-neutral-800 shadow-xl py-2.5 px-6 sm:px-3.5">
      <p className="text-sm leading-6 font-bold text-white">
        <a href="#">
          Serving downtown on Johnson St.
        </a>
      </p>
    </div>
  )
}

export default Notification;