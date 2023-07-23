import React from "react";
import { styled } from "styled-components";

export default function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

const ContainerDiv = styled.div`
  width: 1180px;
  margin: 0 auto;
`;
