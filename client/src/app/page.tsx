// Assuming you imported courses as:
import Carousel from "@/components/Carousel"
import Card from "@/components/Card"
import coursesData from '../data/music_courses.json'; 

export default function Home() {
  const { courses } = coursesData; // Extract the array from the object

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main>
        <section className="relative">
          <Carousel />
        </section>

        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Popular Courses
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
