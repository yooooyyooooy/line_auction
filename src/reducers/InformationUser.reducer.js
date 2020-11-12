const initialState = {
  userId: "",
  userImage: "",
  userName: "",
  isAuthenticated: false,
  isError: false,
  credit:0
};

const A = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_COIN":
      return {
        ...state,
        credit:payload.credit
      };
    case "LOGIN_FAILED":
      return {
        ...state,
        isError: true,
        isAuthenticated: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        userId: payload.userId,
        userImage: payload.pictureUrl,
        userName: payload.displayName,
        isAuthenticated: true,
        isError: false,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
export default A;
