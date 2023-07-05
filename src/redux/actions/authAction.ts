export const login = ({user}: any) => {
  return {
    type: 'AUTH_LOGIN',
    payload: user,
  };
};

export const logout = () => {
  return {
    type: 'AUTH_LOGOUT',
  };
};
