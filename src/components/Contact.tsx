import React from 'react';
import { Mail, Phone, MapPin, Globe, Clock, Send } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

const Contact = () => {
  

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maritime-navy mb-4">Liên hệ với chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ về các dịch vụ hàng hải chuyên nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-maritime-light p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-maritime-navy mb-6">Thông tin liên hệ</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-maritime-teal mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Địa chỉ</p>
                  <p className="text-gray-600">123 Đường Nguyễn Công Trứ, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-maritime-teal mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Điện thoại</p>
                  <p className="text-gray-600">+84 28 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-maritime-teal mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@bienkhoi.vn</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-maritime-teal mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Giờ làm việc</p>
                  <p className="text-gray-600">Thứ Hai - Thứ Sáu: 8:00 - 17:30</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-maritime-teal mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Website</p>
                  <p className="text-gray-600">www.bienkhoi.vn</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-maritime-navy mb-3">Văn phòng chi nhánh</h4>
              <div className="space-y-2">
                <p className="text-gray-600">Hà Nội: 45 Trần Hưng Đạo, Quận Hoàn Kiếm</p>
                <p className="text-gray-600">Đà Nẵng: 78 Bạch Đằng, Quận Hải Châu</p>
                <p className="text-gray-600">Hải Phòng: 156 Lạch Tray, Quận Ngô Quyền</p>
              </div>
            </div>
          </div>
          
          <div className="bg-maritime-light p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h3 className="text-xl font-bold text-maritime-navy mb-6">Đăng ký tư vấn</h3>
            <p className="text-gray-600 mb-6">
              Điền thông tin vào biểu mẫu bên dưới để nhận tư vấn chi tiết từ đội ngũ chuyên gia của chúng tôi.
            </p>
            
            <div className="pt-4">
              <ConsultationForm />
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-maritime-navy font-medium mb-3">Theo dõi chúng tôi</p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="mt-12">
        <div className="h-80 bg-gray-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580080537!2d106.70272717397802!3d10.771605289387628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBHaWFvIHRow7RuZyBW4bqtbiB04bqjaSBUUC5IQ00!5e0!3m2!1svi!2s!4v1684388850932!5m2!1svi!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
