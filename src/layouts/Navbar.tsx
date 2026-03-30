// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Navbar() {

//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);

//     // Scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Redirection
//     const redirect = () => {
//         window.location.href = "https://www.seopc.cg/inscription";
//     };

//     return (
//         <nav id="navbar" className={scrolled ? "scrolled" : ""}>

//             {/* LOGO */}
//             <div className="logo">
//                 <img
//                     src="/logo-seopc.webp"
//                     alt="SEOPC logo"
                    
//                 />
//             </div>

//             {/* LINKS */}
//             <div className={`nav-links ${open ? "active" : ""}`}>
//                 <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
//                 <a href="#about" onClick={() => setOpen(false)}>À propos</a>
//                 <a href="#ateliers" onClick={() => setOpen(false)}>Ateliers</a>
//                 <a href="#challenges" onClick={() => setOpen(false)}>Challenges</a>
//                 <a href="#panels" onClick={() => setOpen(false)}>Conférences</a>
//             </div>

//             {/* BUTTON */}
//             <button className="nav-btn" onClick={redirect}>
//                 S'inscrire
//             </button>

//             {/* BURGER */}
//             <div
//                 className={`burger ${open ? "open" : ""}`}
//                 onClick={() => setOpen(prev => !prev)}
//                 onTouchEnd={(e) => {          // ← ajoute ça
//                     e.preventDefault();
//                     setOpen(prev => !prev);
//                 }}
//                 style={{ touchAction: "manipulation" }}   // ← et ça
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//         </nav>
//     );
// }


// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const burgerRef = useRef<HTMLDivElement>(null);

//     // Scroll effect
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Fermer le menu si clic en dehors
//     useEffect(() => {
//         const handleOutside = (e: Event) => {
//             if (
//                 open &&
//                 menuRef.current &&
//                 !menuRef.current.contains(e.target as Node) &&
//                 burgerRef.current &&
//                 !burgerRef.current.contains(e.target as Node)
//             ) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("touchstart", handleOutside, { passive: true });
//         document.addEventListener("mousedown", handleOutside);
//         return () => {
//             document.removeEventListener("touchstart", handleOutside);
//             document.removeEventListener("mousedown", handleOutside);
//         };
//     }, [open]);

//     const toggleMenu = (e: React.TouchEvent | React.MouseEvent) => {
//         e.preventDefault();      // bloque le délai 300ms iOS
//         e.stopPropagation();     // empêche la propagation au document
//         setOpen(prev => !prev);
//     };

//     const redirect = () => {
//         window.location.href = "https://www.seopc.cg/inscription";
//     };

//     return (
//         <nav id="navbar" className={scrolled ? "scrolled" : ""}>

//             {/* LOGO */}
//             <div className="logo">
//                 <img src="/logo-seopc.webp" alt="SEOPC logo" />
//             </div>

//             {/* LINKS */}
//             <div ref={menuRef} className={`nav-links ${open ? "active" : ""}`}>
//                 <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
//                 <a href="#about" onClick={() => setOpen(false)}>À propos</a>
//                 <a href="#ateliers" onClick={() => setOpen(false)}>Ateliers</a>
//                 <a href="#challenges" onClick={() => setOpen(false)}>Challenges</a>
//                 <a href="#panels" onClick={() => setOpen(false)}>Conférences</a>
//             </div>

//             {/* BUTTON */}
//             <button className="nav-btn" onClick={redirect}>
//                 S'inscrire
//             </button>

//             {/* BURGER — onTouchEnd pour mobile, onClick pour desktop */}
//             <div
//                 ref={burgerRef}
//                 className={`burger ${open ? "open" : ""}`}
//                 onTouchEnd={toggleMenu}   // ← mobile : réactif, sans délai
//                 onClick={toggleMenu}      // ← desktop (souris)
//                 style={{ touchAction: "manipulation" }}
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//         </nav>
//     );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const burgerRef = useRef<HTMLDivElement>(null);
//     const touchHandled = useRef(false);

//     // Scroll effect
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Fermer le menu si on touche en dehors
//     useEffect(() => {
//         const handleOutside = (e: Event) => {
//             if (
//                 open &&
//                 menuRef.current &&
//                 !menuRef.current.contains(e.target as Node) &&
//                 burgerRef.current &&
//                 !burgerRef.current.contains(e.target as Node)
//             ) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("touchstart", handleOutside, { passive: true });
//         document.addEventListener("mousedown", handleOutside);
//         return () => {
//             document.removeEventListener("touchstart", handleOutside);
//             document.removeEventListener("mousedown", handleOutside);
//         };
//     }, [open]);

//     const handleBurgerTouch = (e: React.TouchEvent) => {
//         e.preventDefault();
//         e.stopPropagation();
//         touchHandled.current = true; // marque que le touch a été traité
//         setOpen(prev => !prev);
//     };

//     const handleBurgerClick = (e: React.MouseEvent) => {
//         if (touchHandled.current) {
//             // click synthétique déclenché après le touch → on l'ignore
//             touchHandled.current = false;
//             return;
//         }
//         e.stopPropagation();
//         setOpen(prev => !prev);
//     };

//     const closeMenu = () => setOpen(false);

//     return (
//         <nav id="navbar" className={scrolled ? "scrolled" : ""}>

//             {/* LOGO */}
//             <div className="logo">
//                 <img src="/logo-seopc.webp" alt="SEOPC logo" />
//             </div>

//             {/* LINKS */}
//             <div ref={menuRef} className={`nav-links ${open ? "active" : ""}`}>
//                 <a href="#hero" onClick={closeMenu}>Accueil</a>
//                 <a href="#about" onClick={closeMenu}>À propos</a>
//                 <a href="#ateliers" onClick={closeMenu}>Ateliers</a>
//                 <a href="#challenges" onClick={closeMenu}>Challenges</a>
//                 <a href="#panels" onClick={closeMenu}>Conférences</a>
//             </div>

//             {/* BOUTON S'INSCRIRE */}
//             <a
//                 href="https://www.seopc.cg/inscription"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="nav-btn"
//             >
//                 S&apos;inscrire
//             </a>

//             {/* BURGER */}
//             <div
//                 ref={burgerRef}
//                 className={`burger ${open ? "open" : ""}`}
//                 onTouchEnd={handleBurgerTouch}
//                 onClick={handleBurgerClick}
//                 style={{ touchAction: "manipulation" }}
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>

//         </nav>
//     );
// }




// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);
//     const [open, setOpen] = useState(false);
//     const menuRef = useRef<HTMLDivElement>(null);
//     const burgerRef = useRef<HTMLDivElement>(null);
//     const touchHandled = useRef(false);

//     // Scroll effect
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Fermer le menu si on touche en dehors
//     useEffect(() => {
//         const handleOutside = (e: Event) => {
//             if (
//                 open &&
//                 menuRef.current &&
//                 !menuRef.current.contains(e.target as Node) &&
//                 burgerRef.current &&
//                 !burgerRef.current.contains(e.target as Node)
//             ) {
//                 setOpen(false);
//             }
//         };
//         document.addEventListener("touchstart", handleOutside, { passive: true });
//         document.addEventListener("mousedown", handleOutside);
//         return () => {
//             document.removeEventListener("touchstart", handleOutside);
//             document.removeEventListener("mousedown", handleOutside);
//         };
//     }, [open]);

//     const handleBurgerTouch = (e: React.TouchEvent) => {
//         e.preventDefault();
//         e.stopPropagation();
//         touchHandled.current = true;
//         setOpen(prev => !prev);
//     };

//     const handleBurgerClick = (e: React.MouseEvent) => {
//         if (touchHandled.current) {
//             touchHandled.current = false;
//             return;
//         }
//         e.stopPropagation();
//         setOpen(prev => !prev);
//     };

//     const closeMenu = () => setOpen(false);

//     return (
//         <nav id="navbar" className={scrolled ? "scrolled" : ""}>

//             {/* LOGO */}
//             <div className="logo">
//                 <img src="/logo-seopc.webp" alt="SEOPC logo" />
//             </div>

//             {/* LINKS */}
//             <div ref={menuRef} className={`nav-links ${open ? "active" : ""}`}>
//                 <a href="#hero" onClick={closeMenu}>Accueil</a>
//                 <a href="#about" onClick={closeMenu}>À propos</a>
//                 <a href="#ateliers" onClick={closeMenu}>Ateliers</a>
//                 <a href="#challenges" onClick={closeMenu}>Challenges</a>
//                 <a href="#panels" onClick={closeMenu}>Conférences</a>
//             </div>

//             {/* BOUTON S'INSCRIRE */}
//             <a
//                 href="https://www.seopc.cg/inscription"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="nav-btn"
//             >
//                 S&apos;inscrire
//             </a>

//             {/* BURGER */}
//             <button
//                 className={`burger ${open ? "open" : ""}`}
//                 onClick={() => {
//                     alert("burger cliqué ! open = " + !open);
//                     setOpen(prev => !prev);
//                 }}
//                 aria-label="Ouvrir le menu"
//                 type="button"
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </button>

//         </nav>
//     );
// }


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
            <button
                id="burger"
                className="burger"
                onClick={() => setOpen(prev => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>
    );
}