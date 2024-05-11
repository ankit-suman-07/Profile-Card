import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Navbar />
      <Card page={page} />
      <div className="footer" >
        <Footer page={page} setPage={setPage} />
      </div>

    </div>
  );
}

export default App;
