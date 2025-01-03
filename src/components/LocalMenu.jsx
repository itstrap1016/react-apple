import React from "react";
import styled from "styled-components";

const LocalNav = styled.nav`
  height: 52px;
  border-bottom: 1px solid #ddd;
  padding: 0 1rem;
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
`;
const LocalNavLinks = styled.div`
  display: flex;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
`;
const ProductName = styled.a`
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: bold;
`;
const LocalNavItem = styled.a`
  margin-left: 2em;
  font-size: 0.8rem;
`;

const LocalMenu = () => {
  return (
    <LocalNav>
      <LocalNavLinks>
        <ProductName href="#">AirMug Pro</ProductName>
        <LocalNavItem href="#">개요</LocalNavItem>
        <LocalNavItem href="#">제품사양</LocalNavItem>
        <LocalNavItem href="#">구입하기</LocalNavItem>
      </LocalNavLinks>
    </LocalNav>
  );
};

export default LocalMenu;
