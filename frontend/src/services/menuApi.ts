import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getMenus = async () => {
  const response = await api.get("/menus");
  return response.data;
};

export const createMenu = async (payload: {
  name: string;
  parent_id?: number;
}) => {
  const response = await api.post("/menus", payload);
  return response.data;
};

export const updateMenu = async (
  id: number,
  payload: {
    name: string;
    parent_id?: number;
  },
) => {
  const response = await api.put(`/menus/${id}`, payload);
  return response.data;
};

export const deleteMenu = async (id: number) => {
  const response = await api.delete(`/menus/${id}`);

  return response.data;
};

export default api;
