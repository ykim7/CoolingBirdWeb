import Menu from "./Menu";
import Footer from "./Footer";
import "./components.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Menu />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
