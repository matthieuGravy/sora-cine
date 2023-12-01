import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Errorpage } from "./routes/errorpage/Errorpage";
import Homepage from "./routes/Homepage/Homepage";
import Landingpage from "./routes/Landingpage.jsx/Landingpage";
import Registerpage from "./routes/registerpage/registerpage";
import Loginpage from "./routes/Loginpage/Loginpage";
import Contactpage from "./routes/Contactpage/Contactpage";
import Aboutpage from "./routes/Aboutpage/Aboutpage";
import Watchpage from "./routes/Watchpage/Watchpage";
import Categorypage from "./routes/Categorypage/Categorypage";
import Disconnected from "./routes/Disconectedpage/Disconectedpage";
import Accountdeleted from "./routes/Accountdeleted/Accountdeleted";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "hello", element: <Landingpage /> },
      { path: "register", element: <Registerpage /> },
      { path: "login", element: <Loginpage /> },
      { path: "contact", element: <Contactpage /> },
      { path: "about", element: <Aboutpage /> },
      { path: "watch", element: <Watchpage /> },
      { path: "category", element: <Categorypage /> },
      { path: "disconnected", element: <Disconnected /> },
      { path: "accountdeleted", element: <Accountdeleted /> },
    ],
  },
]);
