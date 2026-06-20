import { useEffect, useState } from "react";
import type { Menu } from "../../types/menu";
import { updateMenu, createMenu, deleteMenu } from "../../services/menuApi";

interface MenuFormProps {
  selectedMenu: Menu | null;
}

export default function MenuForm({ selectedMenu }: MenuFormProps) {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(false);

  useEffect(() => {
    if (selectedMenu && !isCreateMode) {
      setName(selectedMenu.name);
      setParentId(selectedMenu.parent_id ? String(selectedMenu.parent_id) : "");
    }
  }, [selectedMenu, isCreateMode]);

  const handleSave = async () => {
    if (!selectedMenu) return;

    try {
      await updateMenu(selectedMenu.id, {
        name,
        parent_id: parentId ? Number(parentId) : undefined,
      });

      alert("Menu updated successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to update menu");
    }
  };

  const handleCreate = async () => {
    try {
      await createMenu({
        name,
        parent_id: parentId ? Number(parentId) : undefined,
      });

      alert("Menu created successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to create menu");
    }
  };

  const handleDelete = async () => {
    if (!selectedMenu) return;

    const confirmed = window.confirm(`Delete "${selectedMenu.name}" ?`);

    if (!confirmed) return;

    try {
      await deleteMenu(selectedMenu.id);

      alert("Menu deleted successfully");

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Failed to delete menu");
    }
  };

  if (!selectedMenu && !isCreateMode) {
    return (
      <div className="w-1/2 bg-white p-6">
        <h2 className="text-xl font-semibold mb-6">Menu Detail</h2>

        <button
          onClick={() => {
            setIsCreateMode(true);
            setName("");
            setParentId("");
          }}
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Add New Menu
        </button>
      </div>
    );
  }

  return (
    <div className="w-1/2 bg-white p-6">
      <h2 className="text-xl font-semibold mb-6">
        {isCreateMode ? "Create Menu" : "Edit Menu"}
      </h2>

      <div className="space-y-4">
        {!isCreateMode && selectedMenu && (
          <div>
            <label className="block mb-1">ID</label>

            <input
              value={selectedMenu.id}
              disabled
              className="w-full border rounded px-3 py-2 bg-gray-100"
            />
          </div>
        )}

        <div>
          <label className="block mb-1">Name</label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1">Parent ID</label>

          <input
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={isCreateMode ? handleCreate : handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            {isCreateMode ? "Create" : "Save"}
          </button>

          {!isCreateMode && (
            <>
              <button
                onClick={() => {
                  setIsCreateMode(true);
                  setName("");
                  setParentId("");
                }}
                className="px-4 py-2 rounded bg-green-600 text-white"
              >
                Add New
              </button>

              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded bg-red-600 text-white"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
