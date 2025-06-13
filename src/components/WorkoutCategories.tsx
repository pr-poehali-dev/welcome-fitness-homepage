import Icon from "@/components/ui/icon";

const categories = [
  {
    name: "Фитнес",
    description: "Интенсивные кардио и силовые тренировки",
    icon: "Dumbbell",
    color: "from-fitness-primary to-fitness-accent",
  },
  {
    name: "Пилатес",
    description: "Укрепление мышц кора и гибкость",
    icon: "Circle",
    color: "from-fitness-secondary to-fitness-primary",
  },
  {
    name: "Йога",
    description: "Гармония тела и духа",
    icon: "Flower",
    color: "from-fitness-accent to-fitness-secondary",
  },
  {
    name: "Стретчинг",
    description: "Растяжка и восстановление",
    icon: "Waves",
    color: "from-green-400 to-blue-500",
  },
  {
    name: "Функциональный",
    description: "Тренировки для повседневной жизни",
    icon: "Zap",
    color: "from-orange-400 to-red-500",
  },
];

const WorkoutCategories = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Выберите свой стиль тренировок
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            От интенсивного фитнеса до расслабляющей йоги — найдите идеальный
            тип тренировок для себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={category.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutCategories;
