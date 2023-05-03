import React from "react";
import styled from "styled-components";
import { InterBoldDune14px } from "../../styledMixins";


function Price(props) {
  const { children, className } = props;

  return (
    <Price1 className={`price ${className || ""}`}>
      <X35 className="x35">
        <span className="spanhihkx inter-bold-dune-14px">{children}</span>
      </X35>
    </Price1>
  );
}

const Price1 = styled.div`
  position: absolute;
  width: 88px;
  height: 29px;
  top: 8px;
  left: 270px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  overflow: hidden;

  &.price.price-2 {
    width: 87px;
    left: 271px;
  }

  &.price.price-4 {
    left: 340px;
  }

  &.price.price-5 {
    left: 340px;
  }

  &.price.price-6 {
    width: 87px;
    left: 341px;
  }

  &.price.price-7 {
    left: 340px;
  }

  &.price.price-8 {
    left: 268px;
  }

  &.price.price-9 {
    left: 268px;
  }

  &.price.price-10 {
    width: 87px;
    left: 269px;
  }

  &.price.price-11 {
    left: 268px;
  }
`;

const X35 = styled.div`
  ${InterBoldDune14px}
  min-width: 64px;
  text-align: center;
  letter-spacing: -0.1px;
  line-height: 21px;
  white-space: nowrap;
`;

const X351 = styled.div`
  ${InterBoldDune14px}

  .price.price-2  & {
    min-width: 63px;
  }
`;

const X352 = styled.div`
  ${InterBoldDune14px}

  .price.price-6  & {
    min-width: 63px;
  }
`;

const X353 = styled.div`
  ${InterBoldDune14px}

  .price.price-10  & {
    min-width: 63px;
  }
`;

export default Price;
