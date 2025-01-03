import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { stickyElem } from "./CommonStyles";
import useScrollHeight from "../hooks/useScrollHeight";
import useScroll from "../hooks/useScroll";

const ScrollSection = styled.div`
  padding-top: 50vh;
  height: ${({ height }) => `${height}px`};
  border: 3px solid red;
`;
const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 9vw;
  }
`;
const MainMessage = styled.div`
  align-items: center;
  justify-content: center;
  height: 3em;
  margin: 5px 0;
  font-size: 2.5rem;
  ${stickyElem}
  display: ${({ $isAnimating }) => ($isAnimating ? "flex" : "none")};

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;
const Text = styled.p`
  line-height: 1.2;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const ScrollSection00 = () => {
  const type = "sticky";
  const scrollHeight = useScrollHeight();
  const yOffset = useScroll();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (yOffset >= 0 && yOffset <= scrollHeight) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [yOffset]);

  return (
    <ScrollSection height={scrollHeight}>
      <Title>AirMug Pro</Title>
      <MainMessage $isAnimating={isAnimating}>
        <Text>
          온전히 빠져들게 하는 <br /> 최고급 세라믹
        </Text>
      </MainMessage>
      <MainMessage $isAnimating={isAnimating}>
        <Text>
          주변 맛을 느끼게 해주는
          <br />
          주변 맛 허용 모드
        </Text>
      </MainMessage>
      <MainMessage $isAnimating={isAnimating}>
        <Text>
          온정일 편안한
          <br />
          맛춤형 손잡이
        </Text>
      </MainMessage>
      <MainMessage $isAnimating={isAnimating}>
        <Text>
          새롭게 입가를 <br /> 찾아온 매혹
        </Text>
      </MainMessage>
    </ScrollSection>
  );
};

export default ScrollSection00;
