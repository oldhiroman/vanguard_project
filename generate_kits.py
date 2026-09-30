import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Add IDs to the 6 cards in workbench so they can update their text dynamically
card_replacements = [
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SHORT CLIP VIDEO</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">คลิปอธิบายวิธี Pitch ใน 60 วินาที</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SHORT CLIP VIDEO</h4>\n                <p id="cardVideoSub" class="text-[11px] text-slate-500 mt-0.5">คลิปอธิบายวิธี Pitch ใน 60 วินาที</p>'
    ),
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SITE REFERENCE</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">เคสลูกค้าจริงแยกตามกลุ่มธุรกิจ</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SITE REFERENCE</h4>\n                <p id="cardSiteRefSub" class="text-[11px] text-slate-500 mt-0.5">เคสลูกค้าจริงแยกตามกลุ่มธุรกิจ</p>'
    ),
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">PRESENTATION DECK</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">สไลด์พรีเซนต์ลูกค้า 5 หน้าจบ</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">PRESENTATION DECK</h4>\n                <p id="cardDeckSub" class="text-[11px] text-slate-500 mt-0.5">สไลด์พรีเซนต์ลูกค้า 5 หน้าจบ</p>'
    ),
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">DATASHEET สรุป 1 หน้า</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">สรุปสเปก & จุดเด่นภาษาคนเข้าใจง่าย</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">DATASHEET สรุป 1 หน้า</h4>\n                <p id="cardDatasheetSub" class="text-[11px] text-slate-500 mt-0.5">สรุปสเปก & จุดเด่นภาษาคนเข้าใจง่าย</p>'
    ),
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SCOPE OF WORK (SOW)</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">ขอบเขตงานติดตั้งมาตรฐาน & SLA</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">SCOPE OF WORK (SOW)</h4>\n                <p id="cardSowSub" class="text-[11px] text-slate-500 mt-0.5">ขอบเขตงานติดตั้งมาตรฐาน & SLA</p>'
    ),
    (
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">PRICE GUIDE & ROI</h4>\n                <p class="text-[11px] text-slate-500 mt-0.5">ช่วงงบประมาณและเวลาคืนทุน</p>',
        '<h4 class="text-xs font-bold text-slate-900 group-hover:text-ais-darkgreen">PRICE GUIDE & ROI</h4>\n                <p id="cardPriceSub" class="text-[11px] text-slate-500 mt-0.5">ช่วงงบประมาณและเวลาคืนทุน</p>'
    )
]

for old, new in card_replacements:
    html = html.replace(old, new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated workbench card elements with dynamic IDs!")
