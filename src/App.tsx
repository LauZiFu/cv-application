import "./styles/App.css";
import Header from "./components/Header";
import ResumeEditor from "./components/resumeEditor/ResumeEditor";
import { useState } from "react";
import { initialResume, type Resume } from "./resume";

export default function App() {
  const [resume, setResume] = useState<Resume>(initialResume);
  return (
    <>
      <Header />
      <main>
        <ResumeEditor resume={resume} setResume={setResume} />
        <article aria-live="polite"></article>
      </main>
    </>
  );
}
