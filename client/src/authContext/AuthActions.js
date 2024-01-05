export const loginStart = () => ({
  type: "LOGIN_START",
});
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});
export const loginFailure = (payload) => ({
  type: "LOGIN_FAILURE",
  payload: { ...payload }
});

//logout

export const logout = () => ({
  type: "LOGOUT",
});
