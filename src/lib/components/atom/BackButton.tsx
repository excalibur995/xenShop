import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Chevron = styled.div`
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  position: relative;
  top: 0.15em;
  left: 0.25em;
  transform: rotate(-135deg);
  vertical-align: top;
  width: 0.45em;
`;

export default function BackButton() {
  const history = useHistory();
  const handleHistory = () => history.goBack();
  return <Chevron onClick={handleHistory} />;
}
