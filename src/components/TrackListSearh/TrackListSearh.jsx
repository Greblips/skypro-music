import React from 'react';
import * as S from "./TrackListSearh.style"

const TrackListSearh = () => {
    return (
        <S.centerBlockSearch>
            <S.searchSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
            </S.searchSvg>
            <S.searchText
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </S.centerBlockSearch>
    );
};

export default TrackListSearh;