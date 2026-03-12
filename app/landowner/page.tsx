import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "土地活用のご提案",
  description: "遊休地や空きスペースを駐車場として有効活用しませんか？アローパーキングが、ご提案から運営まで一貫してサポート。定額賃料収入・変動売上収入の2パターンから選択可能。",
  keywords: ["土地活用", "駐車場経営", "遊休地活用", "不動産活用", "賃料収入"],
  openGraph: {
    title: "土地活用のご提案 | アローパーキング",
    description: "遊休地や空きスペースを駐車場として有効活用。30年以上の実績でサポートします。",
    type: "website",
  },
  alternates: {
    canonical: "/landowner",
  },
};

export default function LandownerPage() {
  const steps = [
    {
      number: "01",
      title: "ご提案",
      description: "お客様の土地を拝見し、最適な駐車場プランをご提案いたします。",
    },
    {
      number: "02",
      title: "現地調査",
      description: "詳細な現地調査を実施し、具体的な設計プランを作成します。",
    },
    {
      number: "03",
      title: "オープンまでの費用",
      description: "工事費用や設備導入費用について、明確にご説明いたします。",
    },
    {
      number: "04",
      title: "運営管理",
      description: "オープン後の運営・管理はすべてアローパーキングにお任せください。",
    },
  ];

  const patterns = [
    {
      title: "定額賃料収入",
      subtitle: "一時使用賃貸",
      description: "毎月安定した賃料収入を得られます。",
      features: ["安定収入", "管理不要", "リスク低"],
    },
    {
      title: "変動売上収入",
      subtitle: "共同経営",
      description: "売上に応じた収入配分で、高収益を目指します。",
      features: ["高収益可能", "柔軟な運営", "成果報酬型"],
    },
  ];

  const points = [
    {
      title: "なぜ駐車場ビジネスは伸び続けるのか",
      description: "都市部での駐車場需要は年々増加しています。特に商業施設や住宅密集地では、安定した需要が見込めます。",
    },
    {
      title: "駐車場運営で大きな差がつくポイント",
      description: "立地選定、料金設定、設備管理など、30年以上の実績とノウハウで最適な運営をサポートします。",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">土地活用のご提案</h1>
        <p className="text-blue-100">駐車場ビジネスを一緒に考えませんか</p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* イントロ */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            30年以上の実績で<br />あなたの土地を最大限に活用
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            遊休地や空きスペースを駐車場として有効活用しませんか？
            アローパーキングが、ご提案から運営まで一貫してサポートいたします。
          </p>
        </div>

        {/* ステップ */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">4つのステップ</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 text-4xl font-bold text-blue-900">{step.number}</div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 収入パターン */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">2つの収入パターン</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {patterns.map((pattern, index) => (
              <div
                key={index}
                className="rounded-xl border-2 border-blue-900 bg-white p-8 transition-all hover:shadow-xl"
              >
                <div className="mb-2 text-sm font-semibold text-blue-900">{pattern.subtitle}</div>
                <h4 className="mb-3 text-2xl font-bold text-gray-900">{pattern.title}</h4>
                <p className="mb-6 text-gray-600">{pattern.description}</p>
                <div className="space-y-2">
                  {pattern.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ポイント */}
        <div className="mb-16">
          <div className="space-y-6">
            {points.map((point, index) => (
              <div key={index} className="rounded-xl bg-white p-8 shadow-sm">
                <h4 className="mb-3 text-xl font-bold text-gray-900">
                  <span className="mr-3 text-blue-900">POINT {index + 1}</span>
                  {point.title}
                </h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-xl bg-gradient-to-r from-blue-900 to-blue-800 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">まずはお気軽にご相談ください</h3>
          <p className="mb-6 text-blue-100">
            土地の広さや立地に応じて、最適なプランをご提案いたします。<br />
            相談・見積もりは無料です。
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:03-5428-6822"
              className="w-full rounded-lg bg-white px-8 py-4 text-center font-semibold text-blue-900 transition-all hover:bg-blue-50 sm:w-auto"
            >
              📞 03-5428-6822
            </a>
            <Link
              href="/contact"
              className="w-full rounded-lg border-2 border-white px-8 py-4 text-center font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}