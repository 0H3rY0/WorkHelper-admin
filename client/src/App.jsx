import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import ObjectPage from "./pages/ObjectPage";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
      <ObjectPage />
    </MainTemplate>
  );
}

export default App;
