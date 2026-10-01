// AIS VANGUARD SALES HUB — INTERNATIONALIZATION (i18n) ENGINE
// Supports seamless switching between Thai (th) and English (en)

const I18N = {
  th: {
    // Top App Bar
    hubTitle: 'SME SOLUTION SALES HUB',
    liveDataBadge: 'Bizinfopedia Live Data',
    hubTagline: 'Interactive Sales Tool for SME Success • by NEXUS Team',
    searchPlaceholder: 'ค้นหาโซลูชัน เช่น WiFi, Firewall, MPBX, OCI, EEC...',
    btnExecutivePitch: 'Executive Pitch',
    btnAskPitchBot: 'ถาม PitchBot 🤖',
    btnBookEEC: 'นัดชม AIS EEC',
    
    // Sub-header Ticker
    liveNewsTag: 'Live News',
    newsCatalog: '🔥 <strong>AIS Business 2026 Catalog</strong> อัปเดตแพ็กเกจใหม่ล่าสุด',
    newsOci: '🚀 <strong>AIS Cloud powered by Oracle (OCI)</strong> เปิดให้บริการแล้ว',
    newsSafeConnect: '🛡️ <strong>AIS Safe Connect</strong> ปกป้องเครือข่ายระดับโครงข่าย',
    linkCatalog: 'แคตตาล็อกฉบับเต็ม 2026',
    linkBizUp: 'สิทธิ์ AIS BIZ UP',

    // 5 Pillars Section
    pillarsTitle: '5 เสาหลักโซลูชันธุรกิจ SME',
    pillarsSub: 'รวบรวมผลิตภัณฑ์ที่มีจำหน่ายจริง แยกตามกลุ่มความต้องการทางธุรกิจ',
    pillarsHint: 'คลิกเลือกเพื่อดู Solution & Story',
    solutionCountSuffix: 'โซลูชัน',

    // Industry Filter Bar
    industryFilterLabel: 'เลือกตามกลุ่มธุรกิจลูกค้า (Smart Vertical Solutions):',
    industryFilterSub: 'กรองบริบทสตอรี่ Use Case และเคสลูกค้าจริงให้ตรงกับอุตสาหกรรมของลูกค้า',
    verticalCaseStudyTitle: 'กรณีศึกษาเฉพาะกลุ่มธุรกิจ:',
    ind_all: '🌐 ทั้งหมด (All Industries)',
    ind_office: '🏢 สำนักงาน (Modern Office)',
    ind_factory: '🏭 โรงงานอัจฉริยะ (Smart Factory / 5G)',
    ind_hotel: '🏨 โรงแรมและการบริการ (Hotel WiFi & Hospitality)',
    ind_retail: '🛍️ ร้านค้าปลีก (Smart Retail & AI-Vision)',
    ind_logistics: '🚚 ขนส่ง & คลังสินค้า (Smart Logistics / TMS)',

    // Left Sidebar
    sidebarStoryHintTitle: 'แนวคิด Story Push:',
    sidebarStoryHintDesc: 'ลูกค้า SME ไม่ได้ต้องการซื้อเราเตอร์หรือไฟร์วอลล์ แต่ต้องการความมั่นใจว่า <em>“ธุรกิจจะไม่สะดุดและข้อมูลปลอดภัย”</em>',

    // Main Solution Header
    breadcrumbBizinfoPrefix: 'Bizinfo Code:',
    btnOpenBizinfo: 'เปิดหน้าจริงใน Bizinfopedia',
    btnRequestPresales: 'ขอทีม Presales',
    btnShareSalesKit: 'ส่ง Sales Kit ให้ลูกค้า',

    // Solution Details & Value Story
    painPointLabel: 'ปัญหาของลูกค้าที่ต้องเปิดประเด็น (The Pain Point)',
    storyHookLabel: 'เรื่องเล่า & จุดขายที่จับใจ (Storytelling Hook)',
    valueImpactLabel: 'ผลลัพธ์เชิงธุรกิจที่จับต้องได้',
    featuresLabel: 'คุณสมบัติเด่นของระบบ',
    benefitsLabel: 'ประโยชน์ที่ธุรกิจได้รับ',
    caseStudyLabelPrefix: 'กรณีศึกษาลูกค้าจริงสำหรับกลุ่ม',

    // Workbench Kit Cards
    workbenchTitle: 'คลังอาวุธการขายสำหรับโซลูชันนี้ (Sales Enablement Kit)',
    workbenchSub: 'สื่อและเอกสารมาตรฐานพร้อมใช้งานจริงจาก Bizinfopedia สำหรับ BC',
    cardVideoTitle: 'SHORT CLIP VIDEO (60 วิ)',
    cardSiteRefTitle: 'SITE REFERENCE',
    cardDeckTitle: 'PRESENTATION DECK',
    cardDatasheetTitle: 'DATASHEET สรุป 1 หน้า',
    cardSowTitle: 'SCOPE OF WORK (SOW)',
    cardPriceTitle: 'PRICE GUIDE & ROI',
    actionWatchVideo: 'ดูวิดีโอ & สคริปต์',
    actionReadCase: 'อ่านเคสตัวอย่าง',
    actionOpenDeck: 'เปิดสไลด์',
    actionViewDatasheet: 'ดู Datasheet',
    actionViewSow: 'ดูขอบเขตงาน',
    actionCalcRoi: 'คำนวณราคา & ROI',

    // EDS Price Calculator
    edsCalcTitle: 'ระบบคำนวณราคา Corporate Internet (EDS) อัตโนมัติ',
    edsCalcSub: 'คำนวณราคาตามพิกัดอาคาร สปีด และระยะเวลาสัญญาจริง (ดึงข้อมูลพิกัดจาก Bizinfopedia EDS Price Engine)',
    edsCoordLabel: 'พิกัดที่ตั้งอาคาร / พิกัด Google Maps (Latitude, Longitude)',
    edsCoordHint: 'ตัวอย่าง: 13.7854, 100.5432 (อาคารเอไอเอส ทาวเวอร์ 1 พหลโยธิน)',
    edsSpeedLabel: 'ความเร็วอินเทอร์เน็ต (Speed Bandwidth)',
    edsContractLabel: 'ระยะเวลาสัญญา (Contract Period)',
    edsContract12: 'สัญญา 12 เดือน (ราคามาตรฐาน)',
    edsContract24: 'สัญญา 24 เดือน (ส่วนลดพิเศษ 15% + ฟรีค่าเดินสาย)',
    edsContract36: 'สัญญา 36 เดือน (ส่วนลดพิเศษ 25% + ฟรีค่าเดินสาย + Fixed IP)',
    edsIpLabel: 'จำนวน Fixed Public IP ที่ต้องการ',
    edsIp1: '1 Fixed IP (ฟรีในแพ็กเกจ)',
    edsIp4: '4 Fixed IPs (บล็อก /29) (+฿1,200/ด.)',
    edsIp8: '8 Fixed IPs (บล็อก /28) (+฿2,500/ด.)',
    edsNetlifyBtn: 'เปิดระบบคำนวณราคาเต็มบน Netlify (Full Engine)',
    edsSummaryTitle: 'ราคาประเมินเบื้องต้น:',
    edsNetMonthly: 'ค่าบริการรายเดือนสุทธิ',
    edsMonthlyVatSuffix: 'บาท/เดือน (ไม่รวม VAT)',
    edsDiscountBadge: 'ส่วนลดตามระยะสัญญา',
    edsInstallFeeLabel: 'ค่าธรรมเนียมติดตั้ง & เดินสาย:',
    edsWaived: 'ฟรี (ยกเว้นตามเงื่อนไขสัญญา)',
    edsSlaLabel: 'ระดับการรับประกันบริการ:',
    edsSlaVal: 'SLA 99.9% (การันตีซ่อมเสร็จใน 4 ชั่วโมง)',
    edsSupportLabel: 'บริการดูแล 24x7:',
    edsSupportVal: 'คู่สายตรงนิติบุคคล 1149',
    edsBtnCopyQuote: 'คัดลอกข้อความสรุปใบเสนอราคา',
    edsBtnForwardPresales: 'ส่งข้อมูลเข้าฟอร์ม Presales ทันที',

    // Modals
    modalClose: 'ปิด',
    modalCloseWindow: 'ปิดหน้าต่าง',
    modalCancel: 'ยกเลิก',
    toastSuccess: 'ดำเนินการสำเร็จ',
    toastSwitchedLang: 'เปลี่ยนภาษาเป็นไทยเรียบร้อย (Switched to Thai)'
  },

  en: {
    // Top App Bar
    hubTitle: 'SME SOLUTION SALES HUB',
    liveDataBadge: 'Bizinfopedia Live Data',
    hubTagline: 'Interactive Sales Tool for SME Success • by NEXUS Team',
    searchPlaceholder: 'Search solutions e.g. WiFi, Firewall, MPBX, OCI, EEC...',
    btnExecutivePitch: 'Executive Pitch',
    btnAskPitchBot: 'Ask PitchBot 🤖',
    btnBookEEC: 'Book AIS EEC Visit',

    // Sub-header Ticker
    liveNewsTag: 'Live News',
    newsCatalog: '🔥 <strong>AIS Business 2026 Catalog</strong> Latest enterprise packages updated',
    newsOci: '🚀 <strong>AIS Cloud powered by Oracle (OCI)</strong> Now live in Thailand',
    newsSafeConnect: '🛡️ <strong>AIS Safe Connect</strong> Network-level cyber threat protection',
    linkCatalog: 'Full 2026 Catalog',
    linkBizUp: 'AIS BIZ UP Perks',

    // 5 Pillars Section
    pillarsTitle: '5 Strategic SME Business Solution Pillars',
    pillarsSub: 'Commercial enterprise products categorized by business requirements',
    pillarsHint: 'Click to explore solutions & stories',
    solutionCountSuffix: 'Solutions',

    // Industry Filter Bar
    industryFilterLabel: 'Filter by Client Industry (Smart Verticals):',
    industryFilterSub: 'Filter story hooks, use cases, and client proofs matching client industry',
    verticalCaseStudyTitle: 'Vertical Use Case:',
    ind_all: '🌐 All Industries',
    ind_office: '🏢 Modern Office',
    ind_factory: '🏭 Smart Factory / 5G',
    ind_hotel: '🏨 Hotels & Hospitality',
    ind_retail: '🛍️ Smart Retail',
    ind_logistics: '🚚 Logistics & Warehouse',

    // Left Sidebar
    sidebarStoryHintTitle: 'Story Push Concept:',
    sidebarStoryHintDesc: 'SME clients don\'t buy routers or firewalls; they buy peace of mind that <em>“business won\'t stop and data is secure”</em>.',

    // Main Solution Header
    breadcrumbBizinfoPrefix: 'Bizinfo Code:',
    btnOpenBizinfo: 'Open in Bizinfopedia',
    btnRequestPresales: 'Request Presales',
    btnShareSalesKit: 'Share Sales Kit',

    // Solution Details & Value Story
    painPointLabel: 'Customer Pain Point to Address (The Pain Point)',
    storyHookLabel: 'Compelling Value Narrative (Storytelling Hook)',
    valueImpactLabel: 'Tangible Business Impact',
    featuresLabel: 'Key Solution Features',
    benefitsLabel: 'Business Benefits',
    caseStudyLabelPrefix: 'Real Client Case Study for',

    // Workbench Kit Cards
    workbenchTitle: 'Sales Enablement Workbench for this Solution',
    workbenchSub: 'Standardized marketing collaterals and sales tools sourced from Bizinfopedia',
    cardVideoTitle: 'SHORT CLIP VIDEO (60s)',
    cardSiteRefTitle: 'SITE REFERENCE',
    cardDeckTitle: 'PRESENTATION DECK',
    cardDatasheetTitle: '1-PAGE DATASHEET',
    cardSowTitle: 'SCOPE OF WORK (SOW)',
    cardPriceTitle: 'PRICE GUIDE & ROI',
    actionWatchVideo: 'Watch Video & Script',
    actionReadCase: 'Read Case Studies',
    actionOpenDeck: 'Open Slides',
    actionViewDatasheet: 'View Datasheet',
    actionViewSow: 'View Scope',
    actionCalcRoi: 'Calculate Price & ROI',

    // EDS Price Calculator
    edsCalcTitle: 'Corporate Internet (EDS) Interactive Pricing Engine',
    edsCalcSub: 'Real-time price estimation based on building coordinates, bandwidth, and contract terms (Bizinfopedia EDS Engine)',
    edsCoordLabel: 'Building Coordinates / Google Maps (Latitude, Longitude)',
    edsCoordHint: 'Example: 13.7854, 100.5432 (AIS Tower 1 Phaholyothin, Bangkok)',
    edsSpeedLabel: 'Internet Bandwidth (Speed)',
    edsContractLabel: 'Contract Period',
    edsContract12: '12-Month Contract (Standard Price)',
    edsContract24: '24-Month Contract (15% Discount + Free Fiber Drop)',
    edsContract36: '36-Month Contract (25% Discount + Free Drop + Free Fixed IP)',
    edsIpLabel: 'Required Fixed Public IPs',
    edsIp1: '1 Fixed IP (Included in package)',
    edsIp4: '4 Fixed IPs (/29 Block) (+฿1,200/mo)',
    edsIp8: '8 Fixed IPs (/28 Block) (+฿2,500/mo)',
    edsNetlifyBtn: 'Open Full Pricing Engine on Netlify (Live Tool)',
    edsSummaryTitle: 'Quotation Estimation:',
    edsNetMonthly: 'Net Monthly Service Fee',
    edsMonthlyVatSuffix: 'THB / month (excl. VAT)',
    edsDiscountBadge: 'Contract Term Discount',
    edsInstallFeeLabel: 'Installation & Fiber Drop Fee:',
    edsWaived: 'Waived (Free of charge under contract)',
    edsSlaLabel: 'Service Level Agreement:',
    edsSlaVal: 'SLA 99.9% (Guaranteed MTTR within 4 Hours)',
    edsSupportLabel: '24x7 Enterprise Support:',
    edsSupportVal: 'Enterprise Call Center 1149 Hotline',
    edsBtnCopyQuote: 'Copy Quotation Summary',
    edsBtnForwardPresales: 'Forward to Presales Form',

    // Modals
    modalClose: 'Close',
    modalCloseWindow: 'Close Window',
    modalCancel: 'Cancel',
    toastSuccess: 'Success',
    toastSwitchedLang: 'Language switched to English (เปลี่ยนภาษาเป็นภาษาอังกฤษแล้ว)'
  }
};

// ENGLISH TRANSLATIONS FOR PILLARS & 12 STRATEGIC SOLUTIONS
const PILLARS_EN = [
  {
    id: 'network',
    title: 'NETWORK & CONNECTIVITY',
    sub: 'Internet, Wi-Fi & SD-WAN Infrastructure',
    badge: 'Core Infrastructure',
    solutions: {
      'corp-wifi': {
        name: 'Corporate WiFi',
        category: 'Network Solution',
        tag: 'Popular for SME',
        overview: 'Enterprise-grade Wi-Fi system. High performance, centralized cloud dashboard management, high-density user support.',
        painPoint: 'Employees complain about Wi-Fi drops during video conferences, visitors overload primary bandwidth, lack of traffic visibility.',
        storyHook: '“Business Wi-Fi that isolates guest traffic from staff networks, cloud-managed effortlessly without onsite IT engineers.”',
        valueImpact: 'Boost workplace productivity by 35%, reduce IT support tickets by 60%, elevate brand image with custom Captive Portal login.',
        features: [
          'High Performance: Supports Wi-Fi 6 / 6E and 200+ concurrent active devices',
          'Centralized Cloud Management: Control every Access Point from a single web dashboard',
          'Guest Captive Portal: Fully customizable branding page for visitors & customers',
          'Traffic & Bandwidth Analytics: Real-time application traffic monitoring & QoS limits'
        ],
        benefits: [
          'Seamless Teams & Zoom video meetings without lag or packet drops',
          'Enterprise security by segregating guest Wi-Fi and corporate internal VLANs',
          'Zero capital expense for expensive hardware controllers or specialized onsite IT'
        ],
        caseStudies: {
          office: 'Mae Fah Luang University (MFU): Deployed campus-wide Wi-Fi 6 infrastructure supporting tens of thousands of concurrent students & faculty.',
          factory: 'Food manufacturing plant in Chonburi: Industrial-grade APs deployed across production lines for real-time ERP barcode scanning.',
          hotel: '60-room Boutique Hotel: Guest satisfaction increased by 40% after implementing automated Voucher Portal.',
          retail: '15-store Fashion Retail Chain: Linked POS terminals and offered member Wi-Fi for loyalty rewards.',
          logistics: 'Lat Krabang Warehouse: 8,000 sq.m. coverage ensuring continuous handheld barcode scanner connectivity.'
        },
        storyVideos: [
          {
            id: 'mfu-wifi',
            title: 'Mae Fah Luang University (MFU)',
            modalTitle: 'Real Customer Case: Mae Fah Luang University (MFU Digital University)',
            badge: 'Digital University & Wi-Fi 6',
            icon: 'wifi',
            tag: 'Higher Ed & Enterprise Campus Wi-Fi 6',
            sub: 'Upgrading Wi-Fi 6 infrastructure to build a world-class Digital University (3:25 mins)',
            desc: 'Discover how Mae Fah Luang University trusted AIS Business to deploy enterprise-grade Wi-Fi 6 across campus grounds, supporting tens of thousands of concurrent smart devices via centralized Cloud Controller management.',
            pitchTip: `
              <div class="space-y-1.5">
                <p class="leading-relaxed">“Corporate WiFi from AIS is not just about mounting access points; it is about building a true digital foundation that handles high-density concurrency reliably without slowdowns.”</p>
                <p class="leading-relaxed">“Managed through a Centralized Cloud Dashboard, it provides granular security policies and seamless guest/staff traffic segregation without needing dedicated onsite IT engineers.”</p>
                <p class="leading-relaxed">“Whether it is a university campus, hospital, hotel, or corporate headquarters, AIS designs, deploys, and monitors enterprise networks 24/7 with carrier-grade SLAs.”</p>
              </div>
            `,
            src: 'WIFIDigitalUniversity.mp4',
            duration: '3:25 mins',
            industry: 'office'
          }
        ],
        storyVideoTitle: 'Real Customer Case: Mae Fah Luang University (MFU Digital University)',
        storyVideoBadge: 'Digital University & Wi-Fi 6',
        storyVideoSub: 'Click to open pop-up video story showcasing campus-wide Wi-Fi 6 deployment (Duration 3:25 mins)',
        storyVideoDesc: 'See how Mae Fah Luang University upgraded to enterprise Wi-Fi 6 powered by AIS Business, supporting thousands of simultaneous devices with cloud management.'
      },
      'biz-fibre': {
        name: 'Corporate Internet (EDS)',
        category: 'Corporate Internet',
        tag: 'Dedicated 1:1 + Fixed IP',
        overview: 'Enterprise Direct Service (EDS) with dedicated 1:1 symmetrical bandwidth, permanent Fixed Public IP, and 4-hour SLA repair guarantee.',
        painPoint: 'Businesses with multiple branches relying on consumer broadband suffer frequent disconnections between branches and HQ, lack of Fixed IP for VPN/POS sync, and 1-2 day repair waits when branch internet fails, halting branch operations and causing revenue loss.',
        storyHook: '“Dedicated enterprise fiber highway (1:1 bandwidth) guaranteed with 4-hour MTTR repair SLA, Fixed IP for servers & VPN.”',
        valueImpact: 'Near-zero downtime, 24x7 priority care from AIS Business network engineers.',
        features: [
          'Dedicated Bandwidth: Guaranteed 1:1 symmetrical throughput, unshared with residential users',
          'Fixed Public IP: 1 to 8 usable static IPv4 addresses for hosting & VPN endpoints',
          'SLA 99.9%: Guaranteed Mean Time to Repair (MTTR) within 4 hours every day',
          '24x7 Enterprise Care: Direct corporate priority hotline 1149 with rapid engineer dispatch'
        ],
        benefits: [
          'Rock-solid site-to-site VPN and uninterrupted remote ERP server access',
          'Business continuity protected with financial SLA penalty credits',
          'Legally compliant corporate billing with tax withholding (WHT) support'
        ],
        caseStudies: {
          office: 'Accounting Firm: Delivered financial reports & accessed Express accounting servers with zero latency during fiscal year-end.',
          factory: 'Automotive factory: Real-time CAD/CAM production commands sent to CNC machines without interruption.',
          hotel: 'Hotel & Resort: Online booking engine and credit card payment gateway operating 24/7.',
          retail: '20-store Retail Chain: Connected all store POS checkout systems directly to HQ headquarters.',
          logistics: 'Logistics Center: Real-time fleet tracking and warehouse parcel dispatch synchronization.'
        },
        storyVideos: [
          {
            id: 'srisawad',
            title: 'Srisawad Power 1979 PCL',
            modalTitle: 'Real Customer Case: Srisawad Power 1979 PCL',
            badge: 'Nationwide Multi-Branch',
            icon: 'building-2',
            tag: 'Multi-Branch / Finance & Retail',
            sub: 'Open pitch to build confidence for multi-branch retail & finance businesses (1:50 mins)',
            desc: 'Discover how Srisawad connected thousands of branches across Thailand with zero downtime, powered by AIS Business Enterprise connectivity and 24x7 SLA support.',
            pitchTip: `
              <div class="space-y-1.5">
                <p class="leading-relaxed">“What AIS aims to deliver is not just an EDS circuit, but the confidence that AIS Network will empower and support every business solution of your enterprise.”</p>
                <p class="leading-relaxed">“We hope you look beyond the upfront price and consider the real business impact when network connectivity becomes a mission-critical lifeline, backed by reliable performance and 24/7 post-sales service.”</p>
                <p class="leading-relaxed">“For an enterprise of your stature, network connectivity is no longer just a back-office tool, but a strategic cornerstone of your business. Let AIS safeguard your operational readiness so your business can move forward with complete peace of mind.”</p>
              </div>
            `,
            src: 'BusinessSrisawad-Power-1979.mp4',
            duration: '1:50 mins',
            industry: 'retail'
          },
          {
            id: 'ktis',
            title: 'KTIS Group (Kaset Thai Sugar)',
            modalTitle: 'Real Customer Case: KTIS Group (Kaset Thai International Sugar)',
            badge: 'Smart Factory & Remote Agro-Industrial',
            icon: 'factory',
            tag: 'Factory & Industrial Sites',
            sub: 'Open pitch to build confidence for manufacturing plants and provincial sites (2:01 mins)',
            desc: 'See how KTIS Group, Thailand’s leading sugar & bio-energy producer, trusts AIS Corporate Internet (EDS) to connect headquarters, factories, and remote plantations nationwide.',
            pitchTip: `
              <div class="space-y-1.5">
                <p class="leading-relaxed">“What AIS aims to deliver is not just an EDS circuit, but the confidence that AIS Network will empower and support every business solution of your enterprise.”</p>
                <p class="leading-relaxed">“We hope you look beyond the upfront price and consider the real business impact when network connectivity becomes a mission-critical lifeline, backed by reliable performance and 24/7 post-sales service.”</p>
                <p class="leading-relaxed">“For an enterprise of your stature, network connectivity is no longer just a back-office tool, but a strategic cornerstone of your business. Let AIS safeguard your operational readiness so your business can move forward with complete peace of mind.”</p>
              </div>
            `,
            src: 'Business-KTIS_001_720p.mp4',
            duration: '2:01 mins',
            industry: 'factory'
          }
        ],
        storyVideoTitle: 'Real Customer Case Study: Srisawad Power 1979 PCL (Multi-Branch Connectivity Nationwide)',
        storyVideoBadge: 'Nationwide Multi-Branch',
        storyVideoSub: 'Click to open pop-up video story to build strong confidence for multi-branch prospects (Duration 1:50 mins)',
        storyVideoDesc: 'Storytelling video for client pitches: Discover how Srisawad connected thousands of branches across Thailand with zero downtime, powered by AIS Business Enterprise connectivity and 24x7 SLA support.'
      },
      'sd-wan': {
        name: 'AIS SD-WAN for Business',
        category: 'Network Solution',
        tag: 'Multi-Branch Connection',
        overview: 'Intelligent software-defined branch networking aggregating multiple uplinks (Fiber + 5G/4G). Automatic seamless failover.',
        painPoint: 'Provincial branches suffer frequent line cuts, halting retail sales, while legacy MPLS leased lines are exorbitantly expensive.',
        storyHook: '“Connect every branch seamlessly with intelligent SD-WAN. Cut leased-line costs by 40% with zero downtime.”',
        valueImpact: 'Save 40% in network expenditure, ensure 100% store uptime with automated 5G backup failover.',
        features: [
          'Multi-Link Aggregation: Combines Fiber broadband and 5G cellular into one resilient pipe',
          'Zero-Touch Provisioning: Deploy a new branch router in under 10 minutes remotely',
          'Application-Aware Routing: Prioritizes business-critical SAP/POS traffic over YouTube/media'
        ],
        benefits: [
          'Consolidated monthly billing under a single AIS enterprise contract',
          'Substantial cost savings over traditional MPLS private circuits',
          'Full network topology visibility across all nationwide branch locations'
        ],
        caseStudies: {
          retail: '45-store Retail Chain saved 1.2M THB annually replacing MPLS circuits.',
          office: 'Connected Bangkok HQ with Rayong and Chonburi factories securely.',
          hotel: 'Koh Samui Island Resort: Instant 5G wireless backup when submarine cables suffered maintenance.'
        }
      }
    }
  },
  {
    id: 'security',
    title: 'CYBER SECURITY',
    sub: 'Firewall, Threat Protection & PDPA',
    badge: 'Enterprise Protection',
    solutions: {
      'cloud-firewall': {
        name: 'AIS Safe Connect & Cloud Firewall',
        category: 'Security Solution',
        tag: 'Essential Security',
        overview: 'Network-level cybersecurity defense filtering viruses, ransomware, phishing, and malicious domains before reaching your office.',
        painPoint: '60% of SMEs suffer ransomware attacks without dedicated IT staff, risking total data wipeouts and hefty PDPA fines.',
        storyHook: '“Enterprise-grade security without expensive hardware boxes. Safe Connect blocks cyber threats directly at the network level.”',
        valueImpact: 'Zero ransomware incidents, 100% PDPA compliance, save over 80,000 THB in hardware firewall capital costs.',
        features: [
          'DNS Threat Protection: Blocks malicious links, malware command-and-control, and phishing sites',
          'Content & Web Filtering: Restrict access to hazardous domains, gambling, or illicit content',
          'Cloud-Managed Policy: Update security rules across all company devices instantly'
        ],
        benefits: [
          'All connected computers and mobile devices are shielded automatically',
          'No complex hardware appliances to maintain, cool, or upgrade',
          'Real-time threat intelligence updated 24 hours a day by global security centers'
        ],
        caseStudies: {
          office: 'Legal Firm: Blocked over 450 phishing emails per month, protecting confidential client files.',
          factory: 'Electronics Manufacturer: Prevented Ransomware infection on industrial production control computers.',
          retail: 'E-commerce Retailer: Prevented customer data leaks, maintaining 100% PDPA compliance.'
        }
      },
      'endpoint-sec': {
        name: 'AIS Endpoint Protection (EDR)',
        category: 'Security Solution',
        tag: 'Anti-Ransomware',
        overview: 'Next-Generation Antivirus (NGAV) with AI-powered Endpoint Detection and Response (EDR) detecting zero-day threats.',
        painPoint: 'Employees working from home or carrying laptops into coffee shops get infected by malware, spreading into corporate servers.',
        storyHook: '“Protect every laptop and PC anywhere employees work with AI behavioral detection and automated one-click rollback.”',
        valueImpact: 'Protect 100% of remote endpoints, rollback compromised files in minutes, reduce cyber insurance premiums.',
        features: [
          'AI Behavioral Analysis: Identifies suspicious process behavior without waiting for signature updates',
          'One-Click Rollback: Restore encrypted files to their clean state prior to ransomware execution',
          'Centralized Admin Console: Monitor security health of 5 to 5,000 laptops from one dashboard'
        ],
        benefits: [
          'Safe hybrid and remote work anywhere in the world',
          'Immediate notification when an employee downloads risky software',
          'Lightweight agent consuming less than 1% CPU resources'
        ],
        caseStudies: {
          office: 'Creative Agency: Successfully rolled back 300 encrypted graphic design files after an employee opened a malicious invoice attachment.',
          hotel: 'Hotel Chain: Safeguarded front-desk reception computers from guest USB drive viruses.'
        }
      }
    }
  },
  {
    id: 'cloud',
    title: 'CLOUD & DATA CENTER',
    sub: 'Oracle OCI, Backup & Microsoft 365',
    badge: 'Cloud Transformation',
    solutions: {
      'oci-cloud': {
        name: 'AIS Cloud powered by Oracle (OCI)',
        category: 'Cloud Infrastructure',
        tag: 'Local Data Center in TH',
        overview: 'Hyperscale enterprise cloud infrastructure hosted locally within Thailand. Predictable billing in Thai Baht (THB), zero data egress fees.',
        painPoint: 'Overseas cloud providers bill in US Dollars with volatile exchange rates and surprise egress transfer costs, causing budget blowouts.',
        storyHook: '“World-class enterprise cloud right here in Thailand. Pay in Thai Baht with zero data egress charges and local compliance.”',
        valueImpact: 'Save 30-50% compared to legacy cloud providers, lower network latency down to 2-5ms, 100% PDPA compliant.',
        features: [
          'Thailand Data Center: Sovereign cloud infrastructure operating within Thai borders',
          'Fixed Thai Baht Billing: Eliminate foreign exchange currency risk and unpredictable surcharges',
          'Zero Egress Fee: Generous free outbound data transfer saving thousands monthly',
          'Enterprise Oracle & ERP Optimization: Optimal compute architecture for database & business apps'
        ],
        benefits: [
          'Ultra-low network latency for domestic accounting and manufacturing systems',
          'Fully compliant with Bank of Thailand (BOT) and PDPA data residency laws',
          'Local AIS Cloud engineering team providing 24/7 Thai-language support'
        ],
        caseStudies: {
          office: 'Accounting SaaS Provider: Migrated 500 database instances to AIS OCI, cutting monthly cloud bills by 42%.',
          retail: 'Omnichannel Fashion Chain: Achieved sub-second POS inventory query response times nationwide.'
        }
      },
      'cloud-backup': {
        name: 'AIS Cloud Backup as a Service',
        category: 'Cloud Storage',
        tag: 'Automated Disaster Recovery',
        overview: 'Automated cloud backup ensuring your critical databases, servers, and files are duplicated safely in AIS Tier-4 Data Centers.',
        painPoint: 'External hard drives fail, staff forget manual backups, and office fire/theft results in permanent catastrophic data loss.',
        storyHook: '“Automated 3-2-1 backup strategy. Even if an office server burns down, restore everything from AIS Cloud in 15 minutes.”',
        valueImpact: 'Zero permanent data loss risk, RPO under 1 hour, eliminate costs of buying physical backup tape drives.',
        features: [
          'Automated Scheduled Backups: Runs silently overnight without employee intervention',
          'Military-Grade Encryption: AES-256 bit encryption in transit and at rest',
          'Instant VM Recovery: Spin up duplicate virtual servers in the cloud during hardware failures'
        ],
        benefits: [
          'Peace of mind knowing business financial records can never be erased',
          'Fast restoration times minimizing downtime during disaster scenarios',
          'Pay-as-you-grow storage model with zero upfront storage hardware CapEx'
        ],
        caseStudies: {
          logistics: 'Logistics Operator: Recovered full freight dispatch database within 20 minutes after office power surge fried on-premise NAS.'
        }
      }
    }
  },
  {
    id: 'communication',
    title: 'COMMUNICATION & VOICE',
    sub: 'Cloud PBX, Microsoft Teams & Call Center',
    badge: 'Unified Workplace',
    solutions: {
      'cloud-pbx': {
        name: 'AIS Cloud PBX (Mobile PBX)',
        category: 'Voice Solution',
        tag: 'Zero Hardware PBX',
        overview: 'Smart corporate telephony system turning employee mobile phones into office extensions (02-xxx-xxxx) without physical PBX boxes.',
        painPoint: 'Expensive hardware PBX switchboards, high telephone wiring costs, and missed customer calls when staff work out of office.',
        storyHook: '“Carry your office landline on your mobile phone anywhere. Answer corporate 02 calls, transfer calls, never miss a customer.”',
        valueImpact: 'Save 100% on PBX hardware maintenance, zero missed sales calls, record all calls for customer service quality control.',
        features: [
          'Single Number Reach: Answer company landline 02 calls on mobile phones via secure app',
          'Interactive Voice Response (IVR): Professional auto-attendant greeting ("Press 1 for Sales, 2 for Support")',
          'Free Inter-Company Calling: Zero call charges between internal company extensions'
        ],
        benefits: [
          'Work flexibly from anywhere without sitting at office desks',
          'Professional corporate image with branded voice greetings',
          'Consolidated monthly telecom invoice with itemized call reporting'
        ],
        caseStudies: {
          office: 'Real Estate Brokerage (35 brokers): Closed 25% more client deals answering inquiries on mobile phones on the go.',
          retail: 'Online Customer Service: Routed calls automatically to available remote customer agents 24/7.'
        }
      }
    }
  },
  {
    id: 'iot',
    title: 'IOT & SMART BUSINESS',
    sub: 'AI-CCTV, Fleet Tracking & Smart Factory',
    badge: 'Smart Transformation',
    solutions: {
      'ai-cctv': {
        name: 'AIS Smart AI-CCTV & Analytics',
        category: 'IoT & AI Solution',
        tag: 'Smart Security & Vision',
        overview: 'Cloud-managed AI video surveillance with facial recognition, customer foot-traffic counting, and automated perimeter intrusion alerts.',
        painPoint: 'Traditional CCTV only allows watching footage after theft occurs, and managers have no data on store customer foot traffic.',
        storyHook: '“Turn passive security cameras into an AI business intelligence tool that counts shoppers, spots VIPs, and alerts security in real-time.”',
        valueImpact: 'Reduce store inventory shrinkage by 75%, optimize retail staff scheduling based on customer traffic heatmaps.',
        features: [
          'Foot-Traffic Heatmaps: Analyze customer shopping pathways and high-interest store zones',
          'AI Intrusion Detection: Instant notification on LINE / Mobile App when trespassers cross boundaries',
          'Cloud Video Storage: Secure cloud archive immune to on-premise NVR hard drive theft or damage'
        ],
        benefits: [
          'Real-time loss prevention and automated remote store surveillance',
          'Marketing analytics on customer demographics and peak shopping hours',
          'Centralized viewing of 50+ stores from a single smartphone application'
        ],
        caseStudies: {
          retail: 'Convenience Store Chain: Decreased product theft by 80% with real-time cashier counter AI monitoring.',
          factory: 'Industrial Warehouse: Automated nighttime perimeter boundary defense without hiring additional night guards.'
        }
      }
    }
  }
];

// STATE MANAGEMENT
var urlLang = (typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('lang'));
var currentLanguage = (urlLang === 'en' || urlLang === 'th') ? urlLang : ((typeof localStorage !== 'undefined' && localStorage.getItem('vanguard_lang')) || 'th');

function setLanguage(lang) {
  currentLanguage = lang;
  if (typeof window !== 'undefined') window.currentLanguage = lang;
  if (typeof localStorage !== 'undefined') localStorage.setItem('vanguard_lang', lang);
  updateLanguageUI();
  
  // Re-render dynamic parts
  if (typeof renderPillars === 'function') renderPillars();
  if (typeof selectSolution === 'function' && typeof currentSolutionId !== 'undefined') {
    selectSolution(currentSolutionId);
  }
  
  if (typeof showToast === 'function') {
    showToast(I18N[lang].toastSwitchedLang);
  }
}

if (typeof window !== 'undefined') {
  window.currentLanguage = currentLanguage;
  window.I18N = I18N;
  window.PILLARS_EN = PILLARS_EN;
  window.setLanguage = setLanguage;
  window.updateLanguageUI = updateLanguageUI;
  window.getLocalizedSolution = getLocalizedSolution;
}

function updateLanguageUI() {
  const lang = currentLanguage;
  const t = I18N[lang];

  // Update switcher buttons active style (Flags only)
  const btnTH = document.getElementById('langBtnTH');
  const btnEN = document.getElementById('langBtnEN');
  if (btnTH && btnEN) {
    btnTH.innerHTML = '🇹🇭';
    btnEN.innerHTML = '🇬🇧';
    if (lang === 'th') {
      btnTH.className = 'px-2 py-1 text-sm rounded-md transition bg-slate-900 dark:bg-slate-700 text-white shadow-xs font-bold leading-none scale-105';
      btnEN.className = 'px-2 py-1 text-sm rounded-md transition text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white opacity-50 hover:opacity-100 leading-none';
    } else {
      btnTH.className = 'px-2 py-1 text-sm rounded-md transition text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white opacity-50 hover:opacity-100 leading-none';
      btnEN.className = 'px-2 py-1 text-sm rounded-md transition bg-slate-900 dark:bg-slate-700 text-white shadow-xs font-bold leading-none scale-105';
    }
  }

  // Header & Navigation
  const elTagline = document.getElementById('headerTagline');
  if (elTagline) elTagline.innerText = t.hubTagline;
  const elSearch = document.getElementById('searchInput');
  if (elSearch) elSearch.placeholder = t.searchPlaceholder;
  const elPitchBot = document.getElementById('btnPitchBotText');
  if (elPitchBot) elPitchBot.innerText = t.btnAskPitchBot;
  const elEEC = document.getElementById('btnEECText');
  if (elEEC) elEEC.innerText = t.btnBookEEC;
  const elExec = document.getElementById('btnExecDeckText');
  if (elExec) elExec.innerText = t.btnExecutivePitch;

  // Sub-header Ticker (Continuous Looping Marquee)
  const elNewsTag = document.getElementById('liveNewsTag');
  if (elNewsTag) elNewsTag.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span> ${t.liveNewsTag}`;
  const elNews1 = document.getElementById('newsCatalogText');
  if (elNews1) elNews1.innerHTML = t.newsCatalog;
  const elNews2 = document.getElementById('newsOciText');
  if (elNews2) elNews2.innerHTML = t.newsOci;
  const elNews3 = document.getElementById('newsSafeConnectText');
  if (elNews3) elNews3.innerHTML = t.newsSafeConnect;

  const elNews1Dup = document.getElementById('newsCatalogTextDup');
  if (elNews1Dup) elNews1Dup.innerHTML = t.newsCatalog;
  const elNews2Dup = document.getElementById('newsOciTextDup');
  if (elNews2Dup) elNews2Dup.innerHTML = t.newsOci;
  const elNews3Dup = document.getElementById('newsSafeConnectTextDup');
  if (elNews3Dup) elNews3Dup.innerHTML = t.newsSafeConnect;

  const elLinkCatalog = document.getElementById('linkCatalogText');
  if (elLinkCatalog) elLinkCatalog.innerText = t.linkCatalog;
  const elLinkBizUp = document.getElementById('linkBizUpText');
  if (elLinkBizUp) elLinkBizUp.innerText = t.linkBizUp;

  // Pillars Title
  const elPillarsTitle = document.getElementById('pillarsSectionTitle');
  if (elPillarsTitle) elPillarsTitle.innerText = t.pillarsTitle;
  const elPillarsSub = document.getElementById('pillarsSectionSub');
  if (elPillarsSub) elPillarsSub.innerText = t.pillarsSub;
  const elPillarsHint = document.getElementById('pillarsSectionHint');
  if (elPillarsHint) elPillarsHint.innerText = t.pillarsHint;

  // Industry Filters (Dropdown & Labels)
  const elIndLabel = document.getElementById('industryFilterLabel');
  if (elIndLabel) elIndLabel.innerText = t.industryFilterLabel;
  const elIndSub = document.getElementById('industryFilterSub');
  if (elIndSub) elIndSub.innerText = t.industryFilterSub;
  const indMap = {
    all: t.ind_all,
    office: t.ind_office,
    factory: t.ind_factory,
    hotel: t.ind_hotel,
    retail: t.ind_retail,
    logistics: t.ind_logistics
  };
  const indSelect = document.getElementById('industrySelect');
  if (indSelect) {
    Array.from(indSelect.options).forEach(opt => {
      const ind = opt.getAttribute('data-ind') || opt.value;
      if (ind && indMap[ind]) opt.innerText = indMap[ind];
    });
  }
  document.querySelectorAll('.industry-btn').forEach(btn => {
    const ind = btn.getAttribute('data-ind');
    if (ind && indMap[ind]) btn.innerText = indMap[ind];
  });

  // Sidebar Story Hint
  const elHintTitle = document.getElementById('sidebarStoryHintTitle');
  if (elHintTitle) elHintTitle.innerText = t.sidebarStoryHintTitle;
  const elHintDesc = document.getElementById('sidebarStoryHintDesc');
  if (elHintDesc) elHintDesc.innerHTML = t.sidebarStoryHintDesc;

  // Solution Workbench Headers & Action buttons
  const elOpenBizinfo = document.getElementById('detailBizinfoLinkText');
  if (elOpenBizinfo) elOpenBizinfo.innerText = t.btnOpenBizinfo;
  const elReqPresales = document.getElementById('requestPresalesBtnText');
  if (elReqPresales) elReqPresales.innerText = t.btnRequestPresales;
  const elShareKit = document.getElementById('shareSalesKitBtnText');
  if (elShareKit) elShareKit.innerText = t.btnShareSalesKit;

  const elPainLabel = document.getElementById('painPointHeaderLabel');
  if (elPainLabel) elPainLabel.innerText = t.painPointLabel;
  const elStoryLabel = document.getElementById('storyHookHeaderLabel');
  if (elStoryLabel) elStoryLabel.innerText = t.storyHookLabel;
  const elValLabel = document.getElementById('valueImpactHeaderLabel');
  if (elValLabel) elValLabel.innerText = t.valueImpactLabel;
  const elFeatLabel = document.getElementById('featuresHeaderLabel');
  if (elFeatLabel) elFeatLabel.innerText = t.featuresLabel;
  const elBenLabel = document.getElementById('benefitsHeaderLabel');
  if (elBenLabel) elBenLabel.innerText = t.benefitsLabel;

  // Workbench Kit Titles
  const elWbTitle = document.getElementById('workbenchSectionTitle');
  if (elWbTitle) elWbTitle.innerText = t.workbenchTitle;
  const elWbSub = document.getElementById('workbenchSectionSub');
  if (elWbSub) elWbSub.innerText = t.workbenchSub;

  const elCard1 = document.getElementById('card1Title');
  if (elCard1) elCard1.innerText = t.cardVideoTitle;
  const elCard2 = document.getElementById('card2Title');
  if (elCard2) elCard2.innerText = t.cardSiteRefTitle;
  const elCard3 = document.getElementById('card3Title');
  if (elCard3) elCard3.innerText = t.cardDeckTitle;
  const elCard4 = document.getElementById('card4Title');
  if (elCard4) elCard4.innerText = t.cardDatasheetTitle;
  const elCard5 = document.getElementById('card5Title');
  if (elCard5) elCard5.innerText = t.cardSowTitle;
  const elCard6 = document.getElementById('card6Title');
  if (elCard6) elCard6.innerText = t.cardPriceTitle;

  const elAct1 = document.getElementById('card1Action');
  if (elAct1) elAct1.innerText = t.actionWatchVideo;
  const elAct2 = document.getElementById('card2Action');
  if (elAct2) elAct2.innerText = t.actionReadCase;
  const elAct3 = document.getElementById('card3Action');
  if (elAct3) elAct3.innerText = t.actionOpenDeck;
  const elAct4 = document.getElementById('card4Action');
  if (elAct4) elAct4.innerText = t.actionViewDatasheet;
  const elAct5 = document.getElementById('card5Action');
  if (elAct5) elAct5.innerText = t.actionViewSow;
  const elAct6 = document.getElementById('card6Action');
  if (elAct6) elAct6.innerText = t.actionCalcRoi;

  // EDS Price Calculator Elements
  const elEdsTitle = document.getElementById('edsCalcTitle');
  if (elEdsTitle) elEdsTitle.innerText = t.edsCalcTitle;
  const elEdsSub = document.getElementById('edsCalcSub');
  if (elEdsSub) elEdsSub.innerText = t.edsCalcSub;
  const elEdsCoordLbl = document.getElementById('edsCoordLabel');
  if (elEdsCoordLbl) elEdsCoordLbl.innerText = t.edsCoordLabel;
  const elEdsCoordInp = document.getElementById('edsLocationInput');
  if (elEdsCoordInp) elEdsCoordInp.placeholder = t.edsCoordHint;
  const elEdsSpeedLbl = document.getElementById('edsSpeedLabel');
  if (elEdsSpeedLbl) elEdsSpeedLbl.innerText = t.edsSpeedLabel;
  const elEdsContractLbl = document.getElementById('edsContractLabel');
  if (elEdsContractLbl) elEdsContractLbl.innerText = t.edsContractLabel;
  const elEdsIpLbl = document.getElementById('edsIpLabel');
  if (elEdsIpLbl) elEdsIpLbl.innerText = t.edsIpLabel;

  const optC12 = document.getElementById('optContract12');
  if (optC12) optC12.text = t.edsContract12;
  const optC24 = document.getElementById('optContract24');
  if (optC24) optC24.text = t.edsContract24;
  const optC36 = document.getElementById('optContract36');
  if (optC36) optC36.text = t.edsContract36;

  const optIp1 = document.getElementById('optIp1');
  if (optIp1) optIp1.text = t.edsIp1;
  const optIp4 = document.getElementById('optIp4');
  if (optIp4) optIp4.text = t.edsIp4;
  const optIp8 = document.getElementById('optIp8');
  if (optIp8) optIp8.text = t.edsIp8;

  const elEdsNetlifyBtn = document.getElementById('edsNetlifyBtnText');
  if (elEdsNetlifyBtn) elEdsNetlifyBtn.innerText = t.edsNetlifyBtn;
  const elEdsSumTitle = document.getElementById('edsSummaryTitle');
  if (elEdsSumTitle) elEdsSumTitle.innerText = t.edsSummaryTitle;
  const elEdsNetMonthly = document.getElementById('edsNetMonthlyLabel');
  if (elEdsNetMonthly) elEdsNetMonthly.innerText = t.edsNetMonthly;
  const elEdsDiscBadge = document.getElementById('edsDiscountBadgeLabel');
  if (elEdsDiscBadge) elEdsDiscBadge.innerText = t.edsDiscountBadge;
  const elEdsInstLbl = document.getElementById('edsInstallFeeLabel');
  if (elEdsInstLbl) elEdsInstLbl.innerText = t.edsInstallFeeLabel;
  const elEdsSlaLbl = document.getElementById('edsSlaLabel');
  if (elEdsSlaLbl) elEdsSlaLbl.innerText = t.edsSlaLabel;
  const elEdsSuppLbl = document.getElementById('edsSupportLabel');
  if (elEdsSuppLbl) elEdsSuppLbl.innerText = t.edsSupportLabel;

  const elBtnCopy = document.getElementById('edsBtnCopyQuoteText');
  if (elBtnCopy) elBtnCopy.innerText = t.edsBtnCopyQuote;
  const elBtnFwd = document.getElementById('edsBtnForwardPresalesText');
  if (elBtnFwd) elBtnFwd.innerText = t.edsBtnForwardPresales;

  if (typeof updateEdsPriceCalc === 'function') {
    updateEdsPriceCalc();
  }
}

// HELPER: GET LOCALIZED SOLUTION DATA
function getLocalizedSolution(sol) {
  if (!sol) return sol;
  if (currentLanguage === 'th') return sol;

  // Look up English translation
  for (const pillar of PILLARS_EN) {
    if (pillar.solutions && pillar.solutions[sol.id]) {
      const enSol = pillar.solutions[sol.id];
      return {
        ...sol,
        name: enSol.name || sol.name,
        category: enSol.category || sol.category,
        tag: enSol.tag || sol.tag,
        overview: enSol.overview || sol.overview,
        painPoint: enSol.painPoint || sol.painPoint,
        storyHook: enSol.storyHook || sol.storyHook,
        valueImpact: enSol.valueImpact || sol.valueImpact,
        features: enSol.features || sol.features,
        benefits: enSol.benefits || sol.benefits,
        caseStudies: enSol.caseStudies || sol.caseStudies,
        storyVideoTitle: enSol.storyVideoTitle || sol.storyVideoTitle,
        storyVideoBadge: enSol.storyVideoBadge || sol.storyVideoBadge,
        storyVideoSub: enSol.storyVideoSub || sol.storyVideoSub,
        storyVideoDesc: enSol.storyVideoDesc || sol.storyVideoDesc,
        storyVideos: enSol.storyVideos || sol.storyVideos
      };
    }
  }
  return sol;
}

// INITIALIZE ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  updateLanguageUI();
});
