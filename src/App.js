import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";
import StartGame from "./components/StartGame";

function App() {
  return (
    <>
      {" "}
      <div className="image"></div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CreateRoom />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/start" element={<StartGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
