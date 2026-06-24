import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import Delivery from "../components/Delivery/Delivery";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";
import About from "../components/About/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Delivery />
      <About />
      <Footer />
      <WhatsappButton />
    </>
  );
}