import {
  LayoutGrid,
  Folder,
  Boxes,
  Trophy,
  Menu as MenuIcon,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          md:relative
          z-50

          bg-[#0A56B5]
          text-white

          p-5
          flex
          flex-col

          min-h-screen
          rounded-r-3xl

          transition-all
          duration-300

          ${
            sidebarOpen
              ? "w-64 translate-x-0"
              : "w-20 -translate-x-full md:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between mb-10">
          {sidebarOpen && (
            <div>
              <h1 className="font-bold text-sm leading-tight">
                Solusi
                <br />
                Teknologi
                <br />
                Kreatif
              </h1>
            </div>
          )}

          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setSidebarOpen(false);
              } else {
                setSidebarOpen(!sidebarOpen);
              }
            }}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <MenuIcon size={20} />
          </button>
        </div>

        {/* Menu Group */}
        <div className="bg-[#1565D8] rounded-2xl p-3 space-y-2">
          <SidebarItem
            icon={<Folder size={18} />}
            label="Systems"
            collapsed={!sidebarOpen}
          />

          <SidebarItem
            icon={<LayoutGrid size={18} />}
            label="System Code"
            collapsed={!sidebarOpen}
          />

          <SidebarItem
            icon={<LayoutGrid size={18} />}
            label="Properties"
            collapsed={!sidebarOpen}
          />

          <SidebarItem
            active
            icon={<Boxes size={18} />}
            label="Menus"
            collapsed={!sidebarOpen}
          />

          <SidebarItem
            icon={<LayoutGrid size={18} />}
            label="API List"
            collapsed={!sidebarOpen}
          />
        </div>

        {/* Bottom Menu */}
        <div className="mt-6 space-y-2">
          <SidebarItem
            icon={<Folder size={18} />}
            label="Users & Group"
            collapsed={!sidebarOpen}
          />

          <SidebarItem
            icon={<Trophy size={18} />}
            label="Competition"
            collapsed={!sidebarOpen}
          />
        </div>
      </aside>
    </>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  collapsed?: boolean;
}

function SidebarItem({
  icon,
  label,
  active = false,
  collapsed = false,
}: SidebarItemProps) {
  return (
    <button
      title={collapsed ? label : ""}
      className={`
        w-full
        flex
        items-center

        ${collapsed ? "justify-center" : "gap-3"}

        px-4
        py-3

        rounded-xl
        text-sm
        font-medium

        transition

        ${active ? "bg-white text-gray-900" : "text-white hover:bg-white/10"}
      `}
    >
      {icon}

      {!collapsed && <span>{label}</span>}
    </button>
  );
}
