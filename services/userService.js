import api from "../api/axiosConfig";

export const login = async (data) => {
  return await api.post("/Auth/login", data);
};

export const getUsers = async () => {
  return await api.get("/Users");
};

export const addUser = async (data) => {
  return await api.post("/Users", data);
};