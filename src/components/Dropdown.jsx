import React from 'react'


import {FiCodepen, FiSidebar} from 'react-icons/fi';
import {FiFigma} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';

function Dropdown({dropdown}) {

  return (
    <div className="overflow-hidden">
      <div className={dropdown?"dropdown-open":"dropdown-close"}>
        <ul className='grid grid-rows-3 gap-5 p-4 capitalize text-xl font-bold text-emerald-400 border-4 border-emerald-800 bg-slate-800 bg-opacity-20 md:hover:bg-opacity-50 transition-all duration-200 ease-in'>
          <li className=''><a href="https://github.com/deepakrawat31" target={'_blank'} className='droplist md:hover:text-slate-200'>github <FiGithub className='text-2xl'/></a></li>
          <li className=''><a href="https://codepen.io/yatopotato" target={'_blank'} className='droplist md:hover:text-slate-200'>codepen <FiCodepen className='text-2xl'/></a></li>
          <li className=''><a href="https://www.figma.com/files/user/1046099239720926680?fuid=1046099239720926680" target={'_blank'} className='droplist md:hover:text-slate-200'>figma <FiFigma className='text-2xl'/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown