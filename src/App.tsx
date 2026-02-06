import "./styles/App.css";
import Header from "./components/Header";
import ResumeEditor from "./components/resumeEditor/ResumeEditor";
import { useEffect, useState } from "react";
import { initialResume, type Resume } from "./utils/resume";
import ResumePreview from "./components/ResumePreview";
import Button from "./components/forms/Button";

export default function App() {
  const [resume, setResume] = useState<Resume>(initialResume);
  const [preview, setPreview] = useState<Resume>(initialResume);

  //Debounced state update for preview
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPreview(resume);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [resume]);

  return (
    <>
      <Header
        actions={
          <Button
            text="Download"
            handleClick={() => {
              console.log(resume);
            }}
            className="headerButton"
            id="downloadHeader"
          />
        }
      />
      <main>
        <ResumeEditor
          resume={resume}
          setResume={(resume) => {
            setResume(resume);
          }}
        />
        <ResumePreview resume={preview} />
      </main>
      <footer className="footer">
        {" "}
        <Button
          text="Download"
          handleClick={() => {
            console.log(resume);
          }}
          className="footerButton"
          id="downloadFooter"
        />
      </footer>
    </>
  );
}
