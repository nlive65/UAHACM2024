import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LoginSignup from './LoginSignup/LoginSignup';
import Home from './Home';

export default class NavBarComp extends Component {
    render(){
        return (
          <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Green Lens</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> Another action </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"> Separated link </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<LoginSignup/>}/>
              </Routes>
            </div>
        </Router>
        )
    }
}

function App() {
  return (
    <div className="App">
      <NavBarComp/>
    </div>
  );
}