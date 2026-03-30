"use client";

import Image from "next/image";
import Slider from "../layouts/Slider";

export default function Conferences() {

    const conference = () => {
        window.location.href = "https://www.seopc.cg/conferences";
    };
    const intervenants = () => {
        window.location.href = "https://www.seopc.cg/intervenants";
    };

    return (
        <section id="panels" className="split">
            <div>
                <h2>Conférences</h2>
                <p>Inspire-toi des parcours des experts.</p>
                <p>
                    Le SEOPC te donne accès à des <strong>professionnels expérimentés</strong>,
                    des <strong>leaders inspirants</strong> et des <strong>experts reconnus</strong>
                    dans différents domaines.
                </p>
                <button className="btn" onClick={conference}>🎟 Réserver ma place</button>
                <button className="btn secondary" onClick={intervenants}>
                    Nos intervenants
                </button>

                <br></br>

            </div>

            <Slider/>
        </section>
    );
}