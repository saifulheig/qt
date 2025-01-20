import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
