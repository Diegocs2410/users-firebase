import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const Navbar = () => {
  const { isLogged, setIsLogged, logout } = useAuth();
  const history = useHistory();
  const handleLogout = () => {
    setIsLogged(false);
    logout();
    history.push('/login');
  };
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          User Page
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse ' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            {!isLogged ? (
              <>
                <li className='nav-item'>
                  <NavLink className='nav-link' activeClassName='active' to='/login'>
                    Singin
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' activeClassName='active' to='/register'>
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link text-capitalize'
                    activeClassName='active'
                    to='/users'
                  >
                    users
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    className='nav-link'
                    activeClassName='active'
                    to='/login'
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
