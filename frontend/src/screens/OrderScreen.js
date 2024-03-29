import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderDetailsQuery } from "../slices/ordersApiSlice";

function OrderScreen() {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" text={error} />
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>

              <p>
                <b>Name: </b>
                {order.user.name}
              </p>

              <p>
                <b>Email: </b>
                {order.user.email}
              </p>

              <p>
                <b>Address: </b>
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.pincode}
              </p>

              {order.isDelivered ? (
                <Message
                  variant="success"
                  text="Delivered on {order.deliveredAt}"
                />
              ) : (
                <Message variant="danger" text="Will be delivered" />
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <b>Method: </b>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success" text="Paid on {order.paidAt}" />
              ) : (
                <Message variant="danger" text="Payment pending" />
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order items</h2>
              {order.orderItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col>
                      <Link to={`/products/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.quantity} X ${item.price} = $
                      {item.quantity * item.price}
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total Price: </Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default OrderScreen;
