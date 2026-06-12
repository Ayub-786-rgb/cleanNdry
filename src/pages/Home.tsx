import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Process from "../components/Process/Process";
import Delivery from "../components/Delivery/Delivery";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/WhatsappButton/WhatsappButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <Services />
      <WhyChooseUs />
      <Delivery />
      <Footer />
      <WhatsappButton />
    </>
  );
}