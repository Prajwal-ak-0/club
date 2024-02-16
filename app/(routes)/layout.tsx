import Bottom from '@/components/footer/Bottom';
import Footer from '@/components/footer/Footer';
import { DesktopNavbar } from '@/components/navbar/DesktopNavbar';
import Logo from '@/components/navbar/Logo';
import MobileNavbar from '@/components/navbar/MobileNavbar';
import React from 'react'

const RoutesPage = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='bg-black'>
            <div className='max-md:hidden'>
                <div className="h-36 w-full bg-[#151515] flex items-center">
                    <div className='h-fit my-auto  w-fit lg:mx-20 md:mx-6'>
                        <Logo />
                    </div>
                    <div className="w-1/2 ml-28">
                        <DesktopNavbar />
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <MobileNavbar />
            </div>
                {children}
                <div className="flex flex-col">
                    <Bottom />
                </div>
        </div>
    )
}

export default RoutesPage