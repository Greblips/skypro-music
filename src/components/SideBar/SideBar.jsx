
import SideBarItems from '../SideBarItems/SideBarItems';
import Skeleton from '../../utils/Skeleton';
import * as S from "./SideBar.styles";



const Sidebar = ({ isLoading }) => {
    return (
        <S.mainSidebar>
            <S.sidebarPersonal>
                <S.sidebarPersonalName>Evgeny.Kerimov</S.sidebarPersonalName>
                <S.sidebarPeronalIcon>
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </S.sidebarPeronalIcon>
            </S.sidebarPersonal>
            {isLoading ? (<S.sidebarBlock>
                <S.sidebarList>
                    <Skeleton width="250px" height="150px" marginBottom="30px" />
                    <Skeleton width="250px" height="150px" marginBottom="30px" />
                    <Skeleton width="250px" height="150px" />
                </S.sidebarList>
            </S.sidebarBlock>) : (<S.sidebarBlock>
                <S.sidebarList>
                    <SideBarItems item={{ link: "#", img: "img/playlist01.png" }} />
                    <SideBarItems item={{ link: "#", img: "img/playlist02.png" }} />
                    <SideBarItems item={{ link: "#", img: "img/playlist03.png" }} />
                </S.sidebarList>
            </S.sidebarBlock>)}
        </S.mainSidebar>
    );
};

export default Sidebar;