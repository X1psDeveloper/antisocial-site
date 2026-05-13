import { ShoppingBag, Sparkles, Package, DollarSign, Gift, Star, Zap } from "lucide-react";

export function Shop() {
  const cases = [
    {
      id: 1,
      name: "Базовый кейс",
      price: 500,
      currency: "free",
      image: "📦",
      rarity: "common",
      description: "Обычные награды и роли",
    },
    {
      id: 2,
      name: "Редкий кейс",
      price: 1500,
      currency: "free",
      image: "🎁",
      rarity: "rare",
      description: "Редкие роли и стикеры",
    },
    {
      id: 3,
      name: "Эпический кейс",
      price: 200,
      currency: "premium",
      image: "✨",
      rarity: "epic",
      description: "Эпические роли и бусты",
    },
    {
      id: 4,
      name: "Легендарный кейс",
      price: 500,
      currency: "premium",
      image: "💎",
      rarity: "legendary",
      description: "Легендарные награды!",
    },
  ];

  const premiumCurrency = [
    { amount: 100, price: 99, bonus: 0 },
    { amount: 250, price: 249, bonus: 10 },
    { amount: 500, price: 449, bonus: 50 },
    { amount: 1000, price: 849, bonus: 150 },
  ];

  const items = [
    {
      id: 1,
      name: "VIP роль (30 дней)",
      price: 800,
      currency: "free",
      image: "👑",
      category: "Роли",
    },
    {
      id: 2,
      name: "Кастомный цвет ника",
      price: 300,
      currency: "premium",
      image: "🎨",
      category: "Кастомизация",
    },
    {
      id: 3,
      name: "Набор стикеров",
      price: 600,
      currency: "free",
      image: "😎",
      category: "Стикеры",
    },
    {
      id: 4,
      name: "Буст опыта x2 (7 дней)",
      price: 150,
      currency: "premium",
      image: "⚡",
      category: "Бусты",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "#FFD700";
      case "epic":
        return "#9482AE";
      case "rare":
        return "#4A90E2";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Магазин</h1>
          <p className="text-gray-400">Покупайте предметы и открывайте кейсы</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#9482AE]" />
            <p className="text-gray-400">Ваш баланс</p>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-white">2,450</p>
            <p className="text-gray-400">бесплатных монет</p>
          </div>
          <p className="text-gray-400 text-sm mt-2">Получайте за войс и задания</p>
        </div>

        <div className="bg-gradient-to-br from-[#9482AE]/20 to-[#b8a5d6]/20 border border-[#9482AE]/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#b8a5d6]" />
            <p className="text-[#b8a5d6]">Премиум баланс</p>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-white">150</p>
            <p className="text-[#b8a5d6]">премиум монет</p>
          </div>
          <button className="mt-3 px-4 py-2 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all text-sm flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Пополнить
          </button>
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Package className="w-6 h-6 text-[#9482AE]" />
          Кейсы
        </h2>
        <p className="text-gray-400 mb-4 text-sm">Откройте кейс и получите случайную награду!</p>
        <div className="grid md:grid-cols-4 gap-4">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-[#3B3B3B] border rounded-xl overflow-hidden hover:scale-105 transition-transform group"
              style={{ borderColor: getRarityColor(caseItem.rarity) + "40" }}
            >
              <div
                className="h-32 flex items-center justify-center text-6xl"
                style={{ backgroundColor: getRarityColor(caseItem.rarity) + "20" }}
              >
                {caseItem.image}
              </div>
              <div className="p-4">
                <div className="px-2 py-1 rounded text-xs uppercase font-bold mb-2 inline-block" style={{ backgroundColor: getRarityColor(caseItem.rarity) + "30", color: getRarityColor(caseItem.rarity) }}>
                  {caseItem.rarity}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{caseItem.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{caseItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Sparkles className={`w-4 h-4 ${caseItem.currency === "premium" ? "text-[#b8a5d6]" : "text-[#9482AE]"}`} />
                    <span className={`font-bold ${caseItem.currency === "premium" ? "text-[#b8a5d6]" : "text-white"}`}>
                      {caseItem.price}
                    </span>
                  </div>
                  <button className="px-3 py-1 bg-[#9482AE] text-white rounded hover:bg-[#7c6a9a] transition-all text-sm">
                    Открыть
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#b8a5d6]/10 border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-[#b8a5d6]" />
          Купить премиум монеты
        </h2>
        <p className="text-gray-400 mb-4 text-sm">Поддержите проект и получите бонусные монеты</p>
        <div className="grid md:grid-cols-4 gap-4">
          {premiumCurrency.map((pack) => (
            <div
              key={pack.amount}
              className="bg-[#2a2a2a] border border-[#b8a5d6]/30 rounded-xl p-5 hover:border-[#b8a5d6]/50 transition-all relative"
            >
              {pack.bonus > 0 && (
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-[#b8a5d6] text-white rounded-full text-xs font-bold flex items-center gap-1">
                  <Gift className="w-3 h-3" />
                  +{pack.bonus}
                </div>
              )}
              <div className="text-center mb-4">
                <Sparkles className="w-12 h-12 text-[#b8a5d6] mx-auto mb-2" />
                <p className="text-3xl font-bold text-white mb-1">{pack.amount + pack.bonus}</p>
                <p className="text-gray-400 text-sm">премиум монет</p>
              </div>
              <button className="w-full px-4 py-3 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all font-bold">
                {pack.price}₽
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Star className="w-6 h-6 text-[#9482AE]" />
          Предметы магазина
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="bg-[#3B3B3B] border border-[#9482AE]/20 rounded-xl overflow-hidden hover:border-[#9482AE]/50 transition-all">
              <div className="bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 p-8 flex items-center justify-center text-5xl">
                {item.image}
              </div>
              <div className="p-4">
                <div className="px-2 py-1 bg-[#3B3B3B] text-gray-400 rounded text-xs mb-2 inline-block">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Sparkles className={`w-4 h-4 ${item.currency === "premium" ? "text-[#b8a5d6]" : "text-[#9482AE]"}`} />
                    <span className={`font-bold ${item.currency === "premium" ? "text-[#b8a5d6]" : "text-white"}`}>
                      {item.price}
                    </span>
                  </div>
                  <button className="px-3 py-1 bg-[#9482AE] text-white rounded hover:bg-[#7c6a9a] transition-all text-sm">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
