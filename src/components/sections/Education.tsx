import { FiBookOpen, FiCode, FiLayers, FiMapPin } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="shell section education" aria-labelledby="education-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><FiBookOpen aria-hidden="true" /> EDUCATION</p>
          <h2 id="education-title">My technical <em>foundation.</em></h2>
        </div>
      </div>
      <div className="education-grid">
        <article className="education-card" data-tone="violet">
          <FiCode className="education-icon" aria-hidden="true" />
          <div>
            <p className="education-type">Bachelor of Technology</p>
            <h3>Computer Science</h3>
            <p className="education-school">BUIE</p>
          </div>
          <p className="education-location"><FiMapPin aria-hidden="true" /> West Bengal, India</p>
        </article>
        <article className="education-card" data-tone="mint">
          <FiLayers className="education-icon" aria-hidden="true" />
          <div>
            <p className="education-type">Diploma</p>
            <h3>Computer Science and Technology</h3>
            <p className="education-school">Siliguri Government Polytechnic</p>
          </div>
          <p className="education-location"><FiMapPin aria-hidden="true" /> West Bengal, India</p>
        </article>
      </div>
    </section>
  );
}
