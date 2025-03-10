import React from "react";
import logo from "../public/assets/logo-color.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={80} height={25} alt="logo" />
    </Link>
  );
};
export default Logo;
