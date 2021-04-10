import { LOGIN_USER, LOGOUT, REGISTER_USER } from "../constants/userConstants";

const initialState = {
  userLogin: {},
  userRegister: {},
  users: [],
};

export const userReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case LOGIN_USER:
      const user = state.users.find((user) => user.email === action.payload.email);
      const isMatched = user && user.password === action.payload.password;
      {
        isMatched && localStorage.setItem("userInfo", JSON.stringify(action.payload));
      }
      return isMatched
        ? {
            ...state,
            userLogin: {
              userInfo: user,
              errorLogin: null,
              errorRegister: null,
            },
          }
        : {
            ...state,
            userLogin: {
              errorLogin: "You are not authorised! please check your email and password",
            },
          };

    case "LOGOUT":
      console.log("lets reducer logou");
      localStorage.removeItem("userInfo");
      return {
        ...state,
        userLogin: {},
      };

    case REGISTER_USER:
      const checkUser = state.users.find((user) => user.email === action.payload.email);
      if (checkUser) {
        return {
          ...state,
          userLogin: {
            errorRegister: "User is Already Registered!! Please try login",
          },
        };
      } else {
        const allUsers = JSON.stringify([...state.users, { ...action.payload, dob: "1990-01-01" }]);

        localStorage.setItem("users", allUsers);
        localStorage.setItem("userInfo", JSON.stringify(action.payload));

        return {
          ...state,
          users: [...state.users, { ...action.payload, dob: "1990-01-01" }],
          userLogin: {
            userInfo: { ...action.payload, dob: "1990-01-01" },
          },
        };
      }

    case "UPDATE_USER":
      const updatedUsers = state.users.filter(
        (user) => user.email !== state.userLogin.userInfo.email
      );
      console.log(updatedUsers);
      localStorage.setItem("users", JSON.stringify([...updatedUsers, action.payload]));
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      return {
        ...state,
        users: [...updatedUsers, action.payload],
        userLogin: {
          userInfo: action.payload,
        },
      };

    default:
      const getAllUsers = JSON.parse(localStorage.getItem("users"));
      const isUserLogin = JSON.parse(localStorage.getItem("userInfo"));
      return {
        ...state,
        users: getAllUsers ? getAllUsers : [],
        userLogin: isUserLogin
          ? {
              userInfo: isUserLogin,
            }
          : {},
      };
  }
};
