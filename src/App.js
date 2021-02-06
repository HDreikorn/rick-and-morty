import "./App.css";
import AppHeader from "./components/app-header";
import EpisodeTrackingCard from "./components/episode-tracking-card";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div>
        <EpisodeTrackingCard title={"Watched"} />
        <EpisodeTrackingCard title={"Favorites"} />
        <EpisodeTrackingCard title={"Must-Watch"} />
      </div>
    </div>
  );
}

export default App;
