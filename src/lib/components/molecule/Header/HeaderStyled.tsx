import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  z-index: 4;
  top: 0;
  left: 0;
  position: fixed;
  background: ${(props) => props.theme.colors.colorSecondary};
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 48px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  box-sizing: border-box;
`;

export const LogoHeader = styled.img`
  max-width: 36px;
  max-height: 36x;
  object-fit: content;
`;

export const NotificationContainer = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  top: 13px;
  right: -5px;
  padding: 4px 8px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 14px;
`;
