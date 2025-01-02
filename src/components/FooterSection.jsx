import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  color: white;
  background-color: darkorange;
`;

const FooterSection = () => {
  return <Footer>2020, 1분 코딩</Footer>;
};

export default FooterSection;
