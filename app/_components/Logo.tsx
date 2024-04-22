import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ href = "/" }: { href?: string }) => {
  return (
    <Link href={href}>
      <Image src="/images/Logo/GIA-Logo-dark-theme.png" alt="logo" width={130} height={130} />
    </Link>
  );
};

export default Logo;
