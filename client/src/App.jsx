import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import ObjectPage from "./pages/ObjectPage";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleObjectPage from "./pages/SingleObjectPage";
import AddLaptopPage from "./pages/AddLaptopPage";

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ObjectPage />} />
          <Route path="object/:id" element={<SingleObjectPage />} />
          <Route path="laptop/add" element={<AddLaptopPage />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
