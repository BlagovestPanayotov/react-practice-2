interface LoginAction {
  type: "LOGIN";
  username: string;
}
interface LogountAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogountAction;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default authReducer;
