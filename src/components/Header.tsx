import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg fitness-gradient flex items-center justify-center">
              <span className="text-white font-poppins font-bold text-lg">
                W
              </span>
            </div>
            <span className="text-xl font-poppins font-bold fitness-text-gradient">
              Welcome Fitness
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#workouts"
              className="text-gray-700 hover:text-fitness-primary transition-colors font-medium"
            >
              Тренировки
            </a>
            <a
              href="#programs"
              className="text-gray-700 hover:text-fitness-primary transition-colors font-medium"
            >
              Программы
            </a>
            <a
              href="#instructors"
              className="text-gray-700 hover:text-fitness-primary transition-colors font-medium"
            >
              Инструкторы
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-fitness-primary transition-colors font-medium"
            >
              Цены
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Войти
            </Button>
            <Button className="fitness-gradient hover:fitness-gradient-hover transition-all duration-300 text-white font-medium">
              Начать бесплатно
            </Button>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
