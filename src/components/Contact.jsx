import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8gtjfug', 'template_69pd36d', form.current, '3Armph9Aow8t_tkZS')
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
  };

  return (
    <div className='border-4 border-emerald-800 bg-slate-800 bg-opacity-20 p-6 max-w-6xl mx-auto selection:bg-slate-900'>
        <form ref={form} onSubmit={sendEmail} className='grid md:grid-cols-2 md:grid-rows-3 md:gap-x-4 gap-y-8 tracking-wider'>
          <label className='grid gap-3 items-end h-fit'>
            <span>Name</span>
            <input type="text" name="user_name" className='h-10 text-base bg-slate-800 bg-opacity-50 border-2 border-emerald-700 md:text-2xl text-emerald-400 sm:h-16 focus:outline-none focus:border-emerald-400 focus:border-2 px-2 tracking-wider' />
          </label>
          <label className='grid gap-3 items-end h-fit'>
            <span className=''>Email</span>
            <input type="email" name="user_email" className='h-10 text-base bg-slate-800 bg-opacity-50 border-2 border-emerald-700 md:text-2xl text-emerald-400 invalid:text-rose-600 invalid:focus:border-rose-600 sm:h-16 focus:outline-none focus:border-emerald-400 focus:border-2 px-2 tracking-wider' required />
          </label>
          <label className='grid gap-3 md:col-span-2'>
            <span>Message</span>
            <textarea name="message" className='text-base bg-slate-800 bg-opacity-50 border-2 border-emerald-700 md:text-2xl text-emerald-400 max-h-20 focus:outline-none focus:border-emerald-400 focus:border-2 px-2 py-3 tracking-wider' required />
          </label>
          <input type="submit" value="Send" className='h-20 md:h-full md:col-span-2 text-white border-4 bg-slate-800 bg-opacity-50 border-emerald-800 hover:bg-emerald-600 hover:border-none hover:bg-opacity-50 transition-all text-xl md:text-3xl' />
      </form>
    </div>
  )
}

export default Contact