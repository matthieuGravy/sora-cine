import "./index.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./compments/Navbar";
import { ModalCookie } from "./compments/ModalCookie";
function App() {
  return (
    <>
      <Navbar />
      <ModalCookie />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
