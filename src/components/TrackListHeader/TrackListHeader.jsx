import React from 'react';
import './TrackListHeader.css'
import * as S from './TrackListHeader.style'

const TrackListHeader = () => {
    return (
        <S.contentTitle>
            <S.col01>Трек</S.col01>
            <S.col02>ИСПОЛНИТЕЛЬ</S.col02>
            <S.col03>АЛЬБОМ</S.col03>
            <S.col04>
                <S.playlistTitleSvg alt="time">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </S.playlistTitleSvg>
            </S.col04>
        </S.contentTitle>
    );
};

export default TrackListHeader;