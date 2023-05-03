import React from "react";
import Header3 from "../Header3";
import styled from "styled-components";
import {
  MaterialiconsNormalDune32px,
  InterBoldDune26px,
  InterNormalStack14px,
  InterExtraBoldDune34px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Detail.css";

function Detail(props) {
  const { spanText1, spanText2, spanText3, img01, img02, img03, spanText4, spanText5, line, header3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="detail screen">
        <CharmingAndComfort>
          <span className="inter-extra-bold-dune-34px">{spanText1}</span>
        </CharmingAndComfort>
        <Header3 className={header3Props.className} />
        <Title>
          <BackIcon>
            <span>
              <span className="materialicons-normal-dune-32px">{spanText2}</span>
            </span>
          </BackIcon>
          <AparmentsInPhilade>
            <span className="inter-extra-bold-dune-34px">{spanText3}</span>
          </AparmentsInPhilade>
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
          <Text0>
            <span className="inter-normal-stack-14px">{spanText5}</span>
          </Text0>
          <Line src={line} alt="Line" />
        </Frame1>
      </div>
    </div>
  );
}

const CharmingAndComfort = styled.h1`
  ${InterExtraBoldDune34px}
  margin-top: -1172px;
  align-self: flex-start;
  margin-left: 150px;
  letter-spacing: -0.09px;
  line-height: 48px;
  white-space: nowrap;
`;

const Title = styled.div`
  height: 41px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  min-width: 1140px;
  gap: 16px;
`;

const BackIcon = styled.div`
  ${ValignTextMiddle}
  ${MaterialiconsNormalDune32px}
            width: 32px;
  height: 32px;
  align-self: center;
  margin-bottom: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const AparmentsInPhilade = styled.div`
  ${InterExtraBoldDune34px}
  min-height: 41px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Galery = styled.div`
  width: 1140px;
  margin-top: 32px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  border-radius: 16px;
  overflow: hidden;
`;

const Img01 = styled.img`
  width: 737px;
  height: 484px;
  object-fit: cover;
`;

const Frame2 = styled.div`
  width: 379px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 484px;
  gap: 24px;
`;

const Img02 = styled.img`
  width: 379px;
  height: 230px;
  object-fit: cover;
`;

const Frame1 = styled.div`
  width: 1140px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 187px;
`;

const Title1 = styled.div`
  ${InterBoldDune26px}
  margin-top: -1px;
  min-height: 31px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Text0 = styled.div`
  ${InterNormalStack14px}
  width: 1140px;
  position: relative;
  min-height: 84px;
  margin-top: 24px;
  letter-spacing: -0.1px;
  line-height: 21px;
`;

const Line = styled.img`
  width: 1140px;
  height: 1px;
  margin-top: 48px;
`;

export default Detail;
