
import SideBarItems from '../SideBarItems/SideBarItems';
import Skeleton from '../../utils/Skeleton';
import * as S from "./SideBar.styles";
import SideBarPersonal from '../SideBarPersonal/SideBarPersonal';



const Sidebar = ({ isLoading }) => {
    return (
        <S.mainSidebar>
            <SideBarPersonal />
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