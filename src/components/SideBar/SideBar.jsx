
import "./SideBar.css";
import SideBarItems from '../SideBarItems/SideBarItems';
import Skeleton from '../../utils/Skeleton';

const Sidebar = (isLoading) => {
    return (
        <div className="main__sidebar sidebar">
            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__icon">
                    <svg alt="logout">
                        <use xlinkHref="img/icon/sprite.svg#logout"></use>
                    </svg>
                </div>
            </div>
            {isLoading ? (<div className="sidebar__block">
                <div className="sidebar__list">
                    <Skeleton width="49px" height="20px" />
                    <SideBarItems item={{ link: "#", img: "img/playlist02.png" }} />
                    <SideBarItems item={{ link: "#", img: "img/playlist03.png" }} />
                </div>
            </div>) : (<div className="sidebar__block">
                <div className="sidebar__list">
                    <SideBarItems item={{ link: "#", img: "img/playlist01.png" }} />
                    <SideBarItems item={{ link: "#", img: "img/playlist02.png" }} />
                    <SideBarItems item={{ link: "#", img: "img/playlist03.png" }} />
                </div>
            </div>)}
        </div>
    );
};

export default Sidebar;