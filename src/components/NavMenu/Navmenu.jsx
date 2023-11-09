
import NavMenuItems from '../NavMenuItems/NavMenuItems';
import { useState } from "react";
import * as S from './NavMenu.styles'


const Navmenu = () => {
    const [burrgerVisible, setBurgherVisible] = useState(false);

    return (
        <S.MainNav >
            <S.NavLogo>
                <S.Logoimage src="img/logo.png" alt="logo" />
            </S.NavLogo>
            <S.NavBurger onClick={() => setBurgherVisible(!burrgerVisible)} >
                <S.BurgerLine />
                <S.BurgerLine />
                <S.BurgerLine />

            </S.NavBurger>
            {
                burrgerVisible && (
                    <S.NavMenu>
                        <S.MenuList>
                            <NavMenuItems item={{ link: "/", text: "Главное" }} />
                            <NavMenuItems item={{ link: "/favorites", text: "Мой плейлист" }} />
                            <NavMenuItems item={{ link: "/signIn", text: "Выйти" }} />
                        </S.MenuList>
                    </S.NavMenu>
                )
            }
        </S.MainNav >
    );
};

export default Navmenu;