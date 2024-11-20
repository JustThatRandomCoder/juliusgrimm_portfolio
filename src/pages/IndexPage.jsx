import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function IndexPage() {
    const navigate = useNavigate();
    const scrollRef = useRef();

    useEffect(() => {
        const projects = gsap.utils.toArray(scrollRef.current.children);

        projects.forEach((project, i) => {
            gsap.fromTo(
                project,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: project,
                        start: "top 85%",
                        end: "top 20%",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="firstSection"
            >
                <header>
                    <div className="headername">JULIUS GRIMM</div>
                    <a className="email_head">me@juliusgrimm.dev</a>
                </header>
                <div className="head">
                    <div className="bg-font bebas-neue-regular">hello</div>
                    <div className="headline">I'm a fullstack 14 year old <br /> developer and designer <br /> based in Germany</div>
                </div>
                <div className="links">
                    <div className="bebas-neue-regular links_text left">Scroll down, <br></br> to see my work</div>
                    <div className="bebas-neue-regular links_text right"><span className="links_first" onClick={() => navigate('/about')}>About me</span> <br></br> <span className="links_first" onClick={() => document.getElementById('projectSection').scrollIntoView({ behavior: 'smooth' })}
                    >My projects and work</span></div>
                </div>
            </motion.div>
            <div className="projectSection" id="projectSection" ref={scrollRef}>
                <div className="project">
                    <div onClick={() => window.open('https://festifly.de', '_blank')} className="project-thumbnail nohover"><img src="https://cdn.festifly.de/assets/img/festifly.de/logo/logo.svg" alt="Festifly Logo" className="projectLogo" /></div>
                    <div className="project-name"><a className="project-name-link project-name-headline">FesitFly</a> - Eventmanagement redefined</div>
                    <div className="project-date">October 2024 - Today | BETA EXPECTED IN 2025</div>
                    <div className="project-description">
                        FestiFly is an event management tool with features like stage planning, AI-powered song requests, and group chats. I'm developing it with <a onClick={() => window.open('https://hanneszaiser.com', '_blank')} className="project-name-link">Hannes Zaiser</a>.
                    </div>
                </div>
                <div className="project mT">
                    <div onClick={() => window.open('https://vibevote.de', '_blank')} className="project-thumbnail"><img src="https://vibevote.de/static/images/vibeVote_logo.png" alt="VibeVote Logo" className="projectLogo" /></div>
                    <div className="project-name"><a className="project-name-link project-name-headline">VibeVote</a> - Songrequesting made easy</div>
                    <div className="project-date">July 2024 - Today</div>
                    <div className="project-description">
                        VibeVote simplifies song request management at events, an essential tool for hosts and DJs. I'm developing this tool jointly with Benedikt Globisch.
                    </div>
                </div>
                <div className="project mW">
                    <div onClick={() => window.open('https://openweatherhub.de', '_blank')} className="project-thumbnail nohover"><img src="../public/OpenWeatherHub_logo.png" alt="OpenWetaherHub Logo" className="projectLogo openWeather" /></div>
                    <div className="project-name"><a className="project-name-link project-name-headline">OpenWeatherHub</a> - Opensource</div>
                    <div className="project-date">May 2024 - Today | BETA EXPECTED IN 2025</div>
                    <div className="project-description">
                        OpenWeatherHub is an open-source weather service that allows users to add their own cost-effective weather station and integrate it into their smart home.
                    </div>
                    <div className="disabled project-description code">View Code</div>
                </div>
                <div className="project mT">
                    <div onClick={() => window.open('https://skyview.juliusgrimm.dev', '_blank')} className="project-thumbnail"><img src="../public/skyview_logo.svg" alt="SkyView Logo" className="projectLogo" /></div>
                    <div className="project-name"><a className="project-name-link project-name-headline">SkyView</a> - Opensource</div>
                    <div className="project-date">July 2024</div>
                    <div className="project-description">
                        SkyView was one of the tasks of the Minihackathon by Kevin Chromik. SkyView is like OpenWeatherHub an open-source weatherservice.
                    </div>
                    <div onClick={() => window.open('https://github.com/JustThatRandomCoder/SkyView', '_blank')} className="project-description code">View Code</div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;