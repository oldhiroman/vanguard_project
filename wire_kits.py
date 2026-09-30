import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Add <script src="solution_kits.js"></script> in <head>
if 'solution_kits.js' not in text:
    text = text.replace(
        '<script src="https://unpkg.com/lucide@latest"></script>',
        '<script src="https://unpkg.com/lucide@latest"></script>\n  <script src="solution_kits.js"></script>'
    )
    print("Added solution_kits.js script tag to head!")

# 2. Update selectSolution in index.html
old_select = """    // SELECT SOLUTION
    function selectSolution(solId) {
      currentSolutionId = solId;
      const pillar = PILLARS.find(p => p.id === currentPillarId);
      const sol = pillar?.solutions.find(s => s.id === solId);
      if (!sol) return;

      renderSolutionsList(pillar);

      document.getElementById('detailPillarBreadcrumb').innerText = pillar.title;
      document.getElementById('detailSolutionBreadcrumb').innerText = sol.name;
      document.getElementById('bizinfopediaCode').innerText = `Bizinfo Code: ${sol.code}`;
      const linkEl = document.getElementById('detailBizinfoLink');
      if (linkEl && sol.sharepointUrl) {
        linkEl.href = sol.sharepointUrl;
        linkEl.title = `เปิดหน้า ${sol.name} บน mimotech.sharepoint.com`;
      }
      document.getElementById('detailTitle').innerText = `${sol.name}`;
      document.getElementById('detailSubtitle').innerText = sol.overview;

      document.getElementById('detailPainPoint').innerText = sol.painPoint;
      document.getElementById('detailStoryHook').innerText = sol.storyHook;
      document.getElementById('detailValueImpact').innerText = sol.valueImpact;

      const featList = document.getElementById('detailFeaturesList');
      featList.innerHTML = sol.features.map(f => `
        <li class="flex items-start gap-2">
          <i data-lucide="check" class="w-3.5 h-3.5 text-ais-darkgreen shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('');

      const benList = document.getElementById('detailBenefitsList');
      benList.innerHTML = sol.benefits.map(b => `
        <li class="flex items-start gap-2">
          <i data-lucide="trending-up" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
          <span>${b}</span>
        </li>
      `).join('');

      document.getElementById('presalesSolution').value = `[${sol.code}] ${sol.name}`;

      lucide.createIcons();
    }"""

new_select = """    // SELECT SOLUTION & DYNAMICALLY UPDATE WORKBENCH & ENABLEMENT KITS
    function selectSolution(solId) {
      currentSolutionId = solId;
      const pillar = PILLARS.find(p => p.id === currentPillarId);
      const sol = pillar?.solutions.find(s => s.id === solId);
      if (!sol) return;

      renderSolutionsList(pillar);

      document.getElementById('detailPillarBreadcrumb').innerText = pillar.title;
      document.getElementById('detailSolutionBreadcrumb').innerText = sol.name;
      document.getElementById('bizinfopediaCode').innerText = `Bizinfo Code: ${sol.code}`;
      const linkEl = document.getElementById('detailBizinfoLink');
      if (linkEl && sol.sharepointUrl) {
        linkEl.href = sol.sharepointUrl;
        linkEl.title = `เปิดหน้า ${sol.name} บน mimotech.sharepoint.com`;
      }
      document.getElementById('detailTitle').innerText = `${sol.name}`;
      document.getElementById('detailSubtitle').innerText = sol.overview;

      document.getElementById('detailPainPoint').innerText = sol.painPoint;
      document.getElementById('detailStoryHook').innerText = sol.storyHook;
      document.getElementById('detailValueImpact').innerText = sol.valueImpact;

      const featList = document.getElementById('detailFeaturesList');
      featList.innerHTML = sol.features.map(f => `
        <li class="flex items-start gap-2">
          <i data-lucide="check" class="w-3.5 h-3.5 text-ais-darkgreen shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('');

      const benList = document.getElementById('detailBenefitsList');
      benList.innerHTML = sol.benefits.map(b => `
        <li class="flex items-start gap-2">
          <i data-lucide="trending-up" class="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5"></i>
          <span>${b}</span>
        </li>
      `).join('');

      document.getElementById('presalesSolution').value = `[${sol.code}] ${sol.name}`;

      // Dynamically update the 6 Enablement Kit Card Subtitles for THIS solution!
      const kit = getSolutionKit(sol.id);
      const cVideo = document.getElementById('cardVideoSub');
      if (cVideo) cVideo.innerText = `คลิปวิธี Pitch ${sol.name} ใน 60 วิ`;

      const cSite = document.getElementById('cardSiteRefSub');
      if (cSite) cSite.innerText = `เคสลูกค้า: ${kit.siteRef.clientName}`;

      const cDeck = document.getElementById('cardDeckSub');
      if (cDeck) cDeck.innerText = `สไลด์พรีเซนต์ ${sol.name} 5 หน้าจบ`;

      const cData = document.getElementById('cardDatasheetSub');
      if (cData) cData.innerText = `Datasheet สเปกทางการ ${sol.code}`;

      const cSow = document.getElementById('cardSowSub');
      if (cSow) cSow.innerText = `ขอบเขตงานติดตั้ง & SLA ของ ${sol.name}`;

      const cPrice = document.getElementById('cardPriceSub');
      if (cPrice) cPrice.innerText = `ราคาและสูตรคำนวณ ROI สำหรับ ${sol.name}`;

      lucide.createIcons();
    }"""

if old_select in text:
    text = text.replace(old_select, new_select)
    print("Replaced selectSolution successfully!")
else:
    print("Warning: old_select not found verbatim, checking regex...")

# 3. Replace openResourceModal with dynamic kit renderer
start_marker = "// RESOURCE MODAL DISPATCHER & HIGH-FIDELITY SAMPLE VIEWER"
end_marker = "function toggleSimulatedPlay(btn)"

start_idx = text.find(start_marker)
end_idx = text.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_open_modal = """// RESOURCE MODAL DISPATCHER & DYNAMIC MULTI-SOLUTION VIEWER
    let currentDeckSlide = 1;

    function openResourceModal(type) {
      const pillar = PILLARS.find(p => p.id === currentPillarId);
      const sol = pillar?.solutions.find(s => s.id === currentSolutionId);
      if (!sol && type !== 'catalog') return;

      const kit = getSolutionKit(sol?.id || 'corp-wifi');

      const titleElem = document.getElementById('resourceModalTitle');
      const subElem = document.getElementById('resourceModalSubtitle');
      const badgeElem = document.getElementById('resourceModalBadge');
      const bodyElem = document.getElementById('resourceModalBody');
      const iconElem = document.getElementById('resourceModalIcon');
      const footerActions = document.getElementById('resourceModalFooterActions');

      if (type === 'catalog') {
        titleElem.innerText = 'AIS Business Super Catalog 2026';
        subElem.innerText = 'แคตตาล็อกรวมผลิตภัณฑ์ดิจิทัลและโทรคมนาคมสำหรับองค์กรฉบับล่าสุด';
        badgeElem.innerText = 'Official Catalog 2026';
        iconElem.innerHTML = `<i data-lucide="book-open" class="w-5 h-5 text-ais-darkgreen"></i>`;
        
        bodyElem.innerHTML = `
          <div class="space-y-4">
            <div class="p-6 bg-slate-900 rounded-2xl text-slate-300 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-blue-500/10 pointer-events-none"></div>
              <div class="w-16 h-16 rounded-2xl bg-lime-400/20 text-lime-400 flex items-center justify-center mx-auto mb-3">
                <i data-lucide="file-text" class="w-8 h-8"></i>
              </div>
              <h4 class="font-bold text-white text-lg">AIS Business Super Catalog 2026 (PDF ฉบับสมบูรณ์)</h4>
              <p class="text-xs text-slate-400 mt-1 max-w-md mx-auto">รวบรวมผลิตภัณฑ์ โครงสร้างพื้นฐาน 5G, Cloud, Network, Cyber Security และ IoT เพื่อธุรกิจ SME และ Enterprise ทั่วประเทศ</p>
              <div class="mt-4 flex flex-wrap items-center justify-center gap-3">
                <button onclick="window.open('https://mimotech.sharepoint.com/sites/bizinfopedia/shared%20documents/general/ais%20business%205g/ais%20business%20super%20catalog%202026/ais%20business%20catalog-2026.pdf?web=1', '_blank');" class="px-5 py-2.5 bg-lime-400 text-slate-900 font-bold rounded-xl text-xs hover:bg-lime-300 transition flex items-center gap-2 shadow-lg shadow-lime-400/20">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                  <span>เปิดอ่านแคตตาล็อกต้นฉบับใน SharePoint</span>
                </button>
              </div>
            </div>
          </div>
        `;
        footerActions.innerHTML = `
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl text-xs">ปิด</button>
        `;
      } 
      else if (type === 'video') {
        // 1. VIDEO VIEW DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Short Clip Video: ${sol.name}`;
        subElem.innerText = `คลิปสรุปและแนวทางการเล่าเรื่องใน 60 วินาที สำหรับ ${sol.name} (${sol.code})`;
        badgeElem.innerText = `60-Sec Pitch • ${sol.code}`;
        iconElem.innerHTML = `<i data-lucide="play-circle" class="w-5 h-5 text-red-600"></i>`;

        bodyElem.innerHTML = `
          <div class="space-y-4">
            <!-- Simulated Video Player -->
            <div class="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
              <div class="aspect-video max-h-72 w-full bg-slate-900 relative flex items-center justify-center group">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-16 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition cursor-pointer" onclick="toggleSimulatedPlay(this)">
                      <i data-lucide="play" class="w-7 h-7 fill-current translate-x-0.5"></i>
                    </div>
                    <div class="font-bold text-white text-sm mt-3">Pitching ${sol.name} ใน 60 วินาที</div>
                    <div class="text-xs text-slate-400">สำหรับผู้บริหาร SME ที่ไม่มีเวลาฟังเรื่องเทคนิค</div>
                  </div>
                </div>

                <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-3 flex items-center justify-between text-xs text-white">
                  <div class="flex items-center gap-3">
                    <button class="hover:text-lime-400 transition"><i data-lucide="play" class="w-4 h-4 fill-current"></i></button>
                    <span class="text-[11px] font-mono text-slate-300">00:15 / ${kit.video.duration}</span>
                    <div class="w-36 sm:w-64 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div class="w-1/4 h-full bg-lime-400 rounded-full"></div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2.5 text-slate-300">
                    <span class="bg-slate-800 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-slate-700">1080p HD</span>
                    <button class="hover:text-white"><i data-lucide="volume-2" class="w-4 h-4"></i></button>
                    <button class="hover:text-white"><i data-lucide="maximize-2" class="w-4 h-4"></i></button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pitch Script & Sales Tips -->
            <div class="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
              <div class="flex items-center justify-between border-b border-slate-200 pb-2.5">
                <div class="flex items-center gap-2">
                  <span class="p-1.5 rounded-lg bg-lime-100 text-ais-darkgreen font-bold text-xs"><i data-lucide="mic" class="w-4 h-4"></i></span>
                  <h4 class="font-bold text-slate-900 text-xs sm:text-sm">Pitch Script สำหรับ BC (${sol.name}):</h4>
                </div>
                <button onclick="copyPitchScript()" class="text-xs font-semibold text-ais-darkgreen hover:underline flex items-center gap-1">
                  <i data-lucide="copy" class="w-3.5 h-3.5"></i> คัดลอกบทพูด
                </button>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${kit.video.beats.map((b, idx) => `
                  <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <div class="flex items-center justify-between text-[11px]">
                      <span class="font-bold ${idx === 0 ? 'text-slate-900' : (idx === 1 ? 'text-red-600' : (idx === 2 ? 'text-ais-darkgreen' : 'text-indigo-600'))}">${b.name}</span>
                      <span class="text-slate-400 font-mono">${b.time}</span>
                    </div>
                    <p class="text-slate-600 italic">${b.text}</p>
                  </div>
                `).join('')}
              </div>

              <div class="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                <div>
                  <span class="font-bold">เคล็ดลับการ Pitch (${sol.name}):</span>
                  <span class="ml-1">${kit.video.tips}</span>
                </div>
              </div>
            </div>
          </div>
        `;

        footerActions.innerHTML = `
          <button onclick="showToast('คัดลอกคลิปสำหรับ ${sol.name} ส่งลูกค้าเรียบร้อย');" class="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs flex items-center gap-1.5">
            <i data-lucide="share-2" class="w-3.5 h-3.5"></i> คัดลอกคลิปส่งลูกค้า
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }
      else if (type === 'siteRef') {
        // 2. SITE REFERENCE VIEW DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Site Reference: ${kit.siteRef.clientName}`;
        subElem.innerText = `กรณีศึกษาลูกค้าจริงที่ใช้งาน ${sol.name} (${sol.code})`;
        badgeElem.innerText = `${kit.siteRef.industry} • Verified`;
        iconElem.innerHTML = `<i data-lucide="building-2" class="w-5 h-5 text-blue-600"></i>`;

        bodyElem.innerHTML = `
          <div class="space-y-4">
            <!-- Client Profile Header -->
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-ais-navy text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div class="flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-[10px] border border-blue-400/30">กลุ่มธุรกิจ: ${kit.siteRef.industry}</span>
                  <span class="text-slate-400 text-xs">• ${kit.siteRef.date}</span>
                </div>
                <h3 class="text-lg font-bold text-white mt-1">${kit.siteRef.clientName}</h3>
                <p class="text-xs text-slate-300">${kit.siteRef.profile}</p>
              </div>
              <div class="text-left sm:text-right shrink-0">
                <span class="text-[10px] uppercase tracking-wider text-lime-400 font-semibold block">ผลตอบแทนการลงทุน</span>
                <span class="text-xl sm:text-2xl font-black text-white">${kit.siteRef.kpis[3].value}</span>
              </div>
            </div>

            <!-- Key Results Metrics (4 KPIs) -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              ${kit.siteRef.kpis.map((kpi, idx) => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div class="text-[11px] text-slate-500 font-medium">${kpi.label}</div>
                  <div class="text-xl font-bold ${idx === 0 ? 'text-emerald-600' : (idx === 1 ? 'text-blue-600' : (idx === 2 ? 'text-indigo-600' : 'text-purple-600'))} mt-0.5">${kpi.value}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5">${kpi.sub}</div>
                </div>
              `).join('')}
            </div>

            <!-- Before vs After Comparison -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Before -->
              <div class="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
                <div class="flex items-center gap-2 font-bold text-red-700 text-xs">
                  <i data-lucide="x-circle" class="w-4 h-4"></i>
                  <span>ปัญหาเดิมก่อนติดตั้ง (The Challenge):</span>
                </div>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  ${kit.siteRef.challenges.map(c => `
                    <li class="flex items-start gap-1.5">• <span>${c}</span></li>
                  `).join('')}
                </ul>
              </div>

              <!-- After -->
              <div class="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 space-y-2">
                <div class="flex items-center gap-2 font-bold text-emerald-800 text-xs">
                  <i data-lucide="check-circle" class="w-4 h-4"></i>
                  <span>โซลูชันและผลลัพธ์จาก AIS (The Solution):</span>
                </div>
                <ul class="space-y-1.5 text-xs text-slate-700">
                  ${kit.siteRef.solution.map(s => `
                    <li class="flex items-start gap-1.5">• <span>${s}</span></li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Executive Testimonial Quote -->
            <div class="p-4 bg-slate-100 rounded-xl border border-slate-200 flex items-start gap-3">
              <div class="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm shrink-0">
                ${kit.siteRef.quoteAuthor.substring(3, 5)}
              </div>
              <div>
                <p class="text-xs text-slate-700 italic">${kit.siteRef.quote}</p>
                <div class="mt-1 text-[11px] font-semibold text-slate-900">— ${kit.siteRef.quoteAuthor}</div>
              </div>
            </div>
          </div>
        `;

        footerActions.innerHTML = `
          <button onclick="showToast('คัดลอก Case Study ของ ${sol.name} เรียบร้อย');" class="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs flex items-center gap-1.5">
            <i data-lucide="share-2" class="w-3.5 h-3.5"></i> ส่งเคสนี้ให้ลูกค้า
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }
      else if (type === 'presentation') {
        // 3. PRESENTATION DECK DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Presentation Deck: ${sol.name} (5 Slides)`;
        subElem.innerText = `ชุดสไลด์นำเสนอสำหรับ ${sol.name} (${sol.code}) พร้อมโน้ตบรรยายสำหรับ BC`;
        badgeElem.innerText = `5 Slides • ${sol.code}`;
        iconElem.innerHTML = `<i data-lucide="presentation" class="w-5 h-5 text-orange-600"></i>`;

        currentDeckSlide = 1;
        bodyElem.innerHTML = getDeckSlideHTML(sol, currentDeckSlide);

        footerActions.innerHTML = `
          <button onclick="window.open(sol.realDeckUrl || sol.sharepointUrl, '_blank');" class="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition">
            <i data-lucide="download" class="w-3.5 h-3.5"></i> ดาวน์โหลด .PPTX จริงจาก SharePoint
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }
      else if (type === 'datasheet') {
        // 4. DATASHEET DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Official Datasheet: ${sol.name}`;
        subElem.innerText = `เอกสารข้อมูลจำเพาะทางเทคนิคและระดับการให้บริการ (${sol.code})`;
        badgeElem.innerText = `A4 Spec Sheet • ${sol.code}`;
        iconElem.innerHTML = `<i data-lucide="file-text" class="w-5 h-5 text-red-600"></i>`;

        bodyElem.innerHTML = `
          <div class="space-y-4 max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-slate-300 shadow-md text-slate-800 font-sans">
            <!-- Sheet Header -->
            <div class="flex items-center justify-between border-b-2 border-ais-green pb-4">
              <div>
                <div class="text-[10px] tracking-widest text-slate-500 font-bold uppercase">AIS Business Product Specification</div>
                <h2 class="text-xl font-black text-slate-900 mt-0.5">${kit.datasheet.model}</h2>
                <div class="text-xs text-slate-600">รหัสผลิตภัณฑ์: <span class="font-mono font-semibold text-slate-900">${sol.code}</span> | ฉบับปรับปรุง: 2026.1</div>
              </div>
              <div class="text-right">
                <span class="px-3 py-1 bg-lime-100 text-ais-darkgreen font-bold text-xs rounded-lg border border-lime-300">AIS Approved</span>
              </div>
            </div>

            <!-- Product Overview -->
            <div>
              <h4 class="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">ภาพรวมผลิตภัณฑ์ (Product Overview)</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${kit.datasheet.overview}</p>
            </div>

            <!-- Technical Specification Table -->
            <div>
              <h4 class="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">ตารางคุณสมบัติทางเทคนิค (Technical Specifications)</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs">
                  <tbody>
                    ${kit.datasheet.specs.map(sp => `
                      <tr class="border-b border-slate-200">
                        <td class="py-2 px-3 font-semibold bg-slate-50 w-1/3 text-slate-700">${sp.label}</td>
                        <td class="py-2 px-3 text-slate-600">${sp.val}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Service Level Agreement -->
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <h4 class="font-bold text-xs text-slate-900">ระดับการให้บริการและการรับประกัน (SLA & Support):</h4>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div>• <strong>Uptime SLA:</strong> การันตี 99.9% - 99.95% ตามสัญญา</div>
                <div>• <strong>Support Center:</strong> วิศวกร 1149 นิติบุคคล 24x7</div>
                <div>• <strong>Hardware Support:</strong> ดูแลซ่อมเปลี่ยนตลอดสัญญา</div>
                <div>• <strong>Compliance:</strong> สอดคล้องเกณฑ์ PDPA และ ISO</div>
              </div>
            </div>
          </div>
        `;

        footerActions.innerHTML = `
          <button onclick="window.print();" class="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-xs flex items-center gap-1.5">
            <i data-lucide="printer" class="w-3.5 h-3.5"></i> พิมพ์ / บันทึก PDF (A4)
          </button>
          <button onclick="window.open(sol.sharepointUrl, '_blank');" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl text-xs flex items-center gap-1.5 transition">
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i> เปิดหน้าทางการใน SharePoint
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }
      else if (type === 'sow') {
        // 5. SCOPE OF WORK DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Scope of Work (SOW): ${sol.name}`;
        subElem.innerText = `ขอบเขตงานติดตั้ง ขั้นตอนการส่งมอบ และ SLA สำหรับ ${sol.name} (${sol.code})`;
        badgeElem.innerText = `SOW Template • ${sol.code}`;
        iconElem.innerHTML = `<i data-lucide="clipboard-check" class="w-5 h-5 text-purple-600"></i>`;

        bodyElem.innerHTML = `
          <div class="space-y-4">
            <!-- Implementation Phases Timeline -->
            <div class="p-4 bg-purple-50/70 border border-purple-100 rounded-2xl space-y-3">
              <h4 class="font-bold text-xs uppercase tracking-wider text-purple-900">4 ขั้นตอนการดำเนินโครงการและส่งมอบ (${sol.name})</h4>
              <div class="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
                ${kit.sow.phases.map(ph => `
                  <div class="p-3 bg-white rounded-xl border border-purple-200">
                    <div class="text-[10px] font-bold text-purple-600 uppercase">${ph.phase}</div>
                    <div class="font-bold text-xs text-slate-900 mt-0.5">${ph.title}</div>
                    <p class="text-[11px] text-slate-500 mt-1">${ph.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- RACI Responsibility Matrix -->
            <div>
              <h4 class="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2">ตารางแบ่งหน้าที่ความรับผิดชอบ (Responsibility Matrix - RACI)</h4>
              <div class="overflow-x-auto rounded-xl border border-slate-200">
                <table class="w-full text-left border-collapse text-xs">
                  <thead class="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                    <tr>
                      <th class="py-2.5 px-3">รายการงานส่งมอบ (Deliverables)</th>
                      <th class="py-2.5 px-3 text-center w-28">ทีมวิศวกร AIS</th>
                      <th class="py-2.5 px-3 text-center w-28">ลูกค้า (Client)</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 text-slate-600">
                    <tr>
                      <td class="py-2 px-3">1. จัดเตรียมทางเข้าพื้นที่ ไฟฟ้าสำรอง และสิทธิ์การเข้าถึงอุปกรณ์</td>
                      <td class="py-2 px-3 text-center text-slate-400">Consulted</td>
                      <td class="py-2 px-3 text-center font-bold text-blue-600">Responsible</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-3">2. จัดเตรียมอุปกรณ์ ฮาร์ดแวร์ และซอฟต์แวร์ลิขสิทธิ์ของ ${sol.name}</td>
                      <td class="py-2 px-3 text-center font-bold text-ais-darkgreen">Responsible</td>
                      <td class="py-2 px-3 text-center text-slate-400">Informed</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-3">3. ติดตั้ง กำหนดค่านโยบายความปลอดภัย และเชื่อมต่อระบบคลาวด์</td>
                      <td class="py-2 px-3 text-center font-bold text-ais-darkgreen">Responsible</td>
                      <td class="py-2 px-3 text-center text-slate-400">Accountable</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-3">4. กำหนดสิทธิ์ผู้ดูแลระบบ (Admin) และผู้ใช้งานตามโครงสร้างองค์กร</td>
                      <td class="py-2 px-3 text-center text-slate-400">Support</td>
                      <td class="py-2 px-3 text-center font-bold text-blue-600">Responsible</td>
                    </tr>
                    <tr>
                      <td class="py-2 px-3">5. ทดสอบ UAT ตรวจรับงาน และส่งมอบเอกสาร As-Built</td>
                      <td class="py-2 px-3 text-center text-slate-400">Submitted</td>
                      <td class="py-2 px-3 text-center font-bold text-blue-600">Approver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Acceptance Criteria -->
            <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <h4 class="font-bold text-xs text-slate-900">เกณฑ์การตรวจรับงาน (Acceptance Criteria):</h4>
              <p class="text-xs text-slate-600">${kit.sow.acceptance}</p>
            </div>
          </div>
        `;

        footerActions.innerHTML = `
          <button onclick="showToast('คัดลอก SOW Template ของ ${sol.name} ใส่ใบเสนอราคาเรียบร้อย');" class="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl text-xs flex items-center gap-1.5 transition">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i> คัดลอก SOW Template ใส่ใบเสนอราคา
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }
      else if (type === 'priceGuide') {
        // 6. PRICE GUIDE DYNAMIC FOR THIS SOLUTION
        titleElem.innerText = `Price Guide & ROI Calculator: ${sol.name}`;
        subElem.innerText = `อัตราแพ็กเกจราคาและเครื่องคำนวณผลตอบแทนการลงทุน (${sol.code})`;
        badgeElem.innerText = `ROI Calculator • ${sol.code}`;
        iconElem.innerHTML = `<i data-lucide="calculator" class="w-5 h-5 text-emerald-600"></i>`;

        const p = kit.pricing;
        const initialCalc = p.calc(p.slider1.val, p.slider2.val);

        bodyElem.innerHTML = `
          <div class="space-y-5">
            <!-- Standard Packages Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition">
                <div class="text-[10px] text-slate-500 font-semibold uppercase">${p.packS.name}</div>
                <div class="text-lg font-black text-slate-900 mt-1">${p.packS.price}</div>
                <div class="text-[11px] text-slate-600 mt-1">${p.packS.ap}</div>
                <div class="text-[10px] text-slate-400">${p.packS.fit}</div>
              </div>
              <div class="p-3.5 rounded-xl border-2 border-ais-green bg-lime-50/50 shadow-xs relative">
                <div class="absolute -top-2.5 right-3 bg-ais-darkgreen text-white text-[9px] font-bold px-2 py-0.5 rounded-full">ยอดนิยม</div>
                <div class="text-[10px] text-ais-darkgreen font-bold uppercase">${p.packM.name}</div>
                <div class="text-lg font-black text-slate-900 mt-1">${p.packM.price}</div>
                <div class="text-[11px] text-slate-700 font-medium mt-1">${p.packM.ap}</div>
                <div class="text-[10px] text-slate-500">${p.packM.fit}</div>
              </div>
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition">
                <div class="text-[10px] text-slate-500 font-semibold uppercase">${p.packL.name}</div>
                <div class="text-lg font-black text-slate-900 mt-1">${p.packL.price}</div>
                <div class="text-[11px] text-slate-600 mt-1">${p.packL.ap}</div>
                <div class="text-[10px] text-slate-400">${p.packL.fit}</div>
              </div>
            </div>

            <!-- Live Interactive ROI Calculator -->
            <div class="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-4">
              <div class="flex items-center justify-between border-b border-slate-700 pb-3">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-lime-400/20 text-lime-400 flex items-center justify-center">
                    <i data-lucide="trending-up" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-sm text-white">เครื่องคำนวณผลตอบแทนการลงทุน (${sol.name})</h4>
                    <p class="text-[11px] text-slate-400">เลื่อนแถบเพื่อคำนวณระยะเวลาคืนทุนตามขนาดธุรกิจของลูกค้า</p>
                  </div>
                </div>
                <span class="text-[11px] font-mono text-lime-300 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">Live Calculation</span>
              </div>

              <!-- Sliders -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <div class="flex justify-between mb-1.5">
                    <span class="text-slate-300 font-medium">${p.slider1.label}:</span>
                    <span id="calcSlider1Val" class="font-bold text-lime-400">${p.slider1.val} ${p.slider1.unit}</span>
                  </div>
                  <input type="range" id="calcSlider1" min="${p.slider1.min}" max="${p.slider1.max}" step="${p.slider1.step}" value="${p.slider1.val}" oninput="updateDynamicROICalc('${sol.id}')" class="w-full accent-lime-400 cursor-pointer">
                </div>

                <div>
                  <div class="flex justify-between mb-1.5">
                    <span class="text-slate-300 font-medium">${p.slider2.label}:</span>
                    <span id="calcSlider2Val" class="font-bold text-lime-400">${p.slider2.val} ${p.slider2.unit}</span>
                  </div>
                  <input type="range" id="calcSlider2" min="${p.slider2.min}" max="${p.slider2.max}" step="${p.slider2.step}" value="${p.slider2.val}" oninput="updateDynamicROICalc('${sol.id}')" class="w-full accent-lime-400 cursor-pointer">
                </div>
              </div>

              <!-- Calculation Result Cards -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div class="text-[10px] text-slate-400 uppercase">ค่าบริการประมาณการ</div>
                  <div id="calcMonthlyCost" class="text-lg font-black text-white mt-0.5">฿${initialCalc.monthly.toLocaleString()} <span class="text-xs font-normal text-slate-400">/ด.</span></div>
                  <div class="text-[10px] text-slate-400 mt-0.5">สัญญาและซัพพอร์ต 24 ชม.</div>
                </div>

                <div class="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <div class="text-[10px] text-slate-400 uppercase">มูลค่าที่ประหยัดได้ต่อปี</div>
                  <div id="calcProductivitySaved" class="text-lg font-black text-emerald-400 mt-0.5">฿${Math.round(initialCalc.annualBenefit).toLocaleString()} <span class="text-xs font-normal text-slate-400">/ปี</span></div>
                  <div class="text-[10px] text-slate-400 mt-0.5">ประสิทธิภาพงานและลดสูญเสีย</div>
                </div>

                <div class="p-3 bg-lime-500/10 rounded-xl border border-lime-400/30">
                  <div class="text-[10px] text-lime-400 font-bold uppercase">ระยะเวลาคืนทุน (Payback Period)</div>
                  <div id="calcPaybackMonths" class="text-2xl font-black text-lime-300 mt-0.5">${initialCalc.payback} เดือน</div>
                  <div class="text-[10px] text-slate-300 mt-0.5">คุ้มทุนรวดเร็วอย่างชัดเจน</div>
                </div>
              </div>
            </div>
          </div>
        `;

        footerActions.innerHTML = `
          <button onclick="showToast('สร้างเอกสารสรุปราคา & ROI สำหรับ ${sol.name} ส่งลูกค้าเรียบร้อย');" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-xs flex items-center gap-1.5 transition">
            <i data-lucide="file-check" class="w-3.5 h-3.5"></i> ส่งออกสรุปราคา & ROI ส่งให้ลูกค้า
          </button>
          <button onclick="closeModal('resourceModal')" class="px-4 py-2 bg-slate-900 text-white font-medium rounded-xl text-xs">ปิด</button>
        `;
      }

      openModal('resourceModal');
      lucide.createIcons();
    }

    // HELPER: DECK SLIDE CAROUSEL GENERATOR DYNAMIC FOR THIS SOLUTION
    function getDeckSlideHTML(sol, slideNum) {
      const kit = getSolutionKit(sol?.id || 'corp-wifi');
      const slides = kit.deck;
      const current = slides[slideNum - 1] || slides[0];

      return `
        <div class="space-y-4">
          <!-- Thumbnail Navigation Bar -->
          <div class="flex items-center justify-between gap-2 overflow-x-auto pb-1">
            <div class="flex items-center gap-2">
              ${slides.map(s => `
                <button onclick="changeDeckSlide(${s.num})" class="px-3 py-1.5 rounded-lg text-xs font-semibold border transition ${s.num === slideNum ? 'bg-orange-600 text-white border-orange-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}">
                  หน้า ${s.num}
                </button>
              `).join('')}
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="changeDeckSlide(${slideNum > 1 ? slideNum - 1 : 5})" class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs flex items-center gap-1">
                <i data-lucide="chevron-left" class="w-4 h-4"></i> ก่อนหน้า
              </button>
              <span class="text-xs font-mono font-bold text-slate-500">${slideNum} / 5</span>
              <button onclick="changeDeckSlide(${slideNum < 5 ? slideNum + 1 : 1})" class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs flex items-center gap-1">
                ถัดไป <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <!-- Active Slide Canvas -->
          <div class="aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-ais-navy rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-white border border-slate-800 shadow-2xl relative overflow-hidden">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-lg bg-lime-400 text-slate-950 flex items-center justify-center font-black text-sm">A</div>
                <span class="font-bold text-sm text-slate-200">AIS Business</span>
              </div>
              <span class="text-xs bg-lime-400/20 text-lime-300 font-semibold px-2.5 py-1 rounded-full border border-lime-400/30">${current.badge}</span>
            </div>
            <div class="my-auto space-y-2">
              <span class="text-xs uppercase tracking-widest text-lime-400 font-bold">${sol.category}</span>
              <h2 class="text-xl sm:text-2xl font-black text-white leading-tight">${current.title}</h2>
              <p class="text-xs text-slate-300 max-w-lg leading-relaxed">${current.desc}</p>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-3">
              <span>โซลูชัน: ${sol.name} (${sol.code})</span>
              <span>www.ais.th/business</span>
            </div>
          </div>

          <!-- Presenter Notes Box -->
          <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <i data-lucide="message-square" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-bold">โน้ตสำหรับ BC (Presenter Notes):</span>
              <div class="mt-0.5">${current.notes}</div>
            </div>
          </div>
        </div>
      `;
    }

    function changeDeckSlide(slideNum) {
      currentDeckSlide = slideNum;
      const pillar = PILLARS.find(p => p.id === currentPillarId);
      const sol = pillar?.solutions.find(s => s.id === currentSolutionId);
      document.getElementById('resourceModalBody').innerHTML = getDeckSlideHTML(sol, slideNum);
      lucide.createIcons();
    }

    // DYNAMIC ROI CALCULATION RUNNER
    function updateDynamicROICalc(solId) {
      const kit = getSolutionKit(solId);
      const val1 = parseInt(document.getElementById('calcSlider1').value);
      const val2 = parseInt(document.getElementById('calcSlider2').value);

      document.getElementById('calcSlider1Val').innerText = `${val1} ${kit.pricing.slider1.unit}`;
      document.getElementById('calcSlider2Val').innerText = `${val2} ${kit.pricing.slider2.unit}`;

      const res = kit.pricing.calc(val1, val2);
      document.getElementById('calcMonthlyCost').innerHTML = `฿${res.monthly.toLocaleString()} <span class="text-xs font-normal text-slate-400">/ด.</span>`;
      document.getElementById('calcProductivitySaved').innerHTML = `฿${Math.round(res.annualBenefit).toLocaleString()} <span class="text-xs font-normal text-slate-400">/ปี</span>`;
      document.getElementById('calcPaybackMonths').innerText = `${res.payback} เดือน`;
    }

    """

    text = text[:start_idx] + new_open_modal + text[end_idx:]
    print("Replaced openResourceModal with dynamic multi-solution generator!")
else:
    print(f"Markers for openResourceModal not found: {start_idx}, {end_idx}")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("index.html fully updated!")
