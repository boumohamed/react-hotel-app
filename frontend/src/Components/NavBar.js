import React, { useState } from 'react'
import {Navbar , Nav, Container} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
export default function NavBar() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    async function onLogout(){
        try{
            setError('') 
            await logout()
            history.push('/')
        }catch{
            setError('Impossible de se deconnecter :(')
        }
    }

    return (
            
        <>
            <Navbar collapseOnSelect expand="sm" bg="light" variant="light" style={{ height: "auto" }}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>the star<i className="fas fa-star text-warning App-logo"></i>hotel</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {currentUser?
                        <LinkContainer to="/myaccount">
                            <Nav.Link><i className="fas fa-user-circle"></i> Mon Compte</Nav.Link>
                        </LinkContainer>
                        : null
                        }
                        <LinkContainer to="/about">
                            <Nav.Link><i className="fas fa-phone-alt"></i> Conatct us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {currentUser ?
                    <Nav>
                        <LinkContainer to="/myaccount">
                            <Nav.Link><i className="fas fa-user"></i> {currentUser && currentUser.email}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signin" onClick={onLogout}>
                            <Nav.Link><i className="fas fa-sign-out-alt"></i> log out</Nav.Link>
                        </LinkContainer>
                        </Nav>
                        : 
                        <Nav>
                            <LinkContainer   LinkContainer to="/signin">
                                <Nav.Link><i class="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Nav.Link><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    }
                </Navbar.Collapse>
                </Container>
        </Navbar>
        </>
    )






   /*  if(currentUser)
    {
        if(admin)
            return (
            
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>the star<i className="fas fa-star text-warning App-logo"></i>hotel</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/admin">
                                    <Nav.Link><i className="fas fa-user-cog"></i> Admin</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link><i className="fas fa-info"></i> About us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                <LinkContainer to="/">
                                    <Nav.Link><i className="fas fa-user"></i> {currentUser.email}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signin" onClick={onLogout}>
                                    <Nav.Link><i className="fas fa-sign-out-alt"></i> log out</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                </Navbar>
                </>
            )
        else
            return (
                <>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand>the star<i className="fas fa-star text-warning App-logo"></i>hotel</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/about">
                                    <Nav.Link><i className="fas fa-info"></i> About us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                            <Nav>
                                <LinkContainer to="/">
                                    <Nav.Link><i className="fas fa-user text-warning"></i> {currentUser.email}</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signin" onClick={onLogout}>
                                    <Nav.Link><i className="fas fa-sign-out-alt"></i> log out</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )
     }
    
    else
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>the star<i className="fas fa-star text-warning App-logo"></i>hotel</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to="/about">
                                <Nav.Link><i className="fas fa-info"></i> About us</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer   LinkContainer to="/signin">
                                <Nav.Link><i class="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Nav.Link><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
            </>
        )
     */
}
