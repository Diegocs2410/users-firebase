import { useState } from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../context/AuthContext';

export const Register = () => {
  // States
  const [email, setEmail] = useState('diego@diego.com');
  const [password, setPassword] = useState('123456');

  // UseContext
  const { register, userData } = useAuth();
  const history = useHistory(); // History

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, history);
  };
  return (
    <Container fluid='md' className='d-flex justify-content-center align-items-center min-vh-100'>
      <Card style={{ width: '21rem' }} className='shadow-lg p-3'>
        <Card.Body>
          <Card.Title className='text-center text-capitalize fs-1'>register new user</Card.Title>
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
            <Link to='/login' className='nav-item'>
              already have an account? sign in
            </Link>
            <Button className='mt-2 form-control' variant='primary' type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
