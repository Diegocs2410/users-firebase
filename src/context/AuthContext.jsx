import { createContext, useContext, useEffect, useState } from 'react';
import app from '../configs/firebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithRedirect,
} from 'firebase/auth';

const AuthContext = createContext();
const initialUser = {};
export const AuthProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setuserData] = useState(initialUser);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const login = (email, password, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Signed in as: ', user.email);
        history.push('/users');
        setuserData(user);
        setIsLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        setIsLogged(false);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const register = (email, password, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setuserData(user);
        console.log('Signed in as: ', user);
        setIsLogged(true);
        history.push('/users');
      })
      .catch((error) => {
        console.log('error', error.code, error.message);
        setIsLogged(false);
      });
  };

  const loginWithGoogle = (history) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log('Signed in as: ', user, token);
        signInWithRedirect(auth, provider);
        history.push('/users');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        setuserData(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const value = {
    isLogged,
    setIsLogged,
    login,
    userData,
    register,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
export default useAuth;
