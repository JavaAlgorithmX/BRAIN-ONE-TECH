import Hero from "../components/hero";
import EnquireNow from "../components/enquireNow";
import Testimonials from "../components/testimonials";
import NewsLetter from "../components/newsLetter";
import QuickLinks from "../components/QuickLinks";
import Dummy from "../components/Dummy";
import Services from "../components/Services";
import DummyCaresol from "../components/Features";
import TechStack from "../components/techStack";
import WhyChooseUs from "../components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />
      <Dummy/>
      <DummyCaresol/>
      <Services/>
      <WhyChooseUs/>
      <TechStack/>
      <EnquireNow />
      <Testimonials />
      <NewsLetter />
      <QuickLinks />
    </>
  );
}
