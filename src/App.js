
import "./App.css";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/menu" exact element={<Menu/>} />
          <Route path="*" element={<Menu/>} />
      </Routes>
    </div>
  );
}

export default App;
