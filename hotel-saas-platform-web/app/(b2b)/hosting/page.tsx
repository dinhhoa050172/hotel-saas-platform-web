import { B2BHeader } from "@/components/b2b/b2b-header";
import { EarningsCalculator } from "@/components/b2b/earnings-calculator";
import { DashboardPreview } from "@/components/b2b/dashboard-preview";
import { B2BStats } from "@/components/b2b/b2b-stats";
import { HostingSteps } from "@/components/b2b/hosting-steps";
import { B2BFooter } from "@/components/b2b/b2b-footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cho thuê phòng trên HotelSaaS | Kiếm thu nhập từ bất động sản",
  description:
    "Quản lý khách sạn thông minh với HotelSaaS. Tối ưu doanh thu, đồng bộ OTA, báo cáo tự động. Đăng ký miễn phí.",
};

export default function B2BLandingPage() {
  return (
    <main className="min-h-screen">
      <B2BHeader />

      {/* Hero: Earnings Calculator */}
      <div id="calculator">
        <EarningsCalculator />
      </div>

      {/* Section 2: Dashboard Preview */}
      <div id="dashboard">
        <DashboardPreview />
      </div>

      {/* Section 3: Stats & Trust */}
      <B2BStats />

      {/* Section 4: 3-Step CTA */}
      <div id="steps">
        <HostingSteps />
      </div>

      {/* Footer */}
      <B2BFooter />
    </main>
  );
}
