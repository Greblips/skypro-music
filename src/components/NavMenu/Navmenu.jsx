
import "./NavMenu.css";
import NavMenuItems from '../NavMenuItems/NavMenuItems';
import { useState } from "react";
const Navmenu = () => {
    const [burrgerVisible, setBurgherVisible] = useState(false);
    const toggleBurgherVisibilily = () => setBurgherVisible(!burrgerVisible)
    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
                <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <div className="nav__burger burger" type="button" onClick={toggleBurgherVisibilily} >
                <span className="burger__line"></span>
                <span className="burger__line"></span>
                <span className="burger__line"></span>
            </div>
            {burrgerVisible && (
                <div className="nav__menu menu">
                    <ul className="menu__list">
                        <NavMenuItems item={{ link: "#", text: "Главное" }} />
                        <NavMenuItems item={{ link: "#", text: "Мой плейлист" }} />
                        <NavMenuItems item={{ link: "../signin.html", text: "Войти" }} />
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navmenu;