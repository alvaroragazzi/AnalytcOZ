/* eslint-disable import/no-anonymous-default-export */

import React, { useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu.js';
import { IconContext } from 'react-icons/lib';
import { IoMdPerson, IoIosLogOut } from "react-icons/io";
import {logout} from "../../services/request";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled.a`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  cursor: pointer;
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

  const navigate = useNavigate();

  const logoutReq = async() => {
    logout();
    localStorage.removeItem("nome");
    navigate("/login");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <div style={{marginBottom: 10, marginLeft: 16, display: "flex", flexDirection: "row", alignContent: "center"}}>
              <IoMdPerson style={{width: 19, height: 19, cursor: "pointer"}}/>
              <h1 style={{color: "#fff", fontSize: 16, marginLeft: 5}}>{localStorage.getItem("nome")}</h1>
              <div style={{cursor: "pointer", marginLeft: 90}}>
                <IoIosLogOut style={{width: 21, height: 21, marginBottom: 7}} onClick={logoutReq}/>
              </div>
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu showSidebar={showSidebar} item={item} key={index} />;
            })}
          </SidebarWrap> 
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;