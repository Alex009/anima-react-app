import React from "react";
import Header from "../Header";
import styled from "styled-components";
import {
  MaterialiconsNormalDune32px,
  InterBoldDune26px,
  InterNormalStack14px,
  InterExtraBoldDune24px,
  InterExtraBoldDune34px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./DetailMobile.css";

function DetailMobile(props) {
  const { spanText1, spanText2, spanText3, img01, img02, img03, spanText4, spanText5, line, headerProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="detail-mobile screen">
        <CharmingAndComfort>
          <span className="inter-extra-bold-dune-34px">{spanText1}</span>
        </CharmingAndComfort>
        <Header className={headerProps.className} />
        <Title>
          <BackIcon>
            <span>
              <span className="materialicons-normal-dune-32px">{spanText2}</span>
            </span>
          </BackIcon>
          <Text0>
            <span className="inter-extra-bold-dune-24px">{spanText3}</span>
          </Text0>
        </Title>
        <Galery>
          <Img01 src={img01} alt="Img 01" />
          <Frame2>
            <Img02 src={img02} alt="Img 02" />
            <Img02 src={img03} alt="Img 03" />
          </Frame2>
        </Galery>
        <Frame1>
          <Title1>
            <span className="inter-bold-dune-26px">{spanText4}</span>
          </Title1>
          <Text01>
            <span className="inter-normal-stack-14px">{spanText5}</span>
          </Text01>
          <Line src={line} alt="Line" />
        </Frame1>
      </div>
    </div>
  );
}

const CharmingAndComfort = styled.h1`
  ${InterExtraBoldDune34px}
  width: 139px;
  margin-top: -1172px;
  min-height: 192px;
  align-self: flex-start;
  margin-left: 44.79px;
  letter-spacing: -0.09px;
  line-height: 48px;
`;

const Title = styled.div`
  height: 59px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 366px;
  gap: 16px;
`;

const BackIcon = styled.div`
  ${ValignTextMiddle}
  ${MaterialiconsNormalDune32px}
            width: 32px;
  height: 32px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Text0 = styled.div`
  ${InterExtraBoldDune24px}
  width: 225px;
  position: relative;
  min-height: 57px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Galery = styled.div`
  width: 366px;
  height: 310px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  overflow: hidden;
`;

const Img01 = styled.img`
  width: 366px;
  height: 204px;
  object-fit: cover;
`;

const Frame2 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 366px;
  gap: 16px;
`;

const Img02 = styled.img`
  width: 175px;
  height: 90px;
  object-fit: cover;
`;

const Frame1 = styled.div`
  width: 366px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 339px;
`;

const Title1 = styled.div`
  ${InterBoldDune26px}
  margin-top: -1px;
  min-height: 31px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Text01 = styled.div`
  ${InterNormalStack14px}
  width: 366px;
  position: relative;
  min-height: 231px;
  margin-top: 16px;
  letter-spacing: -0.1px;
  line-height: 21px;
`;

const Line = styled.img`
  width: 366px;
  height: 1px;
  margin-top: 61px;
`;

export default DetailMobile;
