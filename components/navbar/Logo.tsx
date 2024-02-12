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
        className="block cursor-pointer"
        height="170"
        width="170"
    />
  )
}

export default Logo