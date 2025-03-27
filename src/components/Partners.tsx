
import { Handshake, Globe } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      logo: "https://via.placeholder.com/150x80?text=Partner+1",
      name: "Global Shipping Co."
    },
    {
      id: 2,
      logo: "https://via.placeholder.com/150x80?text=Partner+2",
      name: "Maritime Solutions"
    },
    {
      id: 3,
      logo: "https://via.placeholder.com/150x80?text=Partner+3",
      name: "Asia Port Authority"
    },
    {
      id: 4,
      logo: "https://via.placeholder.com/150x80?text=Partner+4",
      name: "Oceanic Ventures"
    },
    {
      id: 5,
      logo: "https://via.placeholder.com/150x80?text=Partner+5",
      name: "Sea Transport Ltd."
    },
    {
      id: 6,
      logo: "https://via.placeholder.com/150x80?text=Partner+6",
      name: "International Maritime Org."
    }
  ];

  const clientTestimonials = [
    {
      id: 1,
      text: "Chúng tôi đã hợp tác với Biển Khơi trong nhiều năm và luôn hài lòng với dịch vụ chuyên nghiệp và đáng tin cậy của họ.",
      author: "Nguyễn Văn A",
      position: "Giám đốc vận hành, Global Trade Corp."
    },
    {
      id: 2,
      text: "Dịch vụ vận tải biển của Biển Khơi đã giúp chúng tôi tối ưu hóa chuỗi cung ứng và tiết kiệm chi phí đáng kể.",
      author: "Trần Thị B",
      position: "Trưởng phòng logistics, Eastern Exports"
    },
    {
      id: 3,
      text: "Đội ngũ tư vấn luật hàng hải của Biển Khơi đã giúp chúng tôi giải quyết các vấn đề pháp lý phức tạp một cách hiệu quả.",
      author: "Lê Văn C",
      position: "Giám đốc pháp chế, Sunrise Shipping"
    }
  ];

  return (
    <section id="partners" className="py-16 bg-maritime-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Handshake className="h-10 w-10 text-maritime-teal" />
          </div>
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Đối tác của chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Chúng tôi tự hào được hợp tác với các đối tác hàng đầu trong ngành hàng hải toàn cầu.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 max-w-full" 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Globe className="h-10 w-10 text-maritime-teal" />
          </div>
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Sự hài lòng của khách hàng luôn là ưu tiên hàng đầu của chúng tôi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow relative">
              <div className="absolute -top-4 -left-4 text-5xl text-maritime-gold opacity-30">"</div>
              <p className="text-gray-600 mb-4 relative z-10">{testimonial.text}</p>
              <div className="border-t pt-4 mt-4">
                <p className="font-bold text-maritime-navy">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
