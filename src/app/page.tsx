import { MobileHeaderAds } from "@/widgets/ads/mobile-header";
import { RecentPosts } from "@/widgets/recent-posts";

export default function Home() {
  return (
    <div className="container pt-5">
      <MobileHeaderAds />
      <RecentPosts />
    </div>
  );
}
