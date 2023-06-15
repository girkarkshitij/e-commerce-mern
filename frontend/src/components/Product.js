import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Rating from './Rating';

function Product({product}) {
  return (
    <Card className='m-2 p-2 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Card.Title className='text-truncate'>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Subtitle>{product.brand}</Card.Subtitle>
        <Card.Text as='div'>
          <Rating
            ratingValue={product.rating}
            ratingText={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
