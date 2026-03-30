"use client";

import Image from "next/image";
import Slider from "../layouts/Slider";

export default function Atelier() {

    const atelier = () => {
        window.location.href = "https://www.seopc.cg/atelier";
    };

    return (
        <section id="ateliers">

            <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Ateliers pratiques
            </h1>

            {/* CONTENU SPLIT */}
            <div className="split">

                <div>
                    <p>
                        Participe à des ateliers concrets conçus pour te faire évoluer rapidement.
                        Ici, tu n’écoutes pas seulement : tu pratiques, tu expérimentes et tu construis de vraies compétences.
                    </p>

                    <p>
                        Que tu sois débutant ou en quête de perfectionnement, nos ateliers sont conçus pour te donner
                        un avantage réel sur le marché du travail.
                    </p>

                    <p>
                        Rejoins-nous et transforme tes connaissances en compétences utiles et directement applicables.
                    </p>

                    <button
                        className="btn"
                        onClick={atelier}
                        style={{ marginTop: "20px" }}
                    >
                        🎟 Réserver ma place
                    </button>
                </div>

                <Slider/>

            </div>

        </section>
    );
}