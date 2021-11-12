import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../context/AuthContext';

const Users = () => {
  const { isLogged, setIsLogged } = useAuth();
  const history = useHistory();
  const logout = () => {
    setIsLogged(false);
    history.push('/login');
  };
  return (
    <div>
      <h3>Users Page</h3>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Users;
