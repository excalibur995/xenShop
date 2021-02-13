import React from "react";
import styled from "styled-components";

type EmptyProps = {
  message: string;
};

export default function EmptyPages(props: EmptyProps) {
  return <EmptyContainer>{props.message}</EmptyContainer>;
}

const EmptyContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
