
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import History from "@/components/History";
import Fleet from "@/components/Fleet";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Biển Khơi - Dịch vụ Hàng Hải Chuyên Nghiệp</title>
        <meta name="description" content="Biển Khơi cung cấp các dịch vụ hàng hải chuyên nghiệp như vận tải biển, luật hàng hải, an ninh hàng hải và đào tạo hàng hải tại Việt Nam." />
      </Helmet>
      
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Fleet />
      <Stats />
      <History />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
