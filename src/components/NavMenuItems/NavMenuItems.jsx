

import * as S from "./NavMenuItems.styles";

const NavMenuItems = (props) => {
    return (
        <S.menuItem>
            <S.menuLink to={props.item.link}>
                {props.item.text}
            </S.menuLink>

        </S.menuItem>
    );
};

export default NavMenuItems;