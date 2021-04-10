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
              userInfo: action.payload,
              error: null,
            },
          }
        : {
            ...state,
            userLogin: {
              error: "You are not authorised! please check your email and password",
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
            error: "User is Already Registered!! Please try login",
          },
        };
      } else {
        const allUsers = JSON.stringify([...state.users, action.payload]);

        localStorage.setItem("users", allUsers);
        localStorage.setItem("userInfo", JSON.stringify(action.payload));

        return {
          ...state,
          users: [...state.users, action.payload],
          userLogin: {
            userInfo: action.payload,
          },
        };
      }

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
