import React from 'react';

import Tracks from "../TrackListItem/Tracks";
import TrackListHeader from '../TrackListHeader/TrackListHeader';
import TrackListFilter from '../TrackListFilter/TracklListFilter';
import * as S from "./TrackList.style";
import TrackListSearh from '../TrackListSearh/TrackListSearh';

const TracksList = ({ isLoading }) => {
    return (
        <S.mainCenterBlock>
            <TrackListSearh />
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