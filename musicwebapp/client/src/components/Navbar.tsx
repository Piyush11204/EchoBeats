"use client";
import { useState } from 'react';
import Link from 'next/link';

interface UserProp {
    user?: {
        name: string;
        photos: { value: string }[];
    };
}

export default function Navbar({ user }: UserProp) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const logout = () => {
        window.open("http://localhost:5000/api/auth/logout", "_self");
    };

    return (
        <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Hamburger menu for mobile */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                        onClick={toggleSidebar}
                    >
                        <span className="sr-only">Open main menu</span>
                        {sidebarOpen ? (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <Link href="/" className="flex mr-8 items-center">
                                <img
                                    className="w-10 h-10"
                                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                                    alt="logo"
                                />
                                <h1 className="ml-2 text-2xl font-extrabold font-ethnocentric text-white">
                                    Echo<span className="text-fuchsia-600">Beats</span>
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </Link>
                                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </Link>
                                {user ? (
                                    <div className="flex items-center space-x-4">
                                        <img src={user.photos[0].value} alt="Profile" className="w-8 h-8 rounded-full" />
                                        <span className="text-gray-300 text-sm font-medium">{user.name}</span>
                                        <button
                                            onClick={logout}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <Link href="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="sm:hidden">
                    <div className="fixed inset-0 flex z-40">
                        {/* Dim background */}
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={closeSidebar}></div>
                        {/* Sidebar (pulls out to half) */}
                        <div className="relative flex-1 flex flex-col max-w-36 w-1/2 border-r-2 bg-gray-800">
                            <div className="absolute">
                                <button
                                    className=" flex items-center justify-center h-20 w-20 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={closeSidebar}
                                >
                                    <span className="sr-only ">Close sidebar</span>
                                    <svg
                                        className="h-6 mr-6 w-6 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                                <nav className=" px-2 flex-1  mt-10 space-y-1">
                                    <Link href="/" className="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeSidebar}>
                                        Home
                                    </Link>
                                    <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeSidebar}>
                                        About
                                    </Link>
                                    <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={closeSidebar}>
                                        Contact
                                    </Link>
                                    
                                    {user ? (
                                        <div className="mt-6 px-2 space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <img src={user.photos[0].value} alt="Profile" className="w-8 h-8 rounded-full" />
                                                <span className="text-gray-300 text-sm font-medium">{user.name}</span>
                                            </div>
                                            <button
                                                onClick={() => { closeSidebar(); logout(); }}
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <Link href="/login" className="text-gray-300 font-bold bg-fuchsia-600 max-w-28 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base" onClick={closeSidebar}>
                                            Login
                                        </Link>
                                    )}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
