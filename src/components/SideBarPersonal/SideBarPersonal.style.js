import { styled } from "styled-components";

export const sidebarPersonal = styled.div`
  box-sizing: border-box;
  grid-column: 3 / -1;
  padding-right: 8%;
  min-width: 100%;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const sidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-right: 16px;
`;

export const sidebarPeronalIcon = styled.div`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;
