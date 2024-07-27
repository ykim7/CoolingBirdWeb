import Menu from "./Menu";
import Footer from "./Footer";
import "./components.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="content-area">
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
