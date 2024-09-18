import Image from 'next/image';
import Link from 'next/link';
   // this is about page
export default function About() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-gray-900 mt-14 dark:text-white mb-8">About Us</h1>
                
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        At EchoBeats, our mission is to connect music lovers with artists through a seamless and engaging platform. We strive to provide a space where creativity flourishes, and users can discover new music and connect with their favorite artists.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our History</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Established in 2024, EchoBeats began as a vision to create a community for music enthusiasts. Over time, we've developed a robust platform that enhances the music experience by bridging the gap between fans and artists.
                    </p>
                </section>
        
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Self</h2>
                    <div className="bg-white rounded-lg shadow dark:bg-fuchsia-900 p-6 max-w-md mx-auto shadow-fuchsia-700/40 transition-transform transform hover:scale-105">
                        <Image 
                            src="/courses/song-writing.jpg" 
                            alt="Piyush Krishnadutt Yadav" 
                            width={400} 
                            height={400}
                            className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">Piyush Krishnadutt Yadav</h3>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">Founder & Developer</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Piyush is the visionary behind EchoBeats, responsible for leading the development team and ensuring the platform meets the highest standards of quality and user experience.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Have questions or want to get in touch with us? Feel free to reach out through our <Link href="/contact" className="text-primary-600 hover:underline dark:text-primary-500">Contact Page</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
}
