import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import Loader from "../components/Loader.js";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import Message from "../components/Message.js";

function HomeScreen() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message
          variant="danger"
          text={error?.data?.message || error?.error}
        ></Message>
      ) : (
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
      )}
    </>
  );
}

export default HomeScreen;
