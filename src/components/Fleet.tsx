
import { Ship, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Fleet = () => {
  const ships = [
    {
      id: 1,
      name: "MV Ocean Dragon",
      image: "https://images.unsplash.com/photo-1565951707463-33f2899cb065",
      type: "Container",
      capacity: "8,500 TEU",
      year: 2018,
      flag: "Việt Nam",
      status: "Hoạt động",
      route: "Châu Á - Châu Âu"
    },
    {
      id: 2,
      name: "MV Saigon Star",
      image: "https://images.unsplash.com/photo-1574100943053-ec6450f34562",
      type: "Hàng rời",
      capacity: "65,000 DWT",
      year: 2016,
      flag: "Việt Nam", 
      status: "Hoạt động",
      route: "Châu Á - Trung Đông"
    },
    {
      id: 3,
      name: "MV Mekong Queen",
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166",
      type: "Chở dầu",
      capacity: "120,000 DWT",
      year: 2020,
      flag: "Việt Nam",
      status: "Hoạt động",
      route: "Đông Nam Á"
    },
    {
      id: 4,
      name: "MV Hanoi Express",
      image: "https://images.unsplash.com/photo-1577125305066-33a0225683d6",
      type: "Container",
      capacity: "4,200 TEU",
      year: 2015,
      flag: "Việt Nam",
      status: "Đang sửa chữa",
      route: "Nội địa"
    }
  ];

  return (
    <section id="fleet" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Ship className="h-10 w-10 text-maritime-gold" />
          </div>
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Đội tàu hiện đại</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Đội tàu của chúng tôi được trang bị hiện đại, đáp ứng các tiêu chuẩn quốc tế về an toàn và bảo vệ môi trường.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ships.map((ship) => (
            <Card key={ship.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src={ship.image} 
                  alt={ship.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge className={`${ship.status === 'Hoạt động' ? 'bg-green-500' : 'bg-amber-500'}`}>
                    {ship.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg text-maritime-navy mb-2">{ship.name}</h3>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Loại tàu:</span>
                    <span>{ship.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Trọng tải:</span>
                    <span>{ship.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Năm đóng:</span>
                    <span>{ship.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quốc kỳ:</span>
                    <span>{ship.flag}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tuyến:</span>
                    <span>{ship.route}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full border-maritime-teal text-maritime-teal hover:bg-maritime-teal/10">
                  Xem chi tiết
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button className="bg-maritime-navy hover:bg-maritime-navy/90 text-white flex items-center gap-2">
            <Anchor className="h-4 w-4" />
            Xem toàn bộ đội tàu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
