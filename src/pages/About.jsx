import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import WhyChooseUs from "../components/About/WhyChooseUs";

function About() {
    return (
        <>
            <Navbar />
            <AboutHero />
            <AboutStory />
            <WhyChooseUs />
            <Footer />
        </>
    );
}

export default About;