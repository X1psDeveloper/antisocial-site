import { User, Award, TrendingUp, Target, Headphones, Trophy, Crown, Layers, ExternalLink, Edit } from "lucide-react";
import { CoinIcon } from "../icons/CoinIcon";
import { GemIcon } from "../icons/GemIcon";
import { Card } from "../Card";
import { Button } from "../Button";
import { motion } from "motion/react";
import { useState } from "react";
import { Modal } from "../Modal";

export function Profile() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConnectDiscord, setShowConnectDiscord] = useState(false);

  const discordUser = {
    username: "CoolUser",
    discriminator: "1234",
    avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
    banner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=200&fit=crop",
    connected: true,
    joinDate: "15 января 2025",
  };

  const stackInfo = {
    isOwner: true,
    stackName: "Elite Squad",
    members: 12,
    role: "Лидер",
  };

  const detailedStats = [
    { label: "Часов в войсе", value: "125", icon: Headphones, color: "#9482AE", description: "За все время" },
    { label: "Уровень пропуска", value: "8", icon: Trophy, color: "#7c6a9a", description: "Сезон 1" },
    { label: "Рейтинг активности", value: "#42", icon: TrendingUp, color: "#b8a5d6", description: "Из 2847 игроков" },
    { label: "Выполнено заданий", value: "47", icon: Target, color: "#6b5b8e", description: "Всего" },
  ];

  const additionalStats = [
    { label: "Войс за неделю", value: "18ч" },
    { label: "Войс за месяц", value: "72ч" },
    { label: "Сообщений отправлено", value: "1,234" },
    { label: "Друзей приглашено", value: "5" },
  ];

  const achievements = [
    { id: 1, name: "Первый шаг", description: "Присоединитесь к серверу", icon: "🎯", unlocked: true },
    { id: 2, name: "Активист", description: "Просидите 100 часов в войсе", icon: "🎤", unlocked: true },
    { id: 3, name: "Лидер стака", description: "Создайте свой стак", icon: "👑", unlocked: true },
    { id: 4, name: "Донатер", description: "Совершите первый донат", icon: "💎", unlocked: false },
    { id: 5, name: "Легенда", description: "Достигните топ-10 по активности", icon: "🏆", unlocked: false },
    { id: 6, name: "Мастер заданий", description: "Выполните 100 заданий", icon: "✅", unlocked: true },
  ];

  const currency = {
    free: 2450,
    premium: 150,
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden p-0">
        {discordUser.connected && discordUser.banner && (
          <div className="h-32 md:h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${discordUser.banner})` }}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2a2a2a]" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowEditModal(true)}
              className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-all"
            >
              <Edit className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        )}
        <div className="p-6 relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-16 md:-mt-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer"
              onClick={() => setShowEditModal(true)}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#2a2a2a] border-4 border-[#2a2a2a] flex items-center justify-center overflow-hidden shadow-2xl">
                {discordUser.connected ? (
                  <img src={discordUser.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-gray-600" />
                )}
              </div>
              {discordUser.connected && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-[#2a2a2a] flex items-center justify-center shadow-lg shadow-green-500/50"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </motion.div>
              )}
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-2">
                <h1 className="text-3xl font-bold text-white">
                  {discordUser.connected ? `${discordUser.username}#${discordUser.discriminator}` : "Не подключен"}
                </h1>
                {discordUser.connected && (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-xs font-bold flex items-center gap-1 border border-green-500/30"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Discord
                  </motion.div>
                )}
              </div>
              <p className="text-gray-400 mb-3">На сервере с {discordUser.joinDate}</p>
              {stackInfo && (
                <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-3 py-1 rounded-lg flex items-center gap-2 ${
                      stackInfo.isOwner
                        ? "bg-gradient-to-r from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30"
                        : "bg-[#3B3B3B] border border-[#9482AE]/20"
                    }`}
                  >
                    {stackInfo.isOwner ? (
                      <Crown className="w-4 h-4 text-[#9482AE]" />
                    ) : (
                      <Layers className="w-4 h-4 text-gray-400" />
                    )}
                    <span className={stackInfo.isOwner ? "text-[#9482AE] font-bold" : "text-gray-300"}>
                      {stackInfo.role} стака "{stackInfo.stackName}"
                    </span>
                  </motion.div>
                  <div className="px-3 py-1 bg-[#3B3B3B] rounded-lg text-gray-400 text-sm border border-[#9482AE]/20">
                    {stackInfo.members} участников
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card gradient className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <CoinIcon className="w-6 h-6 text-[#9482AE]" premium={false} />
              <p className="text-gray-400 text-sm">Бесплатные монеты</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">{currency.free.toLocaleString()}</p>
            <p className="text-gray-400 text-xs">За войс и задания</p>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
          <Card gradient className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <GemIcon className="w-6 h-6 text-[#b8a5d6]" />
              <p className="text-[#b8a5d6] text-sm">Премиум монеты</p>
            </div>
            <p className="text-4xl font-bold text-white mb-1">{currency.premium.toLocaleString()}</p>
            <p className="text-gray-400 text-xs">За донат</p>
          </Card>
        </motion.div>
      </div>

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Основная статистика</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          {detailedStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div className="bg-[#3B3B3B] border border-[#9482AE]/20 rounded-xl p-5 text-center group hover:border-[#9482AE]/40 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: stat.color + "20" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: stat.color }} />
                  </motion.div>
                  <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-500 text-xs">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <h3 className="text-lg font-bold text-white mb-3">Детальная статистика</h3>
        <div className="grid md:grid-cols-4 gap-3">
          {additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#3B3B3B] rounded-lg p-4 text-center border border-[#9482AE]/10 hover:border-[#9482AE]/30 transition-all"
            >
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Award className="w-6 h-6 text-[#9482AE]" />
          Достижения ({achievements.filter((a) => a.unlocked).length}/{achievements.length})
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03, x: 4 }}
            >
              <div
                className={`p-4 rounded-xl border transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 border-[#9482AE]/30"
                    : "bg-[#3B3B3B] border-[#3B3B3B] opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{achievement.name}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                  {achievement.unlocked && <Award className="w-6 h-6 text-[#9482AE]" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>

      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Редактировать профиль">
        <div className="space-y-4">
          <p className="text-gray-400">Эта функция будет доступна после подключения к Discord</p>
          <Button variant="primary" onClick={() => setShowEditModal(false)} className="w-full">
            Закрыть
          </Button>
        </div>
      </Modal>
    </div>
  );
}
