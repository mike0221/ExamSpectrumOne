export interface State {
  auth_user: {[key: string]: any};
}

const initialState: State = {
  auth_user: {},
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      return {
        ...state,
        auth_user: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        auth_user: {},
      };
    default:
      return state;
  }
};
