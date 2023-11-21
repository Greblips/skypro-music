import { styled } from "styled-components";

export const sidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const sidebarItemLink = styled.div`
  width: 100%;
  height: 100%;
`;
export const sidebarItemLinkImg = styled.img`
  width: 100%;
  height: auto;
`;
