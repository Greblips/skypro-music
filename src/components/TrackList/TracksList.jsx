import React from 'react';

import Tracks from "../TrackListItem/Tracks";
import TrackListHeader from '../TrackListHeader/TrackListHeader';
import TrackListFilter from '../TrackListFilter/TracklListFilter';
import * as S from "./TrackList.style";
import TrackListSearh from '../TrackListSearh/TrackListSearh';

const TracksList = ({ isLoading, tracks, loadingTracksError, handleCurrentTrack, }) => {
    return (
        <S.mainCenterBlock>
            <TrackListSearh />
            <S.centerBlockhH2>Треки</S.centerBlockhH2>
            <TrackListFilter />
            <S.centerblockContent>
                <TrackListHeader />
                {loadingTracksError ? (
                    <div>Не удалось загрузить плейлист, попробуйте позже</div>
                ) : (
                    <Tracks
                        isLoading={isLoading}
                        tracks={tracks}
                        handleCurrentTrack={handleCurrentTrack}

                    />
                )}
            </S.centerblockContent>
        </S.mainCenterBlock>
    );
};

export default TracksList;