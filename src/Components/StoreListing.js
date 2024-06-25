import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function StoreListing() {
  return (
    <div>
      <Container style={{ marginTop: "40px" }}>
        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "0 20px 20px 20px",
          }}
        >
          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="Vons.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>Vons</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="Sprouts.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="Costco.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>Costco</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>
        </Row>

        <br/>

        <Row
          style={{
            borderBottom: "1px solid #E8E9EB",
            borderBottom: "1px solid #E8E9EB",
            display: "flex",
            justifyContent: "space-evenly",
            padding: "0 20px 20px 20px",
          }}
        >
          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="Albertsons.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>Albertsons</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="Walgreens.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>Walgreens</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>

          <Col
            xs="3"
            style={{
            
              display: "flex",
              alignItems: "center",
              borderRadius: "20px",
              height: "6rem",
            }}
          >
            <Image
              src="La Bonita.webp"
              style={{
                border: "1px solid #ececee",
                borderRadius: "50%",
                width: "25%",
              }}
            />
            <div style={{  width: "80%", display: 'flex', textAlign: 'start', flexFlow: 'column', marginLeft: '20px' }}>
              <h5 style={{ fontWeight: "bold" }}>La Bonita</h5>
              <p>Delivery * Pickup</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreListing;
