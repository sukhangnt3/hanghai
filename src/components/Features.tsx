
import { Link } from "react-router-dom";
import { AnchorIcon, Ship, Navigation, Compass, Landmark, Shield, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Features = () => {
  const features = [
    {
      icon: <Ship className="h-10 w-10 text-maritime-teal" />,
      title: "Vận tải biển",
      description: "Dịch vụ vận tải biển toàn cầu với độ tin cậy cao và chi phí hợp lý."
    },
    {
      icon: <Navigation className="h-10 w-10 text-maritime-teal" />,
      title: "Điều hướng",
      description: "Hệ thống điều hướng hiện đại giúp tàu thuyền di chuyển an toàn trên biển."
    },
    {
      icon: <Compass className="h-10 w-10 text-maritime-teal" />,
      title: "Khảo sát biển",
      description: "Dịch vụ khảo sát biển chuyên nghiệp với công nghệ tiên tiến."
    },
    {
      icon: <Landmark className="h-10 w-10 text-maritime-teal" />,
      title: "Luật hàng hải",
      description: "Tư vấn pháp lý về luật hàng hải và các quy định quốc tế."
    },
    {
      icon: <Shield className="h-10 w-10 text-maritime-teal" />,
      title: "An ninh hàng hải",
      description: "Giải pháp an ninh hàng hải toàn diện bảo vệ tàu và thủy thủ đoàn."
    },
    {
      icon: <AnchorIcon className="h-10 w-10 text-maritime-teal" />,
      title: "Đào tạo hàng hải",
      description: "Chương trình đào tạo hàng hải đạt chuẩn quốc tế cho các chuyên gia tương lai."
    }
  ];

  return (
    <section id="services" className="py-16 bg-maritime-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Dịch vụ hàng hải</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Chúng tôi cung cấp đa dạng dịch vụ hàng hải chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-maritime-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <CardHeader>
                <div className="mb-2 bg-maritime-light inline-block p-3 rounded-lg">{feature.icon}</div>
                <CardTitle className="text-maritime-navy text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/services">
                  <Button variant="ghost" className="text-maritime-teal hover:text-maritime-teal/90 hover:bg-maritime-teal/10 p-0 flex items-center gap-2">
                    Tìm hiểu thêm <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="bg-maritime-navy hover:bg-maritime-navy/90 text-white">
              Xem tất cả dịch vụ
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Wave pattern background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-wave-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-wave-pattern opacity-5"></div>
    </section>
  );
};

export default Features;
