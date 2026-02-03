import type { Resume, Details } from "../../utils/resume";
import PersonalDetails from "./Personal";
import Section from "./Section";
import { EntryList } from "./Entry";
import style from "../../styles/ResumeEditor.module.css";
import "../../styles/ResumeEditor.module.css";

export default function ResumeEditor({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  return (
    <section className={style.container}>
      <form autoComplete="off" className={style.editor}>
        <PersonalDetails
          details={resume.personalDetails}
          onChange={(details: Details) =>
            setResume({ ...resume, personalDetails: details })
          }
        />
        <Section
          title="Education"
          fields={
            <EntryList
              legend="Education"
              entryList={resume.education.entries}
              onChange={(entries) =>
                setResume({
                  ...resume,
                  education: { ...resume.education, entries: entries },
                })
              }
            />
          }
        />
        <Section
          title="Professional Experience"
          fields={
            <EntryList
              legend="Job Information"
              entryList={resume.experience.entries}
              onChange={(entries) =>
                setResume({
                  ...resume,
                  experience: { ...resume.experience, entries: entries },
                })
              }
            />
          }
        />
      </form>
    </section>
  );
}
