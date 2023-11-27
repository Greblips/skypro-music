
import NavMenuItems from '../NavMenuItems/NavMenuItems';
import { useState } from "react";
import * as S from './NavMenu.styles'
import { Link } from 'react-router-dom';



const Navmenu = () => {
    const [burrgerVisible, setBurgherVisible] = useState(false);
    const toggleBurger = () => setBurgherVisible(!burrgerVisible);

    return (
        <S.MainNav >
            <S.NavLogo>
                <Link to="/"> <S.Logoimage src="img/logo.png" alt="logo" /></Link>
            </S.NavLogo>
            <S.NavBurger onClick={toggleBurger} >
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