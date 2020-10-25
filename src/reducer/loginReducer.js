import {USER_LOGIN, USER_LOGOUT} from '../actions/actions';

const initialLoginState = {
  isLogged: false,
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
