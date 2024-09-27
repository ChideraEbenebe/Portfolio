'use client';

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Fira_Code } from 'next/font/google';
import { motion } from 'framer-motion';
import html from '../skills/icons8-html.svg';
import css from '../skills/icons8-css.svg';
import js from '../skills/icons8-js.svg';
import react from '../skills/icons8-react-native.svg';
import firebase from '../skills/icons8-google-firebase-console.svg';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';

const firacode = Fira_Code({ subsets: ['latin'] });

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub size={23} />,
    href: 'https://github.com/ChideraEbenebe/',
    target: '_blank',
  },
  {
    id: 2,
    icon: <FaFacebook size={23} />,
    href: 'https://www.facebook.com/profile.php?id=100083008727885',
    target: '_blank',
  },
  {
    id: 3,
    icon: <FaInstagram size={23} />,
    href: 'https://www.instagram.com/derachi2023',
    target: '_blank',
  },
  {
    id: 4,
    icon: <FaTwitter size={23} />,
    href: 'https://x.com/ChideraEbenebe',
    target: '_blank',
  },
];

// framer animation
const animateUp = (delay: number) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const animateShow = (delay: number) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: 1, delay },
  },
});

const Header = () => {
  return (
    <header className='relative'>
      {/* links */}
      <motion.div
        className='hidden xmd:flex flex-col items-center fixed left-0 bottom-0 mx-9 xmd:mx-8 gap-7'
        variants={animateShow(2.5)}
        initial='hidden'
        animate='show'>
        <ul className='flex flex-col gap-7'>
          {socialLinks.map((link) => (
            <li
              key={link.id}
              className='hover:text-primary text-slate-400 transition-all duration-500 hover:-translate-y-1'>
              <Link
                href={link.href}
                target={link.target}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div className='w-[2px] h-[120px] bg-slate-400'></div>
      </motion.div>

      {/* main content */}
      <div className='container mx-auto xmd:mx-6 px-10 mt-[70px] flex flex-col gap-2'>
        <motion.h3
          className={`${firacode.className} text-primary text-lg`}
          variants={animateUp(0.8)}
          initial='hidden'
          animate='show'>
          Hi, my name is
        </motion.h3>

        <motion.h1
          className='text-[50px] md:text-[56px] lg:text-[60px] font-semibold text-slate-300 '
          variants={animateUp(0.9)}
          initial='hidden'
          animate='show'>
          Emmanuel Chidera.
        </motion.h1>

        <motion.h1
          className='text-[45px] md:text-[50px] xmd:text-[53px] font-semibold'
          variants={animateUp(1)}
          initial='hidden'
          animate='show'>
          I create responsive, interactive <br /> web interfaces
        </motion.h1>

        <motion.p
          className='text-[20px]'
          variants={animateUp(1.5)}
          initial='hidden'
          animate='show'>
          I&#39m a software developer specializing in crafting responsive,{' '}
          <br />
          user-friendly web interfaces, with a focus on performance, <br />
          accessibility, and seamless user experience across devices.
        </motion.p>

        {/* skills */}
        <div className='mt-6'>
          <div className='group'>
            <motion.h2
              className={`${firacode.className} text-primary text-2xl xmd:text-3xl font-semibold`}
              variants={animateUp(1.7)}
              initial='hidden'
              animate='show'>
              <Link href={'#stack'}>Stack</Link>
            </motion.h2>
          </div>
          <div className='mt-4 flex gap-4'>
            <div className='hover:-translate-y-2 transition-all duration-500'>
              <motion.div
                className=''
                variants={animateUp(1.8)}
                initial='hidden'
                animate='show'>
                <Image
                  src={html}
                  alt='html logo'
                  width={50}
                />
              </motion.div>
            </div>

            <div className='hover:-translate-y-2 transition-all duration-500'>
              <motion.div
                variants={animateUp(1.82)}
                initial='hidden'
                animate='show'>
                <Image
                  src={css}
                  alt='css logo'
                  width={50}
                />
              </motion.div>
            </div>
            <div className='hover:-translate-y-2 transition-all duration-500'>
              <motion.div
                className=''
                variants={animateUp(1.84)}
                initial='hidden'
                animate='show'>
                <Image
                  src={js}
                  alt='js logo'
                  width={50}
                />
              </motion.div>
            </div>
            <div className='hover:-translate-y-2 transition-all duration-500'>
              <motion.div
                className=''
                variants={animateUp(1.86)}
                initial='hidden'
                animate='show'>
                <Image
                  src={react}
                  alt='react logo'
                  width={50}
                />
              </motion.div>
            </div>
            <div className='hover:-translate-y-2 transition-all duration-500'>
              <motion.div
                className=''
                variants={animateUp(1.88)}
                initial='hidden'
                animate='show'>
                <Image
                  src={firebase}
                  alt='firebase logo'
                  width={50}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* contact */}
        <motion.div
          className='mt-8 flex flex-col justify-center items-center'
          variants={animateUp(1.93)}
          initial='hidden'
          animate='show'>
          <div className='mt-4'>
            <h2 className='text-[40px] font-bold t'>
              <Link href={'#contact'}>Get In Touch</Link>
            </h2>
          </div>
          <div className='leading-relaxed mt-5 max-w-2xl mx-auto text-center'>
            <p className='flex items-center text-[18px]'>
              Have a project in mind or just want to chat? Reach out, and let’s
              create something amazing together. I’m always open to new
              opportunities and collaborations!
            </p>
          </div>
          <div className='mt-10 mb-44'>
            <button className='px-7 py-4 text-xl border border-primary rounded-md hover:bg-primary hover:text-slate-900 transition-all duration-700'>
              Say Hello
            </button>
          </div>
        </motion.div>

        <div
          className={`${firacode.className} leading-relaxed mt-8 max-w-2xl mx-auto text-center mb-10 flex gap-2 items-center`}>
          Crafted & Developed by Chidera
          <FaCode size={21} />
        </div>
      </div>

      {/* email */}
      <motion.div
        className='hidden xmd:flex flex-col items-center fixed right-0 bottom-0 gap-7'
        variants={animateShow(2.5)}
        initial='hidden'
        animate='show'>
        <div>
          <p
            className={`${firacode.className} rotate-90 mb-[90px] -mr-10 hover:text-primary transition-all duration-500 hover:-translate-y-1`}>
            <Link
              href={'mailto:ebenebechidera3@gmail.com'}
              className=''>
              ebenebechidera3@gmail.com
            </Link>
          </p>
        </div>
        <div className='w-[2px] h-[120px] bg-slate-400 -mr-10'></div>
      </motion.div>
    </header>
  );
};

export default Header;
