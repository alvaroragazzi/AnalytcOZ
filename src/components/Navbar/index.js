/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

export default () => {
    return (
        <Navbar className="containerr" bg="containerr" expand="lg" variant="dark">
            <Container className="containerr">
                <Navbar.Brand href="#home">AnalytcOZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="Início">Início</Nav.Link>
                    <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/cadastroProduto'>Cadastro de produto</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/cadastroServico'>Cadastro de serviço</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/cadastroCliente'>Cadastro de Cliente</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}