"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCompass, FaUserTie } from "react-icons/fa";
import { TbBottleFilled } from "react-icons/tb";
import { LiaCocktailSolid } from "react-icons/lia";
import { MdManageAccounts } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";


const Navbar = () => {
    const pathname = usePathname();

    return (
        <>
            <header className="bg-navbarColor text-black p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 h-16">
                <div className="text-2xl font-bold absolute left-4">Booze Blender</div>
                <nav className="hidden md:flex space-x-4 mx-auto">
                    <Link href="/app" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app' ? 'text-orange-500' : ''}`}>
                        <FaCompass />
                        <span>Discover</span>
                    </Link>
                    <Link href="/app/cocktails" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/cocktails' ? 'text-orange-500' : ''}`}>
                        <LiaCocktailSolid />
                        <span>Cocktails</span>
                    </Link>
                    <Link href="/app/ingredients" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/ingredients' ? 'text-orange-500' : ''}`}>
                        <TbBottleFilled />
                        <span>Ingredients</span>
                    </Link>
                    <Link href="/app/mixologist" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/mixologist' ? 'text-orange-500' : ''}`}>
                        <FaUserTie />
                        <span>Mixologist</span>
                    </Link>
                    <Link href="/app/profile" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/profile' ? 'text-orange-500' : ''}`}>
                        <MdManageAccounts />
                        <span>Profile</span>
                    </Link>
                </nav>
                <div className="absolute right-4">
                    <IoIosNotificationsOutline className="text-2xl cursor-pointer hover:text-orange-400" />
                </div>
            </header>

            {/* Footer Navigation for Mobile */}
            <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-navbarColor text-black p-4 flex justify-around items-center z-50 h-16">
                <Link href="/app" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app' ? 'text-orange-500' : ''}`}>
                    <FaCompass />
                    <span className="text-xs">Discover</span>
                </Link>
                <Link href="/app/cocktails" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/cocktails' ? 'text-orange-500' : ''}`}>
                    <LiaCocktailSolid />
                    <span className="text-xs">Cocktails</span>
                </Link>
                <Link href="/app/ingredients" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/ingredients' ? 'text-orange-500' : ''}`}>
                    <TbBottleFilled />
                    <span className="text-xs">Ingredients</span>
                </Link>
                <Link href="/app/mixologist" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/mixologist' ? 'text-orange-500' : ''}`}>
                    <FaUserTie />
                    <span className="text-xs">Mixologist</span>
                </Link>
                <Link href="/app/profile" className={`hover:text-orange-400 flex flex-col items-center justify-center ${pathname === '/app/profile' ? 'text-orange-500' : ''}`}>
                    <MdManageAccounts />
                    <span className="text-xs">Profile</span>
                </Link>
            </footer>
        </>
    );
};
export default Navbar;
