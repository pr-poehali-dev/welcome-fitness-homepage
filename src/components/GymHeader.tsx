import React from "react";
import Icon from "@/components/ui/icon";

const GymHeader = () => {
  return (
    <header className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Icon name="Dumbbell" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Welcome Fitness
            </h1>
          </div>

          {/* Навигация */}
          <nav className="flex items-center gap-6">
            <a
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Icon name="Home" size={18} />
              <span>Главная</span>
            </a>
            <a
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Icon name="User" size={18} />
              <span>Личный кабинет</span>
            </a>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
              <Icon name="LogOut" size={18} />
              <span>Выйти</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GymHeader;
