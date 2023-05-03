import React from "react";
import Header from "../Header";
import GridItem1 from "../GridItem1";
import ImageContainer from "../ImageContainer";
import Price from "../Price";
import Amenities from "../Amenities";
import styled from "styled-components";
import { InterExtraBoldDune24px, InterBoldDune16px } from "../../styledMixins";
import "./CatalogTablet.css";

function CatalogTablet(props) {
  const {
    spanText1,
    spanText2,
    gridItem11Props,
    gridItem12Props,
    imageContainerProps,
    priceProps,
    gridItem13Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="catalog-tablet-2 screen">
        <Header />
        <Title>
          <AparmentsInPhilade>
            <span className="inter-extra-bold-dune-24px">{spanText1}</span>
          </AparmentsInPhilade>
        </Title>
        <FirstStr>
          <GridItem1
            spanText={gridItem11Props.spanText}
            imageContainerProps={gridItem11Props.imageContainerProps}
            priceProps={gridItem11Props.priceProps}
          />
          <GridItem1
            spanText={gridItem12Props.spanText}
            className={gridItem12Props.className}
            imageContainerProps={gridItem12Props.imageContainerProps}
            priceProps={gridItem12Props.priceProps}
          />
          <GridItem3>
            <OverlapGroup2>
              <ImageContainer src={imageContainerProps.src} />
              <Price className={priceProps.className}>{priceProps.children}</Price>
            </OverlapGroup2>
            <Title1>
              <span className="inter-bold-dune-16px">{spanText2}</span>
            </Title1>
            <Amenities />
          </GridItem3>
          <GridItem1
            spanText={gridItem13Props.spanText}
            className={gridItem13Props.className}
            imageContainerProps={gridItem13Props.imageContainerProps}
            priceProps={gridItem13Props.priceProps}
          />
        </FirstStr>
      </div>
    </div>
  );
}

const Title = styled.div`
  height: 29px;
  display: flex;
  align-items: flex-start;
  min-width: 366px;
`;

const AparmentsInPhilade = styled.h1`
  ${InterExtraBoldDune24px}
  min-height: 29px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FirstStr = styled.div`
  width: 366px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 1136px;
  gap: 24px;
`;

const GridItem3 = styled.div`
  width: 366px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 266px;
`;

const OverlapGroup2 = styled.div`
  width: 366px;
  height: 204px;
  position: relative;
  border-radius: 8px;
`;

const Title1 = styled.p`
  ${InterBoldDune16px}
  min-height: 19px;
  margin-top: 7px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export default CatalogTablet;
