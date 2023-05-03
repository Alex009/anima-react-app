import React from "react";
import Header3 from "../Header3";
import GridItem13 from "../GridItem13";
import Price from "../Price";
import Amenities2 from "../Amenities2";
import styled from "styled-components";
import { InterBoldDune16px, InterExtraBoldDune34px } from "../../styledMixins";
import "./Catalog.css";

function Catalog(props) {
  const { spanText1, img, spanText2, gridItem131Props, gridItem132Props, gridItem133Props, priceProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="catalog screen">
        <Header3 />
        <Title>
          <AparmentsInPhilade>
            <span className="inter-extra-bold-dune-34px">{spanText1}</span>
          </AparmentsInPhilade>
        </Title>
        <FirstStr>
          <GridItem13
            img={gridItem131Props.img}
            spanText={gridItem131Props.spanText}
            priceProps={gridItem131Props.priceProps}
          />
          <GridItem13
            img={gridItem132Props.img}
            spanText={gridItem132Props.spanText}
            className={gridItem132Props.className}
            priceProps={gridItem132Props.priceProps}
          />
          <GridItem13
            img={gridItem133Props.img}
            spanText={gridItem133Props.spanText}
            className={gridItem133Props.className}
            priceProps={gridItem133Props.priceProps}
          />
        </FirstStr>
        <SecondStr>
          <OverlapGroup>
            <ImageContainer>
              <Img src={img} alt="Img" />
            </ImageContainer>
            <Price className={priceProps.className}>{priceProps.children}</Price>
          </OverlapGroup>
          <Title1>
            <span className="inter-bold-dune-16px">{spanText2}</span>
          </Title1>
          <Amenities2 />
        </SecondStr>
      </div>
    </div>
  );
}

const Title = styled.div`
  height: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
`;

const AparmentsInPhilade = styled.h1`
  ${InterExtraBoldDune34px}
  min-height: 41px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FirstStr = styled.div`
  height: 266px;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
  gap: 24px;
`;

const SecondStr = styled.div`
  width: 1140px;
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

const Title1 = styled.div`
  ${InterBoldDune16px}
  min-height: 19px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export default Catalog;
