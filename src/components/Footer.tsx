import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg fitness-gradient flex items-center justify-center">
                <span className="text-white font-poppins font-bold text-lg">
                  W
                </span>
              </div>
              <span className="text-xl font-poppins font-bold">
                Welcome Fitness
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Ведущая платформа для домашних тренировок. Достигайте своих
              фитнес-целей вместе с нами!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-fitness-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Icon name="Facebook" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-fitness-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-fitness-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Icon name="Youtube" size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-fitness-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Icon name="Twitter" size={18} />
              </a>
            </div>
          </div>

          {/* Тренировки */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Тренировки
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Йога
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Пилатес
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Фитнес
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Стретчинг
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Функциональный
                </a>
              </li>
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Компания
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Карьера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Инструкторы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Новости
                </a>
              </li>
            </ul>
          </div>

          {/* Поддержка */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">
              Поддержка
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Помощь
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Условия использования
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Welcome Fitness. Все права защищены.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Условия
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Конфиденциальность
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
