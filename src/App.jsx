import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import Footer from "./components/Footer";
import Navmenu from "./components/Navmenu";
import Sidebar from "./components/Sidebar";
import Tracklist from "./components/Tracklist";


const App = () => {
  return <div className="wrapper">
    <div className="container">
      <main className="main">
        <Navmenu />
        < Tracklist />
        <Sidebar />
      </main >
      <AudioPlayer />
      <Footer />
    </div >
  </div >
};

export default App;
