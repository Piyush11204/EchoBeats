'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import GoogleButton from '../../components/GoogleButton';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // For button state
    const [isMounted, setIsMounted] = useState(false); // To ensure client-side router use
    const router = useRouter();

    // Ensure router is only used client-side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        const form = e.target as HTMLFormElement;
        const { email, password } = form.elements as any;

       

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', { // Replace with your backend URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.value, password: password.value }),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMessage(data.message || 'An error occurred during login');
                setIsLoading(false);
                return;
            }

            const data = await response.json();
            console.log('Login successful:', data);
            toast.success('Login successful! Redirecting to Home...', {
                duration: 3000,
                position: 'top-center',
                className: 'bg-green-500 text-white',
            });

            // Store the token in sessionStorage instead of localStorage for better security
            sessionStorage.setItem('token', data.token);

            // Redirect to the dashboard or home page after successful login
            if (isMounted) {
                setTimeout(() => {
                    router.push('/');
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Failed to connect to server. Please try again later.');
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <Toaster />
            <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                {/* Logo and header section */}
                <div className="w-full bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <GoogleButton />

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${
                                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                disabled={isLoading} // Disable button while loading
                            >
                                {isLoading ? 'Logging in...' : 'Login'}
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet?{' '}
                                <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up here
                                </Link>
                            </p>
                        </form>

                        {/* Display error messages */}
                        {errorMessage && (
                            <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
