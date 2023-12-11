'use client'
import { useState } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import logo from '../public/logo.svg'



const NavBar: React.FC = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between font-semibold text-grey items-center mt-16 mx-16 relative z-0">
      <div>
        <Link href='/' className="hover:scale-95 duration-300 ease-in-out">
            <Image alt="logo" draggable={false} src={logo} width={130}/>
        </Link>
      </div>
      <div className="flex justify-between w-1/4">
        <Link href='/launchpad' className={`duration-300 ease-in-out text-xl  px-3 ${path == '/launchpad' ? "bg-purple rounded-lg" : ""}`}>
            Launchpad
        </Link>
        <Link href='/courses' className={`duration-300 ease-in-out text-xl  px-3 ${path == '/courses' ? "bg-purple rounded-lg" : ""}`}>
            Courses
        </Link>
        <Link href='/profile' className={`duration-300 ease-in-out text-xl px-3  ${path == '/profile' ? "bg-purple rounded-lg" : ""}`}>
            Profile
        </Link>
      </div>
      <div className="relative">
      <w3m-button 
      size = 'md'
      balance = 'show'
      />
      </div>
    </div>
  );
}

export default NavBar;
