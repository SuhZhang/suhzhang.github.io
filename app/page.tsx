import { ArrowUpRight, FileText, Mail } from 'lucide-react';
import { publications, additionalPublications, type Publication } from './publications';
import VisitorMap from './VisitorMap';
import { visitorMapId } from './site-config';
const scholar = 'https://scholar.google.com/citations?user=7f_tYK4AAAAJ';
const external = { target: '_blank', rel: 'noopener noreferrer' };
const isFirstListedAuthor = (paper: Publication) => paper.authors[0]?.replace(/\*$/, '') === 'Shihua Zhang';
const firstAuthorPublications = publications.filter(isFirstListedAuthor);
const otherPublications = [
  ...publications.filter((paper) => !isFirstListedAuthor(paper)).map((paper) => ({
    id: paper.id,
    title: paper.title,
    authors: paper.authors,
    venue: paper.venue.replace(/\s+\d{4}.*$/, ''),
    distinction: paper.distinction,
    year: paper.venue.match(/\d{4}/)?.[0] || '',
    href: paper.links[0].href,
  })),
  ...additionalPublications.map((paper) => ({ ...paper, id: undefined })),
];
function AuthorList({ authors }: { authors: string[] }) {
  return <p className="authors">{authors.map((author, index) => {
    const equalContribution = author.endsWith('*');
    const name = author.replace(/\*$/, '');
    return <span key={author}>{index > 0 && ', '}{name === 'Shihua Zhang'
      ? <strong>{name}{equalContribution && <sup>*</sup>}</strong>
      : <>{name}{equalContribution && <sup>*</sup>}</>}</span>;
  })}</p>;
}

function PublicationRow({ paper }: { paper: Publication }) {
  return (
    <article className={`publication${paper.image ? '' : ' text-only'}`} id={paper.id}>
      {paper.image && <a className={`paper-visual${paper.secondaryImage ? ' paired-visual' : ''}`} href={paper.imageHref || paper.links[0].href} aria-label={`${paper.imageHref ? 'View full figure for' : 'Read'} ${paper.title}`} {...external}>
        <img src={paper.image} alt={paper.imageAlt || paper.title} width="408" height="272" loading="lazy" decoding="async" />
        {paper.secondaryImage && <img src={paper.secondaryImage} alt={paper.secondaryImageAlt || paper.title} width="408" height="272" loading="lazy" decoding="async" />}
      </a>}
      <div className="paper-content">
        <h3><a href={paper.links[0].href} {...external}>{paper.title}</a></h3>
        <AuthorList authors={paper.authors} />
        <p className="venue-line"><span className="venue">{paper.venue}</span>{paper.distinction && <span className="distinction">{paper.distinction}</span>}</p>
        <div className="paper-links">{paper.links.map((link) => <a key={link.href} href={link.href} {...external}>{link.label}</a>)}</div>
        <p className="paper-topic">{paper.topic}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="shell header-inner">
      <a className="wordmark" href="#about">Shihua’s Homepage</a>
      <nav className="site-nav" aria-label="Main navigation"><a href="#publications">Publications</a><a href="#education">Education</a><a href="#service">Service</a></nav>
    </div></header>
    <main id="main" className="shell">
      <section id="about" className="intro" aria-labelledby="name">
        <div className="bio">
          <h1 id="name">Shihua Zhang</h1>
          <p>I am a second-year Ph.D. student in the Department of Electrical and Computer Engineering at the <a href="https://www.nus.edu.sg/" {...external}>National University of Singapore</a>, advised by <a href="https://sites.google.com/site/sitexinchaowang/" {...external}>Prof. Xinchao Wang</a>. My current research interests include <strong>vision-language models</strong>, <strong>video generation</strong>, and <strong>world models</strong>.</p>
          <p>Previously, I received my M.S. degree from <a href="https://en.whu.edu.cn/" {...external}>Wuhan University</a>, where I was advised by <a href="https://jiayi-ma.github.io/" {...external}>Prof. Jiayi Ma</a> and worked on image matching.</p>
          <div className="contact-links" aria-label="Academic and professional profiles">
            <a href={scholar} {...external}>Google Scholar <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://github.com/SuhZhang" {...external}>GitHub <ArrowUpRight aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/shihua-zhang-54528a431/" {...external}>LinkedIn <ArrowUpRight aria-hidden="true" /></a>
            <a href="/files/Shihua_Zhang_CV.pdf" {...external}><FileText aria-hidden="true" /> CV</a>
          </div>
          <a className="email-address" href="mailto:suhzhang001@gmail.com"><Mail size={15} aria-hidden="true" />suhzhang001@gmail.com</a>
        </div>
        <figure className="portrait"><img src="/images/shihua-zhang.jpg" alt="Shihua Zhang in front of a snow-covered mountain" width="192" height="256" fetchPriority="high" /><figcaption>Ph.D. student · NUS</figcaption></figure>
      </section>
      <div className="research-line" aria-label="Research interests"><strong>RESEARCH INTERESTS</strong><span>Vision-language models</span><span>Video generation</span><span>World models</span></div>
      <section id="publications" className="content-section" aria-labelledby="publications-title">
        <div className="section-heading"><h2 id="publications-title">First-Author Publications</h2><a href={scholar} {...external}>All publications ↗</a></div>
        <p className="section-note">* Equal contribution</p>
        {firstAuthorPublications.map((paper) => <PublicationRow key={paper.id} paper={paper} />)}
      </section>
      <section id="other-publications" className="additional-publications" aria-labelledby="other-publications-title">
          <div className="section-heading"><h2 id="other-publications-title">Other Publications</h2></div>
          {otherPublications.map((paper) => (
            <article className="additional-publication" key={paper.title} id={paper.id}>
              <time>{paper.year}</time>
              <div><h3><a href={paper.href} {...external}>{paper.title}</a></h3><AuthorList authors={paper.authors} /><p className="venue-line"><span>{paper.venue}</span>{paper.distinction && <span className="distinction">{paper.distinction}</span>}</p></div>
            </article>
          ))}
      </section>
      <section id="education" className="content-section" aria-labelledby="education-title">
        <div className="section-heading"><h2 id="education-title">Education</h2></div>
        <div className="education-list">
          <div className="education-item"><time>2025 – present</time><div><h3>National University of Singapore</h3><p>Ph.D. student in Electrical and Computer Engineering · xML Lab</p><p>Advisor: <a href="https://sites.google.com/site/sitexinchaowang/" {...external}>Prof. Xinchao Wang</a></p></div></div>
          <div className="education-item"><time>2022 – 2025</time><div><h3>Wuhan University</h3><p>M.S. in Information and Communication Engineering</p><p>Multi-Spectral Vision Processing Lab · Advisor: <a href="https://jiayi-ma.github.io/" {...external}>Prof. Jiayi Ma</a></p></div></div>
          <div className="education-item"><time>2018 – 2022</time><div><h3>Wuhan University</h3><p>B.E. in Electronic Information Engineering</p><p>Electronic Information School</p></div></div>
        </div>
      </section>
      <section id="experience" className="content-section" aria-labelledby="experience-title">
        <div className="section-heading"><h2 id="experience-title">Research Experience</h2></div>
        <div className="education-list"><div className="education-item"><time>Nov. 2021 – Jan. 2022</time><div><h3>Research Intern · MT Lab, Meitu</h3><p>Xiamen, China</p><p>Worked on monocular 3D object detection and pose estimation in indoor scenes, using an end-to-end network with weak shape supervision.</p></div></div></div>
      </section>
      <section id="service" className="content-section" aria-labelledby="service-title">
        <div className="section-heading"><h2 id="service-title">Academic Service</h2></div>
        <div className="service-grid"><div><h3>Conference Reviewer</h3><p>CVPR / ECCV / NeurIPS / AAAI</p></div><div><h3>Journal Reviewer</h3><p><abbr title="IEEE Transactions on Pattern Analysis and Machine Intelligence">TPAMI</abbr> / <abbr title="International Journal of Computer Vision">IJCV</abbr> / <abbr title="IEEE Transactions on Circuits and Systems for Video Technology">TCSVT</abbr> / <abbr title="Pattern Recognition">PR</abbr></p></div></div>
      </section>
      <VisitorMap widgetId={visitorMapId} />
    </main>
    <footer className="site-footer"><div className="shell footer-inner"><p>© 2026 Shihua Zhang · Last updated September 2026</p></div></footer>
  </>;
}
