import "bootstrap/dist/css/bootstrap.min.css";

//rrd
import { Outlet } from "react-router-dom";
//components
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
