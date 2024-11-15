import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import ApiRickAndMorty from "./pages/ApiRickAndMorty";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<ApiRickAndMorty />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
