import { useState, useEffect } from "react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import Navmenu from "../../components/NavMenu/Navmenu";
import { Sidebar } from "../../components/SideBar/SideBar";
import TracksList from "../../components/TrackList/TracksList";
import * as S from './main.style';
import { getTracksAll } from "../../components/Api/api"
import TrackListSearh from "../../components/TrackListSearh/TrackListSearh"
import SideBarPersonal from "../../components/SideBarPersonal/SideBarPersonal";


export const Main = () => {
    const [isLoading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const handleCurrentTrack = (track) => setCurrentTrack(track);

    const [loadingTracksError, setLoadingTracksError] = useState(null);




    useEffect(() => {

        getTracksAll()
            .then((track) => {
                setTracks(track);
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

