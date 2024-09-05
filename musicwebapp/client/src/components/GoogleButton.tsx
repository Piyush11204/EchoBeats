// components/GoogleButton.js
"use client"; // This ensures the component is treated as a Client Component

export default function GoogleButton() {
    const google = () => {
        window.open('http://localhost:5000/api/auth/google', '_self');
    };

    return (
        <button 
            className="w-full flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={google}
        >
            {/* <img src="/path-to-google-icon.svg" alt="Google" className="w-5 h-5" /> */}
            Login with Google
        </button>
    );
}
