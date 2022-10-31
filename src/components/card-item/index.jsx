import React from "react";
// views
import { CardImage, CardName, CardPrice, Wrapper } from "./view";

const CardItem = ({ data }) => {
  return (
    <Wrapper>
      <CardName>{data.title}</CardName>
      <CardImage src={data.thumbnail} />
      <CardPrice>{data.price}</CardPrice>
    </Wrapper>
  );
};
export default CardItem;
