import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // CLEANUP
  // DEAL WITH MEMORY LEAK
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMsg;

      if (error.message.includes("auth/weak-password")) {
        systemErrorMsg = "The password needs to be at least 6 characters long.";
      } else if (error.message.includes("auth/email-already-in-use")) {
        systemErrorMsg = "This user already exists.";
      } else if (error.message.includes("auth/invalid-email")) {
        systemErrorMsg = "Invalid email.";
      } else {
        systemErrorMsg = "An error has occurred. Please try again later.";
      }

      console.log(error, "ERRO AQUI CARAIO");

      setError(systemErrorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};
