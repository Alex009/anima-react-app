import React from "react";
import styled from "styled-components";


function ImageContainer(props) {
  const { src } = props;

  return (
    <ImageContainer1>
      <Img src={src} alt="Img" />
    </ImageContainer1>
  );
}

const ImageContainer1 = styled.div`
  position: absolute;
  width: 366px;
  height: 204px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 366px;
  height: 204px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default ImageContainer;
