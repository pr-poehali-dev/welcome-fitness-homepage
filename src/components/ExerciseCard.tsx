import React, { useState } from "react";
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

interface ExerciseCardProps {
  exercise: Exercise;
  onUpdate: (updates: Partial<Exercise>) => void;
  isActiveDay: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  onUpdate,
  isActiveDay,
}) => {
  const [isWeightEditing, setIsWeightEditing] = useState(false);
  const [weightInput, setWeightInput] = useState(
    exercise.weight?.toString() || "",
  );
  const [showDescription, setShowDescription] = useState(false);

  const handleWeightSave = () => {
    const weight = parseFloat(weightInput);
    if (!isNaN(weight) && weight > 0) {
      onUpdate({ weight });
    }
    setIsWeightEditing(false);
  };

  const handleRepsChange = (increment: boolean) => {
    const newReps = increment
      ? exercise.reps + 1
      : Math.max(0, exercise.reps - 1);
    onUpdate({ reps: newReps });
  };

  const resetReps = () => {
    onUpdate({ reps: 0, completed: false });
  };

  const toggleComplete = () => {
    onUpdate({ completed: !exercise.completed });
  };

  const progressPercentage =
    exercise.sets > 0 ? (exercise.reps / (exercise.sets * 10)) * 100 : 0;

  return (
    <div
      className={`p-4 rounded-lg transition-all duration-300 ${
        exercise.completed
          ? "bg-green-100 border-2 border-green-300"
          : isActiveDay
            ? "bg-white/10 border border-white/20"
            : "bg-gray-50 border border-gray-200"
      }`}
    >
      {/* Заголовок упражнения */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3
            className={`font-semibold ${
              isActiveDay
                ? "text-white"
                : exercise.completed
                  ? "text-green-700"
                  : "text-gray-800"
            }`}
          >
            {exercise.name}
          </h3>
          {exercise.weight && (
            <div
              className={`flex items-center gap-1 text-sm ${
                isActiveDay ? "text-purple-100" : "text-gray-600"
              }`}
            >
              <Icon name="Dumbbell" size={14} />
              <span>{exercise.weight} кг</span>
            </div>
          )}
        </div>
        <div
          className={`text-sm ${
            isActiveDay ? "text-purple-100" : "text-gray-500"
          }`}
        >
          Подходов: {exercise.sets}
        </div>
      </div>

      {/* Действия с упражнением */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Вес */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsWeightEditing(!isWeightEditing)}
            className={`p-2 rounded-lg transition-colors ${
              isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name="Dumbbell" size={16} />
          </button>
          {isWeightEditing && (
            <div className="flex items-center gap-1">
              <input
                type="number"
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
                className="w-16 px-2 py-1 rounded border text-sm text-gray-800"
                placeholder="кг"
              />
              <button
                onClick={handleWeightSave}
                className="p-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                <Icon name="Check" size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Счетчик повторений */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleRepsChange(false)}
            className={`p-2 rounded-lg transition-colors ${
              isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name="Minus" size={16} />
          </button>
          <div
            className={`px-3 py-1 rounded-lg font-semibold min-w-[50px] text-center ${
              progressPercentage >= 100
                ? "bg-green-500 text-white"
                : progressPercentage >= 50
                  ? "bg-yellow-500 text-white"
                  : isActiveDay
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-800"
            }`}
          >
            {exercise.reps}
          </div>
          <button
            onClick={() => handleRepsChange(true)}
            className={`p-2 rounded-lg transition-colors ${
              isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>

        {/* Завершение */}
        <button
          onClick={toggleComplete}
          className={`p-2 rounded-lg transition-all ${
            exercise.completed
              ? "bg-green-500 text-white"
              : isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-green-500 hover:text-white"
          }`}
        >
          <Icon name="Check" size={16} />
        </button>

        {/* Описание */}
        {exercise.description && (
          <button
            onClick={() => setShowDescription(!showDescription)}
            className={`p-2 rounded-lg transition-colors ${
              isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name="FileText" size={16} />
          </button>
        )}

        {/* Видео */}
        {exercise.videoUrl && (
          <a
            href={exercise.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-lg transition-colors ${
              isActiveDay
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <Icon name="Video" size={16} />
          </a>
        )}

        {/* Сброс */}
        <button
          onClick={resetReps}
          className={`p-2 rounded-lg transition-colors ${
            isActiveDay
              ? "bg-white/20 text-white hover:bg-white/30"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          <Icon name="RotateCcw" size={16} />
        </button>
      </div>

      {/* Описание */}
      {showDescription && exercise.description && (
        <div
          className={`mt-3 p-3 rounded-lg text-sm ${
            isActiveDay ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {exercise.description}
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
