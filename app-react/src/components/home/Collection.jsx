import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Kulta_katriina from "../../assets/images/kulta-katrtiina.webp";
import Kulta_katriina_normi from "../../assets/images/Kultakatriina.webp";
import Juhla_mokka from "../../assets/images/Juhla-mokka.webp";

class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> Tuotekokoelma</h2>
          </div>

          <Row>
            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={Kulta_katriina} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">Kulta Katriina luomu</p>
                  <p className="product-price-on-card">Hinta : 10</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={Juhla_mokka} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">Juhlamokka</p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src={Kulta_katriina} alt="" />
                <Card.Body>
                  <p className="product-name-on-card">Kulta katriina</p>
                  <p className="product-price-on-card">Hinta 10€</p>
                </Card.Body>
              </Card>
            </Col>

            <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img
                  className="center w-75"
                  src={Kulta_katriina_normi}
                  alt=""
                />
                <Card.Body>
                  <p className="product-name-on-card">Kulta katriina</p>
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

export default Collection;
