import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import useScrollHeight from "../hooks/useScrollHeight";

const ScrollSection = styled.div`
  padding-top: 50vh;
  height: ${({ height }) => `${height}px`};
  border: 3px solid red;
`;
const Text = styled.p`
  font-size: 1.2rem;
  color: #888;
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
const StrongText = styled.strong`
  font-size: 3rem;
  color: rgba(29, 29, 31);
  font-weight: bold;
  float: left;
  margin-right: 0.2em;

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const ScrollSection01 = () => {
  const type = "normal";

  return (
    <ScrollSection>
      <Text>
        <StrongText>보통 스크롤 영역</StrongText>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos totam,
        possimus officiis dicta temporibus quidem fugit laborum sunt. At eius,
        harum tenetur deserunt id porro officiis laborum ipsa reprehenderit
        excepturi nemo dolor quidem adipisci dolore beatae impedit consequuntur
        iusto, consequatur aliquam saepe fugiat. Molestiae minus sed pariatur
        reprehenderit, dolores temporibus culpa vel suscipit vitae, quisquam
        molestias! Tenetur, accusantium aliquid id placeat mollitia ipsum
        voluptatum, provident dignissimos unde, est tempora asperiores at facere
        magni doloribus quasi? Molestiae, eveniet. Eos quos nemo fuga, deserunt,
        laboriosam voluptatibus vitae molestiae perspiciatis debitis autem
        consectetur dolores at dignissimos modi esse, neque molestias quam saepe
        accusamus facere earum. Corrupti earum illo magni nemo maiores? Beatae
        autem illum dolor cumque itaque, animi, molestiae quo aliquam eos quam
        blanditiis odit facere accusantium voluptas velit? Sit exercitationem
        nulla veritatis architecto consectetur eos a autem quis nostrum velit ea
        doloremque, voluptatum dolore. At cupiditate itaque quod velit amet
        rerum inventore dolores eius tenetur adipisci. Harum, maxime! Dolores
        pariatur laudantium eligendi unde. Asperiores facilis esse nostrum.
        Esse, distinctio! Consequuntur quaerat ratione, id impedit molestiae
        natus corrupti asperiores eligendi. Voluptas impedit, quas adipisci at
        hic, laboriosam veritatis itaque placeat odit temporibus alias? Impedit
        ipsa aliquam explicabo nobis sequi porro exercitationem molestiae qui.
      </Text>
    </ScrollSection>
  );
};

export default ScrollSection01;
