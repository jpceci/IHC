
import "./App.css";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import { Route, Routes} from "react-router-dom";
import Inscription from "./pages/Inscription/Inscription";
import Addition from "./pages/Addition/Addition";
import SpecialCases from "./pages/SpecialCases/SpecialCases";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="/inscription" exact element={<Inscription/>} />
          <Route path="/addition" exact element={<Addition/>} />
          <Route path="/specialCases" exact element={<SpecialCases/>} />
          <Route path="*" element={<Menu/>} />
      </Routes>
    </div>
  );
}

export default App;
