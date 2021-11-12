import { createContext, useContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const AuthContext = createContext();
const initialUser = {};
export const AuthProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setuserData] = useState(initialUser);
  const auth = getAuth();
  const login = (email, password, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('Signed in as: ', user.email);
        history.push('/users');
        setIsLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error', errorCode, errorMessage);
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
  const value = {
    isLogged,
    setIsLogged,
    login,
    userData,
    register,
  };

  return <AuthContext.Provider value={value} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
export default useAuth;
