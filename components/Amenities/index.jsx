import React from "react";
import styled from "styled-components";
import { InterNormalStack14px, InterExtraBoldStack22px } from "../../styledMixins";


function Amenities() {
  return (
    <Amenities1>
      <Guests>
        <span className="inter-normal-stack-14px">2 guests</span>
      </Guests>
      <Point>
        <span className="inter-extra-bold-stack-22px">.</span>
      </Point>
      <Bedrooms>
        <span className="inter-normal-stack-14px">1 bedroom</span>
      </Bedrooms>
      <Point>
        <span className="inter-extra-bold-stack-22px">.</span>
      </Point>
      <Beds>
        <span className="inter-normal-stack-14px">2 beds</span>
      </Beds>
    </Amenities1>
  );
}

const Amenities1 = styled.div`
  height: 27px;
  margin-top: 9px;
  display: flex;
  align-items: flex-end;
  min-width: 366px;
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

export default Amenities;
