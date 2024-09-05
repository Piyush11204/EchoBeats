
export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Name */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        <h1 className="ml-3 text-2xl font-extrabold font-ethnocentric text-white">
                            Echo<span className="text-fuchsia-600">Beats</span>
                        </h1>
                    </div>
                    {/* Social Links */}
                    <div className="flex space-x-4 mb-4 md:mb-0">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-fuchsia-600">Facebook</a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-fuchsia-600">Twitter</a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-fuchsia-600">Instagram</a>
                        <a href="https://youtube.com" className="text-gray-400 hover:text-fuchsia-600">YouTube</a>
                    </div>
                    {/* Subscription Form */}
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none"
                            />
                            <button className="px-4 py-2 bg-fuchsia-600 text-white rounded-r-md hover:bg-fuchsia-700">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center border-t border-gray-700 mt-8 pt-4">
                    <p className="text-gray-400 text-sm">© 2024 Geetvana. All rights reserved.</p>
                    <div className="mt-2">
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                        <span className="mx-2 text-gray-400">|</span>
                        <a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
