import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'First User',
    email: 'first.user@gmai.com',
    password: bcrypt.hashSync('12345678', 10)
  },
  {
    name: 'Roronora Zoro',
    email: 'roronora.zoro@gmai.com',
    password: bcrypt.hashSync('12345678', 10)
  },
  {
    name: 'Nico Robin',
    email: 'nico.robin@gmai.com',
    password: bcrypt.hashSync('12345678', 10)
  }
];

export default users;
