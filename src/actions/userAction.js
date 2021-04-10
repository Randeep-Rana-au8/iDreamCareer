import { LOGOUT, LOGIN_USER, REGISTER_USER } from "../constants/userConstants";
export const userLogin = (data) => {
  console.log("i am there in login action");
  return {
    type: LOGIN_USER,
    payload: data,
  };
};

export const logout = () => {
  console.log("i am logoout");
  return {
    type: "LOGOUT",
  };
};

export const userRegister = (data) => {
  return {
    type: "REGISTER_USER",
    payload: data,
  };
};
