import { styled } from "styled-components";

export const mainNav = styled.nav`
  background-color: #181818;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 100%;
  width: 100%;
  padding: 30px 14%;
  box-sizing: border-box;
`;

export const navLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`;

export const Logoimage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`;

export const navBurger = styled.button`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background: none;
  border: none;
`;

export const burgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;

export const navMenu = styled.div`
  display: block;
  visibility: visible;
`;

export const menuList = styled.ul`
  padding: 18px 0 10px 0;
`;
