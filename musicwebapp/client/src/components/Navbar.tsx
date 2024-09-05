"use client"; 
import Link from 'next/link';


interface UserProp {
    user?: {
        name: string;
        photos: { value: string }[];
    };
}

export default function Navbar({ user }: UserProp) {
    



    const logout = () => {
        window.open("http://localhost:5000/api/auth/logout", "_self");
    };

    return (
        <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex items-center space-x-2">
                            {/* Logo */}
                            <Link href="/" className="flex items-center">
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
        </nav>
    );
}
