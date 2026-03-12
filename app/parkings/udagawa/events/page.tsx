import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "イベント情報 | アローパーキング宇田川",
  description: "渋谷エリアの主要イベント情報と駐車場の混雑予想。事前予約で確実に駐車スペースを確保できます。",
  keywords: ["渋谷", "イベント", "駐車場", "混雑", "予約"],
};

// イベントデータ（実際の運用では外部APIやCMSから取得）
const upcomingEvents = [
  {
    id: 1,
    name: "渋谷音楽祭",
    date: "2026年4月15日（土）〜16日（日）",
    venue: "渋谷公会堂・センター街周辺",
    crowd: "混雑",
    recommendation: "事前予約を強く推奨",
    status: "予約受付中"
  },
  {
    id: 2,
    name: "渋谷ファッションウィーク",
    date: "2026年5月10日（水）〜17日（水）",
    venue: "渋谷ヒカリエ・渋谷109",
    crowd: "やや混雑",
    recommendation: "平日は比較的空いています",
    status: "予約受付中"
  },
  {
    id: 3,
    name: "渋谷桜まつり",
    date: "2026年3月28日（土）〜4月5日（日）",
    venue: "代々木公園・渋谷区役所前",
    crowd: "混雑",
    recommendation: "早めの来場と事前予約を推奨",
    status: "予約受付中"
  }
];

const monthlyEvents = [
  {
    month: "3月",
    events: [
      { name: "渋谷桜まつり", dates: "3/28〜4/5", crowd: "混雑" },
      { name: "春のストリートマーケット", dates: "毎週末", crowd: "やや混雑" }
    ]
  },
  {
    month: "4月",
    events: [
      { name: "渋谷音楽祭", dates: "4/15〜4/16", crowd: "混雑" },
      { name: "アースデイ東京", dates: "4/22〜4/23", crowd: "混雑" }
    ]
  },
  {
    month: "5月",
    events: [
      { name: "渋谷ファッションウィーク", dates: "5/10〜5/17", crowd: "やや混雑" },
      { name: "渋谷グルメフェス", dates: "5/27〜5/29", crowd: "混雑" }
    ]
  }
];

export default function UdagawaEventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/parkings/udagawa" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            宇田川駐車場トップに戻る
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">渋谷エリア イベント情報</h1>
          <p className="text-xl text-blue-100">
            主要イベント開催時の混雑状況と駐車場のご利用案内
          </p>
        </div>
      </div>

      {/* 注意喚起 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">イベント開催時のご注意</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 大型イベント開催時は混雑が予想されます。事前予約をおすすめします。</li>
                <li>• 満車の場合は入庫をお断りする可能性がございます。</li>
                <li>• 通常よりも入出庫に時間がかかる場合があります。</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 主要イベント */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">注目の大型イベント</h2>
        
        <div className="grid gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      event.status === "予約受付中" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {event.status}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className={`p-4 rounded-lg ${
                      event.crowd === "混雑" 
                        ? "bg-red-50 border border-red-200" 
                        : "bg-yellow-50 border border-yellow-200"
                    }`}>
                      <div className="text-sm font-semibold mb-1">混雑予想</div>
                      <div className={`text-lg font-bold ${
                        event.crowd === "混雑" ? "text-red-700" : "text-yellow-700"
                      }`}>
                        {event.crowd}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="text-sm font-semibold mb-1">推奨</div>
                      <div className="text-sm text-gray-700">{event.recommendation}</div>
                    </div>
                  </div>
                </div>

                <div className="md:w-64 bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col justify-center border-l-2 border-blue-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">イベント特別料金</div>
                    <div className="text-3xl font-bold text-blue-900 mb-4">¥5,000<span className="text-sm font-normal">/日</span></div>
                    <a 
                      href="tel:03-5428-6822"
                      className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      事前予約する
                    </a>
                    <p className="text-xs text-gray-600 mt-3">
                      お電話でのご予約が確実です
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 月別イベントカレンダー */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">月別イベントカレンダー</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {monthlyEvents.map((month) => (
              <div key={month.month} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{month.month}</h3>
                <div className="space-y-4">
                  {month.events.map((event, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="font-semibold text-gray-900 mb-1">{event.name}</div>
                      <div className="text-sm text-gray-600 mb-2">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {event.dates}
                      </div>
                      <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        event.crowd === "混雑" 
                          ? "bg-red-100 text-red-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {event.crowd}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 混雑時のご利用ガイド */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">イベント時のご利用ガイド</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">おすすめの利用方法</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                <div>
                  <div className="font-semibold text-gray-900">事前予約</div>
                  <div className="text-sm text-gray-600">イベント1週間前までに電話予約がおすすめ</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                <div>
                  <div className="font-semibold text-gray-900">早めの来場</div>
                  <div className="text-sm text-gray-600">イベント開始2時間前の来場が理想的</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                <div>
                  <div className="font-semibold text-gray-900">キャッシュレス決済</div>
                  <div className="text-sm text-gray-600">混雑時もスムーズに精算できます</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                <div>
                  <div className="font-semibold text-gray-900">帰りの時間に余裕を</div>
                  <div className="text-sm text-gray-600">イベント終了後は出庫待ちが発生します</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">予約特典</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">確実な駐車スペース確保</div>
                  <div className="text-sm text-blue-100 mt-1">満車の心配なし</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">優先入庫レーン</div>
                  <div className="text-sm text-blue-100 mt-1">予約者専用レーンでスムーズ</div>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold">安心の固定料金</div>
                  <div className="text-sm text-blue-100 mt-1">予約時の料金で確定</div>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-blue-600">
              <a 
                href="tel:03-5428-6822"
                className="block w-full bg-white text-blue-900 px-6 py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
              >
                📞 今すぐ予約する<br />
                <span className="text-sm font-normal">03-5428-6822</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* お問い合わせ */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">イベント情報についてのお問い合わせ</h2>
          <p className="text-gray-600 mb-8">
            最新のイベント情報や混雑状況など、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:03-5428-6822"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              電話で問い合わせ
            </a>
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              メールで問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}