import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import MainTemplate from "./templates/MainTemplate";

function App() {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
    </MainTemplate>
  );
}

export default App;
