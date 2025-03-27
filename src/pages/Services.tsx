
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import MainServiceList from "@/components/services/MainServiceList";
import AdditionalServiceList from "@/components/services/AdditionalServiceList";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import CallToAction from "@/components/services/CallToAction";
import { mainServices, additionalServices } from "@/data/servicesData";

const ServiceDetail = () => {
  return (
    <>
      <Helmet>
        <title>Dịch vụ Hàng Hải | Biển Khơi</title>
        <meta name="description" content="Các dịch vụ hàng hải chuyên nghiệp của Biển Khơi: vận tải biển, điều hướng, khảo sát biển, luật hàng hải, an ninh hàng hải và đào tạo hàng hải" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ServiceHero />
        <MainServiceList services={mainServices} />
        <AdditionalServiceList services={additionalServices} />
        <WhyChooseUs />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetail;
