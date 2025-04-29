import { useRef } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import PricingSection from "../Components/PricingSection";
import Footer from "../Components/Footer";
import Signup from "./Signup";
import Login from "./Login";

function LandingPage() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const pricingRef = useRef(null);
    const footerRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Navbar
                onNavClick={{
                    home: () => scrollToSection(heroRef),
                    about: () => scrollToSection(aboutRef),
                    pricing: () => scrollToSection(pricingRef),
                    footer: () => scrollToSection(footerRef),
                    signup: () => <Signup />,
                    login: () => <Login />
                }}
            />

            <div ref={heroRef}><HeroSection /></div>
            <div ref={aboutRef}><AboutSection /></div>
            <div ref={pricingRef}><PricingSection /></div>
            <div ref={footerRef}><Footer /></div>
        </>
    );
}

export default LandingPage;
