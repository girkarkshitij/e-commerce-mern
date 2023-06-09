import React from 'react';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome to TechShop</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
