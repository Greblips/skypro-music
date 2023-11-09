import { useParams } from "react-router-dom";
import * as S from "../main/main.style";
import { AudioPlayer } from "../../components/AudioPlayer/AudioPlayer";
import { playListArr } from "../../utils/playListArr";


export function Category() {
    const params = useParams();

    const category = playListArr.find(
        (element) => element.id === Number(params.id)
    );

    return (
        <S.wrapper>
            <S.container>

                <S.mainBlock>
                    <h1>{category.alt}</h1>
                    <img src={category.img} alt={category.alt} />
                </S.mainBlock>
                <AudioPlayer />
            </S.container>
        </S.wrapper>
    );
}