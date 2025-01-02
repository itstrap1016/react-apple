import React from "react";
import styled from "styled-components";

const ScrollSection = styled.div`
  padding-top: 50vh;
`;
const MidMessage = styled.p`
  padding: 0 1rem;
  font-size: 2rem;
  color: #888;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;
const StrongText = styled.strong`
  color: rgb(29, 29, 31);
`;
const CanvasCaption = styled.p`
  padding: 0 1rem;
  color: #888;
  text-align: center;
  font-size: 1.2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

const ScrollSection03 = () => {
  return (
    <ScrollSection>
      <MidMessage>
        <StrongText>Retina 머그</StrongText>
        <br />
        아이디어를 공활하게 펼칠
        <br />
        아름답고 부드러운 음료 공간.
      </MidMessage>
      <CanvasCaption>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at
        fuga quae perspiciatis veniam impedit et, ratione est optio porro.
        Incidunt aperiam nemo voluptas odit quisquam harum in mollitia. Incidunt
        minima iusto in corporis, dolores velit. Autem, sit dolorum inventore a
        rerum distinctio vero illo magni possimus temporibus dolores neque
        adipisci, repudiandae repellat. Ducimus accusamus similique quas earum
        laborum. Autem tempora repellendus asperiores illum ex! Velit ea
        corporis odit? Ea, incidunt delectus. Sapiente rerum neque error
        deleniti quis, et, quibusdam, est autem voluptate rem voluptas. Ratione
        soluta similique harum nihil vel. Quas inventore perferendis iusto
        explicabo animi eos ratione obcaecati.
      </CanvasCaption>
    </ScrollSection>
  );
};

export default ScrollSection03;
