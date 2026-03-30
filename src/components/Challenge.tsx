"use client";

import Image from "next/image";

export default function Challenge() {

    const challenge = () => {
        window.location.href = "https://www.seopc.cg/challenge";
    };
   

    return (
        <section id="challenges" >

            <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Challenges</h2>
            <p>Teste tes compétences et dépasse tes limites.</p>


            <div className="split">
                <div className="cards">
                    <div className="card">
                        <h3>Compétition</h3>
                        <p>Affronte d'autres participants et montre ce dont tu es capable.</p>
                    </div>

                    <div className="card">
                        <h3>Opportunités</h3>
                        <p>Les meilleurs se font remarquer et accèdent à des opportunités uniques.</p>
                    </div>

                    <div className="card">
                        <h3>Récompenses</h3>
                        <p>Gagne en visibilité, en expérience… et parfois bien plus.</p>
                    </div>

                </div>
                <button className="btn" onClick={challenge}>Participer</button>
            </div>
        </section>
    );
}