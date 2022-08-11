
import React, { Component, Fragment } from 'react'
import {Container,Row,Col} from 'react-bootstrap'

import MegaMenu from './MegaMenu'

class HomeTop extends Component {
     render() {
          return (
               <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={12} md={11} sm={12}>
                              <MegaMenu />
                              </Col>

                              
                         </Row>
                    </Container>
               </Fragment>
          )
     }
}

export default HomeTop