
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';






const Header = ({cart}) => {

  const cartLength = cart ? cart.length : 0;

  return (
    <>
    <Navbar expand="lg" className='sm:mx-5'>
      <Container fluid>
        <Navbar.Brand href="#"><img src="/logo.png" className='h-[100px]' alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-xl font-semibold text-zinc-600 flex gap-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='hover:scale-105 hover:underline hover:underline-offset-4 transition duration-0 hover:duration-150'>Home</Link>
            <Link to="#action2" className='hover:scale-105 hover:underline hover:underline-offset-4 transition duration-0 hover:duration-150'>Contact</Link>
            <Link to="#" className='hover:scale-105 hover:underline hover:underline-offset-4 transition duration-0 hover:duration-150'>About</Link>
            <Link to="#" className='hover:scale-105 hover:underline hover:underline-offset-4 transition duration-0 hover:duration-150'>Sign up</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
           <Link to="/cart">

           <Button className='flex bg-transparent border-none w-[90px] p-0 py-1 ml-3'>
         <i className="ri-shopping-cart-line text-2xl ml-5 flex items-center text-zinc-600 hover:text-[#CF5500] hover:scale-105" id='navbarScroll'></i>
      <Badge bg="secondary">{cartLength}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>

 </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
export default Header