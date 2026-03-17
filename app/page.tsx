import Benefits from "../components/benefits";
import Cta from "../components/cta";
import Faq from "../components/faq";
import FinalCta from "../components/final-cta";
import Footer from "../components/footer";
import ForWho from "../components/for-who";
import Hero from "../components/hero";
import HowItWorks from "../components/how-it-works";
import Pricing from "../components/pricing";
import Problem from "../components/problem";
import SocialProof from "../components/social-proof";
import Solution from "../components/solution";
import Testimonials from "../components/testimonials";
import Ticker from "../components/ticker";
import VideoDemo from "../components/video-demo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Problem />
      <HowItWorks />
      <Solution />
      <VideoDemo />
      <Benefits />
      <ForWho />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <Cta />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
