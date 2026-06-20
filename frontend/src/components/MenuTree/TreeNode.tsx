import type { Menu } from "../../types/menu";

interface TreeNodeProps {
  menu: Menu;
}

export default function TreeNode({ menu }: TreeNodeProps) {
  return (
    <div className="ml-4">
      <div className="py-1">📁 {menu.name}</div>

      {menu.children?.map((child) => (
        <TreeNode key={child.id} menu={child} />
      ))}
    </div>
  );
}
