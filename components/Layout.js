import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="px-0 vh-100 d-flex flex-column">
      <NavBar />
      <main className="vh-100 bg-light">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
