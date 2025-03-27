
import { Ship, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maritime-navy text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Ship className="h-8 w-8 text-maritime-gold" />
              <span className="ml-2 text-white font-bold text-xl">Biển Khơi</span>
            </div>
            <p className="text-gray-400 mb-4">
              Cung cấp dịch vụ hàng hải chất lượng cao với hơn 20 năm kinh nghiệm trong ngành.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-maritime-gold transition-colors">Trang chủ</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-maritime-gold transition-colors">Giới thiệu</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-maritime-gold transition-colors">Dịch vụ</a></li>
              <li><a href="#history" className="text-gray-400 hover:text-maritime-gold transition-colors">Lịch sử</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-maritime-gold transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">Vận tải biển</a></li>
              <li><a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">Điều hướng</a></li>
              <li><a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">Khảo sát biển</a></li>
              <li><a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">Luật hàng hải</a></li>
              <li><a href="#" className="text-gray-400 hover:text-maritime-gold transition-colors">An ninh hàng hải</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-start">
                <span className="text-maritime-gold mr-2">Địa chỉ:</span>
                123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="text-maritime-gold mr-2">Điện thoại:</span>
                +84 (0) 123 456 789
              </p>
              <p className="text-gray-400 flex items-start">
                <span className="text-maritime-gold mr-2">Email:</span>
                info@bienkhoi.vn
              </p>
              <div className="pt-2">
                <a href="mailto:info@bienkhoi.vn" className="inline-flex items-center gap-2 bg-maritime-gold/20 hover:bg-maritime-gold/30 text-maritime-gold px-4 py-2 rounded-md transition-colors">
                  <Mail className="h-4 w-4" />
                  Gửi email
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2023 Biển Khơi. Tất cả các quyền được bảo lưu.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-maritime-gold text-sm transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="text-gray-500 hover:text-maritime-gold text-sm transition-colors">Chính sách bảo mật</a>
              <a href="#" className="text-gray-500 hover:text-maritime-gold text-sm transition-colors">Chính sách cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
