import { Layers, Users, Crown, TrendingUp, Send, CheckCircle, XCircle, UserPlus, UserMinus, BarChart3 } from "lucide-react";
import { useState } from "react";

export function Stacks() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedStack, setSelectedStack] = useState<string | null>(null);

  const myStack = {
    id: 1,
    name: "Elite Squad",
    leader: "CoolLeader#1234",
    isLeader: true,
    members: 12,
    maxMembers: 15,
    totalActivity: 8500,
    myActivity: 450,
  };

  const topStacks = [
    { rank: 1, name: "Pro Gamers", leader: "ProPlayer#5678", members: 15, activity: 12500, isFull: true },
    { rank: 2, name: "Night Owls", leader: "Nightfall#9012", members: 14, activity: 11200, isFull: false },
    { rank: 3, name: "Elite Squad", leader: "CoolLeader#1234", members: 12, activity: 8500, isFull: false },
    { rank: 4, name: "Dream Team", leader: "DreamBoss#3333", members: 10, activity: 7800, isFull: false },
    { rank: 5, name: "Silent Squad", leader: "Silent#4444", members: 8, activity: 6500, isFull: false },
  ];

  const stackMembers = [
    { username: "CoolLeader#1234", activity: 1200, role: "Лидер", joinDate: "15.01.2025" },
    { username: "Player1#1111", activity: 890, role: "Участник", joinDate: "18.01.2025" },
    { username: "Player2#2222", activity: 750, role: "Участник", joinDate: "20.01.2025" },
    { username: "Player3#3333", activity: 650, role: "Участник", joinDate: "22.01.2025" },
    { username: "Player4#4444", activity: 520, role: "Участник", joinDate: "25.01.2025" },
  ];

  const pendingApplications = [
    { username: "NewPlayer#5555", activity: 340, appliedDate: "10.05.2026" },
    { username: "ProGamer#6666", activity: 580, appliedDate: "11.05.2026" },
  ];

  const myApplications = [
    { stackName: "Dream Team", status: "pending" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <Layers className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Стаки</h1>
          <p className="text-gray-400">Присоединяйтесь к команде или создайте свою</p>
        </div>
      </div>

      {myStack ? (
        <>
          <div className="bg-gradient-to-r from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30 rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold text-white">{myStack.name}</h2>
                  {myStack.isLeader && (
                    <div className="px-2 py-1 bg-[#9482AE] text-white rounded text-xs font-bold flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      Лидер
                    </div>
                  )}
                </div>
                <p className="text-gray-400 flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#9482AE]" />
                  Лидер: {myStack.leader}
                </p>
              </div>
              {!myStack.isLeader && (
                <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all">
                  Покинуть стак
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-[#9482AE]" />
                  <p className="text-gray-400 text-sm">Участники</p>
                </div>
                <p className="text-2xl font-bold text-white">{myStack.members}/{myStack.maxMembers}</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#9482AE]" />
                  <p className="text-gray-400 text-sm">Общая активность</p>
                </div>
                <p className="text-2xl font-bold text-white">{myStack.totalActivity.toLocaleString()}</p>
              </div>
              <div className="bg-[#2a2a2a] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-[#b8a5d6]" />
                  <p className="text-gray-400 text-sm">Ваша активность</p>
                </div>
                <p className="text-2xl font-bold text-white">{myStack.myActivity.toLocaleString()}</p>
              </div>
            </div>

            <div className="bg-[#2a2a2a] rounded-lg p-3">
              <p className="text-gray-400 text-sm mb-1">Заполненность стака</p>
              <div className="w-full bg-[#3B3B3B] rounded-full h-2">
                <div
                  className="bg-[#9482AE] h-2 rounded-full"
                  style={{ width: `${(myStack.members / myStack.maxMembers) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {myStack.isLeader && (
            <>
              <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#9482AE]" />
                  Детальная статистика стака
                </h2>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-[#3B3B3B] rounded-lg p-4 text-center">
                    <p className="text-gray-400 text-sm mb-1">Среднее время в войсе</p>
                    <p className="text-2xl font-bold text-white">142ч</p>
                  </div>
                  <div className="bg-[#3B3B3B] rounded-lg p-4 text-center">
                    <p className="text-gray-400 text-sm mb-1">Активность за неделю</p>
                    <p className="text-2xl font-bold text-white">+1250</p>
                  </div>
                  <div className="bg-[#3B3B3B] rounded-lg p-4 text-center">
                    <p className="text-gray-400 text-sm mb-1">Ваш бонус опыта</p>
                    <p className="text-2xl font-bold text-[#9482AE]">+600</p>
                  </div>
                  <div className="bg-[#3B3B3B] rounded-lg p-4 text-center">
                    <p className="text-gray-400 text-sm mb-1">Ваш бонус монет</p>
                    <p className="text-2xl font-bold text-[#9482AE]">+450</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">Участники стака</h3>
                <div className="space-y-2">
                  {stackMembers.map((member, index) => (
                    <div key={index} className="bg-[#3B3B3B] rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#9482AE]/20 rounded-full flex items-center justify-center">
                          {member.role === "Лидер" ? <Crown className="w-5 h-5 text-[#9482AE]" /> : <Users className="w-5 h-5 text-gray-400" />}
                        </div>
                        <div>
                          <p className="text-white font-bold">{member.username}</p>
                          <p className="text-gray-400 text-sm">{member.role} • Вступил {member.joinDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-gray-400 text-sm">Активность</p>
                          <p className="text-white font-bold">{member.activity}</p>
                        </div>
                        {member.role !== "Лидер" && (
                          <button className="p-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all">
                            <UserMinus className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {pendingApplications.length > 0 && (
                <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-[#9482AE]" />
                    Заявки на вступление ({pendingApplications.length})
                  </h2>
                  <div className="space-y-3">
                    {pendingApplications.map((app, index) => (
                      <div key={index} className="bg-[#3B3B3B] rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <p className="text-white font-bold">{app.username}</p>
                          <p className="text-gray-400 text-sm">Активность: {app.activity} • Подал {app.appliedDate}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Принять
                          </button>
                          <button className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all flex items-center gap-1">
                            <XCircle className="w-4 h-4" />
                            Отклонить
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-8 text-center">
          <Layers className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Вы не состоите ни в одном стаке</h2>
          <p className="text-gray-400 mb-4">Создайте свой стак или подайте заявку на вступление</p>
          <button className="px-6 py-3 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all">
            Создать стак
          </button>
        </div>
      )}

      {!myStack.isLeader && myApplications.length > 0 && (
        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Send className="w-5 h-5 text-[#9482AE]" />
            Мои заявки
          </h2>
          <div className="space-y-3">
            {myApplications.map((app, index) => (
              <div key={index} className="bg-[#3B3B3B] rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-bold">{app.stackName}</p>
                  <p className="text-gray-400 text-sm">Статус: Ожидание</p>
                </div>
                <div className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm">
                  На рассмотрении
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Доступные стаки</h2>
        <div className="space-y-3">
          {topStacks.map((stack) => (
            <div key={stack.rank} className="bg-[#3B3B3B] rounded-lg p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-[#9482AE]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#9482AE] font-bold">#{stack.rank}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{stack.name}</h3>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  {stack.leader}
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Участники</p>
                <p className="text-white font-bold">{stack.members}/15</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Активность</p>
                <p className="text-white font-bold">{stack.activity.toLocaleString()}</p>
              </div>
              {!myStack && (
                <button
                  onClick={() => {
                    setSelectedStack(stack.name);
                    setShowApplicationModal(true);
                  }}
                  disabled={stack.isFull}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    stack.isFull
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-[#9482AE] text-white hover:bg-[#7c6a9a]"
                  }`}
                >
                  {stack.isFull ? "Заполнен" : "Подать заявку"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2a2a2a] border border-[#9482AE]/30 rounded-xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-white mb-4">Подать заявку в стак</h2>
            <p className="text-gray-400 mb-4">Вы хотите подать заявку в стак "{selectedStack}"?</p>
            <p className="text-gray-300 text-sm mb-6">
              Лидер стака рассмотрит вашу заявку и примет решение. Вы получите уведомление о результате.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedStack(null);
                }}
                className="flex-1 px-4 py-2 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#2a2a2a] transition-all"
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  setShowApplicationModal(false);
                  setSelectedStack(null);
                }}
                className="flex-1 px-4 py-2 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all"
              >
                Подать заявку
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#7c6a9a]/10 border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <Crown className="w-5 h-5 text-[#9482AE]" />
          Преимущества лидера стака
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#9482AE]" />
            +50% к опыту за активность участников
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#9482AE]" />
            +30% к валюте за активность участников
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#9482AE]" />
            Эксклюзивная роль "Лидер стака" в Discord
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#9482AE]" />
            Право управлять составом стака
          </li>
        </ul>
      </div>
    </div>
  );
}
