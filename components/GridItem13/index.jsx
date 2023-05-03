import React from "react";
import Price from "../Price";
import Amenities2 from "../Amenities2";
import styled from "styled-components";
import { InterBoldDune16px } from "../../styledMixins";


function GridItem13(props) {
  const { img, spanText, className, priceProps } = props;

  return (
    <GridItem1 className={`grid-item-1-2 ${className || ""}`}>
      <OverlapGroup className="overlap-group-3">
        <ImageContainer className="image-container-3">
          <Img className="img-6" src={img} alt="Img" />
        </ImageContainer>
        <Price className={priceProps.className}>{priceProps.children}</Price>
      </OverlapGroup>
      <Title className="title-7">
        <span className="span4j839 inter-bold-dune-16px">{spanText}</span>
      </Title>
      <Amenities2 />
    </GridItem1>
  );
}

const GridItem1 = styled.div`
  width: 364px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
`;

const OverlapGroup = styled.div`
  width: 364px;
  height: 204px;
  position: relative;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 364px;
  height: 204px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 364px;
  height: 204px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  ${InterBoldDune16px}
  min-height: 19px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export default GridItem13;
