import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-fitness-primary/10 text-fitness-primary text-sm font-medium">
                <Icon name="Zap" size={16} className="mr-2" />
                #1 Фитнес-платформа в России
              </div>

              <h1 className="text-4xl lg:text-6xl font-montserrat font-bold text-gray-900 leading-tight">
                Тренируйся дома с{" "}
                <span className="fitness-text-gradient">Welcome Fitness</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                Более 500+ тренировок, опытные инструкторы и персональные
                программы. Начни свой путь к идеальной форме уже сегодня!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="fitness-gradient hover:fitness-gradient-hover text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105">
                <Icon name="Play" size={20} className="mr-2" />
                Начать тренироваться
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg font-medium border-fitness-primary text-fitness-primary hover:bg-fitness-primary hover:text-white transition-all duration-300"
              >
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                  12k+
                </div>
                <div className="text-sm text-gray-600">
                  Активных пользователей
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                  500+
                </div>
                <div className="text-sm text-gray-600">Видео тренировок</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                    4.9
                  </span>
                  <Icon
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  Рейтинг пользователей
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop&crop=center"
                alt="Домашняя тренировка"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">30 минут</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Star"
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                  <span className="text-sm font-medium">Рейтинг 4.9</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 fitness-gradient rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
