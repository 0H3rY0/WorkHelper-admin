import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import ObjectPage from "./pages/ObjectPage";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleObjectPage from "./pages/SingleObjectPage";

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ObjectPage />} />
          <Route path="object/:id" element={<SingleObjectPage />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
