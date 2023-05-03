import React from "react";
import GridItem12 from "../GridItem12";
import styled from "styled-components";


function FirstStr(props) {
  const { gridItem121Props, gridItem122Props } = props;

  return (
    <FirstStr1>
      <GridItem12
        img={gridItem121Props.img}
        spanText1={gridItem121Props.spanText1}
        className={gridItem121Props.className}
        priceProps={gridItem121Props.priceProps}
      />
      <GridItem12
        img={gridItem122Props.img}
        spanText1={gridItem122Props.spanText1}
        className={gridItem122Props.className}
        priceProps={gridItem122Props.priceProps}
      />
    </FirstStr1>
  );
}

const FirstStr1 = styled.div`
  height: 266px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 896px;
  gap: 24px;
`;

export default FirstStr;
