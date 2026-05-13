import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { Stacks } from "./components/pages/Stacks";
import { Tops } from "./components/pages/Tops";
import { BattlePass } from "./components/pages/BattlePass";
import { Tasks } from "./components/pages/Tasks";
import { Profile } from "./components/pages/Profile";
import { Support } from "./components/pages/Support";
import { Shop } from "./components/pages/Shop";
import { Settings } from "./components/pages/Settings";
import { News } from "./components/pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "stacks", Component: Stacks },
      { path: "tops", Component: Tops },
      { path: "battle-pass", Component: BattlePass },
      { path: "tasks", Component: Tasks },
      { path: "profile", Component: Profile },
      { path: "support", Component: Support },
      { path: "shop", Component: Shop },
      { path: "settings", Component: Settings },
      { path: "news", Component: News },
    ],
  },
]);
