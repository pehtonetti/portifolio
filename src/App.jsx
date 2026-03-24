import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const SVGMail = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const SVGArrowUpRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>;
const SVGGithub = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
const SVGLinkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // Hiding cursor on mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blush pointer-events-none z-[9999] flex items-center justify-center bg-blush/10 backdrop-blur-sm shadow-[0_0_15px_rgba(212,163,115,0.4)]"
            animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.2 }}
        >
            <div className="w-1.5 h-1.5 rounded-full bg-blush" />
        </motion.div>
    );
};

const ExpandableLogo = ({ footer = false }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div 
            className={`font-heading font-bold tracking-tighter cursor-pointer flex items-center group select-none ${footer ? 'text-4xl hover:text-white transition-colors' : 'text-3xl hover:text-charcoal transition-colors'}`} 
            onClick={() => setExpanded(!expanded)}
        >
            Peh<span className="text-blush">.</span>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap flex items-center ${expanded ? 'max-w-[500px] opacity-100 ml-4' : 'max-w-0 opacity-0 ml-0'}`}>
                <span className={`text-xl font-normal tracking-wide flex items-center gap-2 ${footer ? 'text-ivory/80' : 'text-charcoal/80'}`}>
                    &mdash; Pedro Tonetti <span className="text-blush text-sm uppercase tracking-widest font-semibold">Petty Tecnologia</span>
                </span>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 py-6 md:px-16 ${scrolled ? 'bg-ivory/80 backdrop-blur-md py-4 shadow-sm border-b border-charcoal/5' : ''}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <ExpandableLogo />
                <ul className="hidden md:flex gap-8 lg:gap-10 items-center font-medium uppercase tracking-widest text-xs">
                    <li><a href="#sobre" className="relative group cursor-pointer hover:text-blush transition-colors">Sobre Mim<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blush transition-all group-hover:w-full"></span></a></li>
                    <li><a href="#experiencia" className="relative group cursor-pointer hover:text-blush transition-colors">Trajetória<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blush transition-all group-hover:w-full"></span></a></li>
                    <li><a href="#habilidades" className="relative group cursor-pointer hover:text-blush transition-colors">Tecnologias<span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blush transition-all group-hover:w-full"></span></a></li>
                    <li>
                        <a href="#contato" className="px-6 py-3 rounded-full border border-charcoal hover:bg-charcoal hover:text-ivory transition-all duration-300">
                            Fale Comigo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const companies = [
    { name: "Adecoagro", desc: "Atuação em soluções web para o agronegócio envolvendo JS, HTML, CSS, Suporte Nível 1 e 2, organização de contas e projetos focados em Mobiles.", logo: "https://logo.clearbit.com/adecoagro.com", link: "https://www.adecoagro.com", tags: ["Suporte N1/N2", "Mobile", "Contas", "JS"] },
    { name: "Sociedade São Vicente de Paula (SSVP)", desc: "Projeto de impacto social e digital, conectando propósitos em prol da filantropia.", logo: "https://ssvpbrasil.org.br/wp-content/uploads/2021/05/logo_ssvp_novo-1-300x127.png", link: "https://ssvpbrasil.org.br/", tags: ["UX/UI Design", "Figma", "HTML", "CSS"] },
    { name: "AELESAB", desc: "Coordenador da parte T.I da empresa, responsável pelo desenvolvimento do site e da parte documental do sistema atual deles.", logo: "https://logo.clearbit.com/aelesab.org.br", link: "https://www.aelesab.org.br/", tags: ["WordPress", "Temas", "HTML", "CSS", "JS"] },
    { name: "MSTECH", desc: "Desenvolvimento web focado em educação, atuando com o kit básico de Web Design, além de trabalhos como diagramador e revisador.", logo: "https://logo.clearbit.com/mstech.com.br", link: "https://www.mstech.com.br/", tags: ["Web Design", "Diagramador", "Revisador", "HTML/CSS/JS"] },
    { name: "Saturno Informática", desc: "Criação de soluções em automação e desenvolvimento de interfaces corporativas.", logo: "https://logo.clearbit.com/saturnoinfo.com.br", link: "https://www.saturnoinfo.com.br/", tags: ["C#", "SQL Server", "Frontend", "Automação"] },
    { name: "Petty Tecnologia", desc: "Engenharia de software e consultoria técnica especializada.", logo: "https://logo.clearbit.com/petrytecnologia.com.br", link: "https://petrytecnologia.com.br/", tags: ["React Native", "Arquitetura Web", "Node.js"] }
];

const technologies = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js", "Angular",
    "Tailwind CSS", "SASS/SCSS", "Styled Components", "Vite", "Webpack", "Node.js", "Git / GitHub", 
    "Figma", "UX/UI Design", "Framer Motion", "Redux Toolkit", "GraphQL", "REST APIs", "Jest",
    "Cypress", "Responsive Design", "Web Performance", "SEO Optimization", "WordPress", "Mobile First"
];

function App() {
    return (
        <div className="bg-ivory text-charcoal min-h-screen selection:bg-blush selection:text-ivory">
            <CustomCursor />
            <Navbar />

            {/* Hero Section */}
            <main className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blush/40 to-[#E9C4A6]/20 rounded-full blur-[100px] -z-10 animate-[pulse_10s_infinite_alternate]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-blush/30 to-transparent rounded-full blur-[80px] -z-10 animate-[pulse_12s_infinite_alternate-reverse]" />
                
                <div className="max-w-7xl mx-auto w-full z-10 pt-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className="text-blush font-semibold uppercase tracking-[0.2em] mb-6 block text-sm"
                    >
                        Desenvolvedor Web Front-end
                    </motion.span>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8"
                    >
                        Construindo interfaces<br />
                        <span className="italic text-blush">elegantes & modernas.</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-charcoal/70 max-w-2xl font-light mb-12 leading-relaxed"
                    >
                        Combino design refinado, performance impecável e interações envolventes para conceber experiências digitais que impressionam à primeira vista.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <a href="#experiencia" className="px-8 py-4 bg-charcoal text-ivory rounded-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-sm font-semibold tracking-wider text-center">
                            Acompanhe minha trajetória
                        </a>
                        <a href="#contato" className="px-8 py-4 border border-charcoal/20 rounded-full hover:border-charcoal hover:-translate-y-1 transition-all duration-300 text-sm font-semibold tracking-wider text-center">
                            Iniciar um Projeto
                        </a>
                    </motion.div>
                </div>
            </main>

            {/* About Section */}
            <section id="sobre" className="py-32 px-6 md:px-16 bg-white relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl leading-tight">Muito além do código,<br/><span className="italic text-blush">uma arte.</span></h2>
                        <p className="text-lg text-charcoal/70 leading-relaxed font-light">
                            Meu trabalho é traduzir ideias complexas em interfaces de usuário intuitivas e visualmente deslumbrantes. Acredito que o bom design não é apenas sobre a aparência, mas sobre como as coisas funcionam de forma harmoniosa.
                        </p>
                        <p className="text-lg text-charcoal/70 leading-relaxed font-light">
                            Com experiência em empresas de grande porte e projetos desafiadores, adquiri a precisão necessária para arquitetar aplicações de front-end escaláveis, performáticas e com uma estética *premium* inconfundível, do grid à micro-interação.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] w-full rounded-2xl rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] relative group z-10">
                            <img 
                                src="/Fotenho.png" 
                                alt="Foto do Pedro" 
                                className="w-full h-full object-cover object-[center_30%] scale-105 group-hover:scale-100 transition-transform duration-700"
                            />
                            {/* Overlay sutil para harmonizar a foto com o design, revelando a cor natural no hover */}
                            <div className="absolute inset-0 bg-blush/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experiences / Companies */}
            <section id="experiencia" className="py-32 px-6 md:px-16 bg-ivory">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto mb-20"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl mb-6">Empresas por<br/>onde passei.</h2>
                        <p className="text-lg text-charcoal/70 font-light">
                            Tenho o orgulho de ter contribuído ativamente com marcas líderes de mercado, instituições filantrópicas e empresas inovadoras.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {companies.map((company, index) => (
                            <motion.a 
                                href={company.link || "#"}
                                target={company.link ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }} 
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                key={company.name}
                                className="group relative bg-white p-10 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
                            >
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-blush scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                                
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md border border-charcoal/5 shrink-0 overflow-hidden">
                                        <img 
                                            src={company.logo} 
                                            alt={`${company.name} Logo`} 
                                            className="max-h-full max-w-full object-contain filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <span style={{ display: 'none' }} className="font-heading font-black text-2xl text-charcoal w-full h-full items-center justify-center bg-ivory rounded-xl">{company.name.charAt(0)}</span>
                                    </div>
                                    <h3 className="font-heading text-[1.7rem] text-gradient m-0 leading-tight">{company.name}</h3>
                                </div>
                                <p className="text-charcoal/60 font-light leading-relaxed flex-grow">{company.desc}</p>
                                
                                {company.tags && (
                                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                                        {company.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-charcoal/5 text-charcoal/80 rounded-full border border-charcoal/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                
                                {company.link && (
                                    <div className="mt-auto flex items-center gap-2 text-blush text-sm font-semibold uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        Visitar Site <SVGArrowUpRight />
                                    </div>
                                )}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section id="habilidades" className="py-32 px-6 md:px-16 bg-white border-t border-charcoal/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto z-10 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="mb-16 text-center max-w-2xl mx-auto"
                    >
                        <h2 className="font-heading text-4xl md:text-5xl mb-6">Meu Arsenal<br/><span className="italic text-blush">Técnico.</span></h2>
                        <p className="text-lg text-charcoal/70 font-light">
                            Um panorama das principais ferramentas, *frameworks* e estratégias em que possuo proficiência para construir interfaces deslumbrantes.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-5">
                        {technologies.map((tech, i) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.03, type: "spring", stiffness: 100 }}
                                className="px-6 py-3 md:py-4 bg-ivory rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-charcoal/5 hover:border-blush/40 hover:text-charcoal text-charcoal/70 text-sm md:text-base tracking-wide font-medium cursor-default hover:-translate-y-[6px] hover:shadow-[0_15px_30px_rgba(212,163,115,0.2)] transition-all duration-300 select-none"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-12 bg-charcoal text-ivory overflow-hidden flex border-y border-white/10">
                <motion.div 
                    animate={{ x: [0, -1035] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex text-3xl md:text-5xl font-heading italic whitespace-nowrap gap-8"
                >
                    <span>✦ Design Classudo</span>
                    <span>✦ Interfaces Ricas</span>
                    <span>✦ Micro-interações</span>
                    <span>✦ Alta Performance</span>
                    <span>✦ Design Classudo</span>
                    <span>✦ Interfaces Ricas</span>
                    <span>✦ Micro-interações</span>
                    <span>✦ Alta Performance</span>
                </motion.div>
            </div>

            {/* Contact CTA */}
            <section id="contato" className="py-32 px-6 md:px-16 bg-white relative">
                <div className="max-w-4xl mx-auto rounded-[40px] bg-ivory p-12 md:p-24 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blush/10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="font-heading text-4xl md:text-5xl mb-6">Pronto para criarmos<br/><span className="italic text-blush">algo brilhante?</span></h2>
                        <p className="text-lg text-charcoal/70 mb-12 max-w-xl mx-auto font-light">
                            Desenvolvimento *pixel-perfect*, interfaces responsivas e uma atenção rigorosa aos detalhes estéticos. Vamos elevar a qualidade digital da sua marca juntos.
                        </p>
                        <a href="mailto:pedrotonetti@gmail.com" className="inline-flex items-center gap-3 px-10 py-5 bg-charcoal text-ivory rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-blush hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <SVGMail /> Dizer Olá
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-charcoal text-ivory py-16 px-6 md:px-16 text-center md:text-left">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
                        <ExpandableLogo footer={true} />
                        
                        <div className="flex gap-8">
                            <a href="https://www.linkedin.com/in/pedrotonetti/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-sm font-light uppercase tracking-widest hover:text-blush transition-colors">
                                <SVGLinkedin /> LinkedIn
                            </a>
                            <a href="https://github.com/pehtonetti" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-sm font-light uppercase tracking-widest hover:text-blush transition-colors">
                                <SVGGithub /> GitHub
                            </a>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-light">
                        <p>© 2026 Pedro. Desenvolvido com React, Vite e muito café.</p>
                        <p className="mt-4 md:mt-0 font-heading italic text-lg">Elegância em cada linha de código.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
