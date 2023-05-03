import React from "react";
import Price from "../Price";
import styled from "styled-components";
import { InterNormalStack14px, InterExtraBoldStack22px, InterBoldDune16px } from "../../styledMixins";


function GridItem12(props) {
  const { img, spanText1, className, priceProps } = props;

  return (
    <GridItem1 className={`grid-item-1-1 ${className || ""}`}>
      <OverlapGroup className="overlap-group-1">
        <ImageContainer className="image-container-1">
          <Img className="img-3" src={img} alt="Img" />
        </ImageContainer>
        <Price className={priceProps.className}>{priceProps.children}</Price>
      </OverlapGroup>
      <Title className="title-4">
        <span className="span1kxy8 inter-bold-dune-16px">{spanText1}</span>
      </Title>
      <Amenities className="amenities-1">
        <Guests className="guests-1">
          <span className="span02v7h inter-normal-stack-14px">2 guests</span>
        </Guests>
        <Point className="point-2">
          <span className="spandbsyy inter-extra-bold-stack-22px">.</span>
        </Point>
        <Bedrooms className="bedrooms-1">
          <span className="spanrh0zx inter-normal-stack-14px">1 bedroom</span>
        </Bedrooms>
        <Point className="point-3">
          <span className="span8l1e6k inter-extra-bold-stack-22px">.</span>
        </Point>
        <Beds className="beds-1">
          <span className="span21gsl inter-normal-stack-14px">2 beds</span>
        </Beds>
      </Amenities>
    </GridItem1>
  );
}

const GridItem1 = styled.div`
  width: 436px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
`;

const OverlapGroup = styled.div`
  width: 436px;
  height: 204px;
  position: relative;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 436px;
  height: 204px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 436px;
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

const Amenities = styled.div`
  height: 27px;
  margin-top: 9px;
  display: flex;
  align-items: flex-end;
  min-width: 436px;
  gap: 6px;
`;

const Guests = styled.div`
  ${InterNormalStack14px}
  min-height: 17px;
  margin-bottom: 1px;
  min-width: 57px;
  letter-spacing: 0;
  line-height: normal;
`;

const Point = styled.div`
  ${InterExtraBoldStack22px}
  min-height: 27px;
  align-self: flex-start;
  margin-top: -1px;
  min-width: 7px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Bedrooms = styled.div`
  ${InterNormalStack14px}
  min-height: 17px;
  margin-bottom: 1px;
  min-width: 70px;
  letter-spacing: 0;
  line-height: normal;
`;

const Beds = styled.div`
  ${InterNormalStack14px}
  min-height: 17px;
  margin-bottom: 1px;
  min-width: 46px;
  letter-spacing: 0;
  line-height: normal;
`;

export default GridItem12;
