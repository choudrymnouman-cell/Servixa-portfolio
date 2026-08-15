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
 const [menuOpen,setMenuOpen]=useState(false);
 const [sent,setSent]=useState(false);
 const [sending,setSending]=useState(false);
 const [formError,setFormError]=useState("");
 const submitInquiry=async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  setSending(true); setFormError("");
  try{
   const response=await fetch("https://formsubmit.co/ajax/servixaa@gmail.com",{
    method:"POST",
    headers:{"Accept":"application/json"},
    body:new FormData(e.currentTarget)
   });
   if(!response.ok) throw new Error("Unable to send");
   setSent(true);
  }catch{
   setFormError("Message could not be sent. Please email us or contact us on WhatsApp.");
  }finally{setSending(false)}
 };
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
  <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="kicker light">Start a conversation</p><h2>Have a bold idea?<br/><span>Let&apos;s make it real.</span></h2><p>Tell us where you want to go. We&apos;ll bring the strategy, engineering and support to get you there.</p>
   <div className="business-emails">
    <a href="mailto:servixaa@gmail.com?subject=Project inquiry for Servixa"><span>New projects</span><strong>projects@servixa.com</strong><Arrow/></a>
    <a href="mailto:servixaa@gmail.com?subject=Servixa support request"><span>Client support</span><strong>support@servixa.com</strong><Arrow/></a>
    <a href="mailto:servixaa@gmail.com?subject=General inquiry for Servixa"><span>General inquiries</span><strong>hello@servixa.com</strong><Arrow/></a>
   </div>
  </div>
  {sent?<div className="success"><div>✓</div><h3>Message received.</h3><p>Thanks for reaching out. The Servixa team will connect with you soon.</p><button onClick={()=>{setSent(false);setFormError("")}}>Send another</button></div>:<form onSubmit={submitInquiry}><input type="hidden" name="_subject" value="New inquiry from Servixa website"/><input type="hidden" name="_template" value="table"/><label>Name<input required name="name" placeholder="Your name"/></label><label>Work email<input required type="email" name="email" placeholder="you@company.com"/></label><label>Company<input name="company" placeholder="Company name"/></label><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.n}>{s.title}</option>)}</select></label><label className="full">Project details<textarea required name="details" placeholder="Tell us a little about your goals..." rows={4}/></label>{formError&&<p className="form-error full">{formError}</p>}<button className="button primary full" type="submit" disabled={sending}>{sending?"Sending...":<>Send inquiry <Arrow/></>}</button></form>}</div></section>
  <a className="whatsapp-float" href="https://wa.me/923078155793?text=Hello%20Servixa%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat with Servixa on WhatsApp">
   <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.1 19.8L3 29l6.4-1.7A13 13 0 1 0 16 3Zm0 23.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.8 1 1-3.7-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.3-.4.3-.7.1a8.6 8.6 0 0 1-2.6-1.6 9.5 9.5 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.4 0-.6l-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.3 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3.9.4 1.5.6 2 .7.9.3 1.7.2 2.3.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5Z"/></svg>
  </a>
  <footer className="footer shell"><div className="brand"><img className="brand-logo" src={`${basePath}/servixa-logo.webp`} alt="Servixa"/></div><p>Engineering possibility. Delivering certainty.</p><div><a href="#services">Services</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} Servixa. All rights reserved.</small></footer>
 </main>;
}
