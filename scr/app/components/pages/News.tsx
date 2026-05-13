import { Newspaper, Clock, Calendar, Zap, Users } from "lucide-react";

export function News() {
  const news = [
    {
      id: 1,
      title: "Запуск проекта Antisocial!",
      excerpt: "Мы рады представить вам Antisocial - уникальный Discord сервер с системой стаков и наград",
      date: "2 часа назад",
      category: "Обновления",
      image: "🦋",
      featured: true,
      type: "update",
    },
    {
      id: 2,
      title: "Новая система кейсов",
      excerpt: "Теперь в магазине доступны кейсы с уникальными наградами и ролями",
      date: "5 часов назад",
      category: "Обновления",
      image: "📦",
      featured: false,
      type: "update",
    },
    {
      id: 3,
      title: "Ивент: Двойной опыт на выходных",
      excerpt: "С пятницы по воскресенье получайте x2 опыт за активность в войсе!",
      date: "1 день назад",
      category: "Ивенты",
      image: "⚡",
      featured: false,
      type: "event",
    },
    {
      id: 4,
      title: "Боевой пропуск: Сезон 1",
      excerpt: "Первый сезон боевого пропуска запущен! Прокачивайте уровни и получите мерч",
      date: "2 дня назад",
      category: "Новости",
      image: "🎫",
      featured: false,
      type: "news",
    },
    {
      id: 5,
      title: "Ивент: Конкурс на лучший стак",
      excerpt: "Самый активный стак месяца получит эксклюзивные награды для всех участников",
      date: "3 дня назад",
      category: "Ивенты",
      image: "🏆",
      featured: false,
      type: "event",
    },
    {
      id: 6,
      title: "Обновление: Новые достижения",
      excerpt: "Добавлено 10 новых достижений с уникальными наградами",
      date: "4 дня назад",
      category: "Обновления",
      image: "🎯",
      featured: false,
      type: "update",
    },
  ];

  const upcomingEvents = [
    {
      name: "Турнир стаков",
      date: "15 мая 2026",
      prize: "5000 премиум монет",
    },
    {
      name: "Розыгрыш мерча",
      date: "20 мая 2026",
      prize: "Кастомный мерч",
    },
  ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case "event":
        return { bg: "from-[#b8a5d6]/20 to-[#9482AE]/20", border: "border-[#b8a5d6]/30", text: "text-[#b8a5d6]" };
      case "update":
        return { bg: "from-[#9482AE]/20 to-[#7c6a9a]/20", border: "border-[#9482AE]/30", text: "text-[#9482AE]" };
      default:
        return { bg: "from-[#7c6a9a]/20 to-[#6b5b8e]/20", border: "border-[#7c6a9a]/30", text: "text-[#7c6a9a]" };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <Newspaper className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Новости</h1>
          <p className="text-gray-400">Обновления проекта и предстоящие ивенты</p>
        </div>
      </div>

      {news.filter(n => n.featured).map((item) => {
        const colors = getCategoryColor(item.type);
        return (
          <div key={item.id} className={`bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-xl overflow-hidden hover:scale-[1.01] transition-transform`}>
            <div className="flex flex-col md:flex-row gap-6 p-6">
              <div className="w-full md:w-48 h-48 bg-gradient-to-br from-[#9482AE] to-[#7c6a9a] rounded-xl flex items-center justify-center text-7xl flex-shrink-0">
                {item.image}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 bg-[#9482AE] text-white rounded-full text-sm font-bold`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{item.title}</h2>
                <p className="text-gray-300 mb-4">{item.excerpt}</p>
                <button className="px-4 py-2 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all">
                  Читать далее
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className="bg-gradient-to-r from-[#b8a5d6]/10 to-[#9482AE]/10 border border-[#b8a5d6]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-[#b8a5d6]" />
          Предстоящие ивенты
        </h2>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b8a5d6]/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#b8a5d6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{event.name}</h3>
                  <p className="text-gray-400 text-sm">{event.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Приз</p>
                <p className="text-[#b8a5d6] font-bold">{event.prize}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {news.filter(n => !n.featured).map((item) => {
          const colors = getCategoryColor(item.type);
          return (
            <div key={item.id} className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl overflow-hidden hover:border-[#9482AE]/50 transition-all">
              <div className={`bg-gradient-to-br ${colors.bg} h-32 flex items-center justify-center text-5xl`}>
                {item.image}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 bg-[#9482AE]/20 ${colors.text} rounded text-xs font-bold`}>
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{item.excerpt}</p>
                <button className={`${colors.text} hover:text-white transition-colors text-sm font-medium`}>
                  Читать далее →
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6 text-center">
        <Users className="w-12 h-12 text-[#9482AE] mx-auto mb-3" />
        <h2 className="text-2xl font-bold text-white mb-2">Следите за обновлениями</h2>
        <p className="text-gray-400 mb-4">Подписывайтесь на наши социальные сети, чтобы не пропустить новости</p>
        <div className="flex gap-3 justify-center">
          <button className="px-4 py-2 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#9482AE] hover:text-white transition-all">
            Telegram
          </button>
          <button className="px-4 py-2 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#9482AE] hover:text-white transition-all">
            Discord
          </button>
          <button className="px-4 py-2 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#9482AE] hover:text-white transition-all">
            VK
          </button>
        </div>
      </div>
    </div>
  );
}
