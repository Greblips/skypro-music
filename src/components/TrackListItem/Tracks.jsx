
import { formatTime } from "../../utils/formatTime";
import * as S from './Tracks.style'
import { useSelector } from "react-redux";
import {
    currentTrackSelector,
    isPlayingSelector,
} from "../../store/selectors/tracks";


const Tracks = ({ tracks, handleCurrentTrack, loadingTracksError }) => {
    const currentTrack = useSelector(currentTrackSelector);
    const isPlaying = useSelector(isPlayingSelector);

    const trackItems = tracks.map((track) => (


        < S.playlistItem key={track.id} onClick={() => handleCurrentTrack(track)}>

            <S.playlistTrack>
                <S.trackTitle>
                    <S.trackTitleImage>
                        {currentTrack && currentTrack.id === track.id ? (
                            <S.PointPlaying $playing={isPlaying} />
                        ) : (
                            <S.trackTitleSvg alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </S.trackTitleSvg>
                        )}
                    </S.trackTitleImage>

                    <S.trackTitleText>
                        <S.trackTitleLink to="http://">
                            {track.name}
                            {track.remix ? (
                                <span className="track__title-span">({track.remix})</span>
                            ) : (
                                ""
                            )}
                        </S.trackTitleLink>
                    </S.trackTitleText>
                </S.trackTitle>
                < S.trackAuthor>
                    <S.trackAuthorLink to="http://">
                        {track.author}
                    </S.trackAuthorLink>
                </S.trackAuthor>

                <S.trackAlbum>
                    <S.trackAlbumLink to="http://">
                        {track.album}
                    </S.trackAlbumLink>
                </S.trackAlbum>
                <S.trackTime>
                    <S.trackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.trackTimeSvg>
                    <S.trackTimeText> {formatTime(track.duration_in_seconds)}</S.trackTimeText>
                </S.trackTime>
            </S.playlistTrack>
        </S.playlistItem >
    ));

    return <S.contentPlaylist>{loadingTracksError ? (<div>Не удалось загрузить плейлист, попробуйте позже</div>) : (trackItems)}</S.contentPlaylist>;
};
export default Tracks;