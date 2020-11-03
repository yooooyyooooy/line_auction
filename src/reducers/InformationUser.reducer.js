const initialState = {
  userId: "",
  userImage: "",
  userName: "",
  isAuthenticated: false,
  isError: false,
};

const A = (state = initialState, { type, payload }) => {
  switch (type) {
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
