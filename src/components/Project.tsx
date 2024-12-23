import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectProps {
  thumbnail: string;
  alt: string;
  logoClass: string;
  name: string;
  date: string;
  mobileDate?: string;
  description: string;
  link?: string;
  codeLink?: string;
  collaborators?: string;
  className?: string;
}

const Project: FC<ProjectProps> = ({
  thumbnail,
  alt,
  logoClass,
  name,
  date,
  mobileDate,
  description,
  link,
  codeLink,
  collaborators,
  className,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`project ${className || ""}`}>
      <motion.div
        onClick={() => link && window.open(link, "_blank")}
        className={`project-thumbnail ${!link ? "nohover" : ""}`}
        whileTap={{ scale: 0.9 }}
      >
        <img src={thumbnail} alt={alt} className={`projectLogo ${logoClass}`} />
      </motion.div>
      <div className="project-name">
        <span className="project-name-link project-name-headline">{name}</span>
        {!isMobile && collaborators && <span> - {collaborators}</span>}
      </div>
      <div className="project-date">{isMobile ? mobileDate || date : date}</div>
      <div className="project-description">{description}</div>
      {codeLink && (
        <div
          onClick={() => window.open(codeLink, "_blank")}
          className="project-description code"
        >
          View Code
        </div>
      )}
    </div>
  );
};

export default Project;
