import React from "react";
import Header2 from "../Header2";
import FirstStr from "../FirstStr";
import styled from "styled-components";
import { InterExtraBoldDune34px } from "../../styledMixins";
import "./CatalogTablet2.css";

function CatalogTablet2(props) {
  const { spanText, firstStr1Props, firstStr2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="catalogu45tablet screen">
        <Header2 />
        <Title>
          <AparmentsInPhilade>
            <span className="inter-extra-bold-dune-34px">{spanText}</span>
          </AparmentsInPhilade>
        </Title>
        <FirstStr
          gridItem121Props={firstStr1Props.gridItem121Props}
          gridItem122Props={firstStr1Props.gridItem122Props}
        />
        <FirstStr
          gridItem121Props={firstStr2Props.gridItem121Props}
          gridItem122Props={firstStr2Props.gridItem122Props}
        />
      </div>
    </div>
  );
}

const Title = styled.div`
  height: 41px;
  display: flex;
  align-items: flex-start;
  min-width: 896px;
`;

const AparmentsInPhilade = styled.h1`
  ${InterExtraBoldDune34px}
  min-height: 41px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default CatalogTablet2;
