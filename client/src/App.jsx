import TopNav from "./components/TopNav/TopNav";
import SecondaryNav from "./components/SecondaryNav/SecondaryNav";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopNav />
      <main>
        <SecondaryNav />
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
