import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Project({ thumbnail, alt, logoClass, name, date, mobileDate, description, link, codeLink, collaborators, className }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`project ${className || ''}`}>
            <motion.div
                onClick={() => link && window.open(link, '_blank')}
                className={`project-thumbnail ${!link ? 'nohover' : ''}`}
                whileTap={{ scale: 0.90 }}
            >
                <img src={thumbnail} alt={alt} className={`projectLogo ${logoClass}`} />
            </motion.div>
            <div className="project-name">
                <a className="project-name-link project-name-headline">{name}</a>
                {!isMobile && collaborators && <span> - {collaborators}</span>}
            </div>
            <div className="project-date">{isMobile ? mobileDate || date : date}</div>
            <div className="project-description">{description}</div>
            {codeLink && (
                <div onClick={() => window.open(codeLink, '_blank')} className="project-description code">
                    View Code
                </div>
            )}
        </div>
    );
}

export default Project;
