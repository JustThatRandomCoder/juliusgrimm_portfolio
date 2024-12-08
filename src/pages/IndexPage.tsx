import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router-dom";
import Project from "../components/Project";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const IndexPage: FC = () => {
  const currentAge =
    new Date().getFullYear() -
    2010 -
    (new Date().getMonth() + 1 < 3 ||
    (new Date().getMonth() + 1 === 3 && new Date().getDate() < 2)
      ? 1
      : 0);
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const projects = gsap.utils.toArray(scrollRef.current.children);

    projects.forEach((project) => {
      const element = project as HTMLElement;
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power1.inOut",
          duration: 3,
          scrollTrigger: {
            trigger: element,
            start: "top 100%",
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
          <a className="email_head" href="mailto:me@juliusgrimm.dev">
            me@juliusgrimm.dev
          </a>
        </header>
        <div className="head">
          <div className="bg-font bebas-neue-regular">hello</div>
          <div className="headline">
            I'm a {currentAge} year old fullstack <br /> developer and designer{" "}
            <br />
            based in Germany
          </div>
        </div>
        <div className="links">
          <div className="bebas-neue-regular links_text left">
            Scroll down, <br /> to see my work
          </div>
          <div className="socials">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="icon-wrapper"
              onClick={() =>
                window.open("https://www.linkedin.com/in/julius-gr", "_blank")
              }
            >
              <FontAwesomeIcon icon={faLinkedin} className="links_first" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="icon-wrapper"
              onClick={() =>
                window.open("https://github.com/justthatrandomcoder", "_blank")
              }
            >
              <FontAwesomeIcon icon={faGithub} className="links_first" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="icon-wrapper"
              onClick={() =>
                window.open("https://instagram.com/julius_gr_", "_blank")
              }
            >
              <FontAwesomeIcon icon={faInstagram} className="links_first" />
            </motion.div>
          </div>
          <div className="bebas-neue-regular links_text right">
            <motion.span
              className="links_first"
              onClick={() => navigate("/about")}
              whileTap={{ scale: 0.8 }}
            >
              About me
            </motion.span>
            <br />
            <motion.span
              className="links_first"
              onClick={() =>
                document
                  .getElementById("projectSection")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileTap={{ scale: 0.8 }}
            >
              My projects and work
            </motion.span>
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
          mobileDate="October 2024 -Today | IN DEV..."
          description="FestiFly is an event management tool with features like stage planning, AI-powered song requests, and group chats."
          collaborators="Eventmanagement redefined"
          className="nohover"
        />
        <Project
          thumbnail="/vibeVote_logo.png"
          alt="VibeVote Logo"
          logoClass=""
          name="VibeVote"
          date="July 2024 - Today"
          description="VibeVote simplifies song request management at events, an essential tool for hosts and DJs."
          link="https://vibeVote.de"
          collaborators="Songrequesting made easy"
          className="mT"
        />
        <Project
          thumbnail="/OpenWeatherHub_logo.png"
          alt="OpenWeatherHub Logo"
          logoClass="openWeather"
          name="OpenWeatherHub"
          date="May 2024 - Today | BETA EXPECTED IN 2025"
          mobileDate="May 2024 -Today | IN DEV..."
          description="OpenWeatherHub is an open-source weather service that allows users to add their own cost-effective weather station and integrate it into their smart home."
          className="nohover mW"
        />
        <Project
          thumbnail="/skyview_logo.svg"
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
      <Footer aboutPage={false} />
    </>
  );
};

export default IndexPage;
