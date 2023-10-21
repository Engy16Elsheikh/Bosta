 
import React from "react";
import './navbar.css'
import logo from '../../Assests/Logo.png';
import { Navbar,Container,Collapse,NavDropdown,Nav, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TrackingContext } from "../../contexts/Trakingcontext"
  const Navbars=()=>{
    const {
      trackingNumber,
      trackingInfo,
      error,
      handleTrackingNumberChange,
      handleFormSubmit,
    } = useContext(TrackingContext);
    const nav=useNavigate()
    const onNavigateHandeler=()=>{
    nav(`/details`)
    }
    return (
    <div on onSubmit={handleFormSubmit}>
    <Navbar expand="lg"  className="custom-navbar">
      <Container>
      <Navbar.Brand href="/home"> <img src={logo} className="logo" alt="Website Logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Solutions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mobile app</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Integration" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shopify</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                WooCommerce
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Custom APIs</NavDropdown.Item>
            </NavDropdown> 
            <NavDropdown title="Use Cases" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Busnisses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                SMEs
              </NavDropdown.Item>
            </NavDropdown>        
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse style={{justifyContent:"end"}}>
          <Nav>
          <NavDropdown title="Traking shippment" id="basic-nav-dropdown">
            <input type="text" placeholder="Track number"   value={trackingNumber}onChange={handleTrackingNumberChange}></input>
            <button className="btn-booking" onClick={onNavigateHandeler}>Search</button>
            </NavDropdown>
           <NavDropdown title="En" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Engilsh</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Arabic
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Navbars;