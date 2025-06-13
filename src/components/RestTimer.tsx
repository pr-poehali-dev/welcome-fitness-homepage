import React, { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const RestTimer = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      // Звуковое уведомление можно добавить здесь
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    const totalSeconds = minutes * 60 + seconds;
    setTimeLeft(totalSeconds);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(0);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progressPercentage =
    timeLeft > 0
      ? ((minutes * 60 + seconds - timeLeft) / (minutes * 60 + seconds)) * 100
      : 0;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Icon name="Timer" size={24} />
        Таймер отдыха
      </h3>

      {/* Настройка времени */}
      {!isRunning && timeLeft === 0 && (
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Минуты</label>
              <input
                type="number"
                value={minutes}
                onChange={(e) =>
                  setMinutes(Math.max(0, parseInt(e.target.value) || 0))
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                min="0"
                max="10"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Секунды
              </label>
              <input
                type="number"
                value={seconds}
                onChange={(e) =>
                  setSeconds(
                    Math.max(0, Math.min(59, parseInt(e.target.value) || 0)),
                  )
                }
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                min="0"
                max="59"
              />
            </div>
          </div>
        </div>
      )}

      {/* Отображение таймера */}
      {(isRunning || timeLeft > 0) && (
        <div className="text-center mb-6">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - progressPercentage / 100)}`}
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Управление */}
      <div className="flex gap-2">
        {!isRunning && timeLeft === 0 ? (
          <button
            onClick={startTimer}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            <Icon name="Play" size={18} />
            Запустить
          </button>
        ) : (
          <>
            <button
              onClick={isRunning ? stopTimer : startTimer}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              <Icon name={isRunning ? "Pause" : "Play"} size={18} />
              {isRunning ? "Пауза" : "Запуск"}
            </button>
            <button
              onClick={resetTimer}
              className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              <Icon name="RotateCcw" size={18} />
            </button>
          </>
        )}
      </div>

      {/* Быстрые кнопки */}
      {!isRunning && timeLeft === 0 && (
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[1, 2, 3].map((min) => (
            <button
              key={min}
              onClick={() => {
                setMinutes(min);
                setSeconds(0);
              }}
              className="px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {min} мин
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestTimer;
