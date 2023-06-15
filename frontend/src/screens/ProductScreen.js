import React from 'react';
import {useParams} from 'react-router-dom';
import products from '../products';
import {
  Button,
  Card,
  Image,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from 'react-bootstrap';
import Rating from '../components/Rating';

function ProductScreen() {
  const {id} = useParams();
  const product = products.find((product) => product._id === Number(id));

  const {
    image,
    brand,
    description,
    name,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = product;

  const stockIsAvailable = countInStock > 0 ? true : false;

  return (
    <Container>
      <Row className='p-4'>
        <Col sm={12} md={6}>
          <Image src={image} fluid rounded />
        </Col>
        <Col sm={12} md={6}>
          <Card className='p-2'>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{brand}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <ListGroup variant='flush'>
              <ListGroupItem>{category}</ListGroupItem>
              <ListGroupItem>
                <Rating
                  ratingValue={rating}
                  ratingText={`${numReviews} reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>${price}</ListGroupItem>
              <ListGroupItem>
                {stockIsAvailable ? (
                  <Badge bg='success'>In stock</Badge>
                ) : (
                  <Badge bg='secondary'>Out of stock</Badge>
                )}
              </ListGroupItem>
            </ListGroup>
            <Button className='m-3' size='lg' disabled={!stockIsAvailable}>
              Buy
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
