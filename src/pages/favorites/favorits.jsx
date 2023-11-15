import React from 'react';
import * as S from "../main/main.style";
import { AudioPlayer } from '../../components/AudioPlayer/AudioPlayer';
import Navmenu from "../../components/NavMenu/Navmenu"

const favorits = (currentTrack) => {
    return (
        <S.wrapper>
            <S.container>

                <S.mainBlock>
                    <Navmenu />
                    <h1>FavoritesPages</h1>
                </S.mainBlock>
                <AudioPlayer currentTrack={currentTrack} />
            </S.container>
        </S.wrapper>
    );
};

export default favorits;