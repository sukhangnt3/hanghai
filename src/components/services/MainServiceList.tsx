
import React from "react";
import { Button } from "@/components/ui/button";
import { MainService } from "@/data/servicesData";
import { LucideIcon } from "lucide-react";

interface MainServiceListProps {
  services: MainService[];
}

const MainServiceList = ({ services }: MainServiceListProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Dịch vụ chính</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những dịch vụ hàng hải chuyên nghiệp và toàn diện mà chúng tôi cung cấp cho khách hàng.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon as LucideIcon;
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="bg-maritime-light rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-6">
                    <IconComponent className="h-16 w-16 text-maritime-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-maritime-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-maritime-teal mb-4">Chi tiết dịch vụ:</h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-maritime-teal/10 p-1 rounded-full mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-maritime-teal" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button className="bg-maritime-navy hover:bg-maritime-navy/90">Tìm hiểu thêm</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainServiceList;
