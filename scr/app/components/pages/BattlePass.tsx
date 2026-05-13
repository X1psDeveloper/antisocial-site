import { Ticket, Lock, Check, Star, ChevronRight, ShoppingBag, Sparkles } from "lucide-react";

export function BattlePass() {
  const currentLevel = 8;
  const maxLevel = 100;
  const currentXP = 650;
  const xpPerLevel = 1000;

  const getRewardForLevel = (level: number) => {
    if (level === 50) {
      return {
        free: "1000 монет",
        premium: "Мод Topka Visual",
        special: true,
      };
    }
    if (level === maxLevel) {
      return {
        free: "5000 монет",
        premium: "Мерч с никнеймом",
        special: true,
      };
    }
    if (level % 10 === 0) {
      return {
        free: "1000 монет",
        premium: "Эксклюзивная роль",
        special: false,
      };
    }
    if (level % 5 === 0) {
      return {
        free: "500 монет",
        premium: "1500 монет",
        special: false,
      };
    }
    if (level % 3 === 0) {
      return {
        free: "200 монет",
        premium: "Уникальный стикер",
        special: false,
      };
    }
    return {
      free: "100 монет",
      premium: "300 монет",
      special: false,
    };
  };

  const rewards = Array.from({ length: maxLevel }, (_, i) => ({
    level: i + 1,
    ...getRewardForLevel(i + 1),
    unlocked: i + 1 <= currentLevel,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <Ticket className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Боевой пропуск</h1>
          <p className="text-gray-400">Сезон 1: Начало пути</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-gray-300 mb-1">Текущий уровень</p>
            <p className="text-4xl font-bold text-white">{currentLevel} / {maxLevel}</p>
          </div>
          <button className="px-6 py-3 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all flex items-center gap-2 shadow-lg shadow-[#9482AE]/30">
            <Star className="w-5 h-5" />
            Купить премиум
          </button>
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-300">Прогресс до уровня {currentLevel + 1}</span>
            <span className="text-[#9482AE] font-bold">{currentXP} / {xpPerLevel} опыта</span>
          </div>
          <div className="w-full bg-[#3B3B3B] rounded-full h-3">
            <div className="bg-[#9482AE] h-3 rounded-full transition-all" style={{ width: `${(currentXP / xpPerLevel) * 100}%` }} />
          </div>
        </div>
        <p className="text-gray-400 text-sm">Осталось {xpPerLevel - currentXP} опыта • Сидите в войсе для получения опыта</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-[#b8a5d6]/20 to-[#9482AE]/20 border border-[#b8a5d6]/30 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-[#b8a5d6]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <Sparkles className="w-8 h-8 text-[#b8a5d6]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Уровень 50</h3>
          <p className="text-[#b8a5d6] font-bold mb-2">Мод Topka Visual</p>
          <p className="text-gray-400 text-sm">Эксклюзивный визуальный мод для сервера</p>
        </div>

        <div className="bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30 rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-[#9482AE]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
            <ShoppingBag className="w-8 h-8 text-[#9482AE]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Уровень 100</h3>
          <p className="text-[#9482AE] font-bold mb-2">Мерч с никнеймом</p>
          <p className="text-gray-400 text-sm">Футболка, худи или кепка с вашим ником</p>
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Награды боевого пропуска</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max">
            {rewards.map((reward) => (
              <div
                key={reward.level}
                className={`w-48 flex-shrink-0 rounded-xl overflow-hidden border ${
                  reward.special
                    ? "border-[#b8a5d6]/50 bg-gradient-to-b from-[#b8a5d6]/20 to-transparent shadow-lg shadow-[#b8a5d6]/20"
                    : reward.unlocked
                    ? "border-[#9482AE]/50 bg-gradient-to-b from-[#9482AE]/10 to-transparent"
                    : "border-[#9482AE]/20 bg-[#3B3B3B]"
                }`}
              >
                <div className={`px-4 py-2 text-center ${
                  reward.special ? "bg-[#b8a5d6]/30" : reward.unlocked ? "bg-[#9482AE]/20" : "bg-[#2a2a2a]"
                }`}>
                  <p className="text-white font-bold flex items-center justify-center gap-1">
                    Уровень {reward.level}
                    {reward.special && <Star className="w-4 h-4 text-[#b8a5d6]" />}
                  </p>
                </div>
                <div className="p-4 space-y-3">
                  <div className="bg-[#2a2a2a] rounded-lg p-3 min-h-[80px] flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-400 text-xs uppercase">Бесплатно</p>
                      {reward.unlocked ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Lock className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <p className="text-white text-sm font-bold">{reward.free}</p>
                  </div>

                  <div className={`bg-gradient-to-br rounded-lg p-3 min-h-[80px] flex flex-col justify-between ${
                    reward.special
                      ? "from-[#b8a5d6]/30 to-[#9482AE]/30 border border-[#b8a5d6]/50"
                      : "from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30"
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className={`text-xs uppercase flex items-center gap-1 ${
                        reward.special ? "text-[#b8a5d6]" : "text-[#9482AE]"
                      }`}>
                        <Star className="w-3 h-3" />
                        Премиум
                      </p>
                      {reward.unlocked ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Lock className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <p className="text-white text-sm font-bold">
                      {reward.level === 50 && (
                        <Sparkles className="w-4 h-4 inline mr-1 text-[#b8a5d6]" />
                      )}
                      {reward.level === 100 && (
                        <ShoppingBag className="w-4 h-4 inline mr-1 text-[#9482AE]" />
                      )}
                      {reward.premium}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
          <p className="text-sm">Прокрутите для просмотра всех {maxLevel} наград</p>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#7c6a9a]/10 border border-[#9482AE]/20 rounded-xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3">
            <div className="bg-[#9482AE] rounded-xl p-8 flex items-center justify-center">
              <ShoppingBag className="w-24 h-24 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
              <Star className="w-6 h-6 text-[#9482AE]" />
              Главные награды сезона
            </h2>
            <div className="space-y-3">
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-[#b8a5d6]" />
                  <p className="text-white font-bold">Уровень 50: Мод Topka Visual</p>
                </div>
                <p className="text-gray-400 text-sm">Эксклюзивный визуальный мод, доступный только владельцам премиум пропуска</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <ShoppingBag className="w-5 h-5 text-[#9482AE]" />
                  <p className="text-white font-bold">Уровень 100: Мерч с никнеймом</p>
                </div>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#9482AE]" />
                    Персонализированный дизайн
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#9482AE]" />
                    Выбор типа (футболка/худи/кепка)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#9482AE]" />
                    Бесплатная доставка
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Как получить опыт?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#3B3B3B] rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Войс активность</h3>
            <p className="text-gray-400 text-sm">Получайте 10 опыта за каждые 10 минут в войсе Discord</p>
          </div>
          <div className="bg-[#3B3B3B] rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Выполнение заданий</h3>
            <p className="text-gray-400 text-sm">Ежедневные и еженедельные задания дают до 500 опыта</p>
          </div>
          <div className="bg-[#3B3B3B] rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Участие в стаке</h3>
            <p className="text-gray-400 text-sm">Бонус +20% к опыту, если вы в активном стаке</p>
          </div>
          <div className="bg-[#3B3B3B] rounded-lg p-4">
            <h3 className="text-white font-bold mb-2">Участие в ивентах</h3>
            <p className="text-gray-400 text-sm">Специальные ивенты с увеличенным опытом</p>
          </div>
        </div>
      </div>
    </div>
  );
}
