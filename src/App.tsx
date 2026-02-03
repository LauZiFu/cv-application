import "./styles/App.css";
import Header from "./components/Header";
import ResumeEditor from "./components/resumeEditor/ResumeEditor";
import { useEffect, useState } from "react";
import { initialResume, type Resume } from "./utils/resume";
import ResumePreview from "./components/ResumePreview";

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
      <Header />
      <main>
        <ResumeEditor resume={resume} setResume={setResume} />
        <ResumePreview resume={preview} />
      </main>
    </>
  );
}
