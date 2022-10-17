import Image from 'next/image';
import NavbarItem from "./navbarItem";

export default function Navbar() {
    return (
        <div className="xss:hidden md:flex md:flex-col md:w-[72px]  lg:w-[244px] border-r h-screen">

            <div className="lg:hidden font-bold text-6xl text-red-200 mx-auto">@</div>
            <div className="sm:hidden lg:block font-bold text-3xl pl-8 text-red-200">Alpha Version</div>

            <div className="lg:hidden mx-auto py-8">
                <Image className="rounded-full" src="/pic6.jpg" width={40} height={40} layout='fixed' alt='profile' />
            </div>
            <div className="sm:hidden lg:block font-bold text-3xl p-8">Fah Sujitra</div>

            <NavbarItem text="Home">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </NavbarItem>
            <NavbarItem text="Profile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </NavbarItem>
            <div className="grow">
            </div>
        </div>
    );
}