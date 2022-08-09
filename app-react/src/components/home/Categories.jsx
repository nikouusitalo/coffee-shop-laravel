import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'
import Kahvikuppi from '../../assets/images/Kahvikuppi.png'
class Categories extends Component {
     render() {
          return (
               <Fragment>
                  <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> Kategoria</h2>
          </div>

          <Row>


          <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
          <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <i class="fa-solid fa-coffee-bean"></i>
          <Card.Body> 
          <img className="center" src={Kahvikuppi} alt="" />  
          <h5 className="category-name">Kahvi</h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src={Kahvikuppi}  alt="" />  
          <h5 className="category-name">Kahvikoneet</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src={Kahvikuppi} alt="" />  
          <h5 className="category-name">Kahvi tarvikkeet</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src={Kahvikuppi}  alt=""  />  
          <h5 className="category-name">Kahvimyllyt</h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>

               </Col> 



               <Col key={1} xl={6} lg={6} md={2} sm={12} xs={12}>
                    <Row>
           <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center"  src={Kahvikuppi} alt=""/>  
          <h5 className="category-name">Keittiö</h5>  
          </Card.Body>
          </Card> 
          </Col>

          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center" src={Kahvikuppi}  alt="" />  
          <h5 className="category-name">Hultoaineet</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center"  src={Kahvikuppi} alt="" />  
          <h5 className="category-name">Tee tarvikkeet</h5>  
          </Card.Body>
          </Card> 
          </Col>


          <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="h-100 w-100 text-center">          
          <Card.Body> 
          <img className="center"  src={Kahvikuppi} alt="" />  
          <h5 className="category-name">Erikoistarjokset</h5>  
          </Card.Body>
          </Card> 
          </Col> 
                    </Row>

               </Col> 
          </Row>




                    </Container>
               </Fragment>
          )
     }
}

export default Categories