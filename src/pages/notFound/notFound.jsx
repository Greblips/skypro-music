import * as S from "../main/main.style";

import { Error404 } from "../../components/Error404/Error404";
import * as Style from "../notFound/notFound.style"

export function NotFound() {
  return (
    <S.wrapper>
      <S.container>
        <Style.wrapperError><Error404 /></Style.wrapperError>
        <footer className="footer" />
      </S.container>
    </S.wrapper>
  );
}