import { useEffect, useState } from "react";
import { getMenus } from "../../services/menuApi";
import SearchBar from "../SearchBar/SearchBar";
import type { Menu } from "../../types/menu";
import TreeNode from "./TreeNode";

interface MenuTreeProps {
  onSelect: (menu: Menu) => void;
}

const filterTree = (nodes: Menu[], keyword: string): Menu[] => {
  return nodes
    .map((node) => {
      const filteredChildren = node.children
        ? filterTree(node.children, keyword)
        : [];

      const matches = node.name.toLowerCase().includes(keyword.toLowerCase());

      if (matches || filteredChildren.length > 0) {
        return {
          ...node,
          children: filteredChildren,
        };
      }

      return null;
    })
    .filter(Boolean) as Menu[];
};

export default function MenuTree({ onSelect }: MenuTreeProps) {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredMenus = search ? filterTree(menus, search) : menus;

  if (loading) {
    return <div className="w-1/2 border-r bg-white p-6">Loading...</div>;
  }

  return (
    <div className="w-1/2 border-r bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Menu Tree</h2>

      <SearchBar value={search} onChange={setSearch} />

      {filteredMenus.length > 0 ? (
        filteredMenus.map((menu) => (
          <TreeNode key={menu.id} menu={menu} onSelect={onSelect} />
        ))
      ) : (
        <p className="text-gray-500">No menu found</p>
      )}
    </div>
  );
}
