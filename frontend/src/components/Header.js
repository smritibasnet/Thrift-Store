import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (
<header>
<Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'>
    <Navbar.Brand ><i className='fas fa-tshirt'></i><strong> THRIFT STORE </strong></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Nav>
      <LinkContainer to='/cart'>
        <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
        <Nav.Link><i className='fas fa-user'></i></Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
