import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import Delivery from "../components/Delivery/Delivery";
import Footer from "../components/Footer/Footer";
import FloatingActions from "../components/WhatsappButton/FloatingActions";
import About from "../components/About/About";
import Review from './Review'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Delivery />
      <About />
      <Review />
      <Footer />
      <FloatingActions />
    </>
  );
}