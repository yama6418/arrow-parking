"use client";

import { useState } from "react";
import Link from "next/link";
import { ParkingCard } from "../components/parking/ParkingCard";
import parkingsData from "@/data/parkings.json";
import type { Parking } from "../types/parking";

const parkings = parkingsData as Parking[];

// メタデータはクライアントコンポーネントでは設定できないため、
// 別途 metadata.ts または layout.tsx で設定する必要があります

export default function ParkingsPage() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<string>("全て");

  const prefectures = ["全て", ...Array.from(new Set(parkings.map((p) => p.prefecture)))];
  const filteredParkings = selectedPrefecture === "全て"
    ? parkings
    : parkings.filter((p) => p.prefecture === selectedPrefecture);

  const availableCount = filteredParkings.filter((p) => p.available).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 px-4 py-12 text-center text-white sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold">駐車場を探す</h1>
        <p className="text-blue-100">全{parkings.length}箇所の駐車場からお選びいただけます</p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* フィルター */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">エリアで絞り込む</h2>
            <div className="text-sm text-gray-600">
              {filteredParkings.length}件中 {availableCount}件が営業中
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {prefectures.map((prefecture) => (
              <button
                key={prefecture}
                onClick={() => setSelectedPrefecture(prefecture)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  selectedPrefecture === prefecture
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {prefecture}
                {prefecture !== "全て" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({parkings.filter((p) => p.prefecture === prefecture).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 駐車場一覧 */}
        {filteredParkings.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredParkings.map((parking) => (
              <ParkingCard key={parking.id} parking={parking} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-white p-12 text-center">
            <div className="mb-4 text-6xl">🔍</div>
            <p className="text-gray-600">該当する駐車場が見つかりませんでした</p>
          </div>
        )}
      </div>
    </div>
  );
}