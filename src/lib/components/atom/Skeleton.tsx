import styled from "styled-components";

const Skeleton = styled.div`
  overflow: hidden;
  background-color: rgb(242, 243, 243);
  border-radius: 4px;
`;

const SkeletonAnimation = styled.div`
  border-radius: 4px;
  background-image: linear-gradient(
    to right,
    rgb(242, 243, 243),
    rgb(230, 234, 237),
    rgb(242, 243, 243)
  );
  animation: translateHorizontal infinite 0.7s;

  @keyframes translateHorizontal {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

const SkeletonLoader = () => (
  <Skeleton>
    <SkeletonAnimation />
  </Skeleton>
);

export default SkeletonLoader;
