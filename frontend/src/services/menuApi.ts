import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getMenus = async () => {
  const response = await api.get("/menus");
  return response.data;
};

export default api;
