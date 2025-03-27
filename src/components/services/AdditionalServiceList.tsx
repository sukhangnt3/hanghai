
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AdditionalService } from "@/data/servicesData";
import { LucideIcon, ChevronRight } from "lucide-react";

interface AdditionalServiceListProps {
  services: AdditionalService[];
}

const AdditionalServiceList = ({ services }: AdditionalServiceListProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-maritime-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Dịch vụ bổ sung</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ngoài các dịch vụ chính, chúng tôi còn cung cấp nhiều dịch vụ hỗ trợ khác.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon as LucideIcon;
            
            return (
              <Card 
                key={index} 
                className="service-card opacity-0 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-2 bg-maritime-gold/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-maritime-gold/20 transition-colors duration-300">
                    <IconComponent className="h-10 w-10 text-maritime-gold" />
                  </div>
                  <CardTitle className="text-maritime-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-maritime-teal hover:text-maritime-teal/80 p-0 hover:bg-transparent group">
                    Chi tiết
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServiceList;
