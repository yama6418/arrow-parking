import Link from "next/link";
import type { Parking } from "@/app/types/parking";

interface ParkingCardProps {
  parking: Parking;
}

export function ParkingCard({ parking }: ParkingCardProps) {
  return (
    <Link href={`/parkings/${parking.id}`} className="group block">
      <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
        {/* 画像 */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          {parking.images.length > 0 ? (
            <img
              src={parking.images[0]}
              alt={parking.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          {/* ステータスバッジ */}
          <div className="absolute left-3 top-3">
            {parking.available ? (
              <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                営業中
              </span>
            ) : (
              <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                休業中
              </span>
            )}
          </div>
        </div>

        {/* 詳細情報 */}
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-900">
              {parking.prefecture}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-900">
            {parking.name}
          </h3>
          <p className="mb-3 line-clamp-2 text-sm text-gray-600">{parking.description}</p>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{parking.station}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              <span>収容台数: {parking.capacity}台</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-xs text-gray-500">時間料金</div>
                <div className="font-semibold text-gray-900">{parking.pricePerHour}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">最大料金</div>
                <div className="font-semibold text-blue-900">{parking.pricePerDay.substring(0, 10)}...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}