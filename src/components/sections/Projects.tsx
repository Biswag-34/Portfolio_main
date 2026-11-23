"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiActivity, FiBriefcase, FiExternalLink, FiHome, FiLayers, FiPlus, FiShoppingBag, FiX } from "react-icons/fi";
import { categories, completedProjects, projects, type Project } from "@/portfolio";

const filters = ["All projects", ...categories] as const;
type Filter = (typeof filters)[number];

const categoryIcons = {
  Ecommerce: FiShoppingBag,
  "Real estate": FiHome,
  Healthcare: FiActivity,
  "Brand & content": FiLayers,
};

function ProjectArt({ project, featured }: { project: Project; featured: boolean }) {
  const Icon = project.status === "In development" ? FiBriefcase : categoryIcons[project.category];

  return (
    <div className={project.image ? "project-art has-image" : "project-art"} aria-hidden="true">
      {project.image ? (
        <div className="project-window">
          <span className="window-bar"><i /><i /><i /></span>
          <div className="window-image">
            <Image src={project.image} alt="" fill sizes={featured ? "(max-width: 600px) 90vw, 540px" : "(max-width: 600px) 90vw, 350px"} />
          </div>
        </div>
      ) : <span className="project-symbol"><Icon /></span>}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = filter === "All projects" ? projects : projects.filter((project) => project.category === filter);

  useLayoutEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);

  return (
    <section id="projects" className="shell section" aria-labelledby="projects-title">
      <div className="section-heading project-heading">
        <div>
          <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> PORTFOLIO</p>
          <h2 id="projects-title">Work in <em>the wild.</em></h2>
        </div>
        <div className="project-total">
          <strong>{completedProjects}</strong>
          <div>
            <p>Projects completed</p>
            <span>{projects.length - completedProjects} in development</span>
          </div>
        </div>
      </div>

      <div className="project-controls">
        <div className="segmented" role="group" aria-label="Filter projects">
          {filters.map((item) => (
            <button key={item} type="button" aria-pressed={filter === item} aria-controls="project-results"
              onClick={() => setFilter(item)}>{item}</button>
          ))}
        </div>
        <p className="result-count" role="status">{visible.length} projects</p>
      </div>

      <div id="project-results" className={filter === "All projects" ? "project-grid with-featured" : "project-grid"} key={filter}>
        {visible.map((project, index) => (
          <article className="project-card" data-tone={project.accent} key={project.id}>
            <ProjectArt project={project} featured={filter === "All projects" && index < 2} />
            <div className="project-info">
              <p className="project-category">{project.category}{project.status && <span> · {project.status}</span>}</p>
              <h3>{project.name}</h3>
              <p className="project-summary">{project.summary}</p>
              <button type="button" className="project-button" onClick={() => setSelected(project)}
                aria-label={`Project details for ${project.name}`}>
                Details <FiPlus aria-hidden="true" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <dialog ref={dialog} className="project-dialog" aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
        <div className="dialog-content">
          <button type="button" className="icon-button dialog-close" aria-label="Close project details"
            onClick={() => dialog.current?.close()}><FiX /></button>
          <p className="eyebrow">{selected?.category}{selected?.status && ` · ${selected.status}`}</p>
          <h3 id="project-dialog-title">{selected?.name}</h3>
          {selected?.client !== selected?.name && <p className="dialog-client">{selected?.client}</p>}
          <p className="section-intro">{selected?.details}</p>
          <div className="tags">{selected?.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {selected?.href && <a className="button button-primary" href={selected.href} target="_blank" rel="noreferrer">
            Visit website <FiExternalLink aria-hidden="true" />
          </a>}
        </div>
      </dialog>
    </section>
  );
}
