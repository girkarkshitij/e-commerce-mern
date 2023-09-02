import { useParams } from "react-router-dom";
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
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";

function ProductScreen() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  return (
    <Container>
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
              <Button
                className="m-3"
                size="lg"
                disabled={product.countInStock <= 0}
              >
                Buy
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductScreen;
