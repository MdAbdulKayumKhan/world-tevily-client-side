import React from 'react';
import './Header.css';
import logo from '../../../img/logo/loader.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, signOutWithGoogle} = useAuth();
    // console.log(user);
    const defaultImg = ''; 
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{color: 'ornge'}}>World Tevily</span> 
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Tours</Nav.Link>
                        <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                        <Nav.Link as={Link} to="/servicesDetails">Destinations</Nav.Link>
                        
                        <Navbar.Brand href="#home">
                        { user.email ?
                            <img
                            alt=""
                            src={user.email &&  user.photoURL === null? defaultImg : user.photoURL}
                            width="40"
                            height="40"
                            className="d-inline-block align-top rounded-circle"
                        /> : ' '}
                        </Navbar.Brand>
                        <Navbar.Text>
                            <Link className="fs-5" style={{textDecoration: 'none', color: 'blue'}} to="#">
                                {user.email && user.displayName === null?  'Null Value ' : user.displayName}</Link>
                            
                            {/* {user.email && user.displayName} */}
                        </Navbar.Text>

                        { user?.email?
                        <Button className="ms-1 btn btn-primary btn-sm" onClick={signOutWithGoogle} variant="primary">Log Out</Button>    
                        : <Nav.Link as={Link} to="/login"><Button className="ms-1 btn btn-primary btn-sm" variant="primary">Log in</Button></Nav.Link>}
                        
                    </Navbar.Collapse>

                </Container>
            </Navbar>
    

        </div>
    );
};

export default Header;