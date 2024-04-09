import styled from "styled-components";

export const mainCenterBlock = styled.div`
  grid-column: 2 / 3;
  min-width: 100%;
  padding: 20px 40px 20px 111px;
`;

export const centerblockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`;

export const centerblockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const contentPlaylist = styled.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 600px;
  overflow-y: auto;
`;

export const playlistItem = styled.li`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;
