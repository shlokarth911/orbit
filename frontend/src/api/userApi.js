import axios from "axios";
import { UserDataContext } from "../contexts/UserContext";

const API_BASE = import.meta.env.VITE_BASE_URL || "";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE}user/register`, userData);

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("user_token", data.token);
    }

    return;
  } catch (error) {
    console.log(error);
  }
};
