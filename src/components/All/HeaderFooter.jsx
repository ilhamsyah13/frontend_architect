import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

function HeaderFooter({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

HeaderFooter.propTypes = {
  children: PropTypes.node,
};

export default HeaderFooter;
