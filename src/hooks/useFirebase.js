import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initializeFirebase from "../components/Login/firebase/firebase.init";

// Call Initial Firebase
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  //   Create New Use with email password
  const newUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  //   Sign in with email password
  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        swal("Success", "You are now logged in", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  // Observed User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [user]);

  // Sign Out User
  const logOut = () => {
    signOut(auth)
      .then(() => {
        swal("Success", "You are now logged out", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("Error", error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    newUser,
    logOut,
    isLoading,
  };
};

export default useFirebase;
