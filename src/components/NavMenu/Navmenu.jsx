
import NavMenuItems from '../NavMenuItems/NavMenuItems';
import { useState, useContext } from "react";
import * as S from './NavMenu.styles'
import { Link } from 'react-router-dom';
import { UserContext } from "../Context/Context";




const Navmenu = () => {
    const [burrgerVisible, setBurgherVisible] = useState(false);
    const toggleBurger = () => setBurgherVisible(!burrgerVisible);
    const { handleLogout } = useContext(UserContext);

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
                            <NavMenuItems item={{ link: "/auth", text: "Выйти" }}
                                handleLogout={handleLogout} />
                        </S.MenuList>
                    </S.NavMenu>
                )
            }
        </S.MainNav >
    );
};

export default Navmenu;