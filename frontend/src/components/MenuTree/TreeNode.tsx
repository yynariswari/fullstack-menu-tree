import { useState } from "react";
import type { Menu } from "../../types/menu";

interface TreeNodeProps {
  menu: Menu;
  onSelect: (menu: Menu) => void;
}

export default function TreeNode({ menu, onSelect }: TreeNodeProps) {
  const [expanded, setExpanded] = useState(true);

  const hasChildren = menu.children && menu.children.length > 0;

  return (
    <div className="ml-4">
      <div
        className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-100 rounded px-2"
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          }

          onSelect(menu);
        }}
      >
        {hasChildren ? <span>{expanded ? "▼" : "▶"}</span> : <span>•</span>}

        <span>{menu.name}</span>
      </div>

      {expanded &&
        menu.children?.map((child) => (
          <TreeNode key={child.id} menu={child} onSelect={onSelect} />
        ))}
    </div>
  );
}
