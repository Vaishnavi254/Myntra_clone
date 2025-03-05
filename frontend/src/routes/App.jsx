import FetchItems from "../components/FetchItems.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>:<Outlet/>}
      <Footer></Footer>
    </>
  );
}

export default App;
