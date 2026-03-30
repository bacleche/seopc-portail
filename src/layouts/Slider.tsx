"use client";
import { useEffect, useState } from "react";

export default function Slider() {

    const slides = [
        "/photo-seopc.jpeg",
        "/image_fond_seopc.webp",
        "/photo-seopc.jpeg",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            {slides.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    className={`slide ${i === index ? "active" : ""}`}
                />
            ))}
        </div>
    );
}