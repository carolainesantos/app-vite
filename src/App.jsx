import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Videos from "./components/Videos";
import List from "./components/List";
import Forms from "./components/Forms";

function App() {
  return (
    <>
      <Header />
      <main>
        <List />
        <Videos />
        <Forms />
      </main>
      <Footer />
    </>
  );
}

export default App;
