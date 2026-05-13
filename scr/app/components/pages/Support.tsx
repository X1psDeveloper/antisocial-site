import { HelpCircle, MessageCircle, Mail, Book, Send } from "lucide-react";

export function Support() {
  const faqs = [
    {
      question: "Как получить бесплатные монеты?",
      answer: "Бесплатные монеты начисляются автоматически за активность в войсе Discord (10 монет за каждые 10 минут) и за выполнение ежедневных и еженедельных заданий.",
    },
    {
      question: "Что такое стаки и как в них вступить?",
      answer: "Стаки - это команды игроков. Вы можете создать свой стак или подать заявку на вступление в существующий. Лидеры стаков получают бонусы за активность участников.",
    },
    {
      question: "Как получить мерч с никнеймом?",
      answer: "Достигните 20-го уровня боевого пропуска с премиум доступом. После этого вы сможете выбрать тип мерча и указать адрес доставки.",
    },
    {
      question: "Можно ли вернуть премиум монеты?",
      answer: "Возврат премиум монет возможен в течение 14 дней с момента покупки, если они не были потрачены. Обратитесь в поддержку через форму ниже.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <HelpCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Поддержка</h1>
          <p className="text-gray-400">Мы всегда готовы помочь</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-[#9482AE]/20 to-[#7c6a9a]/20 border border-[#9482AE]/30 rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
          <div className="w-12 h-12 bg-[#9482AE]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <MessageCircle className="w-6 h-6 text-[#9482AE]" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Discord поддержка</h3>
          <p className="text-gray-400 text-sm">Средний ответ: 10 мин</p>
        </div>

        <div className="bg-gradient-to-br from-[#7c6a9a]/20 to-[#6b5b8e]/20 border border-[#7c6a9a]/30 rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
          <div className="w-12 h-12 bg-[#7c6a9a]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Mail className="w-6 h-6 text-[#7c6a9a]" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Email</h3>
          <p className="text-gray-400 text-sm">support@antisocial.gg</p>
        </div>

        <div className="bg-gradient-to-br from-[#b8a5d6]/20 to-[#9482AE]/20 border border-[#b8a5d6]/30 rounded-xl p-6 text-center hover:scale-105 transition-transform cursor-pointer">
          <div className="w-12 h-12 bg-[#b8a5d6]/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Book className="w-6 h-6 text-[#b8a5d6]" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">База знаний</h3>
          <p className="text-gray-400 text-sm">50+ статей помощи</p>
        </div>
      </div>

      <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#3B3B3B] rounded-lg p-4 border border-[#9482AE]/10">
              <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#9482AE]/10 to-[#7c6a9a]/10 border border-[#9482AE]/20 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Не нашли ответ?</h2>
        <p className="text-gray-400 mb-4">Отправьте нам сообщение и мы свяжемся с вами в ближайшее время</p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Ваш Discord никнейм"
            className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#9482AE] transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#9482AE] transition-colors"
          />
          <select className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white focus:outline-none focus:border-[#9482AE] transition-colors">
            <option value="">Выберите категорию</option>
            <option value="technical">Техническая проблема</option>
            <option>Вопрос о монетах</option>
            <option>Проблема со стаком</option>
            <option>Проблема с боевым пропуском</option>
            <option>Другое</option>
          </select>
          <textarea
            placeholder="Опишите вашу проблему"
            rows={4}
            className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#9482AE] transition-colors resize-none"
          />
          <button className="w-full md:w-auto px-6 py-3 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Отправить сообщение
          </button>
        </div>
      </div>
    </div>
  );
}
