import React from 'react';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
