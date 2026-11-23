"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { FiActivity, FiBriefcase, FiCode, FiExternalLink, FiLink, FiTarget } from "react-icons/fi";
import { experience, projects } from "@/portfolio";

export default function Experience() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const role = experience[active];
  const project = projects.find((item) => item.id === role.projectId);

  function handleTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const end = experience.length - 1;
    let next: number;

    switch (event.key) {
      case "ArrowRight": next = index === end ? 0 : index + 1; break;
      case "ArrowLeft": next = index === 0 ? end : index - 1; break;
      case "Home": next = 0; break;
      case "End": next = end; break;
      default: return;
    }

    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section id="experience" className="shell section" aria-labelledby="experience-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> CAREER</p>
          <h2 id="experience-title">Behind the <em>work.</em></h2>
        </div>
        <p className="section-intro">Explore what I owned at each company, from development and deployment to acquisition and conversion.</p>
      </div>

      <div className="career">
        <div className="career-tabs" role="tablist" aria-label="Companies">
          {experience.map((item, index) => (
            <button type="button" role="tab" key={item.company} id={`role-tab-${index}`}
              data-tone={item.accent} aria-controls={`role-panel-${index}`}
              aria-selected={active === index} tabIndex={active === index ? 0 : -1}
              ref={(button) => { tabs.current[index] = button; }}
              onClick={() => setActive(index)} onKeyDown={(event) => handleTabKey(event, index)}>
              {item.company}
            </button>
          ))}
        </div>

        {experience.map((item, index) => (
          <div role="tabpanel" id={`role-panel-${index}`} aria-labelledby={`role-tab-${index}`}
            tabIndex={0} hidden={active !== index} key={item.company}>
            {active === index && (
              <div className="career-panel" data-tone={role.accent}>
                <div className="career-description">
                  <p className="role-meta"><FiBriefcase aria-hidden="true" /> {role.company} <span>{role.period}</span></p>
                  <h3>{role.title}</h3>
                  <p className="role-sector">{role.sector} · {role.arrangement}</p>
                  <ul className="role-points">
                    {role.details.map(({ title, description }, pointIndex) => {
                      const Icon = [FiCode, FiTarget, FiActivity][pointIndex];
                      return (
                        <li key={title}>
                          <Icon aria-hidden="true" />
                          <div><h4>{title}</h4><p>{description}</p></div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="tags">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <aside className="career-result" aria-label={`Highlights from ${role.company}`}>
                  {project?.image && (
                    <div className="career-image">
                      <Image src={project.image} alt={`Homepage of ${project.name}`} fill sizes="(max-width: 760px) 85vw, 400px" />
                    </div>
                  )}
                  <div className="career-impact">
                    <p className="role-highlight-label"><FiActivity aria-hidden="true" /> Role highlight</p>
                    <p className="result-value">{role.result.value}</p>
                    <p className="result-caption">{role.result.label}</p>
                    {project?.href && (
                      <a className="career-link" href={project.href} target="_blank" rel="noreferrer">
                        View {project.name} <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                    {!project && (
                      <div className="career-integrations">
                        <FiLink aria-hidden="true" />
                        <p><strong>4+ production applications</strong><span>Payments, CRMs and ad attribution across client projects.</span></p>
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
