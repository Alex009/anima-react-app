import React from "react";
import styled from "styled-components";


function Header(props) {
  const { className } = props;

  return (
    <Header1 className={`header ${className || ""}`}>
      <Logo className="logo" src="/img/logo--1@2x.png" alt="Logo " />
      <Img className="img" src="/img/img-5@2x.png" alt="Img" />
    </Header1>
  );
}

const Header1 = styled.header`
  width: 430px;
  height: 76px;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  padding: 0 32px;
  justify-content: flex-start;
  align-items: center;
  gap: 278px;
  background-color: var(--white);
  box-shadow: 0px 3px 4px #999ba826;
  mix-blend-mode: normal;

  &.header.header-1 {
    margin-top: 980px;
  }
`;

const Logo = styled.img`
  width: 44px;
  height: 44px;
`;

const Img = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
`;

export default Header;
