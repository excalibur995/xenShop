import styled from "styled-components";

export const CartCardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width:100%;
  margin:10px 0;
  background: #fff;
  border-radius: 30px;
  overflow: hidden;
`;

export const Centered = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
export const DetailCartontainer = styled.div`
  display: flex;
  flex-flow:column wrap;
  padding: 10px;
  h3 {
    margin: 3px;
    display: contents;
  }
`;
