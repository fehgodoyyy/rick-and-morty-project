import { ProviderRickAndMorty } from "./context/ContextRickAndMorty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import Character from "./pages/Character";
import FavoritesList from "./components/FavoritesList";

function App() {
  return (
    <ProviderRickAndMorty>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idCharacterSelect" element={<Character />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Router>
    </ProviderRickAndMorty>
  );
}

export default App;
