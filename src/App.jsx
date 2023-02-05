import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Contact from './components/Contact';
import './app.css';

import Typed from 'typed.js';

import {FiChevronDown} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';
import {FiExternalLink} from 'react-icons/fi';
import {MdDoubleArrow} from 'react-icons/md';
import {AiFillCopyrightCircle} from 'react-icons/ai';


function App() {

  const[dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState)
  }


  const autoType = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ['a frontend developer', 'a designer', 'a UI/UX enthusiast', 'a frontend developer, designer, UI/UX enthusiast !'],
      typeSpeed: 50,
      backDelay: 800,
      backSpeed: 50,
      showCursor: true,
      cursorChar: '_',
      autoInsertCss: true,
    };

    typed.current = new Typed(autoType.current, options);

    return () => {
      typed.current.destroy();
    }
  }, [])

  return (
    <div className="App selection:bg-emerald-900">
      <div className="h-screen w-screen fixed flex items-center justify-center -z-40 p-16">
        <svg viewBox="0 0 600 600" className='opacity-10 w-80 h-80 md:h-96 md:w-96'>
          <path d="M331.076 0C331.076 0 331.076 166.172 331.076 288.127C331.076 410.082 331.076 600 331.076 600L451.507 446.438V222.427L600 300.792V115.567L331.076 0Z" fill="#4B4B4B"/>
          <path d="M268.924 600C268.924 600 268.924 433.828 268.924 311.873C268.924 189.918 268.924 9.29832e-06 268.924 9.29832e-06L148.493 153.562V377.573L0 299.208V484.433L268.924 600Z" fill="#4B4B4B"/>
        </svg>
      </div>
      <div className="h-20 md:h-22">
        <header className="border-t-8 bg-stone-800 bg-opacity-60 bg-clip-padding backdrop-blur-sm border-solid border-t-emerald-400 font-titillium px-4 sm:px-12 md:px-32 flex gap-6 items-center justify-between fixed w-full top-0 left-0 z-20">
          <div className="py-4 md:py-5 uppercase cursor-pointer">
            <a href="" className='flex items-center hover:last:text-emerald-400'>
              <svg width="32" height="32" viewBox="0 0 64 64" className='inline-block mr-2 md:w-10 md:h-10'>
                <path d="M35.3148 0C35.3148 0 35.3148 17.725 35.3148 30.7335C35.3148 43.742 35.3148 64 35.3148 64L48.1608 47.6201V23.7256L64 32.0844V12.3272L35.3148 0Z" fill="#34D399"/>
                <path d="M28.6852 64C28.6852 64 28.6852 46.275 28.6852 33.2665C28.6852 20.258 28.6852 0 28.6852 0L15.8392 16.3799V40.2744L0 31.9156V51.6728L28.6852 64Z" fill="#34D399"/>
              </svg>
              <p className='hidden lg:inline-block text-2xl font-bold tracking-wide transition-colors duration-300 ease-in-out'>deepak</p>
            </a>
          </div>
          <nav className="py-4 md:py-5">
            <ul className="flex gap-4 lg:gap-8 uppercase text-sm sm:text-lg lg:text-xl font-semibold tracking-widest">
              <li><a href="#about" className='md:hover:text-emerald-400 ease-in transition-colors duration-200'>about</a></li>
              <li><a href="#project" className='md:hover:text-emerald-400 ease-in transition-colors duration-200'>projects</a></li>
              <li><a href="#contact" className='md:hover:text-emerald-400 ease-in transition-colors duration-200'>contact</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <main className='font-titillium flex flex-col items-center gap-16 md:gap-20 px-8 py-12 md:py-20 select-none'>
        <section className='scroll-m-20 md:scroll-m-24 mb-8' id='about'>
          <div className='h-fit'>
            <h3 className='text-lg lg:text-xl mb-4 font-semibold tracking-wider'>Hi, Im</h3>
            <h1 className='text-4xl sm:text-6xl lg:text-8xl capitalize font-bold tracking-wide lg:tracking-normal py-4 px-2 before:block before:absolute before:-z-10 before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative inline-block'>
            deepak rawat
            </h1>
            <br></br>
            <span className='pt-12 md:pt-16 lg:pt-20 sm:text-xl lg:text-2xl inline-block tracking-wider font-bold capitalize text-emerald-400' ref={autoType}></span>
            <p className='leading-8 pt-10 md:pt-14 md:text-xl tracking-wider font-semibold md:leading-9 capitalize'>
              im fairly new to the web development thingy.<br></br>
              currently contemplating about what stack to go for... any suggestions?<br></br>
            </p>
            <button className='mt-10 lg:mt-14 md:text-xl relative font-semibold tracking-wider lg:text-2xl px-2 py-1 lg:px-4 lg:py-2 before:block before:absolute before:-z-10 before:-inset-1 before:-skew-y-3 before:bg-emerald-500 text-white md:hover:before:skew-y-3 md:before:transition-transform md:before:duration-300 md:before:ease-in'>
              <a href="./public/deepakrawat_cv.pdf" download>Reasume</a>
            </button>
          </div>
        </section>

        <section id='project' className='px-4 py-6 md:px-6 md:py-12 relative scroll-m-24'>
          <div className="">
            <h2 className='text-2xl md:text-4xl w-fit font-bold uppercase tracking-wider mb-10 md:mb-16 mx-auto text-emerald-400 relative after:h-2 after:w-full after:absolute after:bg-emerald-400 after:-bottom-3 lg:after:-bottom-4 after:left-0 after:-skew-y-3'>projects</h2>  
            <p className='text-base md:text-lg mb-10 md:mb-16 capitalize font-semibold tracking-wide text-center leading-7'>
              i dont really have much to show off here just this portfolio and some projects i made along the way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="border-4 border-emerald-800 w-full md:max-w-md h-64 transition-all duration-200 ease-in relative bg-portfolio-img bg-cover bg-center group overflow-hidden">
              <div className="bg-slate-800 bg-opacity-90 text-slate-50 tracking-wider p-5 absolute inset-0 flex justify-between flex-col translate-y-full group-hover:translate-y-0 transition-transform ease-in duration-300">
                <span className='text-xl font-semibold capitalize text-emerald-400 flex justify-between items-center'>
                  portfolio
                  <div className="flex items-center gap-4">
                  <a href="https://github.com/deepakrawat31/portfolio_main" target={'_blank'} className='h-fit'><FiGithub className='hover:text-slate-200 transition-colors ease-in duration-200' /></a>
                  <a href="" className='h-fit'><FiExternalLink className='hover:text-slate-200 transition-colors ease-in duration-200' /></a>
                  </div>
                </span>
                <span className='flex flex-col gap-4'>
                  <span className='flex items-center gap-4'>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />react</span>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />tailwind</span>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />vite</span>
                  </span>
                  <p className='text-sm text-slate-100 md:text-base font-semibold uppercase leading-7'>
                    react - tailwind base, with some js libraries here and there.
                  </p>
                </span>
              </div>
            </div>
            <div className="border-4 border-emerald-800 md:max-w-md h-64 transition-all duration-200 ease-in relative bg-product-img bg-cover bg-center group overflow-hidden">
              <div className="bg-slate-800 bg-opacity-95 tracking-wider p-5 absolute inset-0 flex justify-between flex-col translate-y-full group-hover:translate-y-0 transition-transform ease-in duration-300">
                <span className='text-xl font-semibold capitalize text-emerald-400 flex justify-between items-center'>
                  product page
                  <div className="flex items-center gap-4">
                  <a href="https://github.com/deepakrawat31/stykite-vuejs-assessment" target={'_blank'} className='h-fit'><FiGithub className='hover:text-slate-200 transition-colors ease-in duration-200' /></a>
                  <a href="https://dashing-platypus-4dd5df.netlify.app" target={'_blank'} className='h-fit'><FiExternalLink className='hover:text-slate-200 transition-colors ease-in duration-200' /></a>
                  </div>
                </span>
                <span className='flex flex-col gap-4'>
                  <span className='flex items-center gap-4'>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />vue</span>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />tailwind</span>
                    <span className='text-xs md:text-sm flex items-center text-emerald-400 font-semibold capitalize'><MdDoubleArrow className='inline mr-1 text-slate-100' />vite</span>
                  </span>
                  <p className='text-sm text-slate-100 md:text-base font-semibold uppercase leading-7'>
                    vue - tailwind base, it was actually for an assessment. i used axios for the api call.
                  </p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:max-w-md h-64 justify-start">
              <span className='text-xl font-semibold capitalize w-full py-2 border-4 border-emerald-800 bg-slate-800 bg-opacity-20 flex gap-2 items-center justify-center cursor-pointer md:hover:bg-opacity-50 transition-all duration-200 ease-in' onClick={toggleDropdown}>
                more stuff
                <FiChevronDown className={dropdown?"chevronup":"chevrondown"} />
              </span>
              <Dropdown dropdown={dropdown} />
            </div>
          </div>                                      
        </section>

        <section id='contact' className='px-4 py-6 md:px-6 md:py-12 relative scroll-m-24 w-full'>
          <div className="">
            <h2 className='text-2xl md:text-4xl w-fit font-bold uppercase tracking-wider mb-16 md:mb-16 mx-auto text-emerald-400 relative after:h-2 after:w-full after:absolute after:bg-emerald-400 after:-bottom-3 lg:after:-bottom-4 after:left-0 after:-skew-y-3'>hit me up</h2>
            <p className='text-xl capitalize font-semibold tracking-wider mb-16 text-center leading-7'>if you have any query, suggestion on how i can improve, send me a message!</p>
            <Contact />
          </div>
        </section>
      </main>
      <footer className='py-12 bg-slate-800 bg-opacity-40'>
        <div className="max-w-md mx-auto text-center text-lg capitalize font-semibold tracking-wider">
          created by <a href="https://github.com/deepakrawat31" className='underline underline-offset-2 uppercase text-emerald-400'>deepak rawat<AiFillCopyrightCircle className='inline ml-1' /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
