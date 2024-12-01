import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import '../styles/AboutPage.css'

function AboutPage() {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="firstSection"
            >
                <div className="about-head">
                    <div className="bebas-neue-regular title">about me and my passion</div>
                    <div className="about-headline">Creating things to fascinate since I’m 10</div>
                    <div className="about-description">Here’s my story</div>
                </div>
                <div className="figure-co">
                    <div className="figure figure1">
                        <img className="image" src="../public/figures/figure1.HEIC" alt="Figure 1 - Paris 2024" />
                    </div>
                    <div className="figure figure2 m1">
                        <div className="figure-quote1">My personal story and how <br /> coding became my passion</div>
                        <img className="image" src="../public/figures/figure2.HEIC" alt="Figure 2 - Amsterdam 2024" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default AboutPage;