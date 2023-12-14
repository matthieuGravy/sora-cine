import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Errorpage } from "./routes/errorpage/Errorpage";
import Homepage from "./routes/Homepage/Homepage";
import Landingpage from "./routes/Landingpage.jsx/Landingpage";
import Registerpage from "./routes/registerpage/registerpage";
import Loginpage from "./routes/Loginpage/Loginpage";
import Contactpage from "./routes/Contactpage/Contactpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "hello", element: <Homepage /> },
      { path: "register", element: <Registerpage /> },
      { path: "login", element: <Loginpage /> },
      { path: "contact", element: <Contactpage /> },
    ],
  },
]);
