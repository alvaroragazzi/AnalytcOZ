/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router-dom";

// importação de icone
import { IoMdLogOut } from "react-icons/io";

export default () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <Navbar className="containerr" bg="containerr" expand="lg" variant="dark">
            <Container className="containerr">
                <Navbar.Brand href="#home">AnalytcOZ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="Início">Início</Nav.Link>
                    <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/cadastroProduto">Cadastro de produto</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/cadastroServico">Cadastro de serviço</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/cadastroCliente">Cadastro de Cliente</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <Button onClick={logout} style={{alignItems: "center"}} variant="danger"><IoMdLogOut style={{height: 25, width: 25}} /></Button>
            </Container>
        </Navbar>
    );
}