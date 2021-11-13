import { Button, CssBaseline, Box, Container } from '@mui/material';
const Home = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm' className='mt-5'>
        <div>
          <h1 className='text-center mb-3'>Prueba Talento Humano</h1>
          <p>Esta app pretende mostrar el login y el registro de usuarios.</p>
          <p>
            posteriormente un listado de usuarios con la finalidad de agregar algunos usuarios mas.
          </p>
          <h4>Opciones iniciales</h4>
          <ul className='list-group '>
            <li className='list-group-item'>
              <Button variant='link' href='/login'>
                login
              </Button>
            </li>
            <li className='list-group-item'>
              <Button href='/register'>register</Button>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Home;
