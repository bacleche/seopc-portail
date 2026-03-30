"use client";


import Image from "next/image";
export default function About() {

    const inscrireauseopc = () => {
        window.location.href = "https://www.seopc.cg/inscription";
    };

    const goAgenda = () => {
        window.location.href = "https://www.seopc.cg/programme";
    };

    return (
        <section id="about" className="split">
                
                <div>
                <h1>Pourquoi SEOPC ?</h1>
                <p>Le  SEOPC (Le Salon de l'Éducation, de l'Orientation et de l'Insertion Professionnelle au Congo) connecte les jeunes aux opportunités professionnelles réelles.</p>
                <br></br>
                ✔ Experts
                <br></br>✔ Ateliers pratiques
                <br></br>✔ Opportunités concrètes
                    <br></br>
                        <button className="btn" onClick={inscrireauseopc}>Rejoindre le programme</button>
                </div>

                <div>
                    <img 
                    src="/image_fond_seopc.webp"
                    alt="SEOPC image"
                     />

                </div>
        </section>
    );
}