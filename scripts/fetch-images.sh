#!/usr/bin/env bash
# Tải ảnh dự án về public/images với tên gọn gàng.
# Chạy: bash scripts/fetch-images.sh
set -euo pipefail

BASE="https://bcons-centralpark.net.vn/wp-content/uploads/2026/06"
BASE5="https://bcons-centralpark.net.vn/wp-content/uploads/2026/05"
OUT="public/images"
mkdir -p "$OUT"

get() { # get <tên-file-đích> <url>
  echo "→ $1"
  curl -sL --max-time 60 -A "Mozilla/5.0" -e "https://bcons-centralpark.net.vn/" "$2" -o "$OUT/$1"
}

# Hero & phối cảnh
get hero.jpg              "$BASE/phoi-canh-bcons-tam-hiep-1-scaled-1.jpg"
get tong-quan.jpg         "$BASE/phoi-canh-bcons-tam-hiep-3.jpg"
get phoi-canh-2.jpg       "$BASE5/phoi-canh-bcons-tam-hiep-2.jpg"
get toan-canh.jpg         "$BASE/khu-nha-o-cao-tang-bcons-tam-hiep-1-scaled-1.jpg"

# Vị trí
get vi-tri.jpg            "$BASE/lien-ket-vung-bcons-tam-hiep-1.jpg"
get vi-tri-metro.jpg      "$BASE/can-ho-bcons-tam-hiep-dong-nai-gan-me-tro-1-scaled-1.jpg"
get ha-tang.jpg           "$BASE/bcons-tam-hiep-huong-loi-tu-so-so-ha-tang-3.jpg"

# Tiện ích
get tien-ich-1.jpg        "$BASE/bcons-tam-hiep-1-4-scaled-1.jpg"
get tien-ich-2.jpg        "$BASE/bcons-tam-hiep-2-1.jpg"
get tien-ich-3.jpg        "$BASE/bcons-tam-hiep-4.jpg"
get tien-ich-4.jpg        "$BASE/bcons-tam-hiep-5-scaled-1.jpg"

# Mặt bằng
get mat-bang-tong.jpg     "$BASE/du-an-bcons-tam-hiep-thanh-pho-bien-hoa-tinh-dong-nai-6.jpg"
get mat-bang-can.jpg      "$BASE/can-B-11-copy-3.jpg"
get mat-bang-2.jpg        "$BASE/du-an-bcons-tam-hiep-thanh-pho-bien-hoa-tinh-dong-nai-1-6.jpg"

# Nhà mẫu
get nha-mau-1.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-2.jpg"
get nha-mau-2.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-3.jpg"
get nha-mau-3.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-4.jpg"
get nha-mau-4.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-5.jpg"
get nha-mau-5.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-6.jpg"
get nha-mau-6.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-8.jpg"
get nha-mau-7.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-9.jpg"
get nha-mau-8.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-10.jpg"
get nha-mau-9.jpg         "$BASE/can-ho-mau-bcons-tam-hiep-bien-hoa-11.jpg"

# Tiến độ
get tien-do.jpg           "$BASE/tien-do-xay-dung-bcons-tam-hiep.jpg"
get le-dong-tho-1.jpg     "$BASE/le-dong-tho-khu-nha-o-cao-tang-bcons-tam-hiep-1-scaled-1.jpg"
get le-dong-tho-2.jpg     "$BASE/le-dong-tho-khu-nha-o-cao-tang-bcons-tam-hiep-2-scaled-1.jpg"

# Pháp lý & logo
get logo-bcons.png        "$BASE/cropped-logo-bcons-1024x553-1.png"

echo "Xong. Kiểm tra: ls -lh $OUT"
