import { useState } from 'react';
import { Container, Button, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../context/AuthContext';

const Login = () => {
  // States
  const [email, setEmail] = useState('diego@diego.com');
  const [password, setPassword] = useState('123456');

  // UseContext
  const { login, loginWithGoogle } = useAuth();
  const history = useHistory(); // History

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, history);
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(history);
  };
  return (
    <Container fluid='md' className='d-flex justify-content-center align-items-center min-vh-100'>
      <Card style={{ width: '21rem' }} className='shadow-lg p-3'>
        <Card.Body>
          <Card.Title className='text-center text-capitalize fs-1'>login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Link to='/register' className='nav-item'>
              Haven't an account yet? create one!
            </Link>
            <Button className='mt-2 form-control' variant='primary' type='submit'>
              Login
            </Button>
            <Button
              className='mt-2 form-control'
              variant='secondary'
              onClick={handleGoogleLogin}
            >
              Google
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
