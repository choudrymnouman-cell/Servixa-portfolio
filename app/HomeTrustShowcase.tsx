export default function HomeTrustShowcase(){
  const benefits=[
    ["On-time delivery","Clear milestones, visible progress and dependable delivery commitments."],
    ["Affordable pricing","Practical solutions planned around your goals, priorities and budget."],
    ["100% satisfaction focus","We refine the work with you and stay accountable through delivery."],
  ];
  return <section className="servixa-trust" aria-label="Why businesses choose Servixa">
    <div className="shell">
      <div className="servixa-trust-grid">
        <div className="servixa-trust-copy">
          <p className="kicker">Trusted digital delivery</p>
          <h2>Built to deliver.<br/><span>Proven by results.</span></h2>
          <p>From mobile apps and websites to SEO and paid growth, Servixa combines product thinking, engineering and digital marketing under one accountable team.</p>
          <div className="servixa-trust-actions"><a className="button primary" href="#contact">Start your project <span aria-hidden="true">↗</span></a><a className="button ghost" href="#work">View our work ↓</a></div>
        </div>
        <div className="servixa-stats" aria-label="Servixa experience and ratings">
          <article><strong>100+</strong><span>Projects delivered</span></article>
          <article><strong>5.0/5</strong><span>Client rating</span></article>
          <article><strong>4+ yrs</strong><span>Digital experience</span></article>
          <article><strong>On time</strong><span>Delivery focused</span></article>
        </div>
      </div>
      <div className="servixa-benefit-grid">{benefits.map(([title,text])=><article key={title}><span className="servixa-check">✓</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <div className="servixa-platform-row">
        <div><small>Growth platforms we work with</small><strong>Google Ads</strong><strong>Meta Ads</strong><strong>SEO & Search</strong></div>
        <p>Campaign setup, conversion tracking, landing pages, search visibility and performance-led optimization.</p>
      </div>
      <div className="servixa-project-proof">
        <div className="servixa-proof-heading"><p className="kicker">Featured project proof</p><h2>Work that represents<br/><span>what we can deliver.</span></h2></div>
        <div className="servixa-project-cards">
          <article><span>01 · DIGITAL PRODUCT</span><h3>Choudhry Sons</h3><p>A modern business-focused digital experience built to present services clearly, strengthen credibility and support customer engagement.</p><div><b>Servixa project</b><b>5/5 delivery standard</b></div></article>
          <article><span>02 · EDTECH APP</span><h3>BrainBoost</h3><p>An exam-preparation product experience combining mobile workflows, quizzes and scalable backend capabilities for learners.</p><div><b>Servixa project</b><b>5/5 delivery standard</b></div></article>
        </div>
      </div>
    </div>
  </section>;
}
