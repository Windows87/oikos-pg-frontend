import api from "../settings/api";
import User from "../types/User";

const apiClient = {
  getMe: () => {
    return new Promise<User>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  },

  login: (email: string, password: string) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const call = await fetch(`${api.url}/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve(response.token);
      } catch (error) {
        reject(error);
      }
    });
  },

  register: (payload: {
    name: string;
    email: string;
    password: string;
    birthday: string;
    whatsapp: string;
  }) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const call = await fetch(`${api.url}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve(response.token);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default apiClient;
