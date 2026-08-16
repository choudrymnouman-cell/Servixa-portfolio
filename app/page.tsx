"use client";
import { useState, type CSSProperties, type FormEvent } from "react";

type ChatMessage={from:"bot"|"user";text:string};

const services = [
  { n:"01", icon:"ai", title:"Generative AI & Automation", text:"Copilots, intelligent assistants and workflow automation designed around real business outcomes.", tags:["GenAI","Agents","ML"] },
  { n:"02", icon:"enterprise", title:"Dynamics 365 ERP & CRM", text:"Connected finance, operations, sales and customer-service systems configured for your organisation.", tags:["ERP","CRM","D365"] },
  { n:"03", icon:"software", title:"Mobile App Development", text:"Secure, high-performance Android, iOS and cross-platform applications people enjoy using.", tags:["iOS","Android","Flutter"] },
  { n:"04", icon:"field", title:"IT Staff Augmentation", text:"Flexible access to vetted engineers, designers and technology specialists who strengthen your team.", tags:["Dedicated","Flexible","Global"] },
  { n:"05", icon:"cloud", title:"Cloud & DevOps", text:"Cloud architecture, CI/CD, observability and reliable infrastructure engineered for continuous delivery.", tags:["AWS","Azure","DevOps"] },
  { n:"06", icon:"experience", title:"UI/UX & Product Design", text:"Research-led digital experiences that make complex products clear, intuitive and memorable.", tags:["Research","UX","Design"] },
  { n:"07", icon:"software", title:"Web Development", text:"Fast, accessible websites and web applications built to convert, perform and scale confidently.", tags:["Next.js","Commerce","SaaS"] },
  { n:"08", icon:"software", title:"Custom Software Development", text:"Purpose-built platforms that fit your workflows instead of forcing your business into a template.", tags:["Custom","API","Platforms"] },
  { n:"09", icon:"cloud", title:"Cybersecurity", text:"Security assessments, secure architecture and practical protection embedded throughout delivery.", tags:["Secure by design","Audit","Risk"] },
  { n:"10", icon:"ai", title:"Data Analytics & Insights", text:"Modern data platforms, dashboards and predictive insights that support faster, better decisions.", tags:["BI","Data","Forecasting"] },
  { n:"11", icon:"enterprise", title:"Microsoft Power Platform", text:"Low-code applications and automation with Power Apps, Power Automate and Power BI.", tags:["Power Apps","BI","Automate"] },
  { n:"12", icon:"cloud", title:"Cloud Applications & Integration", text:"Cloud-native applications, migrations and integrations that connect systems without disruption.", tags:["Migration","Integration","Cloud"] },
];
const whyReasons=[
 {n:"01",title:"Business-first thinking",text:"We begin with your goals, users and commercial priorities—then choose the technology that serves them best."},
 {n:"02",title:"One accountable partner",text:"Strategy, design, engineering, cloud and support work as one team with clear ownership from start to finish."},
 {n:"03",title:"Senior delivery standards",text:"Secure architecture, thoughtful quality assurance and transparent progress are built into every engagement."},
 {n:"04",title:"Built to grow with you",text:"We create maintainable products, provide dependable support and evolve your technology as your business scales."},
];
const industries=["Fintech","Healthcare","Retail & Commerce","Telecom","Public Sector","Travel","Energy","Startups"];
const stack=[
 {name:"Flutter",mark:"Fl"},{name:"React",mark:"Re"},{name:"Next.js",mark:"N"},{name:"GraphQL",mark:"GQ"},{name:"Node.js",mark:"N."},{name:"AWS",mark:"☁"},{name:"Python",mark:"Py"},{name:"TypeScript",mark:"TS"},{name:"Docker",mark:"Dk"},{name:"Azure",mark:"Az"},{name:".NET",mark:".N"},{name:"PostgreSQL",mark:"PG"},{name:"Supabase",mark:"SB"},{name:"Kubernetes",mark:"K8"}
];
const work=[
 {type:"AI OPERATIONS",title:"Intelligence that works with your team",text:"Connected copilots, document intelligence and workflow automation designed around real business processes.",accent:"violet",metric:"Faster decisions"},
 {type:"DIGITAL PRODUCTS",title:"Products people choose to keep using",text:"Research-led web, mobile and SaaS experiences engineered for performance, accessibility and long-term growth.",accent:"cyan",metric:"Built to scale"},
 {type:"GLOBAL IT",title:"One reliable partner, wherever you operate",text:"Coordinated field support, smart hands and infrastructure delivery with clear ownership from request to resolution.",accent:"blue",metric:"Always connected"},
];
const Arrow=()=> <span aria-hidden="true">↗</span>;
const ServiceGlyph=({name}:{name:string})=>{
 const common={viewBox:"0 0 32 32","aria-hidden":true};
 if(name==="ai")return <svg {...common}><circle cx="16" cy="16" r="5"/><circle cx="7" cy="9" r="2"/><circle cx="25" cy="8" r="2"/><circle cx="7" cy="24" r="2"/><circle cx="25" cy="24" r="2"/><path d="m10.5 11.7 2.2 1.6m8.8-2.1-2.4 2M10.6 21.2l2.2-1.7m8.5.3 2.1 1.9M16 11V6m0 20v-5"/></svg>;
 if(name==="software")return <svg {...common}><rect x="4" y="6" width="24" height="20" rx="3"/><path d="M4 11h24M9 8.5h.01m4 0h.01M13 16l-3 3 3 3m6-6 3 3-3 3m-1-8-4 10"/></svg>;
 if(name==="cloud")return <svg {...common}><path d="M9 24h14a5 5 0 0 0 .5-10A8 8 0 0 0 8.3 12.1 6 6 0 0 0 9 24Z"/><path d="m13 18 3-3 3 3m-3-3v7"/></svg>;
 if(name==="field")return <svg {...common}><circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3 3 4.5 6.7 4.5 11S19 24 16 27c-3-3-4.5-6.7-4.5-11S13 8 16 5Z"/><circle cx="23.5" cy="9" r="2.5"/></svg>;
 if(name==="enterprise")return <svg {...common}><rect x="5" y="5" width="9" height="9" rx="2"/><rect x="18" y="5" width="9" height="9" rx="2"/><rect x="5" y="18" width="9" height="9" rx="2"/><rect x="18" y="18" width="9" height="9" rx="2"/><path d="M14 9.5h4M9.5 14v4m13-4v4M14 22.5h4"/></svg>;
 return <svg {...common}><path d="M7 25 9.5 17 21 5.5a2.1 2.1 0 0 1 3 3L12.5 20 7 25Z"/><path d="m18.5 8 5 5M9.5 17l3 3M6 8h5M8.5 5.5v5M23 20h4m-2-2v4"/></svg>;
};
const getServixaReply=(question:string)=>{
 const q=question.toLowerCase();
 if(/agent|human|person|representative|consultant|counsel|team member|someone/.test(q)) return "Yes—our team would be happy to speak with you. Choose WhatsApp for a quick consultation, email us, or send your project details through the inquiry form below.";
 if(/price|cost|budget|quote|kitna|charges/.test(q)) return "Every project is different. Servixa can review your goals, features and timeline, then prepare a suitable proposal. Use ‘Discuss my project’ below to share the basics.";
 if(/time|timeline|duration|days|weeks|kab/.test(q)) return "A focused website may take a few weeks, while larger apps and enterprise platforms need more planning. Servixa confirms a realistic delivery plan after understanding your scope.";
 if(/ai|automation|machine learning|chatbot/.test(q)) return "Servixa builds practical AI solutions including business automation, intelligent assistants, data-driven products and custom AI integrations.";
 if(/mobile|android|ios|app/.test(q)) return "Yes. Servixa designs and develops modern mobile applications for Android and iOS, including cross-platform products built for performance and growth.";
 if(/web|website|ecommerce|saas/.test(q)) return "Servixa creates professional websites, web applications, e-commerce platforms and scalable SaaS products—from strategy and UX to development and support.";
 if(/cloud|devops|security|cyber/.test(q)) return "Servixa supports cloud architecture, migrations, DevOps, monitoring and security-focused delivery across modern infrastructure.";
 if(/field|support|engineer|remote hands|imac/.test(q)) return "Servixa provides coordinated global field IT services, including smart hands, deskside support, IMAC, break/fix and infrastructure assistance.";
 if(/contact|email|whatsapp|call|meeting/.test(q)) return "Contact Servixa at servixaa@gmail.com, use the WhatsApp button, or send the project form on this page. The team will respond directly.";
 if(/service|what do you do|kya kr|offer/.test(q)) return "Servixa provides software and product engineering, web and mobile development, AI automation, cloud and DevOps, cybersecurity, enterprise platforms, UI/UX, QA and global field IT services.";
 if(/hello|hi|hey|salam|assalam/.test(q)) return "Hello! I’m the Servixa Assistant. I can guide you about our services, delivery process, timelines and the best way to start your project.";
 return "Servixa helps businesses plan, build and support reliable digital products. Tell me whether you need a website, mobile app, AI solution, cloud support or another technology service, and I’ll guide you.";
};

export default function Home(){
 const [menuOpen,setMenuOpen]=useState(false); const [sent,setSent]=useState(false); const [sending,setSending]=useState(false); const [submitError,setSubmitError]=useState("");
 const [servicesExpanded,setServicesExpanded]=useState(false);
 const [chatOpen,setChatOpen]=useState(false); const [chatInput,setChatInput]=useState("");
 const [chatMessages,setChatMessages]=useState<ChatMessage[]>([{from:"bot",text:"Hi! I’m the Servixa Assistant. Tell me what you want to build, and I’ll guide you to the right service."}]);
 const askBot=(question:string)=>{const clean=question.trim();if(!clean)return;setChatMessages(m=>[...m,{from:"user",text:clean},{from:"bot",text:getServixaReply(clean)}]);setChatInput("");};
 const handleChat=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();askBot(chatInput)};
 const handleInquiry=async(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  setSending(true); setSubmitError("");
  const form=e.currentTarget;
  const data=new FormData(form);
  data.append("_subject",`New Servixa inquiry: ${data.get("service")||"Project request"}`);
  data.append("_template","table");
  data.append("_captcha","false");
  data.append("_autoresponse","Thank you for contacting Servixa. We have received your inquiry and our team will respond shortly.");
  try{
   const response=await fetch("https://formsubmit.co/ajax/servixaa@gmail.com",{method:"POST",headers:{Accept:"application/json"},body:data});
   const result=await response.json();
   if(!response.ok||result.success===false) throw new Error(result.message||"Submission failed");
   form.reset(); setSent(true);
  }catch{
   setSubmitError("Message send nahi ho saka. Please dobara try karein ya servixaa@gmail.com par email karein.");
  }finally{setSending(false)}
 };
 return <main>
  <nav className="nav shell" aria-label="Primary navigation">
   <a className="brand" href="#top" aria-label="Servixa home"><img className="brand-logo" src="/servixa-logo.webp" alt="Servixa"/></a>
   <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span/><span/></button>
   <div className={`nav-links ${menuOpen?"open":""}`}><a href="#services" onClick={()=>setMenuOpen(false)}>Services</a><a href="#work" onClick={()=>setMenuOpen(false)}>Work</a><a href="#industries" onClick={()=>setMenuOpen(false)}>Industries</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></div>
   <a className="nav-cta" href="#contact">Start a project <Arrow/></a>
  </nav>
  <header id="top" className="hero shell">
   <div className="hero-glow"/><div className="eyebrow"><span/> Global technology partner · Built for ambitious teams</div>
   <h1>Ideas into<br/><em>digital impact.</em></h1>
   <div className="hero-bottom"><p>Servixa designs, builds and supports intelligent digital products that help ambitious businesses move faster, operate smarter and scale with confidence.</p><div className="hero-actions"><a className="button primary" href="#contact">Discuss your project <Arrow/></a><a className="button ghost" href="#work">See how we create value ↓</a></div></div>
   <div className="word-scene" aria-hidden="true"><div className="word-glow"/><div className="servixa-word">{"SERVIXA".split("").map((letter,i)=><span style={{"--letter":i} as CSSProperties} key={letter+i}>{letter}</span>)}</div><p>Software · AI · Cloud · Global IT</p><i className="word-line"/></div>
  </header>
  <section className="proof-strip"><div className="shell"><p>One accountable technology partner</p><div><span>Product strategy</span><i/> <span>AI engineering</span><i/> <span>Cloud & security</span><i/> <span>Global field support</span></div></div></section>
  <section className="ticker" aria-label="Servixa capabilities"><div>BUILD <span>✦</span> MODERNIZE <span>✦</span> SECURE <span>✦</span> SUPPORT <span>✦</span> SCALE <span>✦</span> BUILD <span>✦</span> MODERNIZE</div></section>
  <section id="services" className="section shell">
   <div className="section-head"><div><p className="kicker">Capabilities</p><h2>Expertise for every<br/><span>digital ambition.</span></h2></div><p>From intelligent products to enterprise platforms and global delivery, Servixa brings the right specialists together around your business.</p></div>
   <div id="servixa-services-grid" className={`services-grid ${servicesExpanded?"expanded":""}`}>{services.slice(0,servicesExpanded?services.length:4).map((s,i)=><article className="service-card" key={s.n}><div className={`service-art art-${i}`}><div className="service-top"><span>{s.n}</span><Arrow/></div><h3>{s.title}</h3><span className="art-grid" aria-hidden="true"/><span className="art-orbit" aria-hidden="true"><i/><i/></span><span className="art-panel" aria-hidden="true"><b/><b/><b/></span><div className="service-icon" aria-hidden="true"><ServiceGlyph name={s.icon}/></div></div><div className="service-body"><p>{s.text}</p><div className="tags">{s.tags.map(t=><span key={t}>{t}</span>)}</div><a className="service-link" href="#contact">Discuss this service <Arrow/></a></div></article>)}</div>
   <div className="services-expand"><p>{servicesExpanded?`Showing all ${services.length} core capabilities.`:"Explore the complete Servixa capability portfolio."}</p><button type="button" onClick={()=>setServicesExpanded(v=>!v)} aria-expanded={servicesExpanded} aria-controls="servixa-services-grid">{servicesExpanded?"Show fewer services":`View all ${services.length} services`} <span aria-hidden="true">{servicesExpanded?"↑":"↓"}</span></button></div>
  </section>
  <section className="why-section"><div className="shell"><div className="why-heading"><div><p className="kicker light">Why choose Servixa</p><h2>A technology partner<br/><span>invested in your outcome.</span></h2></div><p>Clients choose Servixa for the balance of strategic clarity, engineering depth and dependable human partnership.</p></div><div className="why-grid">{whyReasons.map((reason,i)=><article key={reason.n}><div className="why-orbit" aria-hidden="true"><span>{reason.n}</span><i style={{"--why-index":i} as CSSProperties}/></div><h3>{reason.title}</h3><p>{reason.text}</p></article>)}</div><div className="why-footer"><span><i/> Ready when your ambition is</span><a className="button primary" href="#contact">Start a conversation <Arrow/></a></div></div></section>
  <section id="work" className="work-section"><div className="shell">
   <div className="section-head"><div><p className="kicker light">Value, not vanity</p><h2>Technology made<br/><span>useful.</span></h2></div><p>We bring product thinking, senior engineering and dependable delivery together—turning complex challenges into simple, valuable experiences.</p></div>
   <div className="work-grid">{work.map((item,i)=><article className={`work-card ${item.accent}`} key={item.type}><div className="work-visual"><span className="work-number">0{i+1}</span><div className={`work-hologram holo-${i}`} aria-hidden="true"><span className="holo-ring ring-a"/><span className="holo-ring ring-b"/><span className="holo-ring ring-c"/><i className="holo-node node-a"/><i className="holo-node node-b"/><i className="holo-node node-c"/><div className="work-symbol"><ServiceGlyph name={i===0?"ai":i===1?"software":"field"}/></div><div className="holo-bars"><b/><b/><b/><b/></div></div><small>{item.metric}</small></div><div className="work-copy"><span>{item.type}</span><h3>{item.title}</h3><p>{item.text}</p><a href="#contact">Explore a project with us <Arrow/></a></div></article>)}</div>
  </div></section>
  <section id="about" className="dark-section"><div className="shell split">
   <div className="signal-panel brand-panel"><div className="brand-mesh" aria-hidden="true"/><div className="brand-scan" aria-hidden="true"/><div className="brand-stage"><span className="brand-overline">One technology partner</span><div className="panel-word" aria-label="Servixa">{"SERVIXA".split("").map((letter,i)=><span key={letter+i} style={{"--panel-letter":i} as CSSProperties}>{letter}</span>)}</div><p>Digital solutions. Real results.</p><div className="panel-capabilities"><span>Software</span><span>AI</span><span>Cloud</span><span>Global IT</span></div></div><div className="status"><i/> Ready to build <b>Let&apos;s talk ↗</b></div></div>
   <div className="split-copy"><p className="kicker light">Why Servixa</p><h2>Digital brains.<br/><span>Field-ready muscle.</span></h2><p>Most partners either build technology or support it. Servixa does both. Our product engineers create what differentiates you, while our global field network keeps your critical infrastructure performing.</p><div className="metric-row"><div><strong>24/7</strong><span>Operations</span></div><div><strong>360°</strong><span>Tech coverage</span></div><div><strong>1</strong><span>Accountable partner</span></div></div></div>
  </div></section>
  <section id="industries" className="section shell industries"><div className="section-head compact"><div><p className="kicker">Industries</p><h2>Built for your<br/><span>world.</span></h2></div><p>Deep technical capability, adapted to the realities of your market.</p></div><div className="industry-list">{industries.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><Arrow/></div>)}</div></section>
  <section className="process-section"><div className="shell"><p className="kicker">How we deliver</p><h2>Clarity at every step.</h2><div className="process">{[["01","Discover","We align on outcomes, users, constraints and the clearest path to value."],["02","Design","We shape the experience, architecture and delivery roadmap before building."],["03","Deliver","Cross-functional teams ship in visible, testable increments with full transparency."],["04","Evolve","We monitor, support and continuously improve your product and infrastructure."]].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
  <section className="tech-section"><div className="shell tech-heading"><p className="tech-badge"><i/> Technology stack</p><h2>Built with <em>world-class</em> technologies.</h2><p>We use proven tools and modern frameworks across every layer—from intelligent products and mobile experiences to secure cloud infrastructure.</p></div><div className="tech-marquee" aria-label="Servixa technology stack"><div className="tech-track">{[...stack,...stack].map((tech,i)=><article className={`tech-card tech-${i%7}`} key={`${tech.name}-${i}`} aria-hidden={i>=stack.length}><div className="tech-mark">{tech.mark}</div><strong>{tech.name}</strong></article>)}</div></div></section>
  <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="kicker light">Start a conversation</p><h2>Have a bold idea?<br/><span>Let&apos;s make it real.</span></h2><p>Tell us where you want to go. We&apos;ll bring the strategy, engineering and support to get you there.</p><div className="business-mails"><a href="mailto:servixaa@gmail.com?subject=General%20Servixa%20inquiry"><small>General</small><strong>info@servixa.com</strong><Arrow/></a><a href="mailto:servixaa@gmail.com?subject=Servixa%20sales%20inquiry"><small>Sales</small><strong>sales@servixa.com</strong><Arrow/></a><a href="mailto:servixaa@gmail.com?subject=Servixa%20support%20request"><small>Support</small><strong>support@servixa.com</strong><Arrow/></a><a href="mailto:servixaa@gmail.com?subject=Servixa%20career%20inquiry"><small>Careers</small><strong>careers@servixa.com</strong><Arrow/></a></div></div>
  {sent?<div className="success"><div>✓</div><h3>Message sent.</h3><p>Your inquiry has been delivered directly to Servixa. Our team will reply to your email.</p><button onClick={()=>setSent(false)}>Send another</button></div>:<form onSubmit={handleInquiry}><label>Name<input required name="name" placeholder="Your name"/></label><label>Work email<input required type="email" name="email" placeholder="you@company.com"/></label><label>Company<input name="company" placeholder="Company name"/></label><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.n}>{s.title}</option>)}</select></label><label className="full">Project details<textarea required name="details" placeholder="Tell us a little about your goals..." rows={4}/></label>{submitError&&<p className="form-error full" role="alert">{submitError}</p>}<button className="button primary full" type="submit" disabled={sending}>{sending?"Sending...":"Send message"} {!sending&&<Arrow/>}</button></form>}</div></section>
  <aside className={`chatbot ${chatOpen?"open":""}`} aria-label="Servixa company assistant">
   {chatOpen&&<div className="chat-window"><header><div className="chat-avatar"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.75h14a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-7.2L7 20.5v-3.25H5a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2Z"/><circle cx="8" cy="11.5" r="1"/><circle cx="12" cy="11.5" r="1"/><circle cx="16" cy="11.5" r="1"/></svg></div><div><strong>Servixa Assistant</strong><span><i/> Online · Company guidance</span></div><button onClick={()=>setChatOpen(false)} aria-label="Close Servixa Assistant">×</button></header><div className="chat-messages" aria-live="polite">{chatMessages.map((m,i)=><p className={m.from} key={`${m.from}-${i}`}>{m.text}</p>)}</div>{chatMessages.length<3&&<div className="chat-suggestions"><button onClick={()=>askBot("What services do you offer?")}>Explore services</button><button onClick={()=>askBot("Can you build my website or app?")}>Plan a project</button><button onClick={()=>askBot("Can I talk to an agent?")}>Talk to an expert</button></div>}<div className="chat-handoff"><a className="handoff-whatsapp" href="https://wa.me/923078155793?text=Hello%20Servixa%2C%20I%20would%20like%20a%20project%20consultation." target="_blank" rel="noreferrer">WhatsApp consultation <Arrow/></a><a href="mailto:servixaa@gmail.com?subject=Servixa%20project%20consultation">Email our team <Arrow/></a></div><a className="chat-contact" href="#contact" onClick={()=>setChatOpen(false)}>Send project details <Arrow/></a><form onSubmit={handleChat}><label className="sr-only" htmlFor="servixa-chat">Ask Servixa</label><input id="servixa-chat" value={chatInput} onChange={e=>setChatInput(e.target.value)} placeholder="How can Servixa help?" autoComplete="off"/><button type="submit" aria-label="Send question">↑</button></form><small>Servixa service guidance · No personal data required</small></div>}
   <button className="chat-launcher" onClick={()=>setChatOpen(!chatOpen)} aria-expanded={chatOpen} aria-label={chatOpen?"Close Servixa Assistant":"Open Servixa Assistant"}><span>{chatOpen?"×":<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5.75h14a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-7.2L7 20.5v-3.25H5a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2Z"/><circle cx="8" cy="11.5" r="1"/><circle cx="12" cy="11.5" r="1"/><circle cx="16" cy="11.5" r="1"/></svg>}</span><b>{chatOpen?"Close":"Ask Servixa"}</b></button>
  </aside>
  <a className="whatsapp-float" href="https://wa.me/923078155793?text=Hello%20Servixa%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Servixa on WhatsApp" title="Chat with Servixa on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C9.39 3 4 8.28 4 14.8c0 2.08.55 4.11 1.6 5.89L4 26.5l6.03-1.54a12.2 12.2 0 0 0 6 1.53h.01c6.64 0 12.04-5.29 12.04-11.79C28.08 8.19 22.68 3 16.04 3Zm7.08 16.66c-.3.83-1.75 1.59-2.44 1.68-.63.08-1.43.12-2.31-.15-.53-.16-1.22-.39-2.1-.76-3.69-1.56-6.1-5.18-6.28-5.42-.18-.24-1.5-1.96-1.5-3.74 0-1.79.95-2.66 1.29-3.02.33-.36.73-.45.97-.45h.7c.22 0 .52-.08.82.62.3.71 1.02 2.46 1.11 2.64.09.18.15.39.03.63-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.37-.16.73.21.36.93 1.5 2 2.43 1.37 1.2 2.53 1.57 2.89 1.75.36.18.57.15.78-.09.21-.24.9-1.03 1.14-1.39.24-.36.48-.3.81-.18.33.12 2.1.97 2.46 1.15.36.18.6.27.69.42.09.15.09.86-.21 1.69Z"/></svg></a>
  <footer className="footer shell"><div className="footer-brand"><div className="brand"><img className="brand-logo" src="/servixa-logo.webp" alt="Servixa"/></div><div className="footer-socials" aria-label="Servixa social media">
   <a href="https://www.instagram.com/servixatech?igsh=NjJmbWp2NTR0ZDM2&amp;igsi=NjJmbWp2NTR0ZDM2" target="_blank" rel="noopener noreferrer" aria-label="Follow Servixa Tech on Instagram" title="Instagram · @servixatech"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle className="icon-dot" cx="17.4" cy="6.7" r="1"/></svg></a>
   <a href="https://www.linkedin.com/company/servixa-digital-solutions/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Servixa Digital Solutions on LinkedIn" title="LinkedIn · Servixa Digital Solutions"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7m0-10v.01M12 17v-4.1c0-1.8 1.2-3 2.8-3s2.7 1.1 2.7 3V17M12 10v7"/></svg></a>
  </div></div><p>Engineering possibility. Delivering certainty.</p><div className="footer-links"><a href="#services">Services</a><a href="#industries">Industries</a><a href="#contact">Contact</a></div><small>© {new Date().getFullYear()} Servixa. All rights reserved.</small></footer>
 </main>;
}
