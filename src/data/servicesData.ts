
import { Ship, Navigation, Compass, Landmark, Shield, AnchorIcon, FileText, Package, Wrench, Users, LifeBuoy, Globe } from "lucide-react";
import { ReactNode } from "react";

export interface MainService {
  icon: any; // Using 'any' temporarily to store the icon component type
  title: string;
  description: string;
  details: string[];
}

export interface AdditionalService {
  icon: any; // Using 'any' temporarily to store the icon component type
  title: string;
  description: string;
}

// Define icons as component references, not JSX
export const mainServices: MainService[] = [
  {
    icon: Ship,
    title: "Vận tải biển",
    description: "Dịch vụ vận tải biển toàn cầu với độ tin cậy cao và chi phí hợp lý.",
    details: [
      "Vận chuyển container quốc tế",
      "Vận chuyển hàng rời, hàng dự án",
      "Vận chuyển đa phương thức",
      "Dịch vụ vận tải biển nội địa",
      "Vận chuyển hàng đông lạnh, hàng nguy hiểm"
    ]
  },
  {
    icon: Navigation,
    title: "Điều hướng",
    description: "Hệ thống điều hướng hiện đại giúp tàu thuyền di chuyển an toàn trên biển.",
    details: [
      "Hệ thống định vị GPS hàng hải",
      "Radar hàng hải tiên tiến",
      "Bản đồ hàng hải điện tử",
      "Hệ thống thông tin tự động AIS",
      "Phần mềm lập kế hoạch hải trình"
    ]
  },
  {
    icon: Compass,
    title: "Khảo sát biển",
    description: "Dịch vụ khảo sát biển chuyên nghiệp với công nghệ tiên tiến.",
    details: [
      "Khảo sát địa chất đáy biển",
      "Khảo sát môi trường biển",
      "Khảo sát đường ống và cáp ngầm",
      "Khảo sát các công trình biển",
      "Lập bản đồ đáy biển 3D"
    ]
  },
  {
    icon: Landmark,
    title: "Luật hàng hải",
    description: "Tư vấn pháp lý về luật hàng hải và các quy định quốc tế.",
    details: [
      "Tư vấn pháp lý về vận tải biển",
      "Hợp đồng vận chuyển và bảo hiểm hàng hải",
      "Giải quyết tranh chấp hàng hải",
      "Tư vấn tuân thủ luật hàng hải quốc tế",
      "Đại diện pháp lý cho các vụ việc hàng hải"
    ]
  },
  {
    icon: Shield,
    title: "An ninh hàng hải",
    description: "Giải pháp an ninh hàng hải toàn diện bảo vệ tàu và thủy thủ đoàn.",
    details: [
      "Hệ thống giám sát an ninh tàu biển",
      "Đào tạo nhận thức an ninh hàng hải",
      "Đánh giá rủi ro an ninh hàng hải",
      "Phòng chống cướp biển",
      "Giải pháp bảo vệ cảng biển"
    ]
  },
  {
    icon: AnchorIcon,
    title: "Đào tạo hàng hải",
    description: "Chương trình đào tạo hàng hải đạt chuẩn quốc tế cho các chuyên gia tương lai.",
    details: [
      "Đào tạo sĩ quan hàng hải",
      "Đào tạo thủy thủ đoàn",
      "Chứng chỉ hàng hải quốc tế",
      "Đào tạo vận hành thiết bị hàng hải",
      "Huấn luyện ứng phó khẩn cấp trên biển"
    ]
  }
];

export const additionalServices: AdditionalService[] = [
  {
    icon: FileText,
    title: "Tư vấn hàng hải",
    description: "Dịch vụ tư vấn chuyên nghiệp về các vấn đề hàng hải, từ vận hành đến tuân thủ quy định."
  },
  {
    icon: Package,
    title: "Logistics hàng hải",
    description: "Giải pháp logistics tích hợp cho chuỗi cung ứng hàng hải toàn cầu."
  },
  {
    icon: Wrench,
    title: "Bảo trì tàu biển",
    description: "Dịch vụ bảo trì và sửa chữa tàu biển đạt tiêu chuẩn quốc tế."
  },
  {
    icon: Users,
    title: "Cung ứng nhân lực",
    description: "Dịch vụ cung ứng thuyền viên và nhân lực hàng hải chất lượng cao."
  },
  {
    icon: LifeBuoy,
    title: "Cứu hộ hàng hải",
    description: "Dịch vụ cứu hộ và hỗ trợ khẩn cấp cho tàu thuyền gặp nạn."
  },
  {
    icon: Globe,
    title: "Môi trường biển",
    description: "Giải pháp bảo vệ môi trường biển và ứng phó sự cố tràn dầu."
  }
];
