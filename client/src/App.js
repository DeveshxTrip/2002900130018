import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import SingleTrain from "./Pages/SingleTrain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:trainId" element={<SingleTrain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
