import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from 'react-router-dom';
import Project from "../components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

function IndexPage() {
    const navigate = useNavigate();
    const scrollRef = useRef();

    useEffect(() => {
        const projects = gsap.utils.toArray(scrollRef.current.children);

        projects.forEach((project) => {
            gsap.fromTo(
                project,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: 3,
                    scrollTrigger: {
                        trigger: project,
                        start: "top 90%",
                        end: "top 30%",
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
                    <div className="bebas-neue-regular links_text left">Scroll down, <br /> to see my work</div>
                    <div className="socials">
                        <FontAwesomeIcon icon={faLinkedin} className="links_first" onClick={() => window.open('https://www.linkedin.com/in/julius-grimm-298898333', '_blank')} />
                        <FontAwesomeIcon icon={faGithub} className="links_first" onClick={() => window.open('https://github.com/justthatrandomcoder', '_blank')} />
                        <FontAwesomeIcon icon={faInstagram} className="links_first" onClick={() => window.open('https://instagram.com/julius_gr_', '_blank')} />
                    </div>
                    <div className="bebas-neue-regular links_text right">
                        <span className="links_first" onClick={() => navigate('/about')}>About me</span> <br />
                        <span className="links_first" onClick={() => document.getElementById('projectSection').scrollIntoView({ behavior: 'smooth' })}>
                            My projects and work
                        </span>
                    </div>
                </div>
            </motion.div>
            <div className="projectSection" id="projectSection" ref={scrollRef}>
                <Project
                    thumbnail="https://cdn.festifly.de/assets/img/festifly.de/logo/logo.svg"
                    alt="Festifly Logo"
                    logoClass=""
                    name="Festifly"
                    date="October 2024 - Today | BETA EXPECTED IN 2025"
                    description="FestiFly is an event management tool with features like stage planning, AI-powered song requests, and group chats."
                    link="https://festifly.de"
                    collaborators="Eventmanagement redefined"
                />
                <Project
                    thumbnail="../public/vibevote_logo.png"
                    alt="VibeVote Logo"
                    logoClass=""
                    name="VibeVote"
                    date="July 2024 - Today"
                    description="VibeVote simplifies song request management at events, an essential tool for hosts and DJs."
                    link="https://vibevote.de"
                    collaborators="Songrequesting made easy"
                    className="mW"
                />
                <Project
                    thumbnail="../public/OpenWeatherHub_logo.png"
                    alt="OpenWeatherHub Logo"
                    logoClass="openWeather"
                    name="OpenWeatherHub"
                    date="May 2024 - Today | BETA EXPECTED IN 2025"
                    description="OpenWeatherHub is an open-source weather service that allows users to add their own cost-effective weather station and integrate it into their smart home."
                    className="mT"
                />
                <Project
                    thumbnail="../public/skyview_logo.svg"
                    alt="SkyView Logo"
                    logoClass=""
                    name="SkyView"
                    date="July 2024"
                    description="SkyView was one of the tasks of the Minihackathon by Kevin Chromik. SkyView is like OpenWeatherHub an open-source weather service."
                    link="https://skyview.juliusgrimm.dev"
                    codeLink="https://github.com/JustThatRandomCoder/SkyView"
                    className="mT"
                />
            </div>
        </>
    );
}

export default IndexPage;
