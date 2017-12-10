import React from "react";
import styled from "styled-components";

const ImageBox = styled.div`
  margin: 5px 0 75px;
  box-sizing: border-box;
  margin-bottom: 40px;
  height: ${props => props.height || "108px"};
  background-image: ${props => "url(" + props.img + ")"};
  background-size: cover;
  border-bottom: 3px solid #a7a7a7;
  border-top: 3px solid #a7a7a7;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageTitle = styled.h2`
  color: white;
  font-family: Calibri, Arial, sans-serif;
  font-size: 2.8em;
  margin: 20px auto;
  text-align: center;
  text-transform: uppercase;
`;

const ImageContent = styled.h3`
  text-align: center;
  color: white;
  font-family: Calibri, Arial, sans-serif;
  max-width: 600px;
  margin: auto;
  margin-top: 0px;
`;

const ImageHeader = props => (
  <ImageBox img={props.img} height={props.height}>
    <div>
      <ImageTitle>{props.title}</ImageTitle>
      {props.children && <ImageContent>{props.children} </ImageContent>}
    </div>
  </ImageBox>
);

export { ImageBox, ImageTitle };
export default ImageHeader;
