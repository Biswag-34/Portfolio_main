import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { profile } from "@/portfolio";

export default function About() {
  return (
    <section id="about" className="shell section about-layout" aria-labelledby="about-title">
      <div className="portrait">
        <Image src="/images/profile.jpeg" alt={profile.name} fill sizes="(max-width: 760px) 90vw, 330px" />
        <div className="portrait-caption"><FiMapPin aria-hidden="true" /> {profile.location}</div>
      </div>
      <div>
        <p className="eyebrow"><span className="spark" aria-hidden="true">✦</span> ABOUT ME</p>
        <h2 id="about-title">From first build<br />to <em>first conversion.</em></h2>
        <p className="section-intro">
          I work across the whole customer journey, from the Next.js page someone lands on to the CRM, analytics and follow-up workflows behind their first enquiry.
        </p>
        <p className="section-intro">
          I’ve applied that approach to ecommerce, real estate, healthcare and brand sites. My work spans development and deployment, technical SEO, digital media, paid acquisition and marketplace operations.
        </p>
        <p className="languages"><strong>Languages</strong> Bengali · English · Hindi</p>
      </div>
    </section>
  );
}
