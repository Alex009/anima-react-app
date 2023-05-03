import React from "react";
import styled from "styled-components";


function Header3(props) {
  const { className } = props;

  return (
    <Header className={`header-4 ${className || ""}`}>
      <Logo className="logo-2" src="/img/logo--1@2x.png" alt="Logo " />
      <Img className="img-5" src="/img/img-5@2x.png" alt="Img" />
    </Header>
  );
}

const Header = styled.header`
  width: 1440px;
  height: 76px;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  padding: 0 150px;
  justify-content: flex-start;
  align-items: center;
  gap: 1052px;
  background-color: var(--white);
  box-shadow: 0px 3px 4px #999ba826;
  mix-blend-mode: normal;

  &.header-4.header-5 {
    margin-top: 1124px;
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

export default Header3;
