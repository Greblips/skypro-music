import styled, { keyframes } from "styled-components";

const blink = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.2;
  }

`;

const StyledSkeleton = styled.div`
  animation: ${blink} 2s infinite alternate;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
  background: #313131;
`;
export default StyledSkeleton;
