export interface AuthInfo {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  userLoading: boolean;
  setUserLoading: React.Dispatch<React.SetStateAction<any>>;
  signoutUser: any;
  signinWithGoogle: () => any;
}
