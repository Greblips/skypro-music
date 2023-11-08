

import NavMenu from "../../components/NavMenu/Navmenu";
import TrackListSearh from "../../components/TrackListSearh/TrackListSearh";
import * as S from "../main/main.style";
import * as Style from "./NotFoundPage.style"



const NotFoundPage = () => {

    return (
        <S.wrapper>
            <S.container>
                <Style.columns>
                    <NavMenu />
                    <TrackListSearh />
                </Style.columns>
            </S.container>

        </S.wrapper>

    );
};

export default NotFoundPage;