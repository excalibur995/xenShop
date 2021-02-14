import styled from "styled-components";

export const DetailContainers = styled.div`
margin:0;
position:relative;
background:${props => props.theme.colors.colorDefault}!important;
`

export const DetailDescContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding:32px 8px 0px 8px;
  border-radius: 30px 30px 0 0;
  background:${props => props.theme.colors.colorPrimary}
`