import { useState, useEffect } from "react";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import Navmenu from "../../components/NavMenu/Navmenu";
import { Sidebar } from "../../components/SideBar/SideBar";
import TracksList from "../../components/TrackList/TracksList";
import * as S from './main.style'
import { getTracksAll } from "../../Api";



export const Main = () => {
    const [isLoading, setLoading] = useState(true);
    const [tracks, setTracks] = useState([]);
    const [loadingTracksError, setLoadingTracksError] = useState(null);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        }


    }, [isLoading]);

    useEffect(() => {
        getTracksAll()
            .then((track) => {

                setTracks(track);
            })
            .catch((error) => {
                setLoadingTracksError(error.message);
            });
    }, []);

    console.log(tracks);


    return <S.wrapper>
        <S.container>
            <S.mainBlock>
                <Navmenu />
                <TracksList
                    isLoading={isLoading}
                    tracks={tracks}
                    loadingTracksError={loadingTracksError} />
                <Sidebar isLoading={isLoading}
                />

            </S.mainBlock >
            <AudioPlayer isLoading={isLoading} />

        </S.container >
    </S.wrapper >
};

