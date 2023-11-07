// import "./App.css";
import { useState, useEffect } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Navmenu from "./components/NavMenu/Navmenu";
import Sidebar from "./components/SideBar/SideBar";
import TracksList from "./components/TrackList/TracksList";
import * as S from './App.style'

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }


  }, [isLoading]);


  return <S.wrapper>
    <S.container>
      <S.mainBlock>
        <Navmenu />
        <TracksList isLoading={isLoading} />
        <Sidebar isLoading={isLoading} />

      </S.mainBlock >
      <AudioPlayer isLoading={isLoading} />

    </S.container >
  </S.wrapper >
};

export default App;
