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
import AddObject from "./pages/AddObject";
import SingleItemPage from "./pages/SingleItemPage";
import ItemPage from "./pages/ItemPage";

import AddGroup from "./pages/AddGroup";
import AddUser from "./pages/AddUser";
import AddClient from "./pages/AddClient";

import MyRaportsPage from "./pages/MyRaportsPage";
import SingleRaportPage from "./pages/SingleRaportPage";

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
            <Route path="raports" element={<MyRaportsPage />} />
            <Route path="raports/:ticketId" element={<SingleRaportPage />} />

            <Route path="obiekty/add" element={<AddObject />} />

            <Route path="alarmy/add" element={<AddAlarm />} />
            <Route path="laptopy/add" element={<AddLaptopPage />} />
            <Route path="pc/add" element={<AddPCPage />} />
            <Route path="kamery/add" element={<AddCameraPage />} />
            <Route path="routers/add" element={<AddRouter />} />
            <Route path="nvr/add" element={<AddNVR />} />
            <Route path="anteny/add" element={<AddAntenna />} />
            <Route path="oprogramowania/add" element={<AddSoftware />} />
            <Route path="pozostale/add" element={<AddRemaining />} />

            <Route path="grupy/add" element={<AddGroup />} />
            <Route path="uzytkownicy/add" element={<AddUser />} />
            <Route path="klienci/add" element={<AddClient />} />

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
