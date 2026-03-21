import json

# JSONファイルを読み込み
with open('data/parkings.json', 'r', encoding='utf-8') as f:
    parkings = json.load(f)

# 変更を実施
for parking in parkings:
    # 1. 大阪・兵庫の駐車場のコールセンター番号変更
    if parking['id'] in [21, 22, 23]:
        parking['receiptPhoneNumber'] = '0120-890-989'
        parking['receiptOfficeName'] = '日本駐車場メンテナンス株式会社'
    
    # 2. 防犯カメラを削除
    if 'features' in parking and isinstance(parking['features'], list):
        parking['features'] = [f for f in parking['features'] if f != '防犯カメラ']
    
    # 3. 月極駐車可を削除
    if 'features' in parking and isinstance(parking['features'], list):
        parking['features'] = [f for f in parking['features'] if f != '月極駐車可']

# 結果を出力（確認用）
print("✅ 変更内容:")
print("\n大阪・兵庫の駐車場（コールセンター番号変更）:")
for p in parkings:
    if p['id'] in [21, 22, 23]:
        print(f"  ID {p['id']}: {p['name']}")
        print(f"    電話: {p['receiptPhoneNumber']}")
        print(f"    事業所: {p['receiptOfficeName']}")

print("\n防犯カメラと月極駐車可を削除しました")

# 修正したJSONをファイルに保存
with open('data/parkings.json', 'w', encoding='utf-8') as f:
    json.dump(parkings, f, ensure_ascii=False, indent=2)

print("\n✅ data/parkings.json を更新しました！")
