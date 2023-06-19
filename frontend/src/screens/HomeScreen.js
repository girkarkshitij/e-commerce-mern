import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product.js';

function HomeScreen() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error('Error', error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    console.error("No products found.");
    return null;
  }

  return (
    <>
      <h1>All tech products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
