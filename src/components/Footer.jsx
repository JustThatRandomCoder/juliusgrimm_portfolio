import { motion } from "framer-motion";
import { div, footer } from "framer-motion/client";
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css'

function Footer() {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <hr />
            <div className="footer-main">
                <div className="footer-linktree">
                    <div className="bebas-neue-regular footer-bg-font main">MAIN</div>
                    <div className="footer-link-co bebas-neue-regular">
                        <span className="footer-link" onClick={() => document.getElementById('projectSection').scrollIntoView({ behavior: 'smooth' })}>PROJECTS</span> <br />
                        <span className="footer-link" onClick={() => navigate('/about')}>ABOUT ME</span>
                    </div>
                </div>
                <div className="footer-linktree mobile">
                    <div className="bebas-neue-regular footer-bg-font">SOCIALS</div>
                    <div className="footer-link-co mobile footer-link-co-socials bebas-neue-regular">
                        <div className="footer-link" onClick={() => window.open('https://www.linkedin.com/in/julius-gr', '_blank')} >linked in</div>
                        <div className="footer-link" onClick={() => window.open('https://instagram.com/julius_gr_', '_blank')}>instagram</div>
                        <div className="footer-link" onClick={() => window.open('https://github.com/justthatrandomcoder', '_blank')}>github</div>
                    </div>
                </div>
            </div>
            <span className="copyright">© {currentYear} Julius Grimm. All rights reserverd</span>
        </footer>
    );
}

export default Footer;