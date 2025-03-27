
import { BarChart3, TrendingUp, Users, Globe, Anchor, Ship } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      icon: <BarChart3 className="h-12 w-12 text-maritime-gold" />,
      value: "1,000,000+",
      label: "TEU vận chuyển mỗi năm",
      description: "Khối lượng container được vận chuyển an toàn đến điểm đến."
    },
    {
      id: 2,
      icon: <TrendingUp className="h-12 w-12 text-maritime-gold" />,
      value: "98.5%",
      label: "Tỷ lệ đúng hẹn",
      description: "Cam kết giao hàng đúng thời gian, mọi lúc mọi nơi."
    },
    {
      id: 3,
      icon: <Users className="h-12 w-12 text-maritime-gold" />,
      value: "500+",
      label: "Chuyên gia hàng hải",
      description: "Đội ngũ chuyên gia giàu kinh nghiệm trong ngành hàng hải."
    },
    {
      id: 4,
      icon: <Globe className="h-12 w-12 text-maritime-gold" />,
      value: "100+",
      label: "Cảng biển toàn cầu",
      description: "Mạng lưới cảng biển rộng khắp trên toàn thế giới."
    }
  ];

  return (
    <section className="py-16 bg-maritime-deep-blue text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Thống kê ấn tượng</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Những con số biết nói về năng lực và sự phát triển của chúng tôi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="bg-maritime-navy/50 p-6 rounded-lg border border-maritime-teal/20 text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-maritime-gold font-semibold mb-2">{stat.label}</div>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave pattern overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="w-[200%] h-12 bg-wave-pattern bg-repeat-x animate-wave opacity-10"></div>
      </div>
      
      {/* Side decorations */}
      <div className="hidden lg:block absolute top-10 left-10">
        <div className="text-maritime-gold/10 text-9xl">
          <Anchor className="h-24 w-24" />
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-10 right-10">
        <div className="text-maritime-gold/10 text-9xl">
          <Ship className="h-24 w-24" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
