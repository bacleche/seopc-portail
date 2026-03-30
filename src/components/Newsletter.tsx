"use client";

import Image from "next/image";



export default function Newsletter() {
    const conference = () => {
        window.location.href = "https://www.seopc.cg/conferences";
    };
    const intervenants = () => {
        window.location.href = "https://www.seopc.cg/intervenants";
    };

const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Merci pour votre inscription !");
};

return (
    <section className="cta newsletter">

        <h2>Reste informé et prends de l’avance</h2>

        <p style={{ maxWidth: "600px", margin: "20px auto", opacity: 0.8 }}>
            Rejoins notre communauté et reçois en avant-première :
            <br /><br />

            • Les prochains ateliers et conférences <br />
            • Les opportunités exclusives <br />
            • Des conseils pratiques pour booster ton avenir <br />
            • Les actualités du SEOPC <br /><br />

            Ne rate plus aucune opportunité importante pour ton avenir.
        </p>

        <form onSubmit={subscribe}>

            <input
                type="email"
                placeholder="Ton email"
                required
                style={{
                    padding: "15px",
                    width: "300px",
                    borderRadius: "8px",
                    border: "none"
                }}
            />

            <br /><br />

            <button className="btn">
                Je m’abonne gratuitement
            </button>

        </form>

    </section>
);
}

