import { Users, Headphones, Layers, TrendingUp, Sparkles, Trophy, ArrowRight, Zap } from "lucide-react";
import { ButterflyIcon } from "../icons/ButterflyIcon";
import { Card } from "../Card";
import { Button } from "../Button";
import { motion } from "motion/react";

export function Home() {
  const stats = [
    { label: "В войсе сейчас", value: "142", icon: Headphones, color: "#9482AE" },
    { label: "На сервере", value: "2,847", icon: Users, color: "#7c6a9a" },
    { label: "Активных стаков", value: "23", icon: Layers, color: "#b8a5d6" },
    { label: "Участников стаков", value: "456", icon: TrendingUp, color: "#6b5b8e" },
  ];

  const features = [
    {
      icon: Layers,
      title: "Система стаков",
      description: "Создавайте или вступайте в стаки. Лидеры получают бонусы за активность участников.",
      gradient: "from-[#9482AE] to-[#7c6a9a]",
    },
    {
      icon: Headphones,
      title: "Войс активность",
      description: "Просто сидите в войсе и получайте монеты и опыт для прокачки боевого пропуска.",
      gradient: "from-[#7c6a9a] to-[#6b5b8e]",
    },
    {
      icon: Trophy,
      title: "Уникальные награды",
      description: "Получайте эксклюзивные роли, мерч с никнеймом и доступ к закрытым каналам.",
      gradient: "from-[#b8a5d6] to-[#9482AE]",
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 bg-gradient-to-br from-[#9482AE] to-[#7c6a9a] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#9482AE]/50"
            >
              <ButterflyIcon className="w-20 h-20 text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#9482AE] to-[#7c6a9a] rounded-3xl blur-2xl opacity-30"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Добро пожаловать в{" "}
          <span className="bg-gradient-to-r from-[#9482AE] via-[#b8a5d6] to-[#9482AE] bg-clip-text text-transparent animate-gradient">
            Antisocial
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-xl max-w-2xl mx-auto"
        >
          Discord сервер с уникальной системой стаков, наград и активностей
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="p-6 group">
                <div className="flex flex-col items-center text-center space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center relative"
                    style={{ backgroundColor: stat.color + "20" }}
                  >
                    <Icon className="w-7 h-7 transition-all duration-300 group-hover:scale-110" style={{ color: stat.color }} />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50"
                      style={{ backgroundColor: stat.color }}
                    />
                  </motion.div>
                  <div>
                    <motion.p
                      className="text-4xl font-bold text-white mb-1"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card gradient className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Как это работает?</h2>
              <p className="text-gray-300 text-lg">
                Заходите в войс Discord, общайтесь с друзьями и получайте награды! Вступайте в стаки, выполняйте задания и прокачивайте боевой пропуск.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-[#3B3B3B] px-4 py-2 rounded-xl border border-[#9482AE]/20"
                >
                  <Sparkles className="w-4 h-4 text-[#9482AE]" />
                  <span className="text-white text-sm font-medium">Бесплатные монеты</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-[#3B3B3B] px-4 py-2 rounded-xl border border-[#9482AE]/20"
                >
                  <Trophy className="w-4 h-4 text-[#9482AE]" />
                  <span className="text-white text-sm font-medium">Эксклюзивные награды</span>
                </motion.div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Button
                variant="primary"
                icon={ArrowRight}
                onClick={() => window.open("https://discord.gg/antisocial", "_blank")}
              >
                Присоединиться к Discord
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              <Card className="p-6 h-full group">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 relative overflow-hidden`}
                >
                  <Icon className="w-7 h-7 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: 0.1 }}
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#9482AE] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#9482AE]" />
            О проекте Antisocial
          </h2>
          <div className="space-y-3 text-gray-300 leading-relaxed">
            <p>
              <strong className="text-white">Antisocial</strong> - это уникальный Discord сервер, где ваша активность напрямую влияет на получаемые награды.
            </p>
            <p>
              Мы создали систему стаков, которая позволяет объединяться в команды. Лидеры стаков получают дополнительный опыт и валюту за каждого активного участника.
            </p>
            <p>
              У нас есть два типа валюты: <span className="text-[#9482AE] font-bold">бесплатные монеты</span> (за войс и задания) и <span className="text-[#b8a5d6] font-bold">премиум монеты</span> (за донат).
            </p>
            <p>
              Прокачивайте боевой пропуск и получите в конце сезона <strong className="text-white">кастомный мерч с вашим никнеймом</strong>!
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
