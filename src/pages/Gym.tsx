import React, { useState } from "react";
import GymHeader from "@/components/GymHeader";
import WorkoutDay from "@/components/WorkoutDay";
import RestTimer from "@/components/RestTimer";
import Icon from "@/components/ui/icon";

interface Exercise {
  id: number;
  name: string;
  sets: number;
  weight?: number;
  reps: number;
  completed: boolean;
  description?: string;
  videoUrl?: string;
}

const Gym = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [workoutNumber, setWorkoutNumber] = useState(15);
  const [biceps, setBiceps] = useState(38);
  const userName = "Александр";

  const workoutDays = [
    {
      day: 1,
      name: "День 1 - Грудь и трицепс",
      exercises: [
        {
          id: 1,
          name: "Жим лёжа",
          sets: 3,
          weight: 80,
          reps: 0,
          completed: false,
          description: "Базовое упражнение для развития грудных мышц",
        },
        {
          id: 2,
          name: "Отжимания на брусьях",
          sets: 3,
          reps: 0,
          completed: false,
          videoUrl: "https://youtube.com/watch?v=example",
        },
        {
          id: 3,
          name: "Французский жим",
          sets: 3,
          weight: 30,
          reps: 0,
          completed: false,
        },
        {
          id: 4,
          name: "Разведение гантелей",
          sets: 3,
          weight: 15,
          reps: 0,
          completed: false,
        },
      ],
    },
    {
      day: 2,
      name: "День 2 - Спина и бицепс",
      exercises: [
        { id: 5, name: "Подтягивания", sets: 3, reps: 0, completed: false },
        {
          id: 6,
          name: "Тяга штанги",
          sets: 3,
          weight: 70,
          reps: 0,
          completed: false,
        },
        {
          id: 7,
          name: "Подъём на бицепс",
          sets: 3,
          weight: 20,
          reps: 0,
          completed: false,
        },
        {
          id: 8,
          name: "Молоток",
          sets: 3,
          weight: 12,
          reps: 0,
          completed: false,
        },
      ],
    },
    {
      day: 3,
      name: "День 3 - Ноги и плечи",
      exercises: [
        {
          id: 9,
          name: "Приседания",
          sets: 4,
          weight: 100,
          reps: 0,
          completed: false,
        },
        {
          id: 10,
          name: "Жим ногами",
          sets: 3,
          weight: 150,
          reps: 0,
          completed: false,
        },
        {
          id: 11,
          name: "Жим гантелей сидя",
          sets: 3,
          weight: 18,
          reps: 0,
          completed: false,
        },
        {
          id: 12,
          name: "Подъёмы на носки",
          sets: 3,
          weight: 50,
          reps: 0,
          completed: false,
        },
      ],
    },
  ];

  const [days, setDays] = useState(workoutDays);

  const updateExercise = (
    dayIndex: number,
    exerciseId: number,
    updates: Partial<Exercise>,
  ) => {
    setDays((prev) =>
      prev.map((day, index) =>
        index === dayIndex
          ? {
              ...day,
              exercises: day.exercises.map((ex) =>
                ex.id === exerciseId ? { ...ex, ...updates } : ex,
              ),
            }
          : day,
      ),
    );
  };

  const isWorkoutComplete = (dayIndex: number) => {
    return days[dayIndex].exercises.every((ex) => ex.completed);
  };

  const completedExercises =
    days[currentDay - 1]?.exercises.filter((ex) => ex.completed).length || 0;
  const totalExercises = days[currentDay - 1]?.exercises.length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <GymHeader />

      <div className="container mx-auto px-4 py-6">
        {/* Приветствие */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Здравствуйте, {userName}! 💪
          </h1>
          <p className="text-lg text-gray-600">
            Ваша тренировка номер{" "}
            <span className="font-semibold text-purple-600">
              {workoutNumber}
            </span>
          </p>
        </div>

        {/* Навигация */}
        <div className="flex gap-4 mb-8">
          <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
            <Icon name="History" size={20} />
            <span className="font-medium">История тренировок</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105">
            <Icon name="Weight" size={20} />
            <span className="font-medium">Рабочие веса</span>
          </button>
        </div>

        <div className="flex gap-6">
          {/* Основной контент */}
          <div className="flex-1">
            <div className="space-y-6">
              {days.map((day, index) => (
                <WorkoutDay
                  key={day.day}
                  day={day}
                  isActive={currentDay === day.day}
                  onUpdateExercise={(exerciseId, updates) =>
                    updateExercise(index, exerciseId, updates)
                  }
                  onStartWorkout={() => setCurrentDay(day.day)}
                  isComplete={isWorkoutComplete(index)}
                />
              ))}
            </div>
          </div>

          {/* Боковая панель */}
          <div className="w-80 space-y-6">
            <RestTimer />

            {/* Прогресс */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Icon name="TrendingUp" size={24} />
                Прогресс
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      💪
                    </div>
                    <span className="font-medium text-gray-700">Бицепсы</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-600">
                    {biceps} см
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Сегодня выполнено
                    </span>
                    <span className="text-sm font-medium">
                      {completedExercises}/{totalExercises}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(completedExercises / totalExercises) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">24</div>
                    <div className="text-xs text-gray-600">Дней подряд</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2.5</div>
                    <div className="text-xs text-gray-600">Часа сегодня</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gym;
