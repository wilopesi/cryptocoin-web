import { BiSearchAlt2 } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className='imgNavbar' src="https://cdn-icons-png.flaticon.com/512/1808/1808306.png"></img>
          <span className='titleNavbar'>CriptoCoin</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='navbarElement' href="/">Home</Nav.Link>
            <Nav.Link className='navbarElement' href="/Coin">Mercado</Nav.Link>
            <Nav.Link className='navbarElement' href="/Bitcoin">Trades</Nav.Link>
            <Nav.Link className='navbarElement' href="/News">Noticias</Nav.Link>
            <Nav.Link className='navbarElement' href="/PeopleCoin">Minhas Moedas</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit"><BiSearchAlt2 /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu;