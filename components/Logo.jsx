import React from "react";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src={logo} width={80} height={25} alt="logo" /> */}
      <h1 className="text-4xl font-bold">Virtual CFO</h1>
    </Link>
  );
};
export default Logo;
