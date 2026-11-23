import Image from "next/image";
import { FiBriefcase, FiCalendar, FiCode, FiDownload, FiLayers, FiLink, FiTrendingUp } from "react-icons/fi";
import { experience, profile } from "@/portfolio";

const stats = [
  { value: "4+", text: "Years in full-stack engineering", Icon: FiCalendar },
  { value: String(experience.length), text: "Organizations supported", Icon: FiBriefcase },
  { value: "15+", text: "Third-party API integrations", Icon: FiLink },
  { value: "4", text: "Disciplines across web, ecommerce, automation & growth", Icon: FiLayers },
];

export default function Hero() {
  return (
    <section className="hero shell" id="hero" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> BISWAJIT GOSWAMI · BENGALURU, INDIA</p>
          <h1 id="hero-title">I build it.<br /><em>Then I grow it.</em></h1>
          <p className="hero-description">
            Full-stack engineer and digital marketing specialist. I build web apps, storefronts and lead systems, then help them grow through SEO, analytics and paid campaigns.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#projects">Explore my work</a>
            <a className="button button-quiet" href={profile.resume} download><FiDownload aria-hidden="true" /> Download CV</a>
          </div>
        </div>
        <div className="hero-stage">
          <Image src="/images/hero-loop.webp" alt="" fill priority decoding="sync" unoptimized />
          <span className="stage-label stage-engineering"><FiCode aria-hidden="true" /> Engineering</span>
          <span className="stage-label stage-growth"><FiTrendingUp aria-hidden="true" /> Growth</span>
        </div>
      </div>
      <dl className="metrics" aria-label="Career and skills at a glance">
        {stats.map(({ value, text, Icon }) => (
          <div className="metric" key={text}>
            <Icon aria-hidden="true" />
            <dt>{text}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
