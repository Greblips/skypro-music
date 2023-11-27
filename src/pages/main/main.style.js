import styled from "styled-components";

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

export const mainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;
