import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "駐車場を探す",
  description: "全23箇所の駐車場から検索。東京19箇所、宮城1箇所、大阪2箇所、兵庫1箇所。24時間営業・防犯カメラ完備・クレジットカード対応。エリアで絞り込み検索が可能です。",
  keywords: [
    "駐車場検索",
    "駐車場一覧",
    "東京 駐車場",
    "渋谷 駐車場",
    "大阪 駐車場",
    "宮城 駐車場",
    "24時間営業",
  ],
  openGraph: {
    title: "駐車場を探す | アローパーキング",
    description: "全23箇所の駐車場から検索。エリア別に絞り込み可能。",
    type: "website",
  },
  alternates: {
    canonical: "/parkings",
  },
};

export default function ParkingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}