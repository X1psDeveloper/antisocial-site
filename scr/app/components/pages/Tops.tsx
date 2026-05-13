import { Trophy, TrendingUp, Layers, DollarSign, Headphones } from "lucide-react";
import { useState } from "react";

type TopType = "activity" | "stacks" | "donate";

export function Tops() {
  const [activeTop, setActiveTop] = useState<TopType>("activity");

  const activityTop = [
    { rank: 1, username: "VoiceKing#1234", value: "450ч", subtitle: "в войсе этот месяц" },
    { rank: 2, username: "ActiveUser#5678", value: "420ч", subtitle: "в войсе этот месяц" },
    { rank: 3, username: "TalkMaster#9012", value: "385ч", subtitle: "в войсе этот месяц" },
    { rank: 4, username: "ChatPro#3456", value: "340ч", subtitle: "в войсе этот месяц" },
    { rank: 5, username: "VoiceHero#7890", value: "315ч", subtitle: "в войсе этот месяц" },
    { rank: 6, username: "Speaker#1111", value: "290ч", subtitle: "в войсе этот месяц" },
    { rank: 7, username: "Talker#2222", value: "275ч", subtitle: "в войсе этот месяц" },
    { rank: 8, username: "VoicePro#3333", value: "260ч", subtitle: "в войсе этот месяц" },
  ];

  const stacksTop = [
    { rank: 1, username: "StackLeader#1111", value: "Elite Squad", subtitle: "15 участников • 12500 активности" },
    { rank: 2, username: "TeamBoss#2222", value: "Pro Gamers", subtitle: "14 участников • 11200 активности" },
    { rank: 3, username: "ClanChief#3333", value: "Night Owls", subtitle: "13 участников • 10500 активности" },
    { rank: 4, username: "LeaderPro#4444", value: "Dream Team", subtitle: "12 участников • 9800 активности" },
    { rank: 5, username: "BossMaster#5555", value: "Silent Squad", subtitle: "11 участников • 8900 активности" },
  ];

  const donateTop = [
    { rank: 1, username: "Whale#9999", value: "5,000₽", subtitle: "всего поддержал проект" },
    { rank: 2, username: "Supporter#8888", value: "3,500₽", subtitle: "всего поддержал проект" },
    { rank: 3, username: "Patron#7777", value: "2,800₽", subtitle: "всего поддержал проект" },
    { rank: 4, username: "Donor#6666", value: "2,100₽", subtitle: "всего поддержал проект" },
    { rank: 5, username: "Helper#5555", value: "1,650₽", subtitle: "всего поддержал проект" },
  ];

  const currentUser = {
    activityRank: 42,
    activityValue: "125ч",
    stackRank: null as number | null,
    donateRank: null as number | null,
  };

  const topTabs = [
    { id: "activity" as TopType, label: "По активности", icon: Headphones, color: "#9482AE" },
    { id: "stacks" as TopType, label: "По стакам", icon: Layers, color: "#7c6a9a" },
    { id: "donate" as TopType, label: "По донату", icon: DollarSign, color: "#b8a5d6" },
  ];

  const getCurrentData = () => {
    switch (activeTop) {
      case "activity":
        return activityTop;
      case "stacks":
        return stacksTop;
      case "donate":
        return donateTop;
    }
  };

  const getCurrentIcon = () => {
    switch (activeTop) {
      case "activity":
        return Headphones;
      case "stacks":
        return Layers;
      case "donate":
        return DollarSign;
    }
  };

  const getCurrentColor = () => {
    switch (activeTop) {
      case "activity":
        return "#9482AE";
      case "stacks":
        return "#7c6a9a";
      case "donate":
        return "#b8a5d6";
    }
  };

  const getCurrentUserRank = () => {
    switch (activeTop) {
      case "activity":
        return currentUser.activityRank;
      case "stacks":
        return currentUser.stackRank;
      case "donate":
        return currentUser.donateRank;
    }
  };

  const getCurrentUserValue = () => {
    switch (activeTop) {
      case "activity":
        return currentUser.activityValue;
      case "stacks":
        return "Не лидер стака";
      case "donate":
        return "Нет доната";
    }
  };

  const renderLeaderboard = () => {
    const data = getCurrentData();
    const Icon = getCurrentIcon();
    const color = getCurrentColor();
    const userRank = getCurrentUserRank();
    const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

    return (
      <div className="space-y-3">
        {data.map((user) => {
          const isTop3 = user.rank <= 3;

          return (
            <div
              key={user.rank}
              className={`bg-[#2a2a2a] border rounded-xl p-4 flex items-center gap-4 ${
                isTop3 ? "border-[#9482AE]/50" : "border-[#9482AE]/20"
              }`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center font-bold"
                style={{
                  backgroundColor: isTop3 ? medalColors[user.rank - 1] + "20" : color + "20",
                  color: isTop3 ? medalColors[user.rank - 1] : color,
                }}
              >
                #{user.rank}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{user.username}</h3>
                <p className="text-gray-400 text-sm">{user.subtitle}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">{user.value}</p>
              </div>
            </div>
          );
        })}
        {userRank && userRank > 5 && (
          <div className="bg-[#9482AE]/10 border border-[#9482AE]/30 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#9482AE]/20 rounded-lg flex items-center justify-center font-bold text-[#9482AE]">
              #{userRank}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">Ваша позиция</h3>
              <p className="text-gray-400 text-sm">Продолжайте активность!</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-white">{getCurrentUserValue()}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <Trophy className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Топы</h1>
          <p className="text-gray-400">Лидеры сообщества по разным категориям</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {topTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTop === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTop(tab.id)}
              className={`p-6 rounded-xl text-center transition-all ${
                isActive
                  ? "bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30"
                  : "bg-[#2a2a2a] border border-[#9482AE]/20 hover:border-[#9482AE]/30"
              }`}
            >
              <Icon className={`w-8 h-8 mx-auto mb-2`} style={{ color: isActive ? tab.color : "#6b7280" }} />
              <p className={`text-sm ${isActive ? "text-white font-bold" : "text-gray-400"}`}>{tab.label}</p>
              {tab.id === "activity" && (
                <p className={`text-3xl font-bold mt-2 ${isActive ? "text-white" : "text-gray-600"}`}>
                  #{currentUser.activityRank}
                </p>
              )}
              {tab.id === "stacks" && (
                <p className={`text-xl font-bold mt-2 ${isActive ? "text-white" : "text-gray-600"}`}>
                  {currentUser.stackRank || "—"}
                </p>
              )}
              {tab.id === "donate" && (
                <p className={`text-xl font-bold mt-2 ${isActive ? "text-white" : "text-gray-600"}`}>
                  {currentUser.donateRank || "—"}
                </p>
              )}
            </button>
          );
        })}
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          {(() => {
            const Icon = getCurrentIcon();
            return <Icon className="w-6 h-6" style={{ color: getCurrentColor() }} />;
          })()}
          {topTabs.find((t) => t.id === activeTop)?.label}
        </h2>
        {renderLeaderboard()}
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#7c6a9a]/10 border border-[#9482AE]/20 rounded-xl p-6 text-center">
        <Trophy className="w-12 h-12 text-[#9482AE] mx-auto mb-3" />
        <h2 className="text-xl font-bold text-white mb-2">Обновление рейтингов</h2>
        <p className="text-gray-400">Рейтинги обновляются каждый день в 00:00 по МСК</p>
      </div>
    </div>
  );
}
