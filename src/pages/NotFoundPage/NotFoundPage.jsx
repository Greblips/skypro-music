

import NavMenu from "../../components/NavMenu/Navmenu";
import TrackListSearh from "../../components/TrackListSearh/TrackListSearh";
import * as S from "../main/main.style";
import * as Style from "./NotFoundPage.style"
import { useNavigate } from "react-router-dom";
import SideBarPersonal from "../../components/SideBarPersonal/SideBarPersonal";




const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <S.wrapper>
            <S.container>
                <Style.MainBlock>
                    <NavMenu />
                    <Style.MainCenterBlock><TrackListSearh />
                        <Style.NotFoundBlock>
                            <Style.NotFoundBlockTitle>404</Style.NotFoundBlockTitle>
                            <Style.NotFoundBlockItem>
                                <Style.NotFoundBlockItemTitle>
                                    Страница не найдена
                                </Style.NotFoundBlockItemTitle>
                                <img src="../img/crying.png" alt="smile_crying" />
                            </Style.NotFoundBlockItem>
                            <Style.NotFoundBlockText>
                                Возможно, она была удалена
                                <br /> или перенесена на другой адрес
                            </Style.NotFoundBlockText>
                            <Style.NotFoundBlockButton type="button" onClick={() => navigate("/")} >
                                Вернуться на главную
                            </Style.NotFoundBlockButton>
                        </Style.NotFoundBlock>

                    </Style.MainCenterBlock>
                    <Style.MainSidebar><SideBarPersonal /></Style.MainSidebar>

                </Style.MainBlock>
            </S.container>

        </S.wrapper>

    );
};

export default NotFoundPage;