import { useState, useEffect } from "react";
import * as S from "./AudioVolume.style";

export const AudioVolume = ({ audioRef }) => {

    const [volume, setVolume] = useState(40);
    const [isVolume, setIsVolume] = useState(false);



    useEffect(() => {

        setIsVolume(false);
        if (audioRef) {
            audioRef.current.volume = volume / 100;

        }

    }, [volume, audioRef,]);


    const toggleTrackMute = () => {
        audioRef.current.muted = !isVolume;
        setIsVolume(!isVolume);
    };

    return (
        <S.barVolumeBlock>
            <S.volumeContent>
                <S.volumeImage>
                    <S.volumeSvg alt="volume" onClick={() => toggleTrackMute()} >
                        <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                    </S.volumeSvg>
                </S.volumeImage>
                <S.volumeProgress>
                    <S.volumeProgressLine
                        $style="input"

                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </S.volumeProgress>
            </S.volumeContent>
        </S.barVolumeBlock >
    );
}