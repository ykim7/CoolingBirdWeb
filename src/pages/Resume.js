import "./pages.css";

const Resume = () => {
    return (
        <div className="content">
            <embed
                src={`${process.env.PUBLIC_URL}/Resume.pdf`}
                width="100%"
                height="800px"
                type="application/pdf"
            />
        </div>
    );
};

export default Resume;
