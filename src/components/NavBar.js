import{ Container, Navbar, Nav,} from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css'
const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
             <Navbar.Brand href="#home">
                Tienda Pablo P
            </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            <CartWidget />
            </Container>
        </Navbar> 
    )
}

export default NavBar;
