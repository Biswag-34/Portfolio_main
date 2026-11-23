"use client";

import { useState } from "react";
import { FiCode, FiTrendingUp } from "react-icons/fi";
import { skills } from "@/portfolio";

const focuses = [
  { id: "Engineering", title: "Web development", Icon: FiCode, description: "From accessible interfaces to the APIs, infrastructure and automation behind them." },
  { id: "Growth", title: "Digital growth", Icon: FiTrendingUp, description: "From search and paid campaigns to storefronts, measurement and conversion." },
] as const;

export default function Skills() {
  const [focus, setFocus] = useState<(typeof focuses)[number]>(focuses[0]);

  return (
    <section id="skills" className="shell skills-section" aria-labelledby="skills-title">
      <div className="skills-layout" data-focus={focus.id}>
        <div>
          <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> TOOLKIT</p>
          <h2 id="skills-title">What I work with.</h2>
          <div className="segmented skill-toggle" role="group" aria-label="Skill focus">
            {focuses.map((item) => (
              <button type="button" key={item.id} data-focus={item.id} aria-pressed={focus.id === item.id}
                aria-controls="skill-results" onClick={() => setFocus(item)}>
                <item.Icon aria-hidden="true" /> {item.title}
              </button>
            ))}
          </div>
          <p className="skill-description">{focus.description}</p>
        </div>
        <div id="skill-results" aria-live="polite">
          <div className="skill-grid" key={focus.id}>
            {skills[focus.id].map((group) => (
              <article key={group.title} className="skill-item">
                <h3>{group.title}</h3>
                <p>{group.tools}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
