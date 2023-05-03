import React from "react";
import ImageContainer from "../ImageContainer";
import Price from "../Price";
import Amenities from "../Amenities";
import styled from "styled-components";
import { InterBoldDune16px } from "../../styledMixins";


function GridItem1(props) {
  const { spanText, className, imageContainerProps, priceProps } = props;

  return (
    <GridItem11 className={`grid-item-1 ${className || ""}`}>
      <OverlapGroup className="overlap-group">
        <ImageContainer src={imageContainerProps.src} />
        <Price>{priceProps.children}</Price>
      </OverlapGroup>
      <Title className="title-2">
        <span className="span1vs5u inter-bold-dune-16px">{spanText}</span>
      </Title>
      <Amenities />
    </GridItem11>
  );
}

const GridItem11 = styled.div`
  width: 366px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
`;

const OverlapGroup = styled.div`
  width: 366px;
  height: 204px;
  position: relative;
  border-radius: 8px;
`;

const Title = styled.div`
  ${InterBoldDune16px}
  min-height: 19px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export default GridItem1;
