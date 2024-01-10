import './Banner.css';
import React from 'react'

interface BannerProps {
    src: string
    alt?: string
}

function Banner ({ src, alt }: BannerProps) {
    return (
        <header className="banner">
            <img src={src} alt={alt} />
        </header>
    );
}

export default Banner;