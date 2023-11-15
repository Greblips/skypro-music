
import Skeleton from "../../utils/Skeleton";
import * as S from './Tracks.style'
import arrTracks from "../../utils/TracksDate";

const FakeTracks = ({ isLoading, handleCurrentTrack }) => {
    const trackItems = arrTracks.map((track) => (
        <S.playlistItem key={track.id} onClick={() => handleCurrentTrack(track)}>
            <S.playlistTrack>
                <S.trackTitle>
                    <S.trackTitleImage>
                        <Skeleton width="51px" height="51px" />
                    </S.trackTitleImage>
                    <S.trackTitleText>
                        <S.trackTitleLink href="http://">
                            <Skeleton width="380px" height="20px" />
                            <span className="track__title-span" />
                        </S.trackTitleLink>
                    </S.trackTitleText>
                </S.trackTitle>
                < S.trackAuthor>
                    <S.trackAuthorLink href="http://">
                        <Skeleton width="321px" height="20px" />
                    </S.trackAuthorLink>
                </S.trackAuthor>

                <S.trackAlbum>
                    <S.trackAlbumLink href="http://">
                        <Skeleton width="245px" height="20px" />
                    </S.trackAlbumLink>
                </S.trackAlbum>
                <S.trackTime>
                    <S.trackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </S.trackTimeSvg>
                    <S.trackTimeText></S.trackTimeText>
                </S.trackTime>
            </S.playlistTrack>
        </S.playlistItem >
    ));

    return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
};
export default FakeTracks;