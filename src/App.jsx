import React from "react";
import styled from "styled-components";
import GlobalMenu from "./components/GlobalMenu";
import LocalMenu from "./components/LocalMenu";
import ScrollSection00 from "./components/ScrollSection00";
import ScrollSection01 from "./components/ScrollSection01";
import ScrollSection02 from "./components/ScrollSection02";
import ScrollSection03 from "./components/ScrollSection03";
import FooterSection from "./components/FooterSection";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <GlobalMenu />
      <LocalMenu />
      <ScrollSection00 />
      <ScrollSection01 />
      <ScrollSection02 />
      <ScrollSection03 />
      <FooterSection />
    </Container>
  );
}

export default App;
