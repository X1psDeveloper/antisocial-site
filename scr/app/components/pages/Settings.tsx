import { Settings as SettingsIcon, Bell, Volume2, Globe, Shield, Link as LinkIcon } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-[#9482AE] rounded-xl flex items-center justify-center">
          <SettingsIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Настройки</h1>
          <p className="text-gray-400">Настройте аккаунт под себя</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <LinkIcon className="w-5 h-5 text-[#9482AE]" />
            <h2 className="text-xl font-bold text-white">Связанные аккаунты</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-[#3B3B3B]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#5865F2] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold">Discord</p>
                  <p className="text-gray-400 text-sm">CoolUser#1234</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-bold">
                Подключено
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-[#9482AE]" />
            <h2 className="text-xl font-bold text-white">Уведомления</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Уведомления о заданиях</p>
                <p className="text-gray-400 text-sm">Получать напоминания о новых заданиях</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Награды и достижения</p>
                <p className="text-gray-400 text-sm">Уведомления о полученных наградах</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Новости проекта</p>
                <p className="text-gray-400 text-sm">Обновления и новости Antisocial</p>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-[#9482AE]" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Приглашения в стаки</p>
                <p className="text-gray-400 text-sm">Уведомления о заявках в ваш стак</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
          </div>
        </div>

        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-[#9482AE]" />
            <h2 className="text-xl font-bold text-white">Язык и регион</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-white mb-2">Язык интерфейса</p>
              <select className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white focus:outline-none focus:border-[#9482AE]">
                <option>Русский</option>
                <option>English</option>
                <option>Українська</option>
              </select>
            </div>
            <div>
              <p className="text-white mb-2">Часовой пояс</p>
              <select className="w-full px-4 py-3 bg-[#3B3B3B] border border-[#9482AE]/20 rounded-lg text-white focus:outline-none focus:border-[#9482AE]">
                <option>МСК (UTC+3)</option>
                <option>Киев (UTC+2)</option>
                <option>Минск (UTC+3)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#2a2a2a] border border-[#9482AE]/20 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-[#9482AE]" />
            <h2 className="text-xl font-bold text-white">Приватность</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Публичный профиль</p>
                <p className="text-gray-400 text-sm">Разрешить другим видеть ваш профиль</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Показывать статистику</p>
                <p className="text-gray-400 text-sm">Отображать вашу статистику в профиле</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-white font-medium">Приглашения в друзья</p>
                <p className="text-gray-400 text-sm">Разрешить получать приглашения</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#9482AE]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 px-6 py-3 bg-[#9482AE] text-white rounded-lg hover:bg-[#7c6a9a] transition-all">
          Сохранить изменения
        </button>
        <button className="px-6 py-3 bg-[#3B3B3B] text-gray-300 rounded-lg hover:bg-[#2a2a2a] transition-all">
          Отмена
        </button>
      </div>
    </div>
  );
}
