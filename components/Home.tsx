import Image from "next/image";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="relative  w-full h-screen">
      <Image
        src="/background.gif"
        className="absolute inset-0 bg-slate-800 opacity-40 z-0"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center text-white">
        <div className="flex flex-col justify-center mx-10 md:mx-16 lg:mx-20">
          <h1 className="lg:text-7xl md:text-6xl text-[40px] font-extrabold text-white lg:py-12 md:py-8 max-md:py-8 max-md:mt-32 md:mt-28 lg:mt-28">
            Dive into the Future
          </h1>
          <p className="md:text-3xl text-xl md:leading-10  text-white mt-4 text-left">
            Are you fascinated by the ever-evolving world of computers and their growing intelligence? Do you dream of building the future&apos;s technologies? Then the Computer Intelligence Club is your perfect launching pad!
          </p>
          <Button className="lg:my-20 md:my-16 my-16" size={'primary'} variant={'primary'}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
