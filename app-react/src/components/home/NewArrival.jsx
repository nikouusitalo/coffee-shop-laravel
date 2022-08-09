import React, { Component, Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kulta_katriina from "../../assets/images/kulta-katrtiina.webp";
import Kulta_katriina_normi from "../../assets/images/Kultakatriina.webp";
import Juhla_mokka from "../../assets/images/Juhla-mokka.webp";
import Kahvikuppi from "../../assets/images/Kahvikuppi.png";

class NewArrival extends Component {
  constructor(props) {
    super(props);
    
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  
  //Carouselli asetukset
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              Uusia tutteita &nbsp;
              <button
                alt="nappi"
                className="btn btn-sm ml-2 site-btn"
                onClick={this.previous}
              >
                <i className="fa fa-angle-left"></i>
              </button>
              &nbsp;
              <button
                alt="nappi"
                className="btn btn-sm ml-2 site-btn"
                onClick={this.next}
              >
                <i alt="" className="fa fa-angle-right"></i>
              </button>
            </h2>
            <p>Tuotteita joista saattaisit tykätä</p>
          </div>

          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Kulta_katriina} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Kulta_katriina_normi} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Kahvikuppi} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Juhla_mokka} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Juhla_mokka} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Kulta_katriina} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src={Kulta_katriina_normi} alt="" />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Kahvi
                    </p>
                    <p className="product-price-on-card">Hinta 10€</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
