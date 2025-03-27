
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-maritime-deep-blue mb-4">Tại sao chọn chúng tôi?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Với nhiều năm kinh nghiệm và chuyên môn sâu rộng, chúng tôi tự hào là đối tác hàng hải tin cậy của bạn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-maritime-light p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-maritime-teal h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-maritime-navy mb-2">Chất lượng hàng đầu</h3>
            <p className="text-gray-600">Dịch vụ chất lượng cao theo tiêu chuẩn quốc tế</p>
          </div>
          
          <div className="bg-maritime-light p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-maritime-teal h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-maritime-navy mb-2">Đúng thời gian</h3>
            <p className="text-gray-600">Cam kết thời gian giao hàng và hoàn thành dịch vụ</p>
          </div>
          
          <div className="bg-maritime-light p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-maritime-teal h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-maritime-navy mb-2">Đội ngũ chuyên nghiệp</h3>
            <p className="text-gray-600">Chuyên gia hàng hải với kinh nghiệm quốc tế</p>
          </div>
          
          <div className="bg-maritime-light p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-maritime-teal h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-maritime-navy mb-2">Giá cạnh tranh</h3>
            <p className="text-gray-600">Mức giá hợp lý và minh bạch cho mọi dịch vụ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
