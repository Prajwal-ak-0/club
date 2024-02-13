import Image from "next/image";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      <Image
        src="/background.gif "
        className="bg-muted-foreground"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="relative z-10 bg-black"></div>
      <div className="relative  flex flex-col justify-center items-center text-white z-10">
        <div className="flex flex-col justify-center h-screen mx-10 md:mx-20">
          <h1 className="md:text-7xl text-4xl font-extrabold text-white md:py-20 mt-40 md:mt-10">
            Dive into the Future
          </h1>
          <p className="md:text-3xl text-xl md:leading-10 font-light text-white mt-4 text-left">
            Are you fascinated by the ever-evolving world of computers and their growing intelligence? Do you dream of building the future&apos;s technologies? Then the Computer Intelligence Club is your perfect launching pad!
          </p>
          <Button className="my-24" size={'primary'} variant={'primary'}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}