import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../context/AuthContext';

const Users = () => {
  const { isLogged, setIsLogged, logout } = useAuth();
  const history = useHistory();

  return (
    <div>
      <Button variant='primary'>Add new User</Button>
      <h3>Users Page</h3>
    </div>
  );
};

export default Users;
