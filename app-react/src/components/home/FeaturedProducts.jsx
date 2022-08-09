import { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Kuva from "../../assets/images/Kultakatriina.webp";
class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Kahvi Kauppa</h2>
            <p>Tee ostoksia</p>
          </div>

          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"></p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"></p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"></p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"></p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"></p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className="image-box card">
                <img className="center" src={Kuva} alt="" />
                <Card.Body>
                  <p className="product-name-on-card"> </p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
