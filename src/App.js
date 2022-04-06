import "./App.css";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
        <Link to="/favourites">Favourites</Link>
      </header>
    </div>
  );
}

export default App;
