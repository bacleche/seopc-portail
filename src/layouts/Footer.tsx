"use client";

import Image from "next/image";

export default function Footer() {

    const redirect = (url: string) => {
        window.location.href = url;
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LOGO + DESCRIPTION */}
                <div className="footer-brand">
                    <Image
                        src="/logo-seopc.webp"
                        alt="SEOPC logo"
                        width={140}
                        height={40}
                    />

                    <p>
                        Le SEOPC accompagne les jeunes dans leur orientation et leur donne accès
                        à des opportunités concrètes : formations, ateliers et rencontres avec
                        des experts pour construire un avenir solide.
                    </p>
                </div>

                {/* Bloc 1 */}
                <div className="footer-block">
                    <h3>Navigation</h3>
                    <a href="#hero">Accueil</a>
                    <a href="#about">À propos</a>
                    <a href="#ateliers">Ateliers</a>
                    <a href="#challenges">Challenges</a>
                    <a href="#panels">Conférences</a>
                </div>

                {/* Bloc 2 */}
                <div className="footer-block">
                    <h3>Opportunités</h3>
                    <a href="https://www.seopc.cg/orientation" target="_blank" rel="noopener noreferrer">Orientation</a>
                    <a href="https://www.seopc.cg/orientation/offres" target="_blank" rel="noopener noreferrer">Offres & stages</a>
                    <a href="https://www.seopc.cg/orientation/metiers" target="_blank" rel="noopener noreferrer">Catalogue métier</a>
                </div>

                {/* Bloc 3 */}
                <div className="footer-block">
                    <h3>Partenariats</h3>
                    <a href="https://www.seopc.cg/offres/sponsoring" target="_blank" rel="noopener noreferrer">Sponsoring</a>
                    <a href="https://www.seopc.cg/offres/partenaires" target="_blank" rel="noopener noreferrer">Devenir partenaire</a>
                </div>

                {/* Bloc 4 */}
                <div className="footer-block">
                    <h3>Découvrir</h3>
                    <a href="https://www.seopc.cg/gallery" target="_blank" rel="noopener noreferrer">Galerie</a>
                    <a href="https://www.seopc.cg/programme" target="_blank" rel="noopener noreferrer">Agenda</a>
                </div>

                {/* Bloc 5 */}
                <div className="footer-block">
                    <h3>Contact</h3>
                    <a href="https://www.seopc.cg/contact" target="_blank" rel="noopener noreferrer">Contact</a>
                </div>

            </div>

            <p className="footer-copy">
                © 2026 SEOPC — Tous droits réservés
            </p>

        </footer>
    );
}