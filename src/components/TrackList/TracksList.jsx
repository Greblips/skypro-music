import React from 'react';

import Tracks from "../TrackListItem/Tracks";
import TrackListHeader from '../TrackListHeader/TrackListHeader';
import TrackListFilter from '../TrackListFilter/TracklListFilter';
import * as S from "./TrackList.style";

const TracksList = ({ isLoading }) => {
    return (
        <S.mainCenterBlock>
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
            <S.centerBlockhH2>Треки</S.centerBlockhH2>
            <TrackListFilter />
            <S.centerblockContent>
                <TrackListHeader />
                <Tracks isLoading={isLoading} />
            </S.centerblockContent>
        </S.mainCenterBlock>
    );
};

export default TracksList;