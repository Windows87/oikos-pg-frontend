import api from "../settings/api";
import Meeting from "../types/Meeting";
import MeetingContent from "../types/MeetingContent";
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
  registerGroup: (group_code: string) => {
    return new Promise<void>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/users/me/group`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ group_code }),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },

  getMeetings: () => {
    return new Promise<Meeting[]>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/meetings`, {
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

  finishMeeting: (meeting_id: number, analysis: string) => {
    return new Promise<void>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/meetings/${meeting_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ analysis }),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },

  createMeeting: (payload: {
    name: string;
    date: string;
    theme: string;
    contents: MeetingContent[];
  }) => {
    return new Promise<void>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/meetings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },

  editMeeting: (
    meeting_id: number,
    payload: {
      name: string;
      date: string;
      theme: string;
      contents: MeetingContent[];
    }
  ) => {
    return new Promise<void>(async (resolve, reject) => {
      const token = localStorage.getItem("token");
      try {
        const call = await fetch(`${api.url}/meetings/${meeting_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });

        const response = await call.json();

        if (!call.ok) {
          reject(response);
        }

        resolve();
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default apiClient;
