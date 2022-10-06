import Footer from "./Footer";
import NavBar from "./NavBar";

const LayoutDefault = ({ children }) => {
  return (
    <div className="px-0 vh-100 d-flex flex-column">
      <NavBar />
      <main className="flex-grow-1 pt-5 mt-2">
        <div className="d-flex flex-column align-items-center py-5 px-4">
          <div className="container-fluid">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutDefault;
