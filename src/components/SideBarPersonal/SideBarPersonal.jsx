import { useContext } from "react";
import React from 'react';
import * as S from "./SideBarPersonal.style"
import { UserContext } from "../Context/Context";


const SideBarPersonal = () => {
    const { user, handleLogout } = useContext(UserContext);

    return (
        <S.sidebarPersonal>
            <S.sidebarPersonalName>{user}</S.sidebarPersonalName>
            <S.sidebarPeronalIcon onClick={handleLogout}>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </S.sidebarPeronalIcon>
        </S.sidebarPersonal>
    );
};

export default SideBarPersonal;