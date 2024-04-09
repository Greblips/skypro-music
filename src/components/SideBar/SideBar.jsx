
import * as S from "./Sidebar.style";
import { playListArr } from "../../utils/playListArr";
import { SkeletonSidebar } from "../TrackListItem/Tracks.style";

export function Sidebar({ isLoading, loadingTracksError }) {
  const categoryPlayList = playListArr.map((category) => (
    <S.SidebarItem key={category.id}>
      {!isLoading && !loadingTracksError ? (
        <S.SidebarLink to={`/category/${category.id}`}>
          <S.SidebarImg src={category.img} alt={category.alt} />
        </S.SidebarLink>
      ) : (
        <SkeletonSidebar />
      )}
    </S.SidebarItem>
  ));



  return (
    <S.mainSidebar>
      <S.sidebarBlock>
        <S.sidebarList>{categoryPlayList}</S.sidebarList>
      </S.sidebarBlock>
    </S.mainSidebar>
  );
}