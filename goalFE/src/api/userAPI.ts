import axios from "axios";

const url: string = "http://localhost:2222/api";

export const createAccount = async (data: {}) => {
  return await axios.post(`${url}/register-user`, data).then((res) => {
    return res?.data;
  });
};

export const loginAccount = async (data: {}) => {
  return await axios.post(`${url}/login-user`, data).then((res) => {
    return res?.data;
  });
};
