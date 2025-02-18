import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SingleObjectPage from "./pages/object/SingleObjectPage";
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
import AddObject from "./pages/object/AddObject";
import SingleItemPage from "./pages/SingleItemPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <MainTemplate>
          <Header />
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<ObjectPage />} /> */}
            {/* <Route path="object/:id" element={<SingleObjectPage />} /> */}
            <Route path="object/add" element={<AddObject />} />

            <Route path="alarmy/add" element={<AddAlarm />} />
            <Route path="laptopy/add" element={<AddLaptopPage />} />
            <Route path="pc/add" element={<AddPCPage />} />
            <Route path="kamery/add" element={<AddCameraPage />} />
            <Route path="routers/add" element={<AddRouter />} />
            <Route path="nvr/add" element={<AddNVR />} />
            <Route path="anteny/add" element={<AddAntenna />} />
            <Route path="oprogramowania/add" element={<AddSoftware />} />
            <Route path="pozostale/add" element={<AddRemaining />} />

            <Route path=":tableName/:id" element={<SingleItemPage />} />

            <Route path=":tableName" element={<ItemPage />} />

            {/* <Route path="/alarm" element={<AlarmPage />} /> */}
            {/* <Route path="alarmy/add" element={<AddAlarm />} /> */}
          </Routes>
        </MainTemplate>
      </BrowserRouter>
    </>
  );
}

export default App;
