import Image from "next/image";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      <Image
        src="/background.gif"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white z-10">
        <div className="flex flex-col justify-center h-screen mx-20">
          <h1 className="text-7xl font-extrabold text-white py-20 mt-10">
            Dive into the Future
          </h1>
          <p className="text-3xl leading-10 font-light text-white mt-4 text-left">
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