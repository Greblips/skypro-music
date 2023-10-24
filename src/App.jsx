import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Navmenu from "./components/NavMenu/Navmenu";
import Sidebar from "./components/SideBar/SideBar";
// import TrackList from "./components/TrackList/Tracklist";
import TracksList from "./components/TrackList/TracksList";

const App = () => {
  return <div className="wrapper">
    <div className="container">
      <main className="main">
        <Navmenu />
        <TracksList />
        <Sidebar />

      </main >
      <AudioPlayer />

    </div >
  </div >
};

export default App;
