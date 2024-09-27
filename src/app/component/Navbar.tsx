'use client';

import Link from 'next/link';
import React from 'react';
import { FaCode } from 'react-icons/fa';
import Button from './Button';
import { Fira_Code } from 'next/font/google';
import { delay, motion } from 'framer-motion';
import logo from '../../../public/logo.ico';
import Image from 'next/image';

const firacode = Fira_Code({ subsets: ['latin'] });

const animation = (delay: number) => ({
  hide: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  },
});

const navLink = [
  {
    id: 1,
    index: '01',
    label: 'About',
    href: '#about',
    delay: 0.1,
  },
  {
    id: 2,
    index: '02',
    label: 'Stack',
    href: '#stack',
    delay: 0.2,
  },
  {
    id: 3,
    index: '03',
    label: 'Project',
    href: '#project',
    delay: 0.3,
  },
  {
    id: 4,
    index: '04',
    label: 'Contact',
    href: '#contact',
    delay: 0.4,
  },
];

const Navbar = () => {
  return (
    <div className='bg-navy sticky top-0 z-10 max-w-full bg-opacity-50 backdrop-blur-lg'>
      <nav
        className={`${firacode.className} flex justify-between items-center  py-8   mx-auto  px-10  shadow-md`}>
        <motion.div
          className='text-2xl text-[#64ffda] font-bold flex items-center gap-2'
          variants={animation(0.02)}
          initial='hide'
          animate='show'>
          <Link
            href={'/'}
            className='flex items-center gap-2 '>
            <Image
              src={logo}
              width={40}
              alt='chidera portfolio'
            />
          </Link>
        </motion.div>
        <div className='display flex justify-between items-center gap-4'>
          <ul className='hidden xmd:flex justify-between items-center gap-4'>
            {navLink.map((link) => (
              <motion.li
                key={link.id}
                className='px-3'
                variants={animation(link.delay)}
                initial='hide'
                animate='show'>
                <Link
                  href={link.href}
                  passHref
                  className='items-center group space-x-1'>
                  <span
                    className={` text-primary text-sm `}>{`${link.index}.`}</span>
                  <span className='group-hover:text-primary transition-all duration-300'>
                    {link.label}
                  </span>
                  <div className='w-0 h-[1px] group-hover:w-full transition-all duration-700 bg-primary z-10'></div>
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={animation(0.5)}
            initial='hide'
            animate='show'>
            <Button />
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
