import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  Image,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch } from "react-redux";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { addToCart } from "../slices/cartSlice";

function ProductScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, quantity }));
    navigate("/cart");
  };

  return (
    <Container>
      <Link to="/">
        <Button className="mt-2" variant="secondary">
          Back
        </Button>
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message
          variant="danger"
          text={error?.data?.message || error?.error}
        ></Message>
      ) : (
        <Row className="p-4">
          <Col sm={12} md={6}>
            <Image src={product.image} fluid rounded />
          </Col>
          <Col sm={12} md={6}>
            <Card className="p-4">
              <Card.Title as="h2">{product.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-secondary">
                {product.brand}
              </Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <ListGroup variant="flush">
                <ListGroupItem>{product.category}</ListGroupItem>
                <ListGroupItem>
                  <Rating
                    ratingValue={product.rating}
                    ratingText={`${product.numReviews} reviews`}
                  />
                </ListGroupItem>
                <ListGroupItem>${product.price}</ListGroupItem>
                <ListGroupItem>
                  {product.countInStock > 0 ? (
                    <Badge bg="success">In stock</Badge>
                  ) : (
                    <Badge bg="secondary">Out of stock</Badge>
                  )}
                </ListGroupItem>
              </ListGroup>

              {product.countInStock > 0 ? (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ) : (
                <div></div>
              )}
              <Button
                className="m-3"
                size="lg"
                disabled={product.countInStock <= 0}
                onClick={addToCartHandler}
              >
                Add To Cart
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductScreen;
