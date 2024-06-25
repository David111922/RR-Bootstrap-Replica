import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Background() {
  return (
    <Card style={{ width: '160rem', backgroundColor: '#deecd6', margin: 'auto' }}>
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{fontSize: '40px' , fontWeight: 'bold'}}>
          Order Groceries for delivery today.
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
  );
}

export default Background;
