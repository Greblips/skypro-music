import { useState, useEffect } from "react";
import * as S from "./AudioVolume.style";

export const AudioVolume = ({ audioRef }) => {

    let [volume, setVolume] = useState(30);
    const [isVolume, setIsVolume] = useState(true)




    const volumeTrue = () => {
        setVolume(volume = 30)
        setIsVolume(true)

    };

    const volumeFalse = () => {
        setVolume(volume = 0)
        setIsVolume(false)

    };

    useEffect(() => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;


        }
    }, [volume, audioRef,]);

    const toggleVolume = isVolume ? volumeFalse : volumeTrue;
    return (
        <S.barVolumeBlock>
            <S.volumeContent>
                <S.volumeImage>
                    <S.volumeSvg alt="volume" onClick={toggleVolume}>
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
        </S.barVolumeBlock>
    );
}