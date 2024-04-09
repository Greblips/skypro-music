import { styled } from "styled-components";

export const wrapper = styled.div`
  width: 100%;
  background-color: #383838;

`;
export const container = styled.div`
  display: grid;
  grid-template-columns: 13% 65% 22%;
  grid-template-rows: 70px 1fr;
  max-width: 1920px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`;

export const main = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
export const MainCenterBlock = styled.div`
  box-sizing: border-box;
  grid-column: 2 / 3;
  min-width: 100%;
  height:100vh;
  margin-left: 4%;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #4e4e4e;
`;