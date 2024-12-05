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
        className={`header top-0 left-0 z-40 flex w-full items-center bg-primary ${sticky
          ? "!fixed !z-[9990] !bg-primary !bg-opacity-50 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute z-10"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-80 max-w-full px-8">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-4 lg:py-4" : "py-4"
                  } `}
              >
                <Image
                  src="/images/logo-aquiles.png"
                  alt="logo"
                  width={180}
                  height={180}
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
