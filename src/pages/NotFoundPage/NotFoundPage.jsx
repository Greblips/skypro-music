

import NavMenu from "../../components/NavMenu/Navmenu";
import TrackListSearh from "../../components/TrackListSearh/TrackListSearh";
import * as S from "../main/main.style";
import * as Style from "./NotFoundPage.style"

import SideBarPersonal from "../../components/SideBarPersonal/SideBarPersonal";




const NotFoundPage = () => {

    return (
        <S.wrapper>
            <S.container>
                <Style.mainBlock>
                    <NavMenu />
                    <Style.mainCenterBlock><TrackListSearh />
                        <Style.NotFoundBlock>
                            <Style.notFoundBlockTitle>404</Style.notFoundBlockTitle>
                            <Style.notFoundBlockItem>
                                <Style.notFoundBlockItemTitle>
                                    Страница не найдена
                                </Style.notFoundBlockItemTitle>
                                <img src="../img/icon/smile_crying.svg" alt="smile_crying" /></Style.notFoundBlockItem>
                            <Style.notFoundBlockItem />
                            <Style.notFoundBlockText>
                                Возможно, она была удалена
                                <br /> или перенесена на другой адрес
                            </Style.notFoundBlockText>
                            <Style.notFoundBlockButton type="button" >
                                Вернуться на главную
                            </Style.notFoundBlockButton>
                        </Style.NotFoundBlock>

                    </Style.mainCenterBlock>
                    <Style.mainSidebar><SideBarPersonal /></Style.mainSidebar>

                </Style.mainBlock>
            </S.container>

        </S.wrapper>

    );
};

export default NotFoundPage;