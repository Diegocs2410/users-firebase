import {
  Container,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button as BtnMui,
  Modal,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../context/AuthContext';
import { app } from '../configs/firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const db = getFirestore(app);
// Styles Mui
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #666',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const initialState = {
  name: '',
  age: '',
  street: '',
  email: '',
};
const Users = () => {
  // States
  const [userInfo, setUserInfo] = useState(initialState);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { lsUsers } = useAuth();
  // Handle edit User
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  // Handle add new User
  const handleAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), userInfo);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setUserInfo(initialState);
    handleClose();
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' className='mt-5'>
        <div>
          <Button variant='primary' onClick={handleOpen}>
            Add new User
          </Button>
          {/* Modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              {/* Card */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Box
                    component='form'
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    autoComplete='off'
                  >
                    <TextField
                      id='outlined-basic'
                      label='Name'
                      variant='outlined'
                      required
                      name='name'
                      value={userInfo.name}
                      onChange={handleChange}
                    />
                    <TextField
                      id='outlined-basic'
                      label='Age'
                      variant='outlined'
                      required
                      type='number'
                      min='0'
                      name='age'
                      value={userInfo.age}
                      onChange={handleChange}
                    />
                    <TextField
                      id='outlined-basic'
                      label='Street Adress'
                      variant='outlined'
                      required
                      name='street'
                      value={userInfo.street}
                      onChange={handleChange}
                    />
                    <TextField
                      id='outlined-basic'
                      label='Email'
                      variant='outlined'
                      required
                      type='email'
                      name='email'
                      value={userInfo.email}
                      onChange={handleChange}
                    />
                  </Box>
                </CardContent>
                <CardActions>
                  <BtnMui variant='contained' size='small' onClick={handleAdd}>
                    Add
                  </BtnMui>
                </CardActions>
              </Card>
            </Box>
          </Modal>
          {/* End Modal */}

          <TableContainer component={Paper} className='mt-5'>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Age</TableCell>
                  <TableCell align='right'>Street</TableCell>
                  <TableCell align='right'>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lsUsers?.map((row, index) => {
                  const { name, age, street, email } = row.data;
                  return (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {name}
                      </TableCell>
                      <TableCell align='right'>{age}</TableCell>
                      <TableCell align='right'>{street}</TableCell>
                      <TableCell align='right'>{email}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </>
  );
};

export default Users;
