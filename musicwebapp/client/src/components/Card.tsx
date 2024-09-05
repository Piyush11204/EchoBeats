import Image from 'next/image';

type CardProps = {
  title: string;
  image: string;
  description: string;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-700/70">
      <Image 
        src={image} 
        alt={title} 
        width={500} 
        height={200} 
        className="w-full h-42 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-500 dark:text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
}
