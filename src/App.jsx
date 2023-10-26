import "./App.css";
import { useState, useEffect } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Navmenu from "./components/NavMenu/Navmenu";
import Sidebar from "./components/SideBar/SideBar";
import TracksList from "./components/TrackList/TracksList";

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


  return <div className="wrapper">
    <div className="container">
      <main className="main">
        <Navmenu />
        <TracksList isLoading={isLoading} />
        <Sidebar />

      </main >
      <AudioPlayer isLoading={isLoading} />
      <footer className="footer" />
    </div >
  </div >
};

export default App;
