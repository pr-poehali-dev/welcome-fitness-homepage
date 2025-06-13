import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const workouts = [
  {
    id: 1,
    title: "Утренняя йога для энергии",
    instructor: "Анна Петрова",
    category: "Йога",
    duration: "25 мин",
    difficulty: "Начинающий",
    views: "12.5k",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1506629905607-52e4ac6b2215?w=400&h=250&fit=crop",
    categoryColor: "bg-green-100 text-green-800",
  },
  {
    id: 2,
    title: "HIIT тренировка для похудения",
    instructor: "Михаил Козлов",
    category: "Фитнес",
    duration: "30 мин",
    difficulty: "Продвинутый",
    views: "18.2k",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    categoryColor: "bg-red-100 text-red-800",
  },
  {
    id: 3,
    title: "Пилатес для красивой осанки",
    instructor: "Елена Сидорова",
    category: "Пилатес",
    duration: "40 мин",
    difficulty: "Средний",
    views: "9.8k",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    categoryColor: "bg-purple-100 text-purple-800",
  },
];

const PopularWorkouts = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Популярные тренировки
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Тренировки, которые выбирают тысячи пользователей каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${workout.categoryColor}`}
                  >
                    {workout.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center">
                  <Icon name="Eye" size={12} className="mr-1" />
                  {workout.views}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-2 group-hover:text-fitness-primary transition-colors">
                  {workout.title}
                </h3>

                <p className="text-gray-600 mb-4">с {workout.instructor}</p>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {workout.duration}
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Star"
                        size={14}
                        className="mr-1 text-yellow-400 fill-current"
                      />
                      {workout.rating}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                    {workout.difficulty}
                  </span>
                </div>

                {/* CTA Button */}
                <Button className="w-full fitness-gradient hover:fitness-gradient-hover text-white font-medium transition-all duration-300">
                  <Icon name="Play" size={16} className="mr-2" />
                  Начать тренировку
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-8 py-3 text-lg font-medium border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white transition-all duration-300"
          >
            Смотреть все тренировки
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularWorkouts;
