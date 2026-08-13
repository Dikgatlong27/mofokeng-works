import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const phone = '27723681441';
const whatsapp = text => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

const services = [
  { number: '01', icon: '⌁', title: 'Vehicle Diagnostics', text: 'Pinpoint faults accurately with professional diagnostics and clear reporting.', items: ['Diagnostic reports', 'Warning-light checks', 'Performance fault finding'], featured: true },
  { number: '02', icon: '⚙', title: 'Service & Repairs', text: 'Practical vehicle care, from routine servicing to major mechanical attention.', items: ['Gearbox & clutch service', 'Suspension repairs', 'Engine rebuilds'] },
  { number: '03', icon: '⌘', title: 'Keys & Electronics', text: 'Specialist support for modern automotive keys and control systems.', items: ['Keys & steering locks', 'ISM & module programming', 'ECU & EIS programming'] },
];

function Logo({ compact = false }) { return <a className="brand" href="#home"><img src="/logo.png" alt="Mofokeng Works logo" />{!compact && <b>Mofokeng Works</b>}</a>; }
function App() {
  return <>
    <header className="hero" id="home"><nav><Logo /><div className="links"><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="quote" href={whatsapp('Hello Mofokeng Works, I would like a quote.')} target="_blank" rel="noreferrer">Get a quote</a></nav>
      <div className="heroGrid"><div><p className="eyebrow">Diagnostics · Repairs · Key Services</p><h1>Your car.<br/><em>Sorted.</em></h1><p className="lead">Accurate vehicle diagnostics, dependable mechanical services and specialist automotive key solutions—all from one trusted team.</p><div className="actions"><a className="primary" href={whatsapp('Hello Mofokeng Works, I need help with my vehicle.')} target="_blank" rel="noreferrer">Chat on WhatsApp ↗</a><a href="#services">Explore services</a></div></div><div className="roundel"><img src="/logo.png" alt=""/><span>Professional · Reliable</span></div></div>
      <div className="strip">{['Advanced diagnostics','Key programming','Mechanical repairs','Fast quotations'].map(item=><span key={item}>{item}</span>)}</div>
    </header>
    <main><section className="services" id="services"><header className="sectionHead"><div><p className="eyebrow ink">What we do</p><h2>Complete vehicle care,<br/>under one roof.</h2></div><p>From a warning light on your dashboard to a lost vehicle key, we help diagnose the problem and get you moving again.</p></header><div className="cards">{services.map(service=><article className={service.featured?'gold':''} key={service.title}><small>{service.number}</small><i>{service.icon}</i><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul></article>)}</div></section>
      <section className="about" id="about"><div className="logoPanel"><img src="/logo.png" alt="Mofokeng Works"/></div><div className="aboutCopy"><p className="eyebrow">Why Mofokeng Works</p><h2>Expert attention.<br/>Honest service.</h2><p>Vehicle care should be clear, professional and convenient. Tell us what your car is doing, select the service you need and receive a direct response from our team.</p><div className="points">{['Clear fault assessment','Specialist key solutions','Direct customer support'].map((item,i)=><span key={item}><b>0{i+1}</b>{item}</span>)}</div></div></section>
      <section className="process"><header className="sectionHead"><div><p className="eyebrow ink">Simple process</p><h2>Help is three steps away.</h2></div></header><div className="steps"><article><b>1</b><h3>Tell us the issue</h3><p>Describe the symptoms or service your vehicle needs.</p></article><article><b>2</b><h3>Request a quote</h3><p>Send your vehicle details directly through WhatsApp.</p></article><article><b>3</b><h3>Get expert help</h3><p>Our team responds and helps arrange the right service.</p></article></div></section>
      <section className="contact" id="contact"><div><p className="eyebrow ink">Visit or contact us</p><h2>Let’s get you<br/>back on the road.</h2><p>3148 Freedom Square<br/>Mangaung, Bloemfontein<br/>9323</p></div><div><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">WhatsApp us <span>↗</span></a><a href="tel:+27723681441">Call 072 368 1441 <span>↗</span></a><a href="mailto:Thomasg452@gmail.com">Thomasg452@gmail.com <span>↗</span></a><a href="https://www.google.com/maps/search/?api=1&query=3148+Freedom+Square+Mangaung+Bloemfontein+9323" target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a></div></section>
    </main><footer><Logo/><p>Diagnostics, repairs & automotive key services.</p><div><a href="/privacy">Privacy Policy</a><span>© {new Date().getFullYear()} Mofokeng Works</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
