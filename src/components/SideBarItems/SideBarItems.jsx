

import * as S from "./SideBarItems.style"

const SideBarItems = (props) => {
    return (
        <S.sidebarItem>

            <S.sidebarItemLink href={props.item.link}>
                <S.sidebarItemLinkImg
                    src={props.item.img}
                    alt="day's playlist"
                />
            </S.sidebarItemLink>

        </S.sidebarItem>
    );
};

export default SideBarItems; 