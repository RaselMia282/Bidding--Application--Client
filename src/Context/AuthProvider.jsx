import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.config.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,signInWithPopup,signOut,updateProfile
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   createUser for register
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
//   updateProfile
const userProfile = (name,photo)=>{
return updateProfile(auth.currentUser,{
    displayName : name,
    photoURL:photo,
});
}
// google SignIn here
const googleProvider = new GoogleAuthProvider();
const googleSignIn =()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}
// signout here
const logOut = ()=>{
  setLoading(true)
  return signOut (auth)
}

  const authInfo = {
    user,
    loading,
    createUser,
    userProfile,
    googleSignIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
