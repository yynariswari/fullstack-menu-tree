import { useEffect, useState } from "react";
import { getMenus } from "../../services/menuApi";
import type { Menu } from "../../types/menu";
import TreeNode from "./TreeNode";

export default function MenuTree() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const data = await getMenus();
      setMenus(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="w-1/2 border-r bg-white p-6">Loading...</div>;
  }

  return (
    <div className="w-1/2 border-r bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Menu Tree</h2>

      {menus.map((menu) => (
        <TreeNode key={menu.id} menu={menu} />
      ))}
    </div>
  );
}
