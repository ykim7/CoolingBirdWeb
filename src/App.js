import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainContent from "./pages/MainContent";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<MainContent />} />
                    <Route path="/main" exact component={<MainContent />} />
                    <Route path="/about" component={<About />} />
                    <Route path="/contact" component={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
