import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Background() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#deecd6' }}>
      <Row>
        <Col className="d-flex justify-content-center">
          <Card style={{ width: '160rem', backgroundColor: '#deecd6', margin: 'auto' }}>
            <Card.Body className="text-center">
              <Card.Text style={{ fontSize: '40px', fontWeight: 'bold' }}>
                Order Groceries for <br /> delivery today.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <div style={{ alignSelf: 'flex-end', marginRight: '10px' }}>
              <Card.Img 
                src="aguacate.webp" 
                style={{ width: '200px', height: '200px' }} 
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Background;
