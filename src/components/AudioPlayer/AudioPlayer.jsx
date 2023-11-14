import React from 'react';
import Skeleton from '../../utils/Skeleton';
import * as S from "./AudioPlayer.styles";
import AudioPlayerIcons from '../AudioPlayerIcons/AudioPlayerIcons';

export const AudioPlayer = ({ isLoading }) =>
    <>
        <S.bar>
            <S.barContent>
                <S.barProgress></S.barProgress>
                <S.barPlayerBlock>
                    <S.barPlayer>
                        <S.playerControls>
                            <AudioPlayerIcons alt="prev" />
                            <AudioPlayerIcons alt="play" />
                            <AudioPlayerIcons alt="next" />
                            <AudioPlayerIcons alt="repeat" />
                            <AudioPlayerIcons alt="shuffle" />
                        </S.playerControls>

                        <S.playerTrackPlay>
                            {isLoading ? (<S.trackPlayContain >
                                <S.trackPlayImage>
                                    <S.trackPlaySvg alt="music">
                                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                                    </S.trackPlaySvg>
                                </S.trackPlayImage>
                                <S.trackPlayAuthor>
                                    <S.trackPlayAuthorLink href="http://">
                                        <Skeleton width="49px" height="20px" />
                                    </S.trackPlayAuthorLink>
                                </S.trackPlayAuthor>
                                <S.trackPlayAlbum>
                                    <S.trackPlayAlbumLink href="http://">
                                        <Skeleton width="49px" height="20px" />
                                    </S.trackPlayAlbumLink>
                                </S.trackPlayAlbum>


                            </S.trackPlayContain>) : (<S.trackPlayContain>
                                <S.trackPlayImage>
                                    <S.trackPlaySvg alt="music">
                                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                                    </S.trackPlaySvg>
                                </S.trackPlayImage>
                                <S.trackPlayAuthor>
                                    <S.trackPlayAuthorLink href="http://">
                                        Ты та...
                                    </S.trackPlayAuthorLink>
                                </S.trackPlayAuthor>
                                <S.trackPlayAlbum>
                                    <S.trackPlayAlbumLink href="http://">
                                        Баста
                                    </S.trackPlayAlbumLink>
                                </S.trackPlayAlbum>


                            </S.trackPlayContain>)}

                            <S.trackPlayLikeDislike>
                                <S.trackPlayLike>
                                    <S.trackPlayLikeSvg alt="like">
                                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                                    </S.trackPlayLikeSvg>
                                </S.trackPlayLike>
                                <S.trackPlayDislike>
                                    <S.trackPlayDislikeSvg alt="dislike">
                                        <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                                    </S.trackPlayDislikeSvg>
                                </S.trackPlayDislike>
                            </S.trackPlayLikeDislike>
                        </S.playerTrackPlay>
                    </S.barPlayer>
                    <S.barVolumeBlock>
                        <S.volumeContent>
                            <S.volumeImage>
                                <S.volumeSvg alt="volume">
                                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                                </S.volumeSvg>
                            </S.volumeImage>
                            <S.volumeProgress>
                                <S.volumeProgressLine $style="input"
                                    className="volume__progress-line _btn"
                                    type="range"
                                    name="range"
                                />
                            </S.volumeProgress>
                        </S.volumeContent>
                    </S.barVolumeBlock>
                </S.barPlayerBlock>
            </S.barContent>
        </S.bar>
    </>


