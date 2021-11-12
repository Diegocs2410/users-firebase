import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Users from './pages/Users';
import useAuth from './context/AuthContext';
import { Register } from './pages/Register';

function App() {
  const { isLogged } = useAuth();
  const PrivateRoute = (props) => {
    return isLogged ? <Route {...props} /> : <Redirect to='/login' />;
  };
  const PublicRoute = (props) => {
    return isLogged ? <Redirect to='/users' /> : <Route {...props} />;
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        <PublicRoute path='/login' component={Login} />
        <PrivateRoute path='/users' component={Users} />
        <PublicRoute path='/register' component={Register} />
        <PublicRoute path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
