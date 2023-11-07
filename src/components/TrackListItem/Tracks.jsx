
import arrTracks from "../../utils/TracksDate";
import Skeleton from "../../utils/Skeleton";
import * as S from './Tracks.style'

const Tracks = ({ isLoading }) => {
    const trackItems = arrTracks.map((track) => (
        <S.playlistItem key={track.id}>
            {isLoading ? (<S.playlistTrack>
                <S.trackTitle>
                    <S.trackTitleImage>
                        <Skeleton width="51px" height="51px" />
                    </S.trackTitleImage>
                    <S.trackTitleText>
                        <S.trackTitleLink href="http://">
                            <Skeleton width="380px" height="20px" />
                            {/* <span className="track__title-span" /> */}
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
                    <S.trackTimeText> {track.trackTime}</S.trackTimeText>
                </S.trackTime>
            </S.playlistTrack>) : (
                <S.playlistTrack>
                    <S.trackTitle>
                        <S.trackTitleImage>
                            <S.trackTitleImage alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note" />
                            </S.trackTitleImage>
                        </S.trackTitleImage>


                        <S.trackTitleText>
                            <S.trackTitleLink to="http://">
                                {track.trackName}
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
                            {track.trackAuthor}
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
                        <S.trackTimeText> {track.trackTime}</S.trackTimeText>
                    </S.trackTime>
                </S.playlistTrack>
            )}
        </S.playlistItem >
    ));

    return <S.contentPlaylist>{trackItems}</S.contentPlaylist>;
};
export default Tracks;