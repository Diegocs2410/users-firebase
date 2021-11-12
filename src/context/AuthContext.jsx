import { Children, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  


  const value = {
    isAuthenticated: false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
export default useAuth;
