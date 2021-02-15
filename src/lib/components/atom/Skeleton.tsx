import styled, { CSSProperties, keyframes } from "styled-components";

const Skeleton = styled.div`
  overflow: hidden;
  background-color: rgb(242, 243, 243);
  border-radius: 4px;
`;

const translateHorizontal = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(100%);
}
`;

const SkeletonAnimation = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgb(242, 243, 243),
    rgb(230, 234, 237),
    rgb(242, 243, 243)
  );
  animation: ${translateHorizontal} infinite 0.7s;
`;

interface SkeletonProps {
  height?: string;
  width?: string;
  style?: CSSProperties;
}

export default function SkeletonLoader(props: SkeletonProps): JSX.Element {
  const iniLineStyle: CSSProperties = {
    height: props?.height ?? "100px",
    width: props?.width ?? "100px",
    ...props.style,
  };

  return (
    <Skeleton style={iniLineStyle}>
      <SkeletonAnimation />
    </Skeleton>
  );
}
