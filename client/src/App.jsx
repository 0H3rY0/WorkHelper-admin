import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import ObjectPage from "./pages/ObjectPage";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleObjectPage from "./pages/SingleObjectPage";
import AddLaptopPage from "./pages/AddLaptopPage";
import { ToastContainer } from "react-toastify";
import AddPCPage from "./pages/AddPCPage";
import AddSoftware from "./pages/AddSoftware";
import AddRemaining from "./pages/AddRemaining";
import AddAlarm from "./pages/AddAlarm";
import AddAntenna from "./pages/AddAntenna";
import AddCameraPage from "./pages/AddCameraPage";
import AddNVR from "./pages/AddNVR";
import AddRouter from "./pages/AddRouter";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MainTemplate>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<ObjectPage />} />
            <Route path="object/:id" element={<SingleObjectPage />} />
            <Route path="laptop/add" element={<AddLaptopPage />} />
            <Route path="PC/add" element={<AddPCPage />} />
            <Route path="camera/add" element={<AddCameraPage />} />
            <Route path="router/add" element={<AddRouter />} />
            <Route path="NVR/add" element={<AddNVR />} />
            <Route path="alarm/add" element={<AddAlarm />} />
            <Route path="antenna/add" element={<AddAntenna />} />
            <Route path="software/add" element={<AddSoftware />} />
            <Route path="remaining/add" element={<AddRemaining />} />
          </Routes>
        </MainTemplate>
      </BrowserRouter>
    </>
  );
}

export default App;
