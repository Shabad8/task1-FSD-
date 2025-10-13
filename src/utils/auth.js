import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const checkUser = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
