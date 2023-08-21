import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "@firebase/auth";

export const useLogin = () => {
  const [errorForLogin, setErrorForLogin] = useState(null);

  const login = (email, password) => {
    setErrorForLogin(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged up:", res.user);
      })
      .catch((err) => {
        setErrorForLogin(err.message);
      });
  };

  return { errorForLogin, login };
};
