import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";



class NavBarMultiPage extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Navbar
                    sticky="top"
                    id="navbar"
                    bg="light"
                    expand="lg"
                    className="navbar navbar-expand-lg navbar-light bg-light"
                    collapseOnSelect={true}
                >
                    <Container>
                        <LinkContainer exact to="/">
                            <Navbar.Brand className="navbar-brand">
                                My<span>Buy</span>CBD
                            </Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            id="collaspe-btn"
                        />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <LinkContainer to="/">
                                  <Nav.Link>Home</Nav.Link>
                                </LinkContainer>

                                  <LinkContainer to="/about">
                                    <Nav.Link>About</Nav.Link>
                                    </LinkContainer>


                              {/*  <LinkContainer to="/services">
                                    <Nav.Link>Services</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/team">
                                    <Nav.Link>Team</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/faq">
                                    <Nav.Link>Faq</Nav.Link>
                                </LinkContainer>*/}

                                <LinkContainer to="/pricing">
                                    <Nav.Link>Pricing</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact</Nav.Link>
                                </LinkContainer>
                                </Nav>
                                </Navbar.Collapse>

                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBarMultiPage;
