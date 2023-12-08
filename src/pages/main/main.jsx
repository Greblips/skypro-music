import { useState, useEffect } from "react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import Navmenu from "../../components/NavMenu/Navmenu";
import { Sidebar } from "../../components/SideBar/SideBar";
import TracksList from "../../components/TrackList/TracksList";
import * as S from './main.style';
import { getTracksAll } from "../../components/Api/api"
import TrackListSearh from "../../components/TrackListSearh/TrackListSearh"
import SideBarPersonal from "../../components/SideBarPersonal/SideBarPersonal";
import { useDispatch, useSelector } from "react-redux";
import { setAllTracks } from "../../store/actions/creators/tracks";
import {
    allTracksSelector,
    currentTrackSelector,
} from "../../store/selectors/tracks";

import { setCurrentTrack } from "../../store/actions/creators/tracks";


export const Main = () => {
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const tracks = useSelector(allTracksSelector);

    const [loadingTracksError, setLoadingTracksError] = useState(null);
    const currentTrack = useSelector(currentTrackSelector);

    const handleCurrentTrack = (track) => {
        const indexCurrentTrack = tracks.indexOf(track);
        dispatch(setCurrentTrack(track, indexCurrentTrack));
        console.log(track);
        console.log("indexCurrentTrack: ", indexCurrentTrack);
    };





    useEffect(() => {

        getTracksAll()
            .then((track) => {
                dispatch(setAllTracks(track))
                setLoading(false);
            })
            .catch((error) => {

                setLoadingTracksError(error.message);
            });

    }, []);




    return <S.wrapper>
        <S.container>
            <Navmenu />
            <TrackListSearh />
            <SideBarPersonal />
            <TracksList
                isLoading={isLoading}
                tracks={tracks}
                loadingTracksError={loadingTracksError}
                handleCurrentTrack={handleCurrentTrack} />
            <Sidebar
                isLoading={isLoading}
                loadingTracksError={loadingTracksError}
            />


            {currentTrack && (
                <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
            )}

        </S.container >
    </S.wrapper >
};

