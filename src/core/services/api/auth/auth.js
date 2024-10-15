<<<<<<< HEAD

=======
>>>>>>> af5ceba0b24620e71986f28c6410fd70fc5998d7
import http from "../../interceptor";

export const loginAPI = async (user) => {
  try {
    const response = await http.post("/sign/login", user);
    return response;
  } catch (error) {
    return false;
  }
};
