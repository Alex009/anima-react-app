import React from "react";
import styled from "styled-components";


function Header2(props) {
  const { className } = props;

  return (
    <Header className={`header-2 ${className || ""}`}>
      <Logo className="logo-1" src={process.env.PUBLIC_URL + "/img/logo--1@2x.png"} alt="Logo " />
      <Img className="img-2" src={process.env.PUBLIC_URL + "/img/img-5@2x.png"} alt="Img" />
    </Header>
  );
}

const Header = styled.header`
  width: 1024px;
  height: 76px;
  flex-shrink: 1;
  display: flex;
  flex-direction: row;
  padding: 0 64px;
  justify-content: flex-start;
  align-items: center;
  gap: 808px;
  background-color: var(--white);
  box-shadow: 0px 3px 4px #999ba826;
  mix-blend-mode: normal;

  &.header-2.header-3 {
    margin-top: 1076px;
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

export default Header2;
