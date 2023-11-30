import "./index.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./compments/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
