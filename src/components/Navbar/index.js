/* eslint-disable import/no-anonymous-default-export */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu.js';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  min-width: 300px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 100ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;


/*
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
*/