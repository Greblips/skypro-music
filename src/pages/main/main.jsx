import { useState, useEffect } from "react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import Navmenu from "../../components/NavMenu/Navmenu";
import { Sidebar } from "../../components/SideBar/SideBar";
import TracksList from "../../components/TrackList/TracksList";
import * as S from './main.style';
import { getTracksAll } from "../../api"




export const Main = () => {
    const [isLoading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const handleCurrentTrack = (track) => setCurrentTrack(track);

    const [loadingTracksError, setLoadingTracksError] = useState(null);

    // useEffect(() => {
    //     if (isLoading) {
    //         const timer = setTimeout(() => {
    //             setLoading(false);
    //         }, 2000);

    //         return () => clearTimeout(timer);
    //     }


    // }, [isLoading]);

    useEffect(() => {

        getTracksAll()
            .then((track) => {
                setTracks(track);

                setLoading(false);

            })
            .catch((error) => {

                setLoadingTracksError(error.message);
            });

    }, [isLoading]);




    return <S.wrapper>
        <S.container>
            <S.mainBlock>
                <Navmenu />
                <TracksList
                    isLoading={isLoading}
                    tracks={tracks}
                    loadingTracksError={loadingTracksError}
                    handleCurrentTrack={handleCurrentTrack} />
                <Sidebar
                    isLoading={isLoading}
                    loadingTracksError={loadingTracksError}
                />

            </S.mainBlock >
            {currentTrack && (
                <AudioPlayer isLoading={isLoading} currentTrack={currentTrack} />
            )}

        </S.container >
    </S.wrapper >
};

