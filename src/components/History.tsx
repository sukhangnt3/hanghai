
import { Ship, Anchor, Navigation, Map } from "lucide-react";

const History = () => {
  const timelineItems = [
    {
      year: "1000 TCN",
      title: "Khởi đầu hàng hải Việt Nam",
      description: "Người Việt cổ đã bắt đầu xây dựng thuyền đơn giản để di chuyển và đánh bắt cá dọc theo các vùng ven biển.",
      icon: <Ship className="h-6 w-6 text-maritime-gold" />
    },
    {
      year: "Thế kỷ 10",
      title: "Phát triển thương mại biển",
      description: "Việt Nam bắt đầu phát triển các tuyến đường biển thương mại với các quốc gia láng giềng trong khu vực Đông Nam Á.",
      icon: <Anchor className="h-6 w-6 text-maritime-gold" />
    },
    {
      year: "Thế kỷ 15",
      title: "Thời kỳ khám phá biển",
      description: "Các nhà hàng hải Việt Nam đã thực hiện nhiều chuyến khám phá và thiết lập các tuyến đường biển mới trong khu vực.",
      icon: <Navigation className="h-6 w-6 text-maritime-gold" />
    },
    {
      year: "Hiện đại",
      title: "Hàng hải hiện đại",
      description: "Ngành hàng hải Việt Nam phát triển mạnh mẽ với công nghệ tiên tiến, cảng biển hiện đại và đội tàu lớn mạnh.",
      icon: <Map className="h-6 w-6 text-maritime-gold" />
    }
  ];

  return (
    <section id="history" className="py-16 bg-gradient-to-b from-maritime-deep-blue to-maritime-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">Lịch sử hàng hải</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Hàng hải Việt Nam có lịch sử lâu đời và phong phú, phản ánh truyền thống vươn ra biển của dân tộc.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-maritime-gold/30"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Years - alternating left/right on desktop */}
                  <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2 md:text-left'}`}>
                    <div className="bg-maritime-teal/10 inline-block px-4 py-2 rounded-full">
                      <span className="text-maritime-gold font-bold">{item.year}</span>
                    </div>
                  </div>
                  
                  {/* Content - alternating right/left on desktop */}
                  <div className={index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}>
                    <div className="bg-maritime-navy/50 p-6 rounded-lg shadow-lg border border-maritime-teal/20">
                      <div className="flex items-center mb-3">
                        <div className="bg-maritime-deep-blue p-2 rounded-full mr-3">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <div className="h-5 w-5 rounded-full bg-maritime-gold"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="w-[200%] h-12 bg-wave-pattern bg-repeat-x animate-wave opacity-10"></div>
      </div>
    </section>
  );
};

export default History;
