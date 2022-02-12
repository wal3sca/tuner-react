import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Songs from "./Components/Songs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/songs" element={<Songs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
