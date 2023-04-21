import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paymentButton: {
    borderRadius: "12px",
    marginTop: "10px",
    fontSize: "1rem",
  },
};

export const Checkout = () => {
  const [loading, setLoading] = React.useState(false);

  const { itemCount } = React.useContext(CartContext);
  const navigate = useNavigate();

  const location = useLocation();
  const total = location.state;
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const cardNumber = e.target.cardNumber.value;
    const expirationDate = e.target.expirationDate.value;
    const cvc = e.target.cvc.value;

    const newProduct = {
      nombre: name,
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cvc: cvc,
      total: total,
      products: itemCount, 
      status: "Aprobada", 
    };
    const db = getFirestore();
    const productCollection = collection(db, "ventas");
    addDoc(productCollection, newProduct)
      .then(({ id }) => {
        // setPaymentSuccess(true);
        // setPaymentId(id);
      })
      .then(() => setLoading(false));
      
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <Container style={styles.container} fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center">Ingrese su metodo de pago</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre en la tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre completo"
                required
              />
            </Form.Group>

            <Form.Group controlId="cardNumber">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]{16}"
                placeholder="1234 5678 9012 3456"
                required
              />
            </Form.Group>

            <Form.Group controlId="expirationDate">
              <Form.Label>Fecha de vencimiento</Form.Label>
              <Form.Control type="month" required />
            </Form.Group>

            <Form.Group controlId="cvc">
              <Form.Label>Código de seguridad (CVC)</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]{3}"
                placeholder="123"
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={styles.paymentButton}
            >
                Pagar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};