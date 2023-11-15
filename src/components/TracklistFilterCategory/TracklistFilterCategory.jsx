
import * as S from './TracklistFilterCategory.style'

const TrackListFilterCategory = ({
    nameCategory,
    content,
    isActiveCategory,
    setActiveCategory,
}) => {
    const switchСategoryFilter = () =>
        setActiveCategory(isActiveCategory === nameCategory ? "" : nameCategory);

    return (
        <S.filterCategoryName>
            <S.filterButton
                type="button"
                onClick={switchСategoryFilter}
                $activeStyle={isActiveCategory === nameCategory}
            >
                {nameCategory}
            </S.filterButton>
            {isActiveCategory === nameCategory && (
                <S.filterCategoryMenu>
                    <S.filterList>{content}</S.filterList>
                </S.filterCategoryMenu>
            )}
        </S.filterCategoryName>
    );
}
export default TrackListFilterCategory