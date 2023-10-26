import styled from "styled-components";

const StyledSkeleton = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
  background: #313131;
`;

export default StyledSkeleton;
