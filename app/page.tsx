"use client";
import { useState } from "react";

const services = [
  { n:"01", title:"AI & Intelligent Automation", text:"Generative AI products, copilots, process automation, data intelligence and responsible AI integration.", tags:["GenAI","ML","Analytics"] },
  { n:"02", title:"Software & Product Engineering", text:"Secure, scalable web, mobile, SaaS and enterprise platforms—from discovery to continuous delivery.", tags:["Web","Mobile","SaaS"] },
  { n:"03", title:"Cloud, DevOps & Cybersecurity", text:"Cloud-native architecture, migrations, DevSecOps, observability and security engineered into every layer.", tags:["Cloud","DevOps","Security"] },
  { n:"04", title:"Global Field IT Services", text:"On-demand engineers, remote hands, deskside support, IMAC, break/fix and infrastructure coverage worldwide.", tags:["24/7 Desk","IMAC","Smart Hands"] },
  { n:"05", title:"Enterprise Platforms", text:"Dynamics 365, Salesforce, Power Platform, Shopify and custom integrations that connect your operation.", tags:["D365","Salesforce","Shopify"] },
  { n:"06", title:"Experience, QA & Emerging Tech", text:"UI/UX, quality engineering, gaming, AR/VR/XR, blockchain and immersive digital experiences.", tags:["UI/UX","QA","AR/VR"] },
];
const industries=["Fintech","Healthcare","Retail & Commerce","Telecom","Public Sector","Travel","Energy","Startups"];
const stack=["React","Next.js","Flutter","Node.js","Python",".NET","AWS","Azure","Google Cloud","Kubernetes","PostgreSQL","Supabase"];
const Arrow=()=> <span aria-hidden="true">↗</span>;

export default function Home(){
 const basePath=process.env.NEXT_PUBLIC_BASE_PATH ?? "";
 const [menuOpen,setMenuOpen]=useState(false); const [sent,setSent]=useState(false);
 return <main>
  <nav className="nav shell" aria-label="Primary navigation">
   <a className="brand" href="#top" aria-label="Servixa home"><img className="brand-logo" src={`${basePath}/servixa-logo.webp`} alt="Servixa"/></a>
   <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span/><span/></button>
   <div className={`nav-links ${menuOpen?"open":""}`}><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a><a href="#industries" onClick={()=>setMenuOpen(false)}>Industries</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></div>
   <a className="nav-cta" href="#contact">Start a project <Arrow/></a>
  </nav>
  <header id="top" className="hero shell">
   <div className="hero-glow"/><div className="eyebrow"><span/> One partner. Every digital possibility.</div>
   <h1>We engineer what&apos;s <em>next.</em></h1>
   <div className="hero-bottom"><p>Servixa combines software innovation with always-on global IT support—helping ambitious businesses build, run and scale without limits.</p><div className="hero-actions"><a className="button primary" href="#contact">Let&apos;s build together <Arrow/></a><a className="button ghost" href="#services">Explore capabilities ↓</a></div></div>
   <div className="orbit" aria-hidden="true"><div className="orbit-ring one"/><div className="orbit-ring two"/><div className="orbit-ring three"/><div className="orbit-core">S</div><span className="dot d1"/><span className="dot d2"/><span className="dot d3"/></div>
  </header>
  <section className="ticker" aria-label="Servixa capabilities"><div>BUILD <span>✦</span> MODERNIZE <span>✦</span> SECURE <span>✦</span> SUPPORT <span>✦</span> SCALE <span>✦</span> BUILD <span>✦</span> MODERNIZE</div></section>
  <section id="services" className="section shell">
   <div className="section-head"><div><p className="kicker">Capabilities</p><h2>From idea to impact.<br/><span>All under one roof.</span></h2></div><p>Strategy, engineering and operations working as one team—so you move faster with less complexity.</p></div>
   <div className="services-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-top"><span>{s.n}</span><Arrow/></div><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
  </section>
  <section id="about" className="dark-section"><div className="shell split">
   <div className="signal-panel"><div className="signal-grid"/><div className="signal-line"/><div className="pulse"><span/><span/><span/></div><div className="status"><i/> Systems online <b>24/7</b></div></div>
   <div className="split-copy"><p className="kicker light">Why Servixa</p><h2>Digital brains.<br/><span>Field-ready muscle.</span></h2><p>Most partners either build technology or support it. Servixa does both. Our product engineers create what differentiates you, while our global field network keeps your critical infrastructure performing.</p><div className="metric-row"><div><strong>24/7</strong><span>Operations</span></div><div><strong>360°</strong><span>Tech coverage</span></div><div><strong>1</strong><span>Accountable partner</span></div></div></div>
  </div></section>
  <section id="industries" className="section shell industries"><div className="section-head compact"><div><p className="kicker">Industries</p><h2>Built for your<br/><span>world.</span></h2></div><p>Deep technical capability, adapted to the realities of your market.</p></div><div className="industry-list">{industries.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><Arrow/></div>)}</div></section>
  <section className="process-section"><div className="shell"><p className="kicker">How we deliver</p><h2>Clarity at every step.</h2><div className="process">{[["01","Discover","We align on outcomes, users, constraints and the clearest path to value."],["02","Design","We shape the experience, architecture and delivery roadmap before building."],["03","Deliver","Cross-functional teams ship in visible, testable increments with full transparency."],["04","Evolve","We monitor, support and continuously improve your product and infrastructure."]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <section className="stack-section shell"><p className="kicker">Technology</p><h2>The right stack.<br/><span>Never just the trendy one.</span></h2><div className="stack">{stack.map(x=><span key={x}>{x}</span>)}</div></section>
  <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="kicker light">Start a conversation</p><h2>Have a bold idea?<br/><span>Let&apos;s make it real.</span></h2><p>Tell us where you want to go. We&apos;ll bring the strategy, engineering and support to get you there.</p><a href="mailto:servixaa@gmail.com">servixaa@gmail.com <Arrow/></a></div>
  {sent?<div className="success"><div>✓</div><h3>Message received.</h3><p>Thanks for reaching out. The Servixa team will connect with you soon.</p><button onClick={()=>setSent(false)}>Send another</button></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><label>Name<input required name="name" placeholder="Your name"/></label><label>Work email<input required type="email" name="email" placeholder="you@company.com"/></label><label>Company<input name="company" placeholder="Company name"/></label><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.n}>{s.title}</option>)}</select></label><label className="full">Project details<textarea required name="details" placeholder="Tell us a little about your goals..." rows={4}/></label><button className="button primary full" type="submit">Send inquiry <Arrow/></button></form>}</div></section>
  <footer className="footer shell"><div className="brand"><img className="brand-logo" src={`${basePath}/servixa-logo.webp`} alt="Servixa"/></div><p>Engineering possibility. Delivering certainty.</p><div><a href="#services">Services</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} Servixa. All rights reserved.</small></footer>
 </main>;
}
