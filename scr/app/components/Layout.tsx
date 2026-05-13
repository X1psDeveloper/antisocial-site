import { Link, Outlet, useLocation } from "react-router";
import { Home, Layers, Trophy, Ticket, CheckSquare, User, HelpCircle, ShoppingBag, Settings as SettingsIcon, Newspaper } from "lucide-react";
import { ButterflyIcon } from "./icons/ButterflyIcon";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: Home },
    { path: "/stacks", label: "Стаки", icon: Layers },
    { path: "/tops", label: "Топы", icon: Trophy },
    { path: "/battle-pass", label: "Боевой пропуск", icon: Ticket },
    { path: "/tasks", label: "Задания", icon: CheckSquare },
    { path: "/profile", label: "Профиль", icon: User },
    { path: "/shop", label: "Магазин", icon: ShoppingBag },
    { path: "/news", label: "Новости", icon: Newspaper },
    { path: "/support", label: "Поддержка", icon: HelpCircle },
    { path: "/settings", label: "Настройки", icon: SettingsIcon },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <nav className="bg-[#2a2a2a] border-b border-[#9482AE]/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#9482AE] to-[#7c6a9a] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-[#9482AE]/50">
                <ButterflyIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-white text-xl font-bold transition-all duration-300 group-hover:text-[#9482AE]">Antisocial</span>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 relative overflow-hidden
                      ${active
                        ? "bg-gradient-to-r from-[#9482AE] to-[#7c6a9a] text-white shadow-lg shadow-[#9482AE]/30"
                        : "text-gray-300 hover:bg-[#3B3B3B] hover:text-white hover:scale-105"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="lg:hidden bg-[#2a2a2a] border-b border-[#9482AE]/20 sticky top-0 z-10">
        <div className="overflow-x-auto">
          <div className="flex gap-2 px-4 py-3 min-w-max">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap
                    ${active
                      ? "bg-gradient-to-r from-[#9482AE] to-[#7c6a9a] text-white shadow-lg shadow-[#9482AE]/30"
                      : "text-gray-300 hover:bg-[#3B3B3B] hover:text-white hover:scale-105"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
