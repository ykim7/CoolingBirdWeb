import "./pages.css";
import profileImg from "../resources/img_profile.png";

const MainContent = () => {
    return (
        <div className="content animated fadeIn">
            <h1>YUJIN KIM</h1>
            <h3>Software Engineer</h3>
            <a href="/">
                <img src={profileImg} className="profile-img animated rotateIn" alt="Yujin Kim" />
            </a>

            <div className="social-links">
                <a href="mailto:ykim.code@gmail.com">
                    <i className="fa-solid fa-envelope" />
                </a>
                <a href="https://github.com/ykim7" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/ykimcode/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin" />
                </a>
            </div>

            <div className="links">
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="http://resume.coolingbird.com" target="_blank" rel="noopener noreferrer">
                    Resume
                </a>
            </div>
        </div>
    );
};

export default MainContent;
