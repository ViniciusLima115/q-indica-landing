import Benefits from "../components/benefits";
import Cta from "../components/cta";
import Faq from "../components/faq";
import FinalCta from "../components/final-cta";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Pricing from "../components/pricing";
import Problem from "../components/problem";
import SocialProof from "../components/social-proof";
import Solution from "../components/solution";
import Testimonials from "../components/testimonials";
import VideoDemo from "../components/video-demo";

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <VideoDemo />
      <Benefits />
      <Testimonials />
      <Cta />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
