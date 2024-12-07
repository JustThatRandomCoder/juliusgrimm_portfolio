import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "../styles/AboutPage.css";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPage: FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const imagesLoaded = (parentNode: HTMLElement) => {
    const images = parentNode.querySelectorAll("img");
    return Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) resolve();
            else img.onload = img.onerror = () => resolve();
          })
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const initAnimations = async () => {
      await imagesLoaded(document.body);

      const elements = gsap.utils.toArray(".figure, .paragraph, .figure-quote");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      elements.forEach((el) => {
        const element = el as HTMLElement;
        if (
          element.classList.contains("figure1") ||
          element.classList.contains("figure2") ||
          element.classList.contains("figure-quote-start")
        )
          return;

        gsap.fromTo(
          element,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power1.inOut",
            duration: 2,
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

      ScrollTrigger.refresh();
    };

    initAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="aboutSection"
      >
        <div className="about-head">
          <div className="bebas-neue-regular title">
            about me and my passion
          </div>
          <div className="about-headline">
            Creating things to fascinate since I’m 10
          </div>
          <div className="about-description">Here’s my story</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="figure-co"
        ref={scrollRef}
      >
        <div className="figure figure1">
          <img
            className="image"
            src="/figures/figure1.webp"
            alt="Figure 1 - France 2024"
          />
          <img
            className="image image-mobile"
            src="/figures/figure3.webp"
            alt="Figure 1 - France 2024"
          />
          <div className="figure-quote figure-quote2">
            My passion for technology and coding began the day I got my first
            MacBook.
          </div>
        </div>
        <div className="figure figure2">
          <div className="figure-quote figure-quote1 figure-quote-start">
            My personal story and how coding became my passion
          </div>
          <img
            className="image"
            src="/figures/figure2.webp"
            alt="Figure 2 - France 2024"
          />
        </div>
        <div className="figure figure3">
          <img
            className="image"
            src="/figures/figure3.webp"
            alt="Figure 3 - Paris 2024"
          />
        </div>
        <div className="paragraph-co">
          <div className="paragraph">
            I was captivated by the simple UI and elegant design of macOS. That
            was the moment I knew I wanted to code and create software that was
            as simple and user-friendly as Apple's. This marked the beginning of
            my career as a coder.
          </div>
          <div className="paragraph">
            <div className="paragraph-headline">Diving into the code</div>
            One day, I stumbled across a video about coding websites, and
            something about it drew me in. I didn’t hesitate—I downloaded the
            tools, opened my laptop, and got to work. The site I built was
            nothing fancy, just a basic layout with no real design, but it felt
            like a turning point. It was the first step into a world where I
            could bring ideas to life through code, and that made it
            unforgettable.
          </div>
        </div>
        <div className="paragraph-co">
          <div className="paragraph">
            <div className="paragraph-headline">Hobby to passion</div>I quickly
            made progress and soon started collaborating on real projects with a
            close friend. Building something from scratch was an incredible
            experience—it pushed my skills, fueled my creativity, and deepened
            my love for coding. Those moments opened my eyes to the endless
            possibilities of creating, designing, and bringing ideas to life
            through code.
          </div>
          <div className="figure figure5">
            <img
              className="image"
              src="/figures/figure5.webp"
              alt="Figure 5 - Amsterdam 2024"
            />
          </div>
          <div className="paragraph">
            <div className="paragraph-headline">
              Balancing School, Creativity, and Movement
            </div>
            Between classes and schoolwork, I find ways to fuel my creativity
            and stay active. I dive into my passion projects, VibeVote and
            FestiFly, turning ideas into reality through code. When I’m not
            building, I hit the tennis court to stay sharp and competitive. And
            when I need to recharge, I lace up my running shoes—there’s nothing
            like a good run to clear my mind and find focus.
          </div>
          <div className="figure-quote figure-quote1 figure-quote3">
            Thanks for taking a <br /> moment to check it out!
          </div>
        </div>
        <div className="paragraph-co">
          <div className="figure figure4">
            <img
              className="image"
              src="/figures/figure4.webp"
              alt="Figure 4 - My cat - 2021"
            />
          </div>
          <div className="paragraph">
            <div className="paragraph-headline">
              Discovering the beauty of design
            </div>
            As I delved deeper into coding, I realized that functional code was
            only part of the equation. Inspired by Apple’s design philosophy, I
            explored UI and UX, discovering how details like fonts and spacing
            could transform the user experience. Design became more than
            aesthetics—it was about creating intuitive, seamless connections
            between people and technology.
          </div>
          <div className="figure figure6">
            <img
              className="image"
              src="/figures/figure6.webp"
              alt="Figure 6 - France 2024"
            />
          </div>
        </div>
      </motion.div>
      <Footer aboutPage={true} />
    </>
  );
};

export default AboutPage;
