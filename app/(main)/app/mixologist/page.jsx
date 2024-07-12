import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MixologistPage = () => {
    const links = [
        { href: '/app/mixologist/my-bar', text: 'My Bar', img: 'bar' },
        { href: '/app/mixologist/favorites', text: 'Favorites', img: 'star' },
        { href: '/app/mixologist/my-notes', text: 'My Notes', img: 'notes' },
        { href: '/app/mixologist/my-cocktails', text: 'My Cocktails', img: 'my-cocktails' },
        { href: '/app/mixologist/tips', text: 'Tips', img: 'tips' },
    ];

    return (
        <div className="p-4 flex flex-col">
            <header className="  text-white pt-0 pb-2 px-4">
                <h1 className="text-2xl font-bold text-black mb-1">Mixologist</h1>
            </header>
    
            <div className="mt-0 grid grid-cols-1 gap-2 lg:w-3/4 lg:mx-auto">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} passHref>
                        <div className="bg-white p-4 rounded shadow-md flex items-center transform transition duration-500 ease-in-out hover:bg-gray-200 hover:scale-105 cursor-pointer">
                            <Image src={`/images/${link.img}.png`} alt={link.img} width={50} height={50} />
                            <span className="ml-2">{link.text}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default MixologistPage;