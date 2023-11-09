import React from 'react';
import * as S from "../main/main.style";
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer';
import Navmenu from "../../components/NavMenu/Navmenu"

const favorits = () => {
    return (
        <S.wrapper>
            <S.container>

                <S.mainBlock>
                    <Navmenu />
                    <h1>FavoritesPages</h1>
                </S.mainBlock>
                <AudioPlayer />
            </S.container>
        </S.wrapper>
    );
};

export default favorits;