import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import Sidebar from "./components/Sidebar/Sidebar";
import MenuTree from "./components/MenuTree/MenuTree";
import MenuForm from "./components/MenuForm/MenuForm";

import type { Menu as MenuType } from "./types/menu";

export default function App() {
  const [selectedMenu, setSelectedMenu] = useState<MenuType | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Hamburger */}

      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="
      fixed
      top-4
      left-4
      z-40
      md:hidden
      bg-white
      rounded-lg
      shadow-lg
      p-2
    "
        >
          <Menu size={20} />
        </button>
      )}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 overflow-auto">
        <MenuTree onSelect={setSelectedMenu} />
        <MenuForm selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}
