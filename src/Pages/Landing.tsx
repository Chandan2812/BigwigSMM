
import About from '../components/About';
import FAQ from '../components/Faq';
import FeatureSection from '../components/Features';
import SocialMediaHero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Nav from '../components/Nav';
import PricingPlans from '../components/Pricing';
import TestimonialSection from '../components/Testimonial';

function Landing() {
    return (
        <div>
            <Nav/>
            <SocialMediaHero/>
            <About/>
            <FeatureSection/>
            <TestimonialSection/>
            <PricingPlans/>
            <HowItWorks/>
            <FAQ/>
        </div>
    );
}

export default Landing;