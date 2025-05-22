import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
