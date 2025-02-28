'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../custom/Button';

const Header: FC = () => {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);
  });

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header
        className={`header top-0 px-4 md:px-10 left-0 z-50 flex w-full items-center bg-primary ${
          sticky &&
          '!fixed !z-[9990] !bg-primary !bg-opacity-70 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20'
        }`}
      >
        <motion.div
          className="w-full z-50"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div>
            <div className="relative flex items-center justify-between">
              <div>
                <Link href="/" className={`header-logo block w-full py-2 `}>
                  <Image
                    src="/images/logo-aquiles.png"
                    alt="logo"
                    layout="intrinsic"
                    width={140}
                    height={140}
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full z-50 flex justify-end items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Button
            variant={'ghost'}
            className="text-base p-0"
            onClick={scrollToBottom}
          >
            ¿Sos profesional?
          </Button>
          {/* <Authentication isLoggedIn={isLoggedIn} /> */}
        </motion.div>
      </header>
    </>
  );
};

export default Header;
