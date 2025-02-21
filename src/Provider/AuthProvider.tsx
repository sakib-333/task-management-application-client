import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const signoutUser = () => {
    setUserLoading(true);
    return signOut(auth);
  };

  const signinWithGoogle = () => {
    setUserLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser: User | null) => {
      setUser(currUser);

      if (currUser) {
        const { displayName, email } = currUser;
        axiosPublic
          .post("/jwt", { displayName, email })
          .then(() => {
            setUserLoading(false);
          })
          .finally(() => setUserLoading(false));
      } else {
        axiosPublic
          .post("/logout")
          .then(() => {
            setUserLoading(false);
          })
          .finally(() => setUserLoading(false));
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    userLoading,
    setUserLoading,
    signoutUser,
    signinWithGoogle,
    dataLoading,
    setDataLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
