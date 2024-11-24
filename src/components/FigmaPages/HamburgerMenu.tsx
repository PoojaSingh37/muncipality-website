/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Icon from '@Components/common/Icon';
import flagIcon from '../../assets/images/flag-icon.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" naxatw-items-center naxatw-gap-2 md:naxatw-hidden">
      <div>
        <Icon
          className="naxatw-left-32 naxatw-text-icon-sm"
          name={isOpen ? 'close' : 'menu'}
          onClick={() => setIsOpen(prev => !prev)}
        />
        <div
          className={` naxatw-px-10 naxatw-py-4 ${isOpen ? 'naxatw-block' : 'naxatw-hidden'} naxatw-w-full-screen naxatw-bg-blue-50`}
        >
          <div className="naxatw-font-bold naxatw-text-blue-400 ">
            <div className=" naxatw-text-sm sm:naxatw-text-base  ">Data</div>
            <div className="naxatw-text-sm sm:naxatw-text-base md:naxatw-text-lg">
              About
            </div>
            <img src={flagIcon} alt="flag rectangle" className="" />
            <button
              type="button"
              className=" naxatw-mt-2 naxatw-rounded-md naxatw-px-3  naxatw-outline naxatw-outline-2 hover:naxatw-bg-sky-600 hover:naxatw-text-white"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
