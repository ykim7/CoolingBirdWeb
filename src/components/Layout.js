import Menu from "./Menu";
import Footer from "./Footer";
import "./components.css";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="upper-part">
                <Menu />
                <div className="content-area">
                    <main>{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
