
import About from '../components/About';
import FeatureSection from '../components/Features';
import SocialMediaHero from '../components/Hero';
import Nav from '../components/Nav';
import TestimonialSection from '../components/Testimonial';

function Landing() {
    return (
        <div>
            <Nav/>
            <SocialMediaHero/>
            <About/>
            <FeatureSection/>
            <TestimonialSection/>
        </div>
    );
}

export default Landing;