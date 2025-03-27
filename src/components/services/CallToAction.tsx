
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-maritime-deep-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Bạn cần tư vấn về dịch vụ hàng hải?</h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết cho dịch vụ bạn cần.
        </p>
        <Button size="lg" className="bg-maritime-gold hover:bg-maritime-gold/90 text-maritime-deep-blue font-bold">
          Liên hệ ngay
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
