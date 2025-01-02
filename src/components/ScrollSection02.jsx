import React from "react";
import styled from "styled-components";

const ScrollSection = styled.div`
  padding-top: 50vh;
`;
const MainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;
  margin: 5px 0;
  font-size: 3.5rem;

  @media (min-width: 1024px) {
    font-size: 6vw;
  }
`;
const MainText = styled.p`
  line-height: 1.2;
  font-size: 3.5rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 6vw;
  }
`;
const SmallText = styled.small`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5em;

  @media (min-width: 1024px) {
    font-size: 1.5vw;
  }
`;
const DescMessage = styled.div`
  font-weight: bold;
  width: 50%;

  @media (min-width: 1024px) {
    width: 20%;
  }
`;
const DescText = styled.p`
  font-weight: bold;
`;
const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`;

const ScrollSection02 = () => {
  return (
    <ScrollSection>
      <MainMessage>
        <MainText>
          <SmallText>편안한 촉감</SmallText>
          입과 하나 되다
        </MainText>
      </MainMessage>
      <DescMessage>
        <DescText>
          편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를
          하나하나 새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그,
          AirMug Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고
          오롯이 당신과 음료만 남게 되죠.
        </DescText>
        <Pin />
      </DescMessage>
      <DescMessage>
        <DescText>
          디자인 앤 퀄리티 오브 스웨덴, <br />
          메이드 인 차이나
        </DescText>
        <Pin />
      </DescMessage>
    </ScrollSection>
  );
};

export default ScrollSection02;
