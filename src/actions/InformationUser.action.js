export const setInformationToSuccess = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});

export const setInformationToFailed = (payload) => ({
  type: "LOGIN_FAILED",
  payload,
});

export const setInformationToLogout = () => ({
  type: "LOGOUT",
});


