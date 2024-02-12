import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
    return (
        <div className="h-36 w-full bg-[#151515] flex items-center justify-start">
            <div className='h-fit my-auto  w-fit mx-20'>
                <Logo />
            </div>
            <div className="w-1/2 ml-64">
                <UserMenu />
            </div>
        </div>
    )
}

export default Navbar