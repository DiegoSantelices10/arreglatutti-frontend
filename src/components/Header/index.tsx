"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
const Header: FC = () => {


  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });


  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-secondary ${sticky
          ? "!fixed !z-[9990] !bg-secondary !bg-opacity-50 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute z-10"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-2 lg:py-2" : "py-2"
                  } `}
              >
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
