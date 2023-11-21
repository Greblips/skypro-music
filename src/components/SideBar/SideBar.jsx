import * as S from "../SideBar/SideBar.styles";
import { playListArr } from "../../utils/playListArr";
import Skeleton from "../../utils/Skeleton"


export function Sidebar({ isLoading }) {
    const categoryPlayList = playListArr.map((category) => (
        <S.SidebarItem key={category.id}>
            {isLoading ? (
                <Skeleton width="250px" height="150px" />
            ) : (
                <S.SidebarLink to={`/category/${category.id}`}>
                    <S.SidebarImg src={category.img} alt={category.alt} />
                </S.SidebarLink>
            )}
        </S.SidebarItem>
    ));

    return (
        <S.mainSidebar>
            <S.sidebarPersonal>
                <S.sidebarPersonalName>Evgeny.Kerimov</S.sidebarPersonalName>
                <S.sidebarIcon>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout" />
                    </svg>
                </S.sidebarIcon>
            </S.sidebarPersonal>
            <S.sidebarBlock>
                <S.sidebarList>{categoryPlayList}</S.sidebarList>
            </S.sidebarBlock>
        </S.mainSidebar>
    );
}
