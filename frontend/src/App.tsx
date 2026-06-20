import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import MenuTree from "./components/MenuTree/MenuTree";
import MenuForm from "./components/MenuForm/MenuForm";

import type { Menu } from "./types/menu";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1">
        <MenuTree onSelect={setSelectedMenu} />

        <MenuForm selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}
