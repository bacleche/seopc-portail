

"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav id="navbar" className={scrolled ? "scrolled" : ""}>

            {/* LOGO */}
            <div className="logo">
                <img src="/logo-seopc.webp" alt="SEOPC logo" />
            </div>

            {/* LINKS */}
            <div id="navLinks" className={`nav-links${open ? " active" : ""}`}>
                <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
                <a href="#about" onClick={() => setOpen(false)}>À propos</a>
                <a href="#ateliers" onClick={() => setOpen(false)}>Ateliers</a>
                <a href="#challenges" onClick={() => setOpen(false)}>Challenges</a>
                <a href="#panels" onClick={() => setOpen(false)}>Conférences</a>
            </div>

            {/* BOUTON S'INSCRIRE */}
            <a
                href="https://www.seopc.cg/inscription"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn"
                style={{ textDecoration: "none" }}
            >
                S&apos;inscrire
            </a>

            {/* BURGER — même logique que le HTML statique */}
            <div
                id="burger"
                className="burger"
                onClick={() => setOpen(prev => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </nav>
    );
}