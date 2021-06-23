import React from 'react';
import NewsletterForm from './NewsletterForm';

const HeroSection = () => {
    return (
        <div class="hero-section">
            <section class="hero-text">
                <h1>Where the world builds software</h1>
                <p>Millions of developers and companies build, ship, and maintain their software on GitHub—the largest and most advanced development platform in the world.</p>
                <p><NewsletterForm></NewsletterForm></p>
            </section>
        </div>
    )
}

export default HeroSection;