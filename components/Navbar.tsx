"use client";
import { navBarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleController = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="navContainer">
        <div className=" flex items-center justify-between w-full h-full ">
          {/* left texts */}
          <div className="logo">
          <Link href='/' >
        <Image
          src='/logo.svg'
          alt='logo'
          width={60}
          height={60}
          className='object-contain'
        />
      </Link>
          </div>
          {/* middle texts */}
          <div className="navItem">
            <div className=" cursor-pointer">--</div>
            <div className=" cursor-pointer">--</div>
          </div>
          {/* right texts */}
          <div className="navItem">
            {navBarLinks.map((link) => (
              <Link key={link.id} href={link.url} className="px-4">
                {link.title}
              </Link>
            ))}
          </div>
          {/* for mobile */}
          <div onClick={toggleController} className="toggleBtn">
            {toggle ? <FaTimes></FaTimes> : <FaBars></FaBars>}
          </div>
          {/* \toggleContainerHidden */}
          {toggle && (
            <div className="toggleContainer">
              {navBarLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className="px-4"
                  onClick={toggleController}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



export default Navbar;
