import { useState, useContext } from "react";
import * as S from "./NavMenu.styles";
import { NavMenuItems } from "../NavMenuItems/NavMenuItems";
import { UserContext } from "../Context/Context";
import { Link } from 'react-router-dom';

export function NavMenu() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const { handleLogout } = useContext(UserContext);
  return (
    <S.mainNav>
      <S.navLogo>
        <Link to="/"> <S.Logoimage src="img/logo.png" alt="logo" /></Link>
      </S.navLogo>
      <S.navBurger type="button" onClick={toggleVisibility}>
        <S.burgerLine />
        <S.burgerLine />
        <S.burgerLine />
      </S.navBurger>
      {visible && (
        <S.navMenu>
          <S.menuList>
            <NavMenuItems item={{ link: "/", text: "Главное" }} />
            <NavMenuItems item={{ link: "/favourites", text: "Мой плейлист" }} />
            <NavMenuItems
              item={{ link: "/auth", text: "Выйти" }}
              handleLogout={handleLogout}
            />
          </S.menuList>
        </S.navMenu>
      )}
    </S.mainNav>
  );
}