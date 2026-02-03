import type { Resume, Details } from "../../utils/resume";
import PersonalDetails from "./Personal";
import Button from "../forms/Button";
import { EntryList } from "./Entry";
import style from "../../styles/ResumeEditor.module.css";
import "../../styles/ResumeEditor.module.css";
import Accordion from "../Accordion";

export default function ResumeEditor({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  const handleClickEdu = () => {
    const id = crypto.randomUUID();
    setResume({
      ...resume,
      education: {
        ...resume.education,
        entries: {
          ...resume.education.entries,
          [id]: {
            id: id,
            place: "",
            credential: "",
            startDate: "",
            endDate: "",
            city: "",
            description: "",
          },
        },
      },
    });
  };
  const handleClickJob = () => {
    const id = crypto.randomUUID();
    setResume({
      ...resume,
      experience: {
        ...resume.experience,
        entries: {
          ...resume.experience.entries,
          [id]: {
            id: id,
            place: "",
            credential: "",
            startDate: "",
            endDate: "",
            city: "",
            description: "",
          },
        },
      },
    });
  };

  return (
    <section className={style.container}>
      <form autoComplete="off" className={style.editor}>
        <PersonalDetails
          details={resume.personalDetails}
          onChange={(details: Details) =>
            setResume({ ...resume, personalDetails: details })
          }
        />
        <Accordion
          title={<h2>Professional Experience</h2>}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          content={
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
          control={
            <Button
              className={style.add}
              text="add entry"
              handleClick={() => handleClickJob()}
            />
          }
        />
        <Accordion
          title={<h2>Education</h2>}
          content={
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
          control={
            <Button
              className={style.add}
              text="add entry"
              handleClick={() => handleClickEdu()}
            />
          }
        />
      </form>
      <section className={style.lastSection}></section>
    </section>
  );
}
