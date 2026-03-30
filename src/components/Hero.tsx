"use client";

export default function Hero() {

    const inscrireauseopc = () => {
        window.location.href = "https://www.seopc.cg/inscription";
    };

    const goAgenda = () => {
        window.location.href = "https://www.seopc.cg/programme";
    };

    return (
        <section id="hero" className="hero">
            <h1>Construis ton avenir dès aujourd’hui</h1>

            <button className="btn" onClick={inscrireauseopc}>
                Je m’inscris maintenant
            </button>

            <button className="btn secondary" onClick={goAgenda}>
                Voir l’agenda
            </button>
        </section>
    );
}