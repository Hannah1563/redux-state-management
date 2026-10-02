export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (username: string) => ({ type: LOGIN, payload: username });
export const logout = () => ({ type: LOGOUT });
