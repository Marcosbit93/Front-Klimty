import "./App.css";
import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { LoginM } from "./components/Auth/LoginM";
import { SignupM } from "./components/Auth/SignupM";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { Toaster } from "react-hot-toast";
import Checkout from "./components/Checkout/Checkout";
import ErrorPage from "./components/ErrorPage";
import DetailsCard from "./commons/DetailsCard";
import AdminViewUser from "./components/Admin/AdminViewUser";
import { HomeAdmin } from "./components/Admin/HomeAdmin";
import AdminViewProduct from "./components/Admin/AdminViewProduct";
import AdminViewArtist from "./components/Admin/AdminViewArtist";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginM />} />
        <Route path="/product/:id" element={<DetailsCard />} />
        <Route path="/signup" element={<SignupM />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/admin/product" element={<AdminViewProduct />} />
        <Route path="/admin/user" element={<AdminViewUser />} />
        <Route path="/admin/artist" element={<AdminViewArtist />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
