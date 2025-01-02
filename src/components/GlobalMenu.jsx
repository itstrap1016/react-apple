import React from "react";
import styled from "styled-components";

const GlobalNav = styled.nav`
  height: 44px;
  padding: 0 1rem;
`;
const GlobalNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
`;
const GloablNavItem = styled.a``;

const GlobalMenu = () => {
  return (
    <GlobalNav>
      <GlobalNavLinks>
        <GloablNavItem href="#">Rooms</GloablNavItem>
        <GloablNavItem href="#">Ideas</GloablNavItem>
        <GloablNavItem href="#">Stores</GloablNavItem>
        <GloablNavItem href="#">Contact</GloablNavItem>
      </GlobalNavLinks>
    </GlobalNav>
  );
};

export default GlobalMenu;
