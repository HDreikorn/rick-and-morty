import "./App.css";
import AppContent from "./components/app-content";
import AppHeader from "./components/app-header";
import { EpisodeListProvider } from "./context/episode-lists-context";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <EpisodeListProvider>
        <AppContent />
      </EpisodeListProvider>
    </div>
  );
}

export default App;
