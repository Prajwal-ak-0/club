'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router=useRouter();

  return (
    <Image
      onClick={()=>router.push('/')}
        src="/logo.png"
        alt="logo"
        className="block cursor-pointer md:block"
        height="125"
        width="125"
    />
  )
}

export default Logo