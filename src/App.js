import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import StartGame from "./components/StartGame";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CreateRoom />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/start" element={<StartGame />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
