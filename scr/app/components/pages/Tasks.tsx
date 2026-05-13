import { CheckSquare, Circle, CheckCircle2, Sparkles, Calendar, Clock, Headphones, Send, RefreshCw } from "lucide-react";
import { useState } from "react";

type TaskType = "daily" | "weekly";

export function Tasks() {
  const [activeTaskType, setActiveTaskType] = useState<TaskType>("daily");
  const [showRefreshModal, setShowRefreshModal] = useState(false);

  const dailyTasks = [
    {
      id: 1,
      title: "Просидеть в войсе 2 часа",
      reward: "200 монет + 100 опыта",
      progress: 85,
      total: 120,
      completed: false,
      icon: Headphones,
    },
    {
      id: 2,
      title: "Подписаться на Telegram канал",
      reward: "150 монет",
      progress: 1,
      total: 1,
      completed: true,
      icon: Send,
    },
    {
      id: 3,
      title: "Написать 10 сообщений в чате",
      reward: "100 монет + 50 опыта",
      progress: 7,
      total: 10,
      completed: false,
      icon: Circle,
    },
  ];

  const weeklyTasks = [
    {
      id: 4,
      title: "Просидеть в войсе 10 часов",
      reward: "1000 монет + 500 опыта",
      progress: 420,
      total: 600,
      completed: false,
      icon: Headphones,
    },
    {
      id: 5,
      title: "Пригласить 3 друзей на сервер",
      reward: "500 монет + 300 опыта",
      progress: 1,
      total: 3,
      completed: false,
      icon: Send,
    },
    {
      id: 6,
      title: "Вступить в стак или создать свой",
      reward: "300 монет + 200 опыта",
      progress: 1,
      total: 1,
      completed: true,
      icon: CheckCircle2,
    },
  ];

  const getCurrentTasks = () => {
    return activeTaskType === "daily" ? dailyTasks : weeklyTasks;
  };

  const getCompletedCount = (tasks: typeof dailyTasks) => {
    return tasks.filter((t) => t.completed).length;
  };

  const renderTask = (task: typeof dailyTasks[0]) => {
    const Icon = task.icon;
    const progressPercent = (task.progress / task.total) * 100;
    const isTimeTask = task.total >= 60;
    const displayProgress = isTimeTask
      ? `${Math.floor(task.progress / 60)}ч ${task.progress % 60}м / ${Math.floor(task.total / 60)}ч ${task.total % 60}м`
      : `${task.progress} / ${task.total}`;

    return (
      <div key={task.id} className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-5 hover:border-[#9482AE]/50 transition-all">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
            task.completed ? "bg-green-500/20" : "bg-[#9482AE]/20"
          }`}>
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            ) : (
              <Icon className="w-6 h-6 text-[#9482AE]" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold mb-2 ${task.completed ? "text-gray-400 line-through" : "text-white"}`}>
              {task.title}
            </h3>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Sparkles className="w-4 h-4 text-[#9482AE]" />
              <span className="text-gray-400">{task.reward}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400">Прогресс</span>
            <span className={task.completed ? "text-green-400" : "text-[#9482AE]"}>
              {displayProgress}
            </span>
          </div>
          <div className="w-full bg-[#3B3B3B] rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${task.completed ? "bg-green-400" : "bg-[#9482AE]"}`}
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
        </div>
        {task.completed && (
          <div className="mt-3 px-3 py-2 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
            <p className="text-green-400 text-sm font-bold">Задание выполнено! Награда получена</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Задания</h1>
            <p className="text-gray-400">Выполняйте задания и получайте награды</p>
          </div>
        </div>
        <button
          onClick={() => setShowRefreshModal(true)}
          className="px-4 py-2 bg-gradient-to-r from-[#b8a5d6]/20 to-[#9482AE]/20 border border-[#b8a5d6]/30 text-[#b8a5d6] rounded-lg hover:bg-[#b8a5d6]/30 transition-all flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span className="hidden md:inline">Обновить задания</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => setActiveTaskType("daily")}
          className={`p-5 rounded-xl text-left transition-all ${
            activeTaskType === "daily"
              ? "bg-gradient-to-r from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30"
              : "bg-[#2a2a2a] border border-[#9482AE]/20 hover:border-[#9482AE]/30"
          }`}
        >
          <Calendar className={`w-8 h-8 mb-2 ${activeTaskType === "daily" ? "text-[#9482AE]" : "text-gray-400"}`} />
          <p className={`text-sm mb-1 ${activeTaskType === "daily" ? "text-[#9482AE]" : "text-gray-400"}`}>
            Ежедневные задания
          </p>
          <p className={`text-3xl font-bold ${activeTaskType === "daily" ? "text-white" : "text-gray-600"}`}>
            {getCompletedCount(dailyTasks)} / {dailyTasks.length}
          </p>
          <p className="text-gray-400 text-sm mt-1">Обновляются в 00:00 МСК</p>
        </button>

        <button
          onClick={() => setActiveTaskType("weekly")}
          className={`p-5 rounded-xl text-left transition-all ${
            activeTaskType === "weekly"
              ? "bg-gradient-to-r from-[#7c6a9a]/20 to-[#6b5b8e]/20 border border-[#7c6a9a]/30"
              : "bg-[#2a2a2a] border border-[#9482AE]/20 hover:border-[#9482AE]/30"
          }`}
        >
          <Clock className={`w-8 h-8 mb-2 ${activeTaskType === "weekly" ? "text-[#7c6a9a]" : "text-gray-400"}`} />
          <p className={`text-sm mb-1 ${activeTaskType === "weekly" ? "text-[#7c6a9a]" : "text-gray-400"}`}>
            Еженедельные задания
          </p>
          <p className={`text-3xl font-bold ${activeTaskType === "weekly" ? "text-white" : "text-gray-600"}`}>
            {getCompletedCount(weeklyTasks)} / {weeklyTasks.length}
          </p>
          <p className="text-gray-400 text-sm mt-1">Обновляются по понедельникам</p>
        </button>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          {activeTaskType === "daily" ? (
            <>
              <Calendar className="w-5 h-5 text-[#9482AE]" />
              Ежедневные задания
            </>
          ) : (
            <>
              <Clock className="w-5 h-5 text-[#7c6a9a]" />
              Еженедельные задания
            </>
          )}
        </h2>
        <div className="space-y-3">
          {getCurrentTasks().map(renderTask)}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#7c6a9a]/10 border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#9482AE]" />
          Советы по заданиям
        </h2>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#9482AE] mt-1">•</span>
            <span>Войс активность считается только в открытых каналах, афк не засчитывается</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#9482AE] mt-1">•</span>
            <span>Подписка на Telegram должна быть активной на момент проверки</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#9482AE] mt-1">•</span>
            <span>Приглашенные друзья должны подтвердить аккаунт и остаться на сервере</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#9482AE] mt-1">•</span>
            <span>Награды за задания начисляются автоматически после выполнения</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#b8a5d6] mt-1">•</span>
            <span>Используйте премиум монеты для обновления заданий, если текущие слишком сложные</span>
          </li>
        </ul>
      </div>

      {showRefreshModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2a2a2a] border border-[#9482AE]/30 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-[#b8a5d6]" />
              Обновить задания
            </h2>
            <p className="text-gray-400 mb-4">
              Обновить {activeTaskType === "daily" ? "ежедневные" : "еженедельные"} задания и получить новые?
            </p>
            <div className="bg-[#3B3B3B] rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Стоимость:</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#b8a5d6]" />
                  <span className="text-2xl font-bold text-white">50</span>
                  <span className="text-[#b8a5d6]">премиум монет</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6">
              <p className="text-yellow-400 text-sm">
                ⚠️ Прогресс текущих заданий будет сброшен!
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowRefreshModal(false)}
                className="flex-1 px-4 py-2 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#2a2a2a] transition-all"
              >
                Отмена
              </button>
              <button
                onClick={() => setShowRefreshModal(false)}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#b8a5d6] to-[#9482AE] text-white rounded-lg hover:opacity-90 transition-all"
              >
                Обновить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
