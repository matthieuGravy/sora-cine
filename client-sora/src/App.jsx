import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;
