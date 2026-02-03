import type { Resume } from "../utils/resume";
import RecordList from "./Record";
import style from "../styles/ResumePreview.module.css";

export default function ResumePreview({ resume }: { resume: Resume }) {
  const personalDetails = resume.personalDetails;
  const education = resume.education;
  const experience = resume.experience;

  const fullName = personalDetails.firstName.concat(
    " ",
    personalDetails.lastName,
  );
  return (
    <section className={style.container}>
      <article aria-live="polite" className={style.preview}>
        <header>
          <h1>{fullName}</h1>
          <p>
            {Object.entries(personalDetails)
              .filter(
                ([key, value]) =>
                  value && key !== "firstName" && key !== "lastName",
              )
              .map(([key, value], index) => {
                return (
                  <span key={key}>
                    {index != 0 && " | "}
                    {value}
                  </span>
                );
              })}
          </p>
        </header>
        <section>
          <h2>{education.title.toUpperCase()}</h2>
          <RecordList records={education.entries} />
        </section>
        <section>
          <h2>{experience.title.toUpperCase()}</h2>
          <RecordList records={experience.entries} />
        </section>
      </article>
    </section>
  );
}
