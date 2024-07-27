import "./pages.css";
import profileImg from "../resources/img_profile.png";

const MainContent = () => {
    return (
        <div className="content">
            <h1>YUJIN KIM</h1>
            <h2>Software Engineer</h2>
            <img src={profileImg} className="profile-img" alt="Yujin Kim" />

            <div className="links">
                <a href="your-github-link">MailIcon</a>
                <a href="your-linkedin-profile">GithubIcon</a>
                <a href="your-linkedin-profile">LinkdInIcon</a>
            </div>

            <div className="links">
                <a href="your-github-link">About</a>
                <a href="your-linkedin-profile">Contact</a>
                <a href="your-linkedin-profile">Resume</a>
            </div>
        </div>
    );
};

export default MainContent;
