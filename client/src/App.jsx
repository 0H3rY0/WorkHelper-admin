import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import Object from "./pages/Object";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
      <Object />
    </MainTemplate>
  );
}

export default App;
