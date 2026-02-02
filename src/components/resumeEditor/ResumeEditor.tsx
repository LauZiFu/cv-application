import type { Resume, Details } from "../../resume";
import PersonalDetails from "./Personal";
import Section from "./Section";
import { EntryList } from "./Entry";

export default function ResumeEditor({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}) {
  return (
    <section>
      <form>
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
