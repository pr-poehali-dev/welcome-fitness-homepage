import React from "react";
import ExerciseCard from "@/components/ExerciseCard";
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

interface WorkoutDayProps {
  day: {
    day: number;
    name: string;
    exercises: Exercise[];
  };
  isActive: boolean;
  onUpdateExercise: (exerciseId: number, updates: Partial<Exercise>) => void;
  onStartWorkout: () => void;
  isComplete: boolean;
}

const WorkoutDay: React.FC<WorkoutDayProps> = ({
  day,
  isActive,
  onUpdateExercise,
  onStartWorkout,
  isComplete,
}) => {
  const completedCount = day.exercises.filter((ex) => ex.completed).length;

  return (
    <div
      className={`rounded-xl p-6 transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-xl"
          : "bg-white shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Заголовок дня */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Icon
            name="Calendar"
            size={24}
            className={isActive ? "text-white" : "text-purple-500"}
          />
          <div>
            <h2
              className={`text-xl font-bold ${isActive ? "text-white" : "text-gray-800"}`}
            >
              {day.name}
            </h2>
            <p
              className={`text-sm ${isActive ? "text-purple-100" : "text-gray-500"}`}
            >
              {completedCount}/{day.exercises.length} упражнений выполнено
            </p>
          </div>
        </div>

        {isComplete && (
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500 text-white rounded-full text-sm">
            <Icon name="CheckCircle" size={16} />
            Завершено
          </div>
        )}
      </div>

      {/* Список упражнений */}
      <div className="space-y-4 mb-6">
        {day.exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onUpdate={(updates) => onUpdateExercise(exercise.id, updates)}
            isActiveDay={isActive}
          />
        ))}
      </div>

      {/* Футер дня */}
      {isActive && (
        <div className="flex gap-4 pt-4 border-t border-purple-300">
          <button
            onClick={onStartWorkout}
            className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            <Icon name="Play" size={18} />
            Начать тренировку
          </button>
          <button
            disabled={!isComplete}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              isComplete
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <Icon name="Flag" size={18} />
            Завершить тренировку
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutDay;
