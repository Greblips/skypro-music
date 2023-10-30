
import { BrowserRouter } from "react-router-dom";
import * as S from "./NavMenuItems.styles";

const NavMenuItems = (props) => {
    return (
        <S.menuItem className="menu__item">
            <BrowserRouter>
                <S.menuLink to={props.item.link} className="menu__link">
                    {props.item.text}
                </S.menuLink>
            </BrowserRouter>
        </S.menuItem>
    );
};

export default NavMenuItems;