import React from 'react';
import {Container} from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className='text-center py-3'>
        <p>&copy; Kshitij Girkar, {currentYear}</p>
      </footer>
    </Container>
  );
}

export default Footer;
