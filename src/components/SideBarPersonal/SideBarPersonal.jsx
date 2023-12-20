import { useContext } from "react";
import React from 'react';
import * as S from "./SideBarPersonal.style"
import { UserContext } from "../Context/Context";


export const SideBarPersonal = () => {
    const { handleLogout } = useContext(UserContext);
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <S.sidebarPersonal>
            <S.sidebarPersonalName>{user.username}</S.sidebarPersonalName>
            <S.sidebarPeronalIcon onClick={handleLogout}>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </S.sidebarPeronalIcon>
        </S.sidebarPersonal>
    );
};

