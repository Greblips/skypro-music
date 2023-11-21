import React from 'react';
import * as S from "./SideBarPersonal.style"

const SideBarPersonal = () => {
    return (
        <S.sidebarPersonal>
            <S.sidebarPersonalName>Evgeny.Kerimov</S.sidebarPersonalName>
            <S.sidebarPeronalIcon>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </S.sidebarPeronalIcon>
        </S.sidebarPersonal>
    );
};

export default SideBarPersonal;