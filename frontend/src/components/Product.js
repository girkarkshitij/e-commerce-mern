import React from 'react';
import {Card} from 'react-bootstrap';

function Product({product}) {
  return (
    <Card className='m-2 p-2 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image}></Card.Img>
      </a>
      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Subtitle>{product.brand}</Card.Subtitle>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
