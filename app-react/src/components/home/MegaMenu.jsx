import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class MegaMenu extends Component {
    render() {
        return (
            <Fragment>
            <Navbar bg="white" variant="dark">
            <Container>Coffee-shop
              <Navbar.Brand href="#home">Co</Navbar.Brand>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                
              <Link to="/" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>                  
                   </Link>
                   <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                   <Link to="/" className="h4 btn">LOGIN</Link>

                   <Button className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Button>
            
              </Nav>
            </Container>
          </Navbar>
          </Fragment>

        )


}


}

export default MegaMenu