import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainContent from "./pages/MainContent";
import Resume from "./pages/Resume";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<MainContent />} />
                    <Route path="/main" exact element={<MainContent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="resume" element={<Resume />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
