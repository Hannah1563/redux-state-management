import { LOGIN, LOGOUT } from "../actions/authActions";

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: AuthState = { isLoggedIn: false, username: null };

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { isLoggedIn: true, username: action.payload };
    case LOGOUT:
      return { isLoggedIn: false, username: null };
    default:
      return state;
  }
};
