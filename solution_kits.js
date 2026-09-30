// SOLUTION_KITS: Dedicated Sales Enablement Kits for ALL 12 Solutions in AIS Bizinfopedia
const SOLUTION_KITS = {
  'corp-wifi': {
    name: 'Corporate WiFi',
    code: 'NET-WF-01',
    category: 'Network Solution',
    video: {
      title: 'วิธี Pitch Corporate WiFi ใน 60 วินาที ให้โดนใจผู้บริหาร SME',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“สวัสดีครับคุณลูกค้า เคยเจอปัญหาจังหวะประชุมออนไลน์สำคัญกับคู่ค้า แล้วจู่ๆ สัญญาณ WiFi หลุด หรือเวลาลูกค้ามาออฟฟิศแล้วเน็ตออฟฟิศช้าลงไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“หลายที่คิดว่าเป็นที่สปีดเน็ต แต่ความจริงคืออุปกรณ์ทั่วไปไม่แยกท่อแบนด์วิดท์ระหว่างพนักงานกับแขก ทำให้เกิดการแย่งเน็ต และไม่มีระบบมอนิเตอร์เวลามีคนโหลดไฟล์หนัก”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Corporate WiFi ออกแบบมาแก้จุดนี้ครับ เราใช้เทคโนโลยี Wi-Fi 6 แยกวงเครือข่ายชัดเจน จัดการผ่านคลาวด์ มีทีมวิศวกร AIS เฝ้าระวังให้ตลอด 24 ชม. โดยไม่ต้องจ้าง IT เพิ่ม”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“เรามีทีมวิศวกรเข้าสำรวจหน้างานและวางแผนสัญญาณฟรี สัปดาห์นี้สะดวกให้ทีมเทคนิคเข้าไปดูพื้นที่สัก 15 นาทีไหมครับ?”' }
      ],
      tips: 'เน้นถามเรื่องสัญญาณในห้องประชุมก่อน เพราะเป็น Pain Point สูงสุดของผู้บริหาร หลีกเลี่ยงศัพท์เทคนิคอย่าง 802.11ax ให้เน้นคำว่า Wi-Fi 6 และระบบแยกท่อปลอดภัย'
    },
    siteRef: {
      clientName: 'บริษัท สยาม ซีนเนอร์ยี่ อินดัสทรี จำกัด',
      industry: 'สำนักงาน & คอนซัลติ้ง',
      profile: 'อาคารสำนักงาน 5 ชั้น (พื้นที่ 4,200 ตร.ม.) • พนักงาน 180 คน • เชื่อมต่อเฉลี่ย 350 อุปกรณ์',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'ความเสถียร (Uptime)', value: '99.98%', sub: 'จากเดิมหลุด 3 ครั้ง/สัปดาห์' },
        { label: 'ตั๋วแจ้งซ่อม IT', value: '-85%', sub: 'ลดภาระฝ่ายไอทีชัดเจน' },
        { label: 'ความพึงพอใจพนักงาน', value: '97%', sub: 'ประชุม Teams ไม่สะดุด' },
        { label: 'ระยะเวลาคืนทุน (ROI)', value: '4.2 เดือน', sub: 'คุ้มค่าและลดต้นทุน' }
      ],
      challenges: [
        'สัญญาณอับในห้องประชุมใหญ่ชั้น 3 เวลาประชุมออนไลน์กับต่างประเทศสัญญาณหลุดบ่อย',
        'พนักงานเดินคุยงานข้ามชั้นแล้วสัญญาณหลุด ไม่สามารถ Roaming ได้ต่อเนื่อง',
        'ผู้มาเยือนขอรหัส WiFi แล้วใช้งานผิดวัตถุประสงค์ ส่งผลกระทบต่องานระบบบัญชี'
      ],
      solution: [
        'ติดตั้ง 16x AIS Corporate Wi-Fi 6 Dual-Band Access Points ครอบคลุม 5 ชั้น',
        'เชื่อมต่อ AIS Business Fibre Dedicated 1000/1000 Mbps พร้อม Fixed IP',
        'สร้าง Captive Portal หน้ารับรองแขกพร้อมโลโก้บริษัท แยกท่อเน็ตปลอดภัย 100%'
      ],
      quote: '“ตั้งแต่ติดตั้ง AIS Corporate WiFi ทีมงานทั้ง 180 คนสามารถประชุมข้ามประเทศผ่าน Microsoft Teams ได้ลื่นไหลมาก ฝ่าย IT ไม่ต้องคอยวิ่งไล่แก้ปัญหาเราเตอร์อีกเลย คุ้มค่าและตอบโจทย์ธุรกิจมากครับ”',
      quoteAuthor: 'คุณวิชาญ กิตติรัตน์ (Head of IT & Digital Infrastructure)'
    },
    deck: [
      { num: 1, title: 'AIS Corporate WiFi Solution', subtitle: 'Build a Strong Digital Foundation for SME Success', badge: 'Slide 1: Cover', desc: 'ระบบเครือข่าย WiFi องค์กร เสถียร ปลอดภัย จัดการง่ายบนคลาวด์', notes: '🗣️ แนะนำตัว สื่อสารว่า AIS มาช่วยวางรากฐานดิจิทัลให้ออฟฟิศทำงานราบรื่น 100%' },
      { num: 2, title: '3 ปัญหาซ่อนเร้นที่ฉุดรั้งธุรกิจของคุณ', subtitle: 'Why Traditional Wi-Fi Costs You More', badge: 'Slide 2: Customer Pain', desc: '1. ประชุมกระตุก 2. แขกแย่งเน็ต 3. ภาระงานซ่อมบำรุงของฝ่ายไอที', notes: '🗣️ ถามลูกค้าว่าเคยเจอปัญหาข้อไหนบ่อยที่สุด เพื่อให้ลูกค้าเล่าปัญหาจริง' },
      { num: 3, title: 'สถาปัตยกรรมโซลูชัน AIS Corporate WiFi', subtitle: 'Next-Gen Enterprise Wi-Fi 6 Architecture', badge: 'Slide 3: Architecture', desc: 'Dual-Band Wi-Fi 6 + VLAN Segmentation + Cloud Controller เฝ้าระวัง 24x7', notes: '🗣️ เน้นย้ำเรื่องไม่ต้องซื้อ Controller ฮาร์ดแวร์ราคาแพง เพราะ AIS รวมไว้ในคลาวด์' },
      { num: 4, title: 'ผลตอบแทนจากการลงทุนจริง (Case Study)', subtitle: 'Proven Real-World Business Impact', badge: 'Slide 4: Case Study', desc: 'Uptime 99.98% • ลดตั๋วแจ้งซ่อม IT 85% • ระยะเวลาคืนทุนเฉลี่ย 4.2 เดือน', notes: '🗣️ ชี้ให้เห็นว่าระยะเวลาคืนทุนเพียง 4 เดือน จากการที่พนักงานไม่ต้องเสียเวลางาน' },
      { num: 5, title: 'แพ็กเกจการลงทุนและข้อเสนอพิเศษ', subtitle: 'Flexible Investment & Privilege', badge: 'Slide 5: Packages', desc: 'Package S (฿2,990), Package M (฿6,500), Package L (฿12,900) พร้อมสำรวจหน้างานฟรี', notes: '🗣️ แนะนำ Package M เป็นตัวเลือกหลัก และขออนุญาตนัดทีมช่างเข้าดูพื้นที่' }
    ],
    datasheet: {
      model: 'AIS-AP6-PRO Enterprise Access Point',
      overview: 'อุปกรณ์กระจายสัญญาณ Wi-Fi 6 ระดับองค์กร รองรับการใช้งานหนาแน่นสูง จัดการจากคลาวด์ศูนย์กลาง',
      specs: [
        { label: 'Wireless Standard', val: 'Wi-Fi 6 (IEEE 802.11ax), Concurrent Dual-Band 2.4/5GHz' },
        { label: 'Max Throughput', val: '2.976 Gbps (574 Mbps บน 2.4GHz + 2402 Mbps บน 5GHz)' },
        { label: 'Concurrent Clients', val: 'รองรับ 256+ clients ต่อ AP พร้อม MU-MIMO 2x2:2' },
        { label: 'Security & Auth', val: 'WPA3-Enterprise, 802.1X, Rogue AP Isolation, Guest Portal' },
        { label: 'Interface & Power', val: '1x 2.5G Multi-Gigabit Port, รองรับ PoE+ (IEEE 802.3at)' },
        { label: 'Cloud Management', val: 'AIS Centralized Cloud Controller, Zero-Touch Provisioning' },
        { label: 'Certifications & SLA', val: 'กสทช. รับรอง, ISO 27001, PDPA Compliant, SLA 99.9%' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1-2 วัน)', title: 'Site Survey & RF Plan', desc: 'สำรวจโครงสร้างอาคาร จุดเชื่อมต่อสายแลน และจำลองคลื่นความถี่' },
        { phase: 'Phase 2 (3-5 วัน)', title: 'Cabling & Mounting', desc: 'เดินสาย Cat6 ในท่อร้อยสายมาตรฐาน ติดตั้ง Access Point และตู้แร็ค' },
        { phase: 'Phase 3 (1 วัน)', title: 'Cloud Configuration', desc: 'ตั้งค่า SSID, VLAN พนักงาน/แขก, หน้า Captive Portal และไฟร์วอลล์' },
        { phase: 'Phase 4 (1 วัน)', title: 'UAT & Sign-Off', desc: 'ทดสอบ Speed Test, Coverage Walkthrough และส่งมอบ As-Built Drawing' }
      ],
      acceptance: 'สัญญาณครอบคลุมไม่น้อยกว่า -65 dBm ทั่วพื้นที่ใช้งาน • ความเร็วเน็ตไม่ต่ำกว่า 85% ของแพ็กเกจ • สลับจุดใช้งาน Roaming ไม่หลุด'
    },
    pricing: {
      packS: { name: 'Package S', price: '฿2,990 /ด.', ap: '1-3 APs', fit: 'ออฟฟิศ 1-30 คน' },
      packM: { name: 'Package M (แนะนำ)', price: '฿6,500 /ด.', ap: '4-8 APs', fit: 'ออฟฟิศ 30-100 คน' },
      packL: { name: 'Package L', price: '฿12,900 /ด.', ap: '9-16 APs', fit: 'ออฟฟิศ 100+ คน' },
      slider1: { label: 'จำนวนพนักงานในออฟฟิศ', min: 10, max: 300, step: 5, val: 60, unit: 'คน' },
      slider2: { label: 'จำนวนจุดติดตั้ง Access Point', min: 1, max: 20, step: 1, val: 6, unit: 'จุด' },
      calc: (users, aps) => {
        let monthly = 2990;
        if (aps > 8) monthly = 12900 + (aps - 8) * 600;
        else if (aps > 3) monthly = 2990 + (aps - 3) * 750;
        const annualBenefit = (users * 4 * 250) + Math.min(users * 600, 120000);
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'biz-fibre': {
    name: 'Corporate Internet (EDS)',
    code: 'NET-FB-02',
    category: 'Corporate Internet',
    video: {
      title: 'วิดีโอสาธิตระบบ EDS Price & วิธี Pitch Corporate Internet (EDS) สำหรับ BC',
      duration: '01:25',
      videoSrc: 'eds_prise.mp4',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้ามีหลายสาขา เคยเจอปัญหาเน็ตสาขาหลุด เชื่อมโยงระบบ POS หรือเซิร์ฟเวอร์กลับมาสำนักงานใหญ่ไม่ได้ โทรตามช่างแล้วต้องรอคิว 1-2 วันจนสาขาเปิดขายไม่ได้ไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“เน็ตบ้านทั่วไปไม่ได้ออกแบบมาสำหรับธุรกิจที่มีหลายสาขา ไม่มี Fixed IP สำหรับเชื่อมโยงสาขา และเวลาเสียไม่มีสัญญาการันตีเวลาซ่อม (SLA) ทำให้ธุรกิจเสียหาย”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Corporate Internet (EDS) คือท่อข้อมูลพิเศษสำหรับนิติบุคคล การันตีแบนด์วิดท์ 1:1 มี Fixed IP ถาวร และการันตีเวลาซ่อมเสร็จใน 4 ชม. มี Call Center 1149 ดูแล 24 ชม.”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เริ่มต้นเพียงเดือนละ 1,590 บาท คุ้มครองความต่อเนื่องของธุรกิจ วันนี้ขอส่งใบสรุปแพ็กเกจให้ทางไลน์ได้ไหมครับ?”' }
      ],
      tips: 'เน้นถามว่า "ถ้าระบบเน็ตล่มครึ่งวัน ธุรกิจจะเสียหายประมาณกี่บาท?" เพื่อให้ลูกค้าเห็นความคุ้มค่าของการันตี SLA ซ่อมใน 4 ชั่วโมง พร้อมเปิดคลิปสาธิตระบบตรวจสอบพิกัด EDS'
    },
    siteRef: {
      clientName: 'บริษัท พรีเมียร์ แอคเคาน์ติ้ง แอนด์ ออดิท จำกัด',
      industry: 'สำนักงานบัญชี & สอบบัญชี',
      profile: 'สำนักงาน 3 ชั้น • พนักงาน 45 คน • มีเซิร์ฟเวอร์โปรแกรม Express และฐานข้อมูลภาษี',
      date: 'ติดตั้ง ธ.ค. 2568',
      kpis: [
        { label: 'Uptime การันตี', value: '99.95%', sub: 'ไม่เคยล่มช่วงปิดงบ' },
        { label: 'เวลาแก้ไขปัญหา (MTTR)', value: '< 2 ชม.', sub: 'ช่างถึงหน้างานเร่งด่วน' },
        { label: 'ความเร็วเชื่อมต่อ VPN', value: '1,000 Mbps', sub: 'ดึงงบดุลลื่นไหล 100%' },
        { label: 'ความเสียหายที่ป้องกันได้', value: '฿350,000', sub: 'ต่อช่วงสัปดาห์ปิดงบ' }
      ],
      challenges: [
        'เคยใช้เน็ตบ้านธรรมดา แล้วเราเตอร์แฮงก์ช่วงสิ้นเดือน พนักงาน 45 คนส่งงบการเงินไม่ได้',
        'ไม่มี Fixed IP ต้องใช้ Dynamic DNS ที่เชื่อมต่อไม่เสถียร เวลาลูกค้านอกออฟฟิศล็อกอินติดขัด',
        'โทรคอลเซ็นเตอร์ทั่วไปรอสายนาน และไม่มีช่างเฉพาะทางดูแลนอกเวลาทำการ'
      ],
      solution: [
        'ติดตั้ง AIS Corporate Internet (EDS) ความเร็ว 1000/1000 Mbps แบบ Dedicated เส้นทางด่วน',
        'มอบ 1x Fixed Public IP ถาวร เชื่อมโยง VPN เข้าสู่เซิร์ฟเวอร์ Express ปลอดภัย',
        'คุ้มครองด้วยสัญญา SLA ซ่อมเสร็จภายใน 4 ชั่วโมง พร้อมคู่สาย 1149 นิติบุคคล'
      ],
      quote: '“ช่วงปิดงบสิ้นเดือนเป็นช่วงที่ระบบล่มไม่ได้เด็ดขาด ตั้งแต่ใช้ AIS Corporate Internet (EDS) มาปีกว่า ไม่เคยมีปัญหาเรื่องระบบล่มเลย อุ่นใจมากครับ”',
      quoteAuthor: 'คุณประภาส มงคลกุล (Managing Partner)'
    },
    siteRefs: [
      {
        tag: '🏢 Case 1: สำนักงานบัญชี',
        clientName: 'บริษัท พรีเมียร์ แอคเคาน์ติ้ง แอนด์ ออดิท จำกัด',
        industry: 'สำนักงานบัญชี & สอบบัญชี',
        profile: 'สำนักงาน 3 ชั้น • พนักงาน 45 คน • มีเซิร์ฟเวอร์โปรแกรม Express และฐานข้อมูลภาษี',
        date: 'ติดตั้ง ธ.ค. 2568',
        kpis: [
          { label: 'Uptime การันตี', value: '99.95%', sub: 'ไม่เคยล่มช่วงปิดงบ' },
          { label: 'เวลาแก้ไขปัญหา (MTTR)', value: '< 2 ชม.', sub: 'ช่างถึงหน้างานเร่งด่วน' },
          { label: 'ความเร็วเชื่อมต่อ VPN', value: '1,000 Mbps', sub: 'ดึงงบดุลลื่นไหล 100%' },
          { label: 'ความเสียหายที่ป้องกันได้', value: '฿350,000', sub: 'ต่อช่วงสัปดาห์ปิดงบ' }
        ],
        challenges: [
          'เคยใช้เน็ตบ้านธรรมดา แล้วเราเตอร์แฮงก์ช่วงสิ้นเดือน พนักงาน 45 คนส่งงบการเงินไม่ได้',
          'ไม่มี Fixed IP ต้องใช้ Dynamic DNS ที่เชื่อมต่อไม่เสถียร เวลาลูกค้านอกออฟฟิศล็อกอินติดขัด',
          'โทรคอลเซ็นเตอร์ทั่วไปรอสายนาน และไม่มีช่างเฉพาะทางดูแลนอกเวลาทำการ'
        ],
        solution: [
          'ติดตั้ง AIS Corporate Internet (EDS) ความเร็ว 1000/1000 Mbps แบบ Dedicated เส้นทางด่วน',
          'มอบ 1x Fixed Public IP ถาวร เชื่อมโยง VPN เข้าสู่เซิร์ฟเวอร์ Express ปลอดภัย',
          'คุ้มครองด้วยสัญญา SLA ซ่อมเสร็จภายใน 4 ชั่วโมง พร้อมคู่สาย 1149 นิติบุคคล'
        ],
        quote: '“ช่วงปิดงบสิ้นเดือนเป็นช่วงที่ระบบล่มไม่ได้เด็ดขาด ตั้งแต่ใช้ AIS Corporate Internet (EDS) มาปีกว่า ไม่เคยมีปัญหาเรื่องระบบล่มเลย อุ่นใจมากครับ”',
        quoteAuthor: 'คุณประภาส มงคลกุล (Managing Partner)'
      },
      {
        tag: '🏭 Case 2: โรงงานอุตสาหกรรม',
        clientName: 'บริษัท สยาม พรีซิชั่น ออโตโมทีฟ พาร์ทส์ จำกัด',
        industry: 'โรงงานผลิตชิ้นส่วนยานยนต์',
        profile: 'นิคมอุตสาหกรรมอมตะซิตี้ ชลบุรี • พื้นที่ 12,000 ตร.ม. • ระบบ ERP (SAP), CNC และ Just-in-Time (JIT)',
        date: 'ติดตั้ง ม.ค. 2569',
        kpis: [
          { label: 'Uptime เครือข่าย', value: '99.98%', sub: 'การันตีตามสัญญา SLA' },
          { label: 'เวลาแก้ปัญหา (MTTR)', value: '< 1.5 ชม.', sub: 'วิศวกร On-site เร่งด่วน' },
          { label: 'Data Sync เรียลไทม์', value: '100%', sub: 'ส่งคำสั่งผลิตไม่ดีเลย์' },
          { label: 'ป้องกันค่าปรับสายพานหยุด', value: '฿1,200,000', sub: 'ต่อปีการผลิต' }
        ],
        challenges: [
          'สายพานการผลิตต้องส่งข้อมูลชิ้นส่วน Just-in-Time (JIT) ไปยังค่ายรถยนต์ตลอด 24 ชม. หากเน็ตดับ ไลน์ประกอบหยุด มีค่าปรับหลักแสนต่อชั่วโมง',
          'เน็ตเดิมเป็นบรอดแบนด์ทั่วไป สปีดแกว่งช่วงบ่าย และเมื่อสายไฟเบอร์ขาดต้องรอคิวช่าง 24-48 ชั่วโมง',
          'ต้องเชื่อมโยงระบบเครื่องจักร CNC และระบบ SAP กับสำนักงานใหญ่ญี่ปุ่น ต้องการ Fixed IP ที่เสถียรและปลอดภัยสูง'
        ],
        solution: [
          'ติดตั้ง AIS Corporate Internet (EDS) แบบ Dedicated 1:1 ความเร็ว 1000/1000 Mbps เชื่อมต่อตรงเข้าโครงข่ายหลักของ AIS',
          'จัดสรรชุด Fixed Public IP สำหรับเชื่อมต่อ IPsec VPN ตรงสู่สำนักงานใหญ่และระบบคลาวด์ SAP ERP',
          'การันตี SLA ซ่อมเสร็จภายใน 4 ชั่วโมง พร้อมมอนิเตอร์วงจร Proactive ตลอด 24x7 และมีวิศวกรพื้นที่ชลบุรีเข้าหน้างานทันที'
        ],
        quote: '“สำหรับโรงงานผลิตยานยนต์ วินาทีเดียวก็หยุดไม่ได้ AIS Corporate Internet (EDS) ช่วยให้ไลน์ผลิตทำงานต่อเนื่อง 24 ชั่วโมง และอุ่นใจด้วยการันตี SLA ซ่อมเสร็จใน 4 ชั่วโมงอย่างแท้จริงครับ”',
        quoteAuthor: 'คุณสมชาย วรเศรษฐกุล (ผู้อำนวยการฝ่ายวิศวกรรมและการผลิต)'
      },
      {
        tag: '🛒 Case 3: ค้าปลีก & โรงแรม',
        clientName: 'กลุ่มบริษัท เดอะ แกรนด์ รีเทล แอนด์ โฮเทล จำกัด',
        industry: 'เครือข่ายค้าปลีก 35 สาขา',
        profile: 'สำนักงานใหญ่และศูนย์กระจายสินค้า • เชื่อมโยงระบบ POS 35 สาขา, ระบบตัดบัตรเครดิต EDC และ Central CCTV',
        date: 'ติดตั้ง ต.ค. 2568',
        kpis: [
          { label: 'Transaction Success', value: '99.99%', sub: 'ตัดบัตรและสแกนจ่ายลื่นไหล' },
          { label: 'สาขาต่อ VPN พร้อมกัน', value: '35 สาขา', sub: 'ไม่มีปัญหาคอขวด' },
          { label: 'เวลาตอบสนองระบบ POS', value: '< 0.8 วินาที', sub: 'เช็คสต็อกเรียลไทม์' },
          { label: 'ลดเวลา Troubleshooting', value: '15 ชม./สัปดาห์', sub: 'ทีมไอทีดูแลจากศูนย์กลาง' }
        ],
        challenges: [
          'หน้าร้านค้าปลีก 35 สาขาตัดเงินผ่านเครื่อง EDC และ POS ยิงตรงมาที่เซิร์ฟเวอร์สำนักงานใหญ่ เน็ตเดิมล่มบ่อยทำให้ลูกค้าต่อแถวยาวและเสียยอดขาย',
          'ระบบกล้อง CCTV สำนักงานใหญ่ดึงภาพจากสาขาไม่ได้เพราะแบนด์วิดท์อัปโหลดไม่พอ และ IP หลุดบ่อย',
          'ทีมไอทีต้องคอยรีสตาร์ทเราเตอร์และแก้ปัญหา Dynamic IP เปลี่ยนทุกสัปดาห์'
        ],
        solution: [
          'ติดตั้ง AIS Corporate Internet (EDS) แบนด์วิดท์ Symmetric 1000/1000 Mbps พร้อมบล็อก Fixed Public IP 4 IPs',
          'รวมศูนย์เครือข่ายระบบ POS, ระบบสมาชิก CRM และกล้อง CCTV เข้าสู่ศูนย์ข้อมูลกลางด้วยความเร็วระดับกิกะบิต',
          'บริการ AIS Safe Connect กรองภัยคุกคามไซเบอร์ระดับเกตเวย์ พร้อมสายด่วนนิติบุคคล 1149 ดูแลตลอด 24 ชั่วโมง'
        ],
        quote: '“การที่ระบบ POS หน้าร้าน 35 สาขาสามารถตัดเงินและตัดสต็อกสินค้าได้ทันทีโดยไม่เคยสะดุดเลย ทำให้ฝ่ายปฏิบัติการทำงานราบรื่น ลูกค้าไม่ต้องรอคิว AIS EDS คุ้มค่าที่สุดสำหรับธุรกิจรีเทลครับ”',
        quoteAuthor: 'คุณกุลสตรี วงศ์สิริโชค (Head of IT & Digital Transformation)'
      },
      {
        tag: '🏭 Case 4: เกษตรอุตสาหกรรม & โรงงาน (KTIS Group)',
        clientName: 'กลุ่ม บมจ. เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ (KTIS)',
        industry: 'อุตสาหกรรมน้ำตาล, พลังงานชีวภาพ และผลิตภัณฑ์เพื่อสิ่งแวดล้อม',
        profile: 'สำนักงานใหญ่, โรงงานน้ำตาล และไซต์เกษตรกรรมต่างจังหวัด • เชื่อมโยงระบบ ERP, ระบบผลิต และโครงข่ายการสื่อสารข้ามไซต์ห่างไกล',
        date: 'ใช้งานต่อเนื่อง',
        kpis: [
          { label: 'Uptime เครือข่าย', value: '99.98%', sub: 'เสถียรภาพระดับองค์กร' },
          { label: 'เวลาแก้ปัญหา (MTTR)', value: '< 2 ชม.', sub: 'วิศวกรดูแลเร่งด่วน' },
          { label: 'ความครอบคลุมสัญญาณ', value: '100%', sub: 'แม้ในพื้นที่ห่างไกล' },
          { label: 'ประสิทธิภาพการสื่อสาร', value: '+45%', sub: 'เชื่อมต่อข้ามไซต์ไร้รอยต่อ' }
        ],
        challenges: [
          'โรงงานผลิตและไซต์งานเกษตรกรรมมักตั้งอยู่ในพื้นที่ห่างไกล โครงข่ายทั่วไปเข้าไม่ถึงหรือสัญญาณไม่เสถียร',
          'ต้องการระบบการสื่อสารและเครือข่ายอินเทอร์เน็ตความเร็วสูงที่เสถียรเพื่อเชื่อมโยงข้อมูลระหว่างโรงงานและสำนักงานใหญ่แบบเรียลไทม์',
          'ต้องการทีมวิศวกรผู้เชี่ยวชาญที่สามารถเข้าแก้ไขปัญหาหน้างานได้อย่างรวดเร็ว ไม่กระทบต่อกระบวนการผลิต'
        ],
        solution: [
          'ติดตั้ง AIS Corporate Internet (EDS) เชื่อมโยงโครงข่ายความเร็วสูงระดับองค์กรเข้าสู่โรงงานและไซต์งานสำคัญ',
          'เสริมความคล่องตัวด้วยบริการโทรฟรีกองเรือนิติบุคคล (MVPN) และ AIS Corporate Office Phone',
          'ดูแลตลอด 24 ชั่วโมงด้วยทีมวิศวกร AIS Business พร้อม SLA ซ่อมด่วน'
        ],
        quote: '“กลุ่ม KTIS ไว้วางใจ AIS Business เพราะสัญญาณมีความครอบคลุมแม้ในพื้นที่ห่างไกล และทีมงานให้บริการแก้ไขปัญหาได้อย่างรวดเร็ว ทำให้ธุรกิจขับเคลื่อนได้อย่างต่อเนื่องครับ”',
        quoteAuthor: 'ผู้บริหารระดับสูง กลุ่ม บมจ. เกษตรไทย อินเตอร์เนชั่นแนล ชูการ์ (KTIS)'
      }
    ],
    deckPdf: {
      file: 'AIS Corporate Internet For Customer.pdf',
      url: 'AIS%20Corporate%20Internet%20For%20Customer.pdf',
      name: 'AIS Corporate Internet For Customer.pdf',
      title: 'AIS Corporate Internet For Customer',
      pages: 28,
      size: '3.9 MB',
      description: 'สไลด์นำเสนอฉบับทางการสำหรับลูกค้าองค์กร (28 หน้า) ครอบคลุมคุณสมบัติเด่น สถาปัตยกรรมเครือข่าย แพ็กเกจ และ SLA'
    },
    deck: [
      { num: 1, title: 'AIS Corporate Internet (EDS)', subtitle: 'Guaranteed Bandwidth & Uptime for Modern Enterprise', badge: 'Slide 1: Cover', desc: 'อินเทอร์เน็ตความเร็วสูงสำหรับองค์กร มั่นคง ปลอดภัย พร้อม Fixed IP และ SLA', notes: '🗣️ อธิบายว่าเน็ตสำหรับธุรกิจคือหัวใจหลักของการดำเนินงานยุคดิจิทัล' },
      { num: 2, title: 'ความแตกต่างระหว่างเน็ตบ้าน vs เน็ตองค์กร EDS', subtitle: 'Home Broadband vs Corporate Internet', badge: 'Slide 2: Comparison', desc: 'เปรียบเทียบ SLA ซ่อมใน 4 ชม. vs รอคิวช่าง 48 ชม., Fixed IP vs Dynamic IP', notes: '🗣️ ชี้ให้เห็นว่าส่วนต่างหลักร้อยต่อเดือน แลกกับความสูญเสียทางธุรกิจหลักแสน' },
      { num: 3, title: 'สถาปัตยกรรมโครงข่ายไฟเบอร์ AIS EDS', subtitle: 'End-to-End Enterprise Grade Network', badge: 'Slide 3: Architecture', desc: 'วงจรเชื่อมต่อตรงสู่ Gateway หลักของ AIS ไม่แชร์แบนด์วิดท์กับบ้านเรือนทั่วไป', notes: '🗣️ อธิบายคำว่า Dedicated Throughput ทำให้สปีดนิ่งตลอดเวลาแม้ช่วงฝนตก' },
      { num: 4, title: 'กรณีศึกษาจริงจากสำนักงานบัญชีชั้นนำ', subtitle: 'Financial & Accounting Case Study', badge: 'Slide 4: Case Study', desc: 'ความเสถียร 99.95% รองรับการดึงข้อมูลงบการเงินและ VPN ตลอด 24 ชั่วโมง', notes: '🗣️ เล่าเคสจริงที่ส่งงบดุลทันเวลาโดยไม่มีสะดุด' },
      { num: 5, title: 'แพ็กเกจความเร็วและการบริการพิเศษ', subtitle: 'Packages & Business SLA', badge: 'Slide 5: Packages', desc: 'ความเร็ว 500/500M (฿1,590), 1000/1000M (฿2,990), 2000/1000M (฿5,990)', notes: '🗣️ นำเสนอแพ็กเกจ 1000/1000M พร้อม Fixed IP เป็นแพ็กเกจมาตรฐานที่คุ้มค่าที่สุด' }
    ],
    datasheet: {
      model: 'AIS Corporate Internet (EDS) 1000/1000 Fixed IP',
      overview: 'บริการอินเทอร์เน็ตความเร็วสูงระดับองค์กร (EDS / Enterprise Direct Service) พร้อมท่อแบนด์วิดท์ Dedicated 1:1, Fixed IP และการดูแลระดับองค์กรตลอด 24 ชั่วโมง',
      specs: [
        { label: 'Bandwidth Speed', val: 'ดาวน์โหลด 1,000 Mbps / อัปโหลด 1,000 Mbps (Symmetric)' },
        { label: 'IP Address', val: '1 Fixed Public IPv4 (สามารถขยายได้สูงสุด 8 IPs)' },
        { label: 'Hardware Included', val: 'Enterprise Optical Network Unit (ONU) + Wi-Fi 6 Router' },
        { label: 'Service Level Agreement', val: 'การันตีซ่อมเสร็จภายใน 4 ชั่วโมง (MTTR 4 hrs) ทุกวันไม่เว้นวันหยุด' },
        { label: 'Call Center Support', val: 'บริการดูแล 24x7 ผ่านศูนย์บริการลูกค้าองค์กร 1149' },
        { label: 'Security Gateway', val: 'รองรับการเปิดฟังก์ชัน AIS Safe Connect ป้องกัน DNS Threat' },
        { label: 'Billing & Tax', val: 'ออกใบกำกับภาษีในนามนิติบุคคล หักภาษี ณ ที่จ่ายได้ถูกต้อง' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'Site Inspection & Feasibility', desc: 'ตรวจสอบคู่สายและระยะทางตู้กระจายสัญญาณ (ODC) หน้าอาคาร' },
        { phase: 'Phase 2 (1-2 วัน)', title: 'Fiber Drop & Splicing', desc: 'เดินสายเคเบิลใยแก้วนำแสงเข้าสู่อาคารและทำการสไปรท์สาย' },
        { phase: 'Phase 3 (1 วัน)', title: 'ONU & Fixed IP Provisioning', desc: 'ติดตั้งอุปกรณ์ ONU ตั้งค่า Fixed Public IP และ Route เกตเวย์' },
        { phase: 'Phase 4 (1 วัน)', title: 'Throughput Test & Handover', desc: 'ทดสอบค่า Loss, Latency, Speed Test 1000M และลงนามส่งมอบ' }
      ],
      acceptance: 'ค่าแสงไม่เกิน -25 dBm • Throughput ไม่ต่ำกว่า 90% ของแพ็กเกจ • Fixed IP ใช้งานได้ทั้งภายนอกและภายใน'
    },
    pricing: {
      packS: { name: 'Starter 500/500M', price: '฿1,590 /ด.', ap: '1 Dynamic IP', fit: 'ร้านค้า/ออฟฟิศ 1-15 คน' },
      packM: { name: 'Pro 1000/1000M (แนะนำ)', price: '฿2,990 /ด.', ap: '1 Fixed IP', fit: 'ออฟฟิศ 15-60 คน มีเซิร์ฟเวอร์' },
      packL: { name: 'Enterprise 2000/1000M', price: '฿5,990 /ด.', ap: '4-8 Fixed IPs', fit: 'องค์กร 60+ คน VPN ข้ามสาขา' },
      slider1: { label: 'จำนวนเครื่องคอมพิวเตอร์และเซิร์ฟเวอร์', min: 5, max: 150, step: 5, val: 30, unit: 'เครื่อง' },
      slider2: { label: 'จำนวนสาขาที่ต้องการเชื่อมต่อ', min: 1, max: 10, step: 1, val: 1, unit: 'สาขา' },
      calc: (devices, branches) => {
        const monthly = (branches === 1 ? 2990 : 2990 + (branches - 1) * 2490);
        const annualBenefit = devices * 1200 + (branches * 35000);
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'sd-wan': {
    name: 'AIS SD-WAN for Business',
    code: 'NET-SW-03',
    category: 'Network Solution',
    video: {
      title: 'วิธี Pitch SD-WAN ใน 60 วินาที: รวมเน็ต Fibre + 5G เชื่อมสาขาทั่วประเทศ ประหยัด 40%',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“บริษัทของคุณลูกค้ามีหลายสาขาไหมครับ? เคยเจอปัญหาสาขาเน็ตล่มจนแคชเชียร์ขายของไม่ได้ หรือต้องจ่ายค่าเช่าสายวงจรเดิมราคาแพงหลักหมื่นต่อสาขาไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“การเช่าสายสัญญาณแบบเดิมทั้งแพงและขยายสาขายาก ถ้าเน็ตหลุดสักสาขา ผู้จัดการสาขาก็ทำอะไรไม่ได้ ต้องรอช่างอย่างเดียว”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS SD-WAN รวมเน็ตไฟเบอร์เข้ากับเน็ต 5G เป็นท่ออัจฉริยะท่อเดียว ถ้าสายไฟเบอร์ขาด ระบบจะสลับไป 5G ทันทีใน 0.1 วินาที ขายของต่อได้ไม่สะดุด และประหยัดค่าวงจร 40%”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“เรามีเครื่องเดโมให้ทดลองต่อที่สาขาหลัก 1 จุดฟรี ให้ทีมงานเข้าไปต่อให้ดูสัปดาห์นี้เลยไหมครับ?”' }
      ],
      tips: 'เน้นลูกค้าที่มี 3 สาขาขึ้นไป ชี้ให้เห็นว่าการมีเน็ต 5G สำรองทำให้ไม่มีทางที่สาขาจะขายของไม่ได้'
    },
    siteRef: {
      clientName: 'เครือข่ายค้าปลีก แฟชั่นแบรนด์ไทยแลนด์ (45 สาขา)',
      industry: 'ค้าปลีก & เชนสโตร์',
      profile: 'สาขาในห้างสรรพสินค้าและสแตนด์อโลน 45 แห่งทั่วประเทศ • สำนักงานใหญ่สีลม',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'ค่าใช้จ่ายเครือข่าย', value: '-42%', sub: 'ประหยัดปีละ 1.2 ล้านบาท' },
        { label: 'POS Downtime', value: '0 นาที', sub: 'สลับ 5G สำรองอัตโนมัติ' },
        { label: 'เวลาเปิดสาขาใหม่', value: '1 วัน', sub: 'จากเดิมต้องรอสาย 3 สัปดาห์' },
        { label: 'การมองเห็นเครือข่าย', value: '100%', sub: 'ดูผ่านหน้าจอ Cloud เดียว' }
      ],
      challenges: [
        'จ่ายค่าเช่าวรจร MPLS เดิมเดือนละเกือบ 30,000 บาทต่อสาขา รวมทั้งปีสูงมาก',
        'เวลาห้างจัดบูธหรือขยายสาขาใหม่ ต้องรอผู้ให้บริการลากสายสัญญาณนานเกือบเดือน',
        'เวลาเน็ตสาขาหลุด ระบบ POS ขายของไม่ได้ ลูกค้ารอคิวนานจนทิ้งออเดอร์'
      ],
      solution: [
        'ติดตั้งอุปกรณ์ AIS SD-WAN Edge Gateway ทุกสาขารวม 45 แห่ง',
        'ผสานเส้นทางเน็ต Broadband Fibre คู่กับซิม AIS 5G Business Backup',
        'บริหารจัดการแบนด์วิดท์และตรวจสอบสถานะทุกสาขาผ่าน Central Cloud Orchestrator'
      ],
      quote: '“SD-WAN ของ AIS ตอบโจทย์เชนสโตร์มากครับ ประหยัดงบได้เป็นล้าน และเปิดสาขาป๊อปอัพสโตร์ได้ในวันเดียวด้วย 5G”',
      quoteAuthor: 'คุณชนินทร์ โอภาสวรคุณ (COO & Retail Operations)'
    },
    deck: [
      { num: 1, title: 'AIS SD-WAN Solution', subtitle: 'Software-Defined WAN for Multi-Branch Agility', badge: 'Slide 1: Cover', desc: 'ระบบเครือข่ายสาขาอัจฉริยะ ยืดหยุ่น ปลอดภัย ประหยัดต้นทุน', notes: '🗣️ เปิดประเด็นความท้าทายของการบริหารเครือข่ายหลายสาขา' },
      { num: 2, title: 'หมดยุคจ่ายแพงกับสายเช่าวงจรเดิม', subtitle: 'Legacy MPLS vs AIS SD-WAN', badge: 'Slide 2: Cost Comparison', desc: 'ประหยัดค่าใช้จ่าย 40% และได้ความเร็วเพิ่มขึ้น 5 เท่า', notes: '🗣️ ให้ลูกค้าดูตัวเลขเปรียบเทียบต้นทุนต่อสาขาที่ลดลงอย่างเห็นได้ชัด' },
      { num: 3, title: 'ระบบสลับสายอัตโนมัติ (Zero Downtime Failover)', subtitle: 'Dual-Uplink: Fibre + 5G Synergy', badge: 'Slide 3: Technology', desc: 'หากสายไฟเบอร์ขาด ระบบสลับไปใช้เครือข่าย AIS 5G ภายใน 0.1 วินาที', notes: '🗣️ อธิบายว่าไม่มีลูกค้าคนไหนต้องรอแคชเชียร์เพราะเน็ตล่มอีกต่อไป' },
      { num: 4, title: 'ความสำเร็จจากแบรนด์ค้าปลีก 45 สาขา', subtitle: 'Retail Chain Success Story', badge: 'Slide 4: Case Study', desc: 'ลดต้นทุนปีละ 1.2 ล้านบาท และเปิดสาขาใหม่ได้รวดเร็วใน 1 วัน', notes: '🗣️ อ้างอิงเคสศึกษาธุรกิจค้าปลีกที่ลูกค้าจับต้องได้' },
      { num: 5, title: 'รูปแบบการลงทุนตามจำนวนสาขา', subtitle: 'Branch Subscription Packages', badge: 'Slide 5: Packages', desc: 'ราคาเริ่มต้น ฿4,500/สาขา/เดือน รวมฮาร์ดแวร์ ซิม 5G และระบบจัดการ', notes: '🗣️ สรุปแพ็กเกจรายสาขาที่รวมทุกอย่างในบิลเดียว' }
    ],
    datasheet: {
      model: 'AIS SD-WAN Edge Gateway G200',
      overview: 'อุปกรณ์เกตเวย์อัจฉริยะสำหรับสาขา รองรับ Multi-WAN Load Balancing, 5G LTE Failover และ IPsec VPN',
      specs: [
        { label: 'WAN Interfaces', val: '2x Gigabit Ethernet WAN + 1x Embedded 5G Sub-6 NSA/SA Modem' },
        { label: 'LAN Interfaces', val: '4x Gigabit Ethernet LAN Ports' },
        { label: 'VPN Throughput', val: 'สูงสุด 500 Mbps IPsec Encrypted Traffic' },
        { label: 'Failover Speed', val: 'Sub-second Failover (< 100ms) ไม่ทำให้เซสชันขาด' },
        { label: 'Application Control', val: 'รู้จักแอปพลิเคชัน 3,000+ รายการ จัดลำดับความสำคัญของ POS/VoIP' },
        { label: 'Central Management', val: 'Cloud Orchestrator ดูแลและอัปเดตนโยบายความปลอดภัยจากส่วนกลาง' },
        { label: 'Deployment', val: 'Zero-Touch Provisioning เสียบปลั๊กเชื่อมเน็ตดาวน์โหลดการตั้งค่าทันที' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (2-3 วัน)', title: 'Network Topology Design', desc: 'ออกแบบผังเชื่อมต่อและนโยบายจัดลำดับความสำคัญของข้อมูล' },
        { phase: 'Phase 2 (3-5 วัน)', title: 'Central Orchestrator Setup', desc: 'ตั้งค่าคลาวด์ศูนย์กลาง สร้างโปรไฟล์สาขาและนโยบายความปลอดภัย' },
        { phase: 'Phase 3 (1-2 สัปดาห์)', title: 'Branch Deployment', desc: 'จัดส่งอุปกรณ์และติดตั้งที่แต่ละสาขาแบบ Plug-and-Play' },
        { phase: 'Phase 4 (2 วัน)', title: 'Failover Simulation & UAT', desc: 'ทดสอบดึงสายไฟเบอร์ออกเพื่อตรวจการสลับไป 5G และส่งมอบ' }
      ],
      acceptance: 'ระบบสลับสายไฟเบอร์ไป 5G ได้ราบรื่น • ศูนย์กลางมองเห็นสถานะทุกสาขา • ผ่านการทดสอบความปลอดภัย VPN'
    },
    pricing: {
      packS: { name: 'Branch Small', price: '฿4,500 /สาขา/ด.', ap: '1-2 WAN + 5G', fit: 'สาขาย่อย 1-10 คน' },
      packM: { name: 'Branch Pro (แนะนำ)', price: '฿8,900 /สาขา/ด.', ap: 'High Throughput', fit: 'สาขาขนาดกลาง 10-50 คน' },
      packL: { name: 'Headquarter Core', price: '฿16,500 /ด.', ap: 'Redundant Power', fit: 'สำนักงานใหญ่และศูนย์ดาต้า' },
      slider1: { label: 'จำนวนสาขาที่ต้องการติดตั้ง SD-WAN', min: 2, max: 50, step: 1, val: 5, unit: 'สาขา' },
      slider2: { label: 'ปริมาณข้อมูลสำรอง 5G ต่อสาขา', min: 50, max: 500, step: 50, val: 100, unit: 'GB/ด.' },
      calc: (branches, data) => {
        const monthly = branches * 4500;
        const annualBenefit = branches * 25000 * 12 * 0.4; // 40% saving vs traditional MPLS
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'central-fw': {
    name: 'Centralized Firewall & Safe Connect',
    code: 'SEC-FW-01',
    category: 'Network Security',
    video: {
      title: 'วิธี Pitch Firewall ใน 60 วินาที: กำแพงเมืองบนคลาวด์ สกัด Ransomware ในงบหลักพัน',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยได้ยินข่าวบริษัท SME โดนไวรัสเรียกค่าไถ่ (Ransomware) ล็อกไฟล์งานจนต้องจ่ายเงินหลายล้านบาทไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“หลายแห่งคิดว่าออฟฟิศเล็ก แฮกเกอร์คงไม่สนใจ แต่ความจริงแฮกเกอร์ชอบโจมตี SME ที่สุด เพราะรู้ว่าไม่มีตู้ไฟร์วอลล์ราคาแพงคอยป้องกัน”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Centralized Firewall & Safe Connect เป็นไฟร์วอลล์บนเครือข่าย AIS สกัดกั้นไวรัสและลิงก์อันตรายตั้งแต่ต้นทางก่อนถึงคอมพิวเตอร์พนักงาน โดยไม่ต้องซื้อตู้ฮาร์ดแวร์”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“เริ่มต้นเพียงเดือนละ 3,500 บาท ป้องกันความเสียหายทางธุรกิจได้ 100% ขออนุญาตส่งรายงานตัวอย่างความเสี่ยงให้ดูทางอีเมลนะครับ”' }
      ],
      tips: 'เน้นย้ำเรื่อง พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) และโทษปรับหากข้อมูลลูกค้ารั่วไหลจากการถูกเจาะระบบ'
    },
    siteRef: {
      clientName: 'บริษัท สยาม ลอว์ แอนด์ พาร์ทเนอร์ จำกัด',
      industry: 'สำนักงานกฎหมายและที่ปรึกษาการลงทุน',
      profile: 'สำนักงานกฎหมาย 40 ทนายความ • จัดเก็บข้อมูลลับคดีความและเอกสารสัญญาการควบรวมกิจการ',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'สกัดกั้นการโจมตี', value: '100%', sub: 'บล็อกภัยคุกคาม 4,200+ ครั้ง/ด.' },
        { label: 'ค่าฮาร์ดแวร์ที่ประหยัดได้', value: '฿320,000', sub: 'ไม่ต้องซื้อตู้ไฟร์วอลล์' },
        { label: 'ความเร็วเน็ตหลังกรอง', value: '0% Drop', sub: 'กรองบนคลาวด์เน็ตไม่ช้า' },
        { label: 'ความสอดคล้อง PDPA', value: '100%', sub: 'มีรายงาน Log ตรวจสอบได้' }
      ],
      challenges: [
        'พนักงานทนายความได้รับอีเมล Phishing ปลอมเป็นธนาคารเกือบทุกวัน เสี่ยงคลิกลิงก์อันตราย',
        'บริษัทไม่มีงบซื้อตู้ Next-Gen Firewall ฮาร์ดแวร์ราคา 300,000 บาท และไม่มีคนคอยอัปเดต Signature',
        'กังวลเรื่องกฎหมาย PDPA หากข้อมูลลูกความระดับ VIP รั่วไหลจะถูกฟ้องร้องเสียชื่อเสียง'
      ],
      solution: [
        'เปิดใช้งาน AIS Centralized Firewall บนคลาวด์ กรองทราฟฟิกอินเทอร์เน็ตของออฟฟิศทั้งหมด',
        'เปิดฟังก์ชัน AI Deep Packet Inspection & DNS Protection สกัดมัลแวร์และแรนซัมแวร์',
        'รับรายงานสรุปความเสี่ยงและสถิติการบล็อกภัยคุกคามประจำเดือนโดยอัตโนมัติ'
      ],
      quote: '“ข้อมูลของลูกความคือหัวใจของสำนักงานกฎหมาย ตั้งแต่เปิดใช้ AIS Centralized Firewall เรารู้สึกมั่นใจและปลอดภัยขึ้นมากโดยไม่ต้องลงทุนฮาร์ดแวร์ราคาแพง”',
      quoteAuthor: 'ทนายวรพจน์ จิตต์กุศล (Managing Partner)'
    },
    deck: [
      { num: 1, title: 'AIS Centralized Firewall & Safe Connect', subtitle: 'Cloud-Native Enterprise Cybersecurity for SME', badge: 'Slide 1: Cover', desc: 'ระบบรักษาความปลอดภัยเครือข่าย สกัดกั้นภัยไซเบอร์ตั้งแต่ต้นทาง', notes: '🗣️ นำเสนอว่าความปลอดภัยไซเบอร์ในยุคนี้ไม่ใช่ทางเลือก แต่เป็นสิ่งจำเป็น' },
      { num: 2, title: 'ความจริงที่น่ากลัว: 60% ของการโจมตีเป้าหมายคือ SME', subtitle: 'The SME Cybersecurity Reality', badge: 'Slide 2: Threat Landscape', desc: 'Ransomware เรียกค่าไถ่เฉลี่ย 1.5 ล้านบาท และเสี่ยงผิดกฎหมาย PDPA', notes: '🗣️ กระตุ้นให้ลูกค้าตระหนักถึงความเสี่ยงและค่าเสียหายหากเกิดเหตุ' },
      { num: 3, title: 'เกราะป้องกันบนโครงข่าย AIS (In-Network Security)', subtitle: 'Security Before Reaching Your Devices', badge: 'Slide 3: Architecture', desc: 'กรองมัลแวร์ เว็บอันตราย และบอทเน็ต ตั้งแต่ระดับ Network ของ AIS', notes: '🗣️ อธิบายข้อดีของการกรองบนเครือข่าย: คอมพิวเตอร์ไม่อืด และไม่ต้องดูแลตู้ไฟร์วอลล์' },
      { num: 4, title: 'กรณีศึกษาสำนักงานกฎหมายชั้นนำ', subtitle: 'Legal Firm Success Case', badge: 'Slide 4: Case Study', desc: 'บล็อกภัยคุกคามกว่า 4,200 ครั้ง/เดือน และประหยัดงบฮาร์ดแวร์กว่า 3 แสนบาท', notes: '🗣️ ยกตัวอย่างลูกค้าที่ต้องการความปลอดภัยข้อมูลสูงสุด' },
      { num: 5, title: 'แพ็กเกจความปลอดภัยรายเดือน', subtitle: 'Security Subscription Packages', badge: 'Slide 5: Packages', desc: 'Package S (฿3,500), Package M (฿7,900), Package L (฿15,900) รวมรายงานประจำเดือน', notes: '🗣️ สรุปความคุ้มค่าของการจ่ายเป็นรายเดือนเหมือนซื้อประกันภัยให้ข้อมูล' }
    ],
    datasheet: {
      model: 'AIS Centralized Next-Gen Firewall Service',
      overview: 'บริการไฟร์วอลล์ระดับองค์กรบนเครือข่าย AIS พร้อมเทคโนโลยี AI Threat Intelligence ตรวจจับและสกัดกั้นภัยคุกคามแบบเรียลไทม์',
      specs: [
        { label: 'Deployment Mode', val: 'Cloud-delivered In-Network Security (ไม่ต้องติดตั้งฮาร์ดแวร์ที่ไซต์)' },
        { label: 'Threat Prevention', val: 'Anti-Virus, Anti-Spyware, Anti-Ransomware, Botnet C&C Protection' },
        { label: 'Content Filtering', val: 'Web URL Filtering 80+ Categories, DNS Security, Malicious Domain Block' },
        { label: 'Throughput Capacity', val: 'รองรับแบนด์วิดท์สูงสุด 1 Gbps โดยไม่มีปัญหาคอขวด (Zero Latency)' },
        { label: 'Signature Updates', val: 'อัปเดตฐานข้อมูลไวรัสและช่องโหว่ใหม่แบบ Real-time ตลอด 24 ชั่วโมง' },
        { label: 'Reporting & Logs', val: 'Monthly Executive Security Dashboard & Compliance Audit Log' },
        { label: 'Support & SLA', val: 'ทีมวิศวกรความปลอดภัย AIS CSOC คอยเฝ้าระวังและสนับสนุน 24x7' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'Security Requirement Assessment', desc: 'ประเมินนโยบายความปลอดภัยและประเภทเว็บไซต์ที่ต้องการบล็อก' },
        { phase: 'Phase 2 (1 วัน)', title: 'Policy Provisioning on Cloud', desc: 'สร้างนโยบายความปลอดภัยบน AIS Security Gateway ประจำองค์กร' },
        { phase: 'Phase 3 (1 วัน)', title: 'Traffic Redirection & Inspection', desc: 'เปลี่ยนเส้นทางข้อมูลผ่านเกราะป้องกันและทดสอบการสกัดกั้นมัลแวร์' },
        { phase: 'Phase 4 (1 วัน)', title: 'Reporting Handover & Training', desc: 'ส่งมอบรายงานระบบความปลอดภัยและแนะนำวิธีการเปิดดู Dashboard' }
      ],
      acceptance: 'บล็อกการเข้าถึงเว็บไซต์อันตรายได้ 100% • เน็ตใช้งานได้ความเร็วปกติ • ระบบบันทึก Log ถูกต้องตามเกณฑ์'
    },
    pricing: {
      packS: { name: 'Standard Security', price: '฿3,500 /ด.', ap: '1-30 อุปกรณ์', fit: 'SME ขนาดเล็ก' },
      packM: { name: 'Advanced Defense (แนะนำ)', price: '฿7,900 /ด.', ap: '30-100 อุปกรณ์', fit: 'บริษัทขนาดกลาง มีระบบบัญชี' },
      packL: { name: 'Ultimate Enterprise', price: '฿15,900 /ด.', ap: '100+ อุปกรณ์', fit: 'องค์กรที่ต้องการ SSL Inspection' },
      slider1: { label: 'จำนวนคอมพิวเตอร์และมือถือในออฟฟิศ', min: 10, max: 200, step: 5, val: 50, unit: 'เครื่อง' },
      slider2: { label: 'ระดับการป้องกันความปลอดภัย', min: 1, max: 3, step: 1, val: 2, unit: 'ระดับ' },
      calc: (devices, level) => {
        const monthly = (level === 1 ? 3500 : (level === 2 ? 7900 : 15900));
        const riskAvoided = 1500000; // Average ransomware demand avoided
        const annualBenefit = (devices * 3000) + 150000;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'csoc-service': {
    name: 'AIS CSOC Managed Security Service',
    code: 'SEC-CSOC-02',
    category: 'Cyber Security',
    video: {
      title: 'วิธี Pitch AIS CSOC ใน 60 วินาที: มีทีมวิศวกรไซเบอร์ 24x7 คอยเฝ้าระวังระบบให้คุณ',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยคิดไหมครับว่า ถ้ามีแฮกเกอร์พยายามเจาะระบบหรือแอบขโมยข้อมูลบริษัทตอนตี 2 ของคืนวันเสาร์ ใครจะเป็นคนรู้และตื่นขึ้นมาแก้ปัญหา?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“การจะจ้างวิศวกรไซเบอร์มานั่งเฝ้าหน้าจอ 24 ชั่วโมง 3 กะ ต้องใช้เงินเดือนเดือนละหลายแสนบาท ซึ่งธุรกิจ SME ส่วนใหญ่แบกรับต้นทุนนี้ไม่ไหว”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS CSOC คือศูนย์เฝ้าระวังความปลอดภัยไซเบอร์ระดับประเทศ มีทีมผู้เชี่ยวชาญคอยเฝ้าระวังเซิร์ฟเวอร์และระบบของคุณตลอด 24 ชม. ตรวจจับและระงับเหตุใน 15 นาที ในราคาที่เข้าถึงได้”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“ให้ผู้เชี่ยวชาญ AIS ดูแลความปลอดภัย ให้คุณนอนหลับได้อย่างสบายใจ นัดพูดคุยกับทีม Solution Architect สัปดาห์นี้เลยนะครับ”' }
      ],
      tips: 'เปรียบเทียบเหมือนการจ้างบริษัทรักษาความปลอดภัย (รปภ.) มืออาชีพมาคอยตรวจตราออฟฟิศตลอดทั้งคืน'
    },
    siteRef: {
      clientName: 'บริษัท ไทยซัพพลายเชน โลจิสติกส์ จำกัด (มหาชน)',
      industry: 'ซัพพลายเชนและคลังสินค้า',
      profile: 'ระบบบริหารคลังสินค้าออนไลน์ 24 ชม. • เซิร์ฟเวอร์ 25 เครื่อง • มีคู่ค้าระดับโลกเชื่อมต่อ API',
      date: 'ติดตั้ง พ.ย. 2568',
      kpis: [
        { label: 'เวลาตอบสนองต่อภัย (MTTD)', value: '< 15 นาที', sub: 'จากเดิมไม่รู้ตัวเป็นสัปดาห์' },
        { label: 'ค่าใช้จ่ายทีม SOC ที่ประหยัด', value: '฿1,800,000', sub: 'ต่อปี เทียบกับการตั้งทีมเอง' },
        { label: 'การผ่านเกณฑ์ Audit', value: '100%', sub: 'ผ่านเกณฑ์มาตรฐาน ISO 27001' },
        { label: 'เหตุการณ์ที่ระงับได้ทัน', value: '18 ครั้ง/ปี', sub: 'ความเสียหายเป็นศูนย์' }
      ],
      challenges: [
        'เคยถูกโจมตีแบบ Brute Force เจาะเซิร์ฟเวอร์ตอนกลางคืนช่วงวันหยุดยาว กว่าจะรู้ตัวข้อมูลก็ถูกแก้ไข',
        'คู่ค้าระดับโลกกำหนดว่าต้องมีทีมเฝ้าระวังระบบ 24x7 จึงจะต่อสัญญาธุรกิจได้ แต่ตั้งทีมเองไม่คุ้มทุน',
        'พนักงานไอทีทั่วไปขาดความเชี่ยวชาญด้านการวิเคราะห์ Threat Intelligence เชิงลึก'
      ],
      solution: [
        'เชื่อมต่อ Log ของระบบเครือข่ายและเซิร์ฟเวอร์เข้าสู่ศูนย์ปฏิบัติการ AIS CSOC 24x7',
        'ใช้งานระบบ AI SIEM/SOAR ตรวจจับพฤติกรรมผิดปกติและส่งสัญญาณเตือนทีมวิศวกรทันที',
        'จัดทำรายงาน Compliance Audit รายเดือนสำหรับยื่นตรวจสอบมาตรฐานความปลอดภัย'
      ],
      quote: '“AIS CSOC ช่วยให้เราผ่านการตรวจสอบมาตรฐานความปลอดภัยของคู่ค้ายุโรปได้อย่างราบรื่น เป็นพาร์ทเนอร์ที่พึ่งพาได้ตลอด 24 ชั่วโมงจริงๆ ครับ”',
      quoteAuthor: 'คุณเกรียงศักดิ์ ธรรมรัตน์ (Chief Information Officer)'
    },
    deck: [
      { num: 1, title: 'AIS CSOC Managed Security Service', subtitle: '24x7 Cyber Defense Center for Enterprise Security', badge: 'Slide 1: Cover', desc: 'ศูนย์เฝ้าระวังและระงับภัยคุกคามไซเบอร์ระดับประเทศ มาตรฐานสากล', notes: '🗣️ อธิบายว่าภัยคุกคามไซเบอร์เกิดขึ้นตลอดเวลา การเฝ้าระวัง 24 ชม. จึงจำเป็น' },
      { num: 2, title: 'ช่องว่างความปลอดภัยในช่วงนอกเวลาทำงาน', subtitle: 'The 24x7 Security Vulnerability', badge: 'Slide 2: The Gap', desc: '80% ของการโจมตีสำเร็จมักเกิดขึ้นในเวลากลางคืนหรือวันหยุดสุดสัปดาห์', notes: '🗣️ ชี้ให้เห็นว่าแฮกเกอร์เลือกโจมตีเวลาที่ไม่มีคนดูแลระบบ' },
      { num: 3, title: 'การทำงานของทีมวิศวกร AIS CSOC', subtitle: 'AI-Powered Detection & 15-Min Response', badge: 'Slide 3: Operations', desc: 'Log Ingestion -> AI Analytics -> Threat Hunting -> Instant Containment', notes: '🗣️ เล่าขั้นตอนการระงับเหตุภายใน 15 นาที เพื่อจำกัดความเสียหาย' },
      { num: 4, title: 'ความสำเร็จจากผู้ให้บริการซัพพลายเชน', subtitle: 'Supply Chain Case Study', badge: 'Slide 4: Case Study', desc: 'ประหยัดงบประมาณปีละ 1.8 ล้านบาท และผ่านเกณฑ์รับรอง ISO 27001', notes: '🗣️ ยกตัวอย่างลูกค้าที่ใช้บริการแล้วช่วยเพิ่มความน่าเชื่อถือทางธุรกิจ' },
      { num: 5, title: 'แพ็กเกจการเฝ้าระวังและดูแลระบบ', subtitle: 'Managed Security Packages', badge: 'Slide 5: Packages', desc: 'แพ็กเกจ Bronze (฿12,000), Silver (฿29,000), Gold (฿59,000) ตามจำนวนโฮสต์', notes: '🗣️ เสนอแพ็กเกจ Silver ที่ครอบคลุมทั้งเซิร์ฟเวอร์และอุปกรณ์เครือข่ายหลัก' }
    ],
    datasheet: {
      model: 'AIS CSOC Security Operations Service',
      overview: 'บริการศูนย์เฝ้าระวังความมั่นคงปลอดภัยสารสนเทศแบบครบวงจร ได้รับการรับรองมาตรฐานสากล ISO/IEC 27001',
      specs: [
        { label: 'Monitoring Hours', val: '24 ชั่วโมงต่อวัน 365 วันต่อปี โดยทีมวิศวกรความปลอดภัยเฉพาะทาง' },
        { label: 'Response Time SLA', val: 'แจ้งเตือนและเริ่มระงับเหตุฉุกเฉิน (Critical Incident) ภายใน 15 นาที' },
        { label: 'Technology Stack', val: 'AI-Powered SIEM & SOAR, Threat Intelligence Platform (TIP)' },
        { label: 'Log Retention', val: 'จัดเก็บ Log ตาม พ.ร.บ. ว่าด้วยการกระทำความผิดเกี่ยวกับคอมพิวเตอร์ 90 วัน+' },
        { label: 'Threat Hunting', val: 'การตรวจค้นหาภัยคุกคามเชิงรุก (Proactive Threat Hunting) สม่ำเสมอ' },
        { label: 'Incident Report', val: 'รายงานสรุปสาเหตุและแนวทางแก้ไข (Root Cause Analysis - RCA) ทุกเคส' },
        { label: 'Compliance Audit', val: 'เอกสารรับรองสำหรับ Audit ตามมาตรฐาน ISO 27001, PCI-DSS, PDPA' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (3-5 วัน)', title: 'Log Source Integration', desc: 'เชื่อมต่อและทดสอบการส่ง Log จากไฟร์วอลล์ เซิร์ฟเวอร์ และอุปกรณ์เครือข่าย' },
        { phase: 'Phase 2 (2 วัน)', title: 'Rule & Correlation Setup', desc: 'กำหนดกฎการตรวจจับ (Detection Rules) และ Use Cases เฉพาะของธุรกิจ' },
        { phase: 'Phase 3 (1 สัปดาห์)', title: 'Baseline Tuning', desc: 'ปรับแต่งระบบลด False Positive และทดสอบการส่งสัญญาณแจ้งเตือน' },
        { phase: 'Phase 4 (1 วัน)', title: 'Service Kick-Off', desc: 'เปิดให้บริการเฝ้าระวัง 24x7 และจัดทำแผนผังการติดต่อสื่อสารกรณีฉุกเฉิน' }
      ],
      acceptance: 'ส่ง Log เข้า CSOC ได้ครบ 100% • ทดสอบสัญญาณแจ้งเตือนเหตุฉุกเฉินผ่านเกณฑ์ • มีผัง Escalation ชัดเจน'
    },
    pricing: {
      packS: { name: 'CSOC Starter (Bronze)', price: '฿12,000 /ด.', ap: 'สูงสุด 5 โฮสต์', fit: 'SME ที่มีเซิร์ฟเวอร์สำคัญ' },
      packM: { name: 'CSOC Business (Silver)', price: '฿29,000 /ด.', ap: 'สูงสุด 15 โฮสต์', fit: 'องค์กรขนาดกลาง (แนะนำ)' },
      packL: { name: 'CSOC Enterprise (Gold)', price: '฿59,000 /ด.', ap: 'สูงสุด 30 โฮสต์', fit: 'บริษัทที่มีระบบธุรกรรม' },
      slider1: { label: 'จำนวนเซิร์ฟเวอร์และไฟร์วอลล์ที่ต้องการเฝ้าระวัง', min: 2, max: 50, step: 1, val: 10, unit: 'เครื่อง' },
      slider2: { label: 'ระยะเวลาเก็บรักษา Log ตามกฎหมาย', min: 90, max: 365, step: 30, val: 90, unit: 'วัน' },
      calc: (hosts, days) => {
        let monthly = 12000;
        if (hosts > 15) monthly = 59000 + (hosts - 15) * 1800;
        else if (hosts > 5) monthly = 29000 + (hosts - 5) * 1500;
        const annualBenefit = 1800000; // Saving vs building internal 24x7 team
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'm365-suite': {
    name: 'Microsoft 365 for Business',
    code: 'CLD-M365-01',
    category: 'SaaS',
    video: {
      title: 'วิธี Pitch Microsoft 365 ใน 60 วินาที: ทำงานร่วมกันได้ทุกที่ เอกสารปลอดภัย ไร้รอยต่อ',
      duration: '01:10',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“บริษัทของคุณลูกค้ายังใช้อีเมลฟรีอย่าง Gmail หรือส่งไฟล์งานตรวจสัญญาผ่านแชต LINE ที่ไฟล์ชอบหมดอายุและตามหายากอยู่ไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“เวลาพนักงานลาออก ข้อมูลลูกค้าที่อยู่ใน LINE หรืออีเมลส่วนตัวก็หลุดไปด้วย แถมเวลาเปิดเอกสาร Excel พร้อมกัน ไฟล์ก็ชอบตีกันจนข้อมูลหาย”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“Microsoft 365 จาก AIS ให้อีเมลชื่อบริษัท @yourcompany.com, โปรแกรม Office แท้, Teams ประชุมไม่จำกัด และ OneDrive 1TB ทำงานพร้อมกันได้แบบเรียลไทม์”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เริ่มต้นเพียงคนละไม่กี่ร้อยบาทต่อเดือน เราช่วยย้ายข้อมูลอีเมลเดิมให้ฟรี วันนี้ขอเสนอใบประเมินจำนวนผู้ใช้ให้พิจารณานะครับ”' }
      ],
      tips: 'ชี้ให้เห็นความน่าเชื่อถือของอีเมลองค์กรเวลาส่งใบเสนอราคาให้คู่ค้ารายใหญ่'
    },
    siteRef: {
      clientName: 'บริษัท ทีแอนด์เค มาร์เก็ตติ้ง เซอร์วิส จำกัด',
      industry: 'ดิจิทัลเอเจนซี่ & มีเดีย',
      profile: 'พนักงาน 70 คน • ทำงานแบบ Hybrid (WFH 3 วัน เข้าออฟฟิศ 2 วัน) • ประสานงานข้ามทีมตลอดวัน',
      date: 'ติดตั้ง ต.ค. 2568',
      kpis: [
        { label: 'เวลาตามหาเอกสาร', value: '-60%', sub: 'ค้นหาผ่าน OneDrive/Teams' },
        { label: 'ต้นทุนเซิร์ฟเวอร์ในออฟฟิศ', value: '฿0', sub: 'ย้ายขึ้นคลาวด์ 100%' },
        { label: 'ภาพลักษณ์ความน่าเชื่อถือ', value: '100%', sub: 'อีเมลบริษัท @tkmedia.co.th' },
        { label: 'ปัญหาไฟล์หายเมื่อลาออก', value: '0 เคส', sub: 'สิทธิ์ควบคุมเป็นของบริษัท' }
      ],
      challenges: [
        'เคยส่งไฟล์กราฟิกและสัญญาให้ลูกค้าทาง LINE พอลูกค้าเปิดดูช้าไฟล์หมดอายุ ทำให้งานล่าช้า',
        'ใช้โปรแกรม Office ไม่ถูกลิขสิทธิ์ เจอปัญหาไฟล์เปิดข้ามเครื่องแล้วฟอนต์เพี้ยน ตารางกระโดด',
        'พนักงานใช้คอมพิวเตอร์ส่วนตัวทำงาน เมื่อมีคนลาออกไฟล์งานสำคัญติดไปด้วยตามคืนไม่ได้'
      ],
      solution: [
        'ย้ายระบบอีเมลทั้งหมดขึ้น Microsoft 365 Business Standard จำนวน 70 บัญชี',
        'จัดระเบียบคลังเอกสารกลางบน SharePoint และให้แต่ละทีมทำงานร่วมกันผ่าน Teams',
        'ทีมวิศวกร AIS ช่วย Migrate ข้อมูลอีเมลเดิมและจัดการฝึกอบรมการใช้งานเบื้องต้นให้ฟรี'
      ],
      quote: '“ทีมงานประสานงานกันไวขึ้นมาก เปิดแก้ไขไฟล์สไลด์พร้อมกันได้โดยไม่ต้องส่งอีเมลไปมา คุ้มค่าที่สุดสำหรับการทำงานแบบไฮบริด”',
      quoteAuthor: 'คุณธนกฤต ลิมปนศักดิ์ (Managing Director)'
    },
    deck: [
      { num: 1, title: 'Microsoft 365 from AIS Business', subtitle: 'Empower Your Team with Modern Digital Workplace', badge: 'Slide 1: Cover', desc: 'แพลตฟอร์มทำงานร่วมกันระดับโลก อีเมลองค์กร ทีมส์ และพื้นที่คลาวด์', notes: '🗣️ แนะนำภาพรวมของเครื่องมือทำงานที่ทุกองค์กรชั้นนำต้องมี' },
      { num: 2, title: 'ความท้าทายของการทำงานแบบเดิม', subtitle: 'Challenges of Fragmented Work Tools', badge: 'Slide 2: Pain Points', desc: 'ไฟล์ใน LINE หมดอายุ, เวอร์ชั่นเอกสารสับสน, ความเสี่ยงข้อมูลรั่วไหล', notes: '🗣️ พูดคุยเรื่องปัญหาไฟล์หมดอายุและเอกสารเวอร์ชั่นตีกันที่ทุกคนเคยเจอ' },
      { num: 3, title: 'ครบทุกเครื่องมือในที่เดียว (All-in-One Cloud)', subtitle: 'Word, Excel, Teams, OneDrive 1TB', badge: 'Slide 3: Tools & Apps', desc: 'เปิดแก้ไขเอกสารพร้อมกันแบบ Real-time ข้อมูลปลอดภัยบนคลาวด์', notes: '🗣️ โชว์จุดเด่นของการเปิดสเปรดชีตเดียวกันแล้วเห็นเพื่อนร่วมงานพิมพ์สดๆ' },
      { num: 4, title: 'กรณีศึกษาดิจิทัลเอเจนซี่ 70 คน', subtitle: 'Modern Hybrid Agency Case', badge: 'Slide 4: Case Study', desc: 'ลดเวลาค้นหาเอกสาร 60% และเปลี่ยนสู่การทำงานไร้กระดาษ 100%', notes: '🗣️ ชี้ให้เห็นถึงความคล่องตัวในการทำงานจากทุกที่ทุกอุปกรณ์' },
      { num: 5, title: 'แพ็กเกจรายคนและบริการย้ายข้อมูลฟรี', subtitle: 'Subscription Tiers & Migration', badge: 'Slide 5: Packages', desc: 'Basic (฿180/คน), Standard (฿450/คน), Premium (฿790/คน) พร้อมซัพพอร์ตไทย', notes: '🗣️ เน้นย้ำว่า AIS มีทีมช่วยตั้งค่าและย้ายข้อมูลอีเมลเดิมให้โดยไม่สะดุด' }
    ],
    datasheet: {
      model: 'Microsoft 365 Business Standard & Premium',
      overview: 'ชุดแอปพลิเคชันเพื่อการทำงานระดับมืออาชีพ พร้อมพื้นที่จัดเก็บข้อมูลบนคลาวด์ที่ปลอดภัยและบริการอีเมลระดับองค์กร',
      specs: [
        { label: 'Business Email', val: 'กล่องจดหมาย 50 GB ต่อผู้ใช้ พร้อมชื่อโดเมนองค์กร @yourcompany.com' },
        { label: 'Cloud Storage', val: 'OneDrive for Business 1 TB (1,024 GB) ต่อผู้ใช้ พร้อมกู้คืนไฟล์ย้อนหลัง' },
        { label: 'Office Apps', val: 'Word, Excel, PowerPoint, Outlook บน PC, Mac, แท็บเล็ต และสมาร์ทโฟน' },
        { label: 'Collaboration', val: 'Microsoft Teams รองรับการประชุมออนไลน์สูงสุด 300 คน บันทึกคลิปได้' },
        { label: 'Security & Identity', val: 'ระบบความปลอดภัยระดับสากล ป้องกันสแปมและมัลแวร์ รองรับ MFA' },
        { label: 'AIS Local Support', val: 'บริการดูแลและให้คำปรึกษาเป็นภาษาไทยผ่าน 1149 นิติบุคคล' },
        { label: 'License Compliance', val: 'ถูกลิขสิทธิ์ 100% สำหรับการใช้งานเชิงพาณิชย์ ลดความเสี่ยงทางกฎหมาย' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1-2 วัน)', title: 'Domain & Tenant Setup', desc: 'สร้าง Tenant นิติบุคคลและยืนยันกรรมสิทธิ์โดเมนเนมขององค์กร' },
        { phase: 'Phase 2 (2-3 วัน)', title: 'Mailbox Migration', desc: 'ย้ายข้อมูลอีเมล ปฏิทิน และรายชื่อติดต่อจากระบบเดิมขึ้นสู่คลาวด์' },
        { phase: 'Phase 3 (1 วัน)', title: 'Security & Policy Config', desc: 'ตั้งค่าระบบยืนยันตัวตนสองชั้น (MFA) และนโยบายสิทธิ์เข้าถึงข้อมูล' },
        { phase: 'Phase 4 (1 วัน)', title: 'User Onboarding & Handover', desc: 'แนะนำวิธีการล็อกอิน ติดตั้งโปรแกรม และส่งมอบคู่มือภาษาไทย' }
      ],
      acceptance: 'รับส่งอีเมลผ่านโดเมนองค์กรได้สมบูรณ์ • ข้อมูลอีเมลเดิมย้ายมาครบถ้วน • ติดตั้ง Office ใช้งานได้ปกติ'
    },
    pricing: {
      packS: { name: 'Business Basic', price: '฿180 /คน/ด.', ap: 'Web & Mobile Apps', fit: 'พนักงานหน้าร้าน/โรงงาน' },
      packM: { name: 'Business Standard (แนะนำ)', price: '฿450 /คน/ด.', ap: 'Desktop Apps ครบชุด', fit: 'พนักงานออฟฟิศทั่วไป' },
      packL: { name: 'Business Premium', price: '฿790 /คน/ด.', ap: 'Advanced Security + Intune', fit: 'องค์กรที่ต้องการคุมอุปกรณ์' },
      slider1: { label: 'จำนวนพนักงานที่ต้องการใช้งาน', min: 5, max: 200, step: 5, val: 25, unit: 'คน' },
      slider2: { label: 'แพ็กเกจที่ต้องการ', min: 1, max: 3, step: 1, val: 2, unit: 'แพ็กเกจ' },
      calc: (users, tier) => {
        const rate = (tier === 1 ? 180 : (tier === 2 ? 450 : 790));
        const monthly = users * rate;
        const annualBenefit = users * 800 * 12; // Time saved in searching docs & no server cost
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'cloud-pc': {
    name: 'Cloud PC for Business (DaaS)',
    code: 'CLD-DAAS-02',
    category: 'Desktop as a Service',
    video: {
      title: 'วิธี Pitch Cloud PC ใน 60 วินาที: WFH ได้จากทุกเครื่อง ข้อมูลบริษัทไม่รั่วไหล 100%',
      duration: '01:10',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“บริษัทของคุณลูกค้าให้พนักงาน Work from Home หรือใช้คอมพิวเตอร์ส่วนตัวทำงานไหมครับ? เคยกลัวไหมว่าข้อมูลลับของบริษัทจะรั่วไหลออกไป?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“การต้องคอยซื้อโน้ตบุ๊กใหม่แจกพนักงานทุกคนมีต้นทุนสูงมาก และเวลาโน้ตบุ๊กหายหรือพนักงานลาออก ไฟล์งานสำคัญในเครื่องก็ควบคุมไม่ได้”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Cloud PC คือคอมพิวเตอร์บริษัทที่อยู่บนคลาวด์ พนักงานเปิดใช้จากแท็บเล็ตหรือคอมที่บ้านได้ทันที ทำงานได้เต็มประสิทธิภาพ แต่ข้อมูลทั้งหมดอยู่บนคลาวด์ปลอดภัย ไม่หลุดออกไป”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เปิดทดลองใช้งานเครื่องจำลอง 1 เครื่องให้ทีมงานทดสอบฟรีวันนี้เลยไหมครับ?”' }
      ],
      tips: 'เน้นกลุ่มพนักงานบัญชี การเงิน หรือโปรแกรมเมอร์ที่ต้องเข้าถึงข้อมูลลับขององค์กรจากนอกสถานที่'
    },
    siteRef: {
      clientName: 'ศูนย์วิจัยและพัฒนาผลิตภัณฑ์ชีวการแพทย์',
      industry: 'วิจัย พัฒนา & เฮลธ์แคร์',
      profile: 'นักวิจัยและผู้เชี่ยวชาญ 35 คน • ต้องการประมวลผลข้อมูลสิทธิบัตรและสารเคมีจากภายนอก',
      date: 'ติดตั้ง ธ.ค. 2568',
      kpis: [
        { label: 'ข้อมูลลับรั่วไหล', value: '0 เหตุการณ์', sub: 'ล็อกสิทธิ์ดาวน์โหลดไฟล์' },
        { label: 'งบจัดซื้อฮาร์ดแวร์ใหม่', value: '-55%', sub: 'ใช้คอมพิวเตอร์เดิมต่อได้' },
        { label: 'เวลาจัดเตรียมเครื่องใหม่', value: '10 นาที', sub: 'จากเดิมต้องลงโปรแกรม 2 วัน' },
        { label: 'ความพึงพอใจการ WFH', value: '98%', sub: 'ทำงานได้เหมือนอยู่ออฟฟิศ' }
      ],
      challenges: [
        'นักวิจัยต้องทำงานจากที่บ้าน แต่ข้อมูลสูตรวิจัยเป็นความลับทางการค้า ไม่สามารถให้ดาวน์โหลดลงเครื่องส่วนตัวได้',
        'การจัดซื้อโน้ตบุ๊กสเปกสูงราคาเครื่องละ 45,000 บาท มีงบประมาณจำกัดและใช้เวลาจัดส่งนาน',
        'ฝ่ายไอทีต้องคอยวิ่งไปติดตั้งโปรแกรมเฉพาะทางให้ทีละเครื่อง เสียเวลาอย่างมาก'
      ],
      solution: [
        'จัดสรร AIS Cloud PC สเปก vCPU 4, RAM 16GB, SSD 256GB จำนวน 35 เครื่อง',
        'กำหนดนโยบายความปลอดภัย ไม่อนุญาตให้ Copy ข้อมูลออกจาก Cloud PC สู่เครื่องส่วนตัว',
        'เข้าใช้งานผ่านระบบ Secure Web Gateway พร้อมระบบยืนยันตัวตน MFA'
      ],
      quote: '“นักวิจัยสามารถเข้าถึงข้อมูลสูตรทดลองจากที่บ้านได้อย่างปลอดภัย องค์กรหมดกังวลเรื่องข้อมูลสิทธิบัตรรั่วไหล คุ้มค่ามากครับ”',
      quoteAuthor: 'ดร. นริศรา มหิทธา (Director of Research & Data Security)'
    },
    deck: [
      { num: 1, title: 'AIS Cloud PC for Business', subtitle: 'Secure Virtual Desktop for Anywhere Workforce', badge: 'Slide 1: Cover', desc: 'คอมพิวเตอร์เสมือนบนคลาวด์ ทำงานได้จากทุกที่ ปลอดภัย ข้อมูลไม่รั่วไหล', notes: '🗣️ อธิบายแนวคิด Desktop as a Service สำหรับองค์กรยุคใหม่' },
      { num: 2, title: 'ความเสี่ยงของการใช้คอมพิวเตอร์ส่วนตัวทำงาน', subtitle: 'The Security Risk of BYOD', badge: 'Slide 2: Security Risks', desc: 'ข้อมูลหลุดรอดผ่าน Flash Drive, เครื่องติดมัลแวร์, โน้ตบุ๊กสูญหาย', notes: '🗣️ ชี้ให้เห็นว่าโน้ตบุ๊กหาย 1 เครื่อง ข้อมูลในนั้นอาจมีมูลค่ามหาศาล' },
      { num: 3, title: 'ทำงานบน Cloud ข้อมูลไม่ตกค้างในเครื่อง', subtitle: 'Zero Footprint Architecture', badge: 'Slide 3: Architecture', desc: 'เข้าใช้งานผ่านเบราว์เซอร์หรือแอป ควบคุมสิทธิ์การเซฟไฟล์จากส่วนกลาง', notes: '🗣️ อธิบายว่าจอภาพถูกสตรีมมาแสดงผล แต่ตัวไฟล์จริงอยู่ในดาต้าเซ็นเตอร์ AIS' },
      { num: 4, title: 'กรณีศึกษาศูนย์วิจัยสิทธิบัตรทางการแพทย์', subtitle: 'Healthcare Research Case Study', badge: 'Slide 4: Case Study', desc: 'ลดงบซื้อเครื่องใหม่ 55% และป้องกันข้อมูลสูตรสิทธิบัตรรั่วไหล 100%', notes: '🗣️ เล่าถึงการควบคุมความลับทางการค้าที่เข้มงวด' },
      { num: 5, title: 'แพ็กเกจสเปกเครื่องรายเดือน', subtitle: 'Virtual Machine Specifications', badge: 'Slide 5: Packages', desc: 'Standard (฿1,290), Performance (฿1,990), Heavy Workload (฿2,890)', notes: '🗣️ นำเสนอว่าสามารถปรับเพิ่มสเปก CPU/RAM ได้ทันทีโดยไม่ต้องซื้อเครื่องใหม่' }
    ],
    datasheet: {
      model: 'AIS Cloud PC Business Edition',
      overview: 'บริการเครื่องคอมพิวเตอร์ส่วนบุคคลบนระบบคลาวด์ (DaaS) ภายใต้ดาต้าเซ็นเตอร์มาตรฐานสากลในประเทศไทย',
      specs: [
        { label: 'Operating System', val: 'Windows 11 Enterprise พร้อมลิขสิทธิ์ถูกต้องตามกฎหมาย' },
        { label: 'Virtual Hardware', val: 'เริ่มต้น vCPU 2-8 Cores, RAM 8-32 GB, NVMe Storage 128-512 GB' },
        { label: 'Client Access', val: 'รองรับการเชื่อมต่อจาก Windows, macOS, iPad, Android และ Web Browser' },
        { label: 'Security & DLP', val: 'ป้องกันการคัดลอกไฟล์ออก (Copy/Paste Restriction), Watermarking' },
        { label: 'Authentication', val: 'รองรับการยืนยันตัวตนผ่าน Microsoft Entra ID (Azure AD) และ MFA' },
        { label: 'Data Location', val: 'จัดเก็บข้อมูลภายในประเทศไทย (AIS Data Center) สอดคล้องตามเกณฑ์ PDPA' },
        { label: 'Backup & SLA', val: 'สำรองข้อมูลภาพระบบอัตโนมัติ พร้อมการันตี Service Uptime 99.9%' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'User Profile & App Sizing', desc: 'รวบรวมรายชื่อโปรแกรมที่ต้องใช้และกำหนดสเปกเครื่องเสมือน' },
        { phase: 'Phase 2 (1 วัน)', title: 'Master Image Creation', desc: 'สร้าง Master Template พร้อมติดตั้งโปรแกรมและนโยบายความปลอดภัย' },
        { phase: 'Phase 3 (1 วัน)', title: 'Batch Provisioning', desc: 'สร้าง Cloud PC ตามจำนวนผู้ใช้และเชื่อมโยงบัญชีอีเมลบริษัท' },
        { phase: 'Phase 4 (1 วัน)', title: 'User Testing & Sign-Off', desc: 'ทดสอบการล็อกอินจากอุปกรณ์ต่างๆ และส่งมอบระบบบริหารจัดการ' }
      ],
      acceptance: 'ล็อกอินเข้าใช้งานได้รวดเร็ว • ไม่สามารถก๊อปปี้ไฟล์ออกสู่เครื่องส่วนตัวได้ • เสียงและวิดีโอลื่นไหล'
    },
    pricing: {
      packS: { name: 'Standard (งานเอกสาร)', price: '฿1,290 /คน/ด.', ap: 'vCPU 2, RAM 8GB', fit: 'งานธุรการ/แอดมิน' },
      packM: { name: 'Performance (แนะนำ)', price: '฿1,990 /คน/ด.', ap: 'vCPU 4, RAM 16GB', fit: 'งานบัญชี/โปรแกรมเมอร์' },
      packL: { name: 'Power User', price: '฿2,890 /คน/ด.', ap: 'vCPU 8, RAM 32GB', fit: 'งานวิเคราะห์ข้อมูล/กราฟิก' },
      slider1: { label: 'จำนวนเครื่อง Cloud PC ที่ต้องการ', min: 2, max: 100, step: 1, val: 15, unit: 'เครื่อง' },
      slider2: { label: 'สเปกเครื่องที่ต้องการ', min: 1, max: 3, step: 1, val: 2, unit: 'ระดับ' },
      calc: (pcs, tier) => {
        const rate = (tier === 1 ? 1290 : (tier === 2 ? 1990 : 2890));
        const monthly = pcs * rate;
        const hardwareSaved = pcs * 35000 / 3; // Saved annual hardware depreciation
        const annualBenefit = hardwareSaved + (pcs * 6000);
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'ais-oci': {
    name: 'AIS Cloud powered by Oracle (OCI)',
    code: 'CLD-OCI-03',
    category: 'AIS Cloud',
    video: {
      title: 'วิธี Pitch AIS Cloud OCI ใน 60 วินาที: คลาวด์ระดับโลกในไทย จ่ายเงินบาท หมดห่วงเรื่องค่าเงิน',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยเจอปัญหาบิลค่าคลาวด์ต่างประเทศแพงขึ้นเรื่อยๆ จากอัตราแลกเปลี่ยนเงินดอลลาร์ และโดนเก็บค่าดึงข้อมูล (Egress Fee) ยิบย่อยไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“แถมเวลาเซิร์ฟเวอร์คลาวด์มีปัญหา ต้องเปิดตั๋วคุยกับซัพพอร์ตภาษาอังกฤษ รอเป็นวัน ทำให้ระบบสำคัญของธุรกิจสะดุด”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS ร่วมมือกับ Oracle เปิดตัว AIS Cloud OCI ในประเทศไทย คิดค่าบริการเป็นเงินบาทคงที่ ดาต้าเซ็นเตอร์อยู่ในไทยความเร็วสูงกว่าเดิม 3 เท่า มีทีมวิศวกรไทยดูแล 24 ชม.”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“เราช่วยประเมินค่าใช้จ่ายเทียบกับคลาวด์เดิมที่คุณใช้อยู่ฟรี พร้อมเครดิตทดลองใช้ วันนี้ขออนุญาตส่งแบบประเมินให้นะครับ”' }
      ],
      tips: 'เน้นย้ำคำว่า "จ่ายเงินบาทคงที่" และ "Data Center อยู่ในไทยตรงตามเกณฑ์กฎหมาย PDPA"'
    },
    siteRef: {
      clientName: 'บริษัท ไทยเจริญ โพรเซสซิ่ง จำกัด',
      industry: 'โรงงานอุตสาหกรรม & ผลิตอาหาร',
      profile: 'โรงงานผลิตอาหารส่งออก 3 แห่ง • ระบบ SAP ERP และฐานข้อมูล Oracle Database',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'ค่าใช้จ่ายคลาวด์ต่อเดือน', value: '-35%', sub: 'จ่ายเป็นเงินบาทคงที่' },
        { label: 'ความเร็ว Database (Latency)', value: '< 3 ms', sub: 'เซิร์ฟเวอร์อยู่ในประเทศ' },
        { label: 'ค่าดึงข้อมูล (Data Egress)', value: 'ฟรี 10 TB', sub: 'ไม่มีค่าใช้จ่ายแอบแฝง' },
        { label: 'การสนับสนุนหลังการขาย', value: 'ภาษาไทย 24x7', sub: 'ติดต่อทีมวิศวกรได้ทันที' }
      ],
      challenges: [
        'เดิมใช้คลาวด์ที่สิงคโปร์ เจอปัญหาค่าเงินดอลลาร์ผันผวน ทำให้ควบคุมงบประมาณรายจ่ายยาก',
        'ระบบ ERP มีการส่งข้อมูลระหว่างโรงงานกับคลาวด์ตลอดเวลา เสียค่า Data Egress Fee เดือนละหลายหมื่น',
        'เวลาเกิดปัญหาฐานข้อมูล ต้องรอคิวซัพพอร์ตต่างประเทศเป็นเวลานาน'
      ],
      solution: [
        'ย้ายฐานข้อมูลและระบบ ERP ขึ้น AIS Cloud powered by Oracle ณ ดาต้าเซ็นเตอร์บางนา',
        'เชื่อมต่อตรงด้วยวงจร AIS Cloud Express Connect ความเร็วสูง มี Latency ต่ำมาก',
        'ทำสัญญาค่าบริการเป็นเงินบาทคงที่ พร้อมทีมงาน Cloud Solution Architect คนไทยดูแล'
      ],
      quote: '“ระบบ ERP ตอบสนองไวขึ้นอย่างเห็นได้ชัด ค่าบริการรายเดือนนิ่งควบคุมง่าย และสบายใจที่มีทีมงานคนไทยดูแลระบบให้ตลอด 24 ชม.”',
      quoteAuthor: 'คุณสุชาติ พรหมมินทร์ (VP of Information Technology)'
    },
    deck: [
      { num: 1, title: 'AIS Cloud powered by Oracle (OCI)', subtitle: 'Sovereign Enterprise Cloud for Thai Businesses', badge: 'Slide 1: Cover', desc: 'คลาวด์ประสิทธิภาพระดับ Enterprise ดาต้าเซ็นเตอร์ในประเทศไทย', notes: '🗣️ แนะนำความร่วมมือระดับยุทธศาสตร์ระหว่าง AIS และ Oracle' },
      { num: 2, title: 'ทำไมคลาวด์ต่างประเทศถึงสร้างภาระให้ธุรกิจ', subtitle: 'Hidden Costs & Foreign Exchange Risks', badge: 'Slide 2: The Challenge', desc: 'ความเสี่ยงค่าเงินดอลลาร์, ค่า Data Transfer แพง, ซัพพอร์ตภาษาอังกฤษ', notes: '🗣️ พูดคุยเรื่องปัญหาบิลคลาวด์ที่ไม่เคยนิ่งและคาดเดายาก' },
      { num: 3, title: 'จุดเด่นของ AIS Cloud OCI ประเทศไทย', subtitle: 'Local Datacenter & Thai Baht Billing', badge: 'Slide 3: Advantages', desc: 'Latency ต่ำกว่า 3ms, ฟรี Egress Traffic 10TB, คิดเงินบาท, ตรงตาม PDPA', notes: '🗣️ อธิบายว่าเหมาะที่สุดสำหรับระบบฐานข้อมูลและ ERP ที่ต้องการความเร็วสูง' },
      { num: 4, title: 'ความสำเร็จจากโรงงานผลิตอาหารส่งออก', subtitle: 'Manufacturing Enterprise Case', badge: 'Slide 4: Case Study', desc: 'ลดค่าใช้จ่ายคลาวด์ 35% และระบบ ERP ตอบสนองไวขึ้น 3 เท่า', notes: '🗣️ เล่าถึงความสำเร็จของการย้ายระบบโดยไม่มี Downtime' },
      { num: 5, title: 'แพ็กเกจการย้ายระบบและโปรโมชั่นพิเศษ', subtitle: 'Cloud Migration & Credit Offer', badge: 'Slide 5: Packages', desc: 'รับเครดิตทดลองใช้ฟรี พร้อมทีมงาน AIS ช่วยประเมินและ Migrate ข้อมูล', notes: '🗣️ ชวนลูกค้านำสเปกเซิร์ฟเวอร์เดิมมาให้ทีม AIS คำนวณราคาเปรียบเทียบฟรี' }
    ],
    datasheet: {
      model: 'AIS Cloud Dedicated Compute & Database (OCI)',
      overview: 'บริการโครงสร้างพื้นฐานคลาวด์ระดับไฮเปอร์สเกลเลอร์ ให้บริการจากดาต้าเซ็นเตอร์ระดับ Tier IV ของ AIS ในประเทศไทย',
      specs: [
        { label: 'Datacenter Location', val: 'AIS Data Center (Bangna, Thailand) รองรับเกณฑ์ Sovereign Cloud' },
        { label: 'Compute Architecture', val: 'AMD EPYC & Intel Xeon Processors, Bare Metal & Flexible VMs' },
        { label: 'Storage Performance', val: 'Ultra-High Performance Block Volumes สูงสุด 300,000 IOPS' },
        { label: 'Data Transfer (Egress)', val: 'ฟรีค่าโอนย้ายข้อมูลขาออก (Outbound Data) 10 TB แรกต่อเดือน' },
        { label: 'Network Latency', val: 'ต่ำกว่า 3 มิลลิวินาที (ms) สำหรับการเข้าถึงจากเครือข่ายภายในประเทศ' },
        { label: 'Currency Billing', val: 'คิดค่าบริการเป็นสกุลเงินบาท (THB) คงที่ตามสัญญา ไม่ผันผวนตามดอลลาร์' },
        { label: 'Compliance', val: 'ISO 27001, SOC 1/2/3, PCI-DSS, สอดคล้องตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 สัปดาห์)', title: 'Cloud Architecture & Sizing', desc: 'วิเคราะห์เวิร์กโหลดเดิมและออกแบบโครงสร้างคลาวด์ที่เหมาะสม' },
        { phase: 'Phase 2 (1 สัปดาห์)', title: 'PoC & Network Interconnect', desc: 'จัดตั้งสภาพแวดล้อมทดสอบและเชื่อมต่อวงจร Express Connect' },
        { phase: 'Phase 3 (1 สัปดาห์)', title: 'Data Migration & Cutover', desc: 'ย้ายข้อมูลฐานข้อมูลและทำการ Cutover ระบบตามแผนบำรุงรักษา' },
        { phase: 'Phase 4 (3 วัน)', title: 'Performance Optimization', desc: 'ปรับแต่งประสิทธิภาพ ตรวจสอบความปลอดภัย และส่งมอบแดชบอร์ด' }
      ],
      acceptance: 'ระบบทำงานบนคลาวด์ใหม่ได้สมบูรณ์ • เวลาตอบสนองเร็วขึ้นกว่าเดิม • ฐานข้อมูลครบถ้วน 100%'
    },
    pricing: {
      packS: { name: 'Cloud Starter', price: '฿8,900 /ด.', ap: '4 OCPU / 32GB RAM', fit: 'เว็บแอปพลิเคชัน & ฐานข้อมูลเล็ก' },
      packM: { name: 'Enterprise ERP (แนะนำ)', price: '฿24,500 /ด.', ap: '16 OCPU / 128GB RAM', fit: 'ระบบ ERP / CRM องค์กร' },
      packL: { name: 'High-Performance DB', price: '฿55,000 /ด.', ap: 'Dedicated Cluster', fit: 'ระบบงานธุรกรรมหลัก (Core Biz)' },
      slider1: { label: 'จำนวน CPU Cores (OCPU) ที่ต้องการ', min: 2, max: 64, step: 2, val: 8, unit: 'Cores' },
      slider2: { label: 'ขนาดพื้นที่จัดเก็บข้อมูล (Storage SSD)', min: 100, max: 2000, step: 100, val: 500, unit: 'GB' },
      calc: (cores, storage) => {
        const monthly = (cores * 1800) + (storage * 6);
        const foreignCloudCost = monthly * 1.5; // Estimated 50% more on foreign cloud with egress
        const annualBenefit = (foreignCloudCost - monthly) * 12;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'backup-dr': {
    name: 'Backup and DR Solution',
    code: 'BCK-DR-01',
    category: 'Backup & Recovery',
    video: {
      title: 'วิธี Pitch Backup & DR ใน 60 วินาที: ประกันชีวิตข้อมูล กู้คืนระบบใน 15 นาที',
      duration: '01:10',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยคิดไหมครับว่า ถ้าคืนนี้เซิร์ฟเวอร์บัญชีที่ออฟฟิศไฟไหม้ หรือโดนแรนซัมแวร์ล็อกไฟล์ พรุ่งนี้เช้าบริษัทจะเปิดทำงานต่อได้ไหม?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“หลายแห่งยังให้แอดมินเอาฮาร์ดดิสก์พกพามาคอยก็อปปี้ไฟล์ทุกวันศุกร์ ซึ่งถ้าโดนไวรัส ฮาร์ดดิสก์ที่เสียบคาไว้ก็โดนล็อกไปด้วย ข้อมูลหายหมด”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Backup & DR สำรองข้อมูลขึ้นคลาวด์อัตโนมัติทุกคืน เป็นแบบ Immutable Storage ที่ไวรัสไม่สามารถเข้าไปลบหรือแก้ไขได้ และกู้คืนทั้งระบบกลับมาเปิดทำงานได้ใน 15 นาที”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เริ่มต้นเพียงเดือนละพันกว่าบาท เหมือนซื้อประกันชีวิตให้ข้อมูล ขออนุญาตส่งทีมเข้าไปติดตั้งทดสอบให้ฟรี 1 เครื่องนะครับ”' }
      ],
      tips: 'ถามผู้บริหารว่า "ถ้าข้อมูลย้อนหลัง 5 ปีหายไปทั้งหมด กิจการจะดำเนินการต่อได้หรือไม่?"'
    },
    siteRef: {
      clientName: 'บริษัท อุดมโชค การบัญชีและภาษีอากร จำกัด',
      industry: 'สำนักงานบัญชี & บริหารการเงิน',
      profile: 'ดูแลบัญชีให้ลูกค้ากว่า 200 บริษัท • ฐานข้อมูล Express และไฟล์เอกสารสแกน 8 TB',
      date: 'ติดตั้ง พ.ย. 2568',
      kpis: [
        { label: 'เวลากู้คืนระบบ (RTO)', value: '25 นาที', sub: 'หลังเกิดเหตุไฟฟ้าลัดวงจร' },
        { label: 'ข้อมูลสูญหาย (RPO)', value: '0 บันทึก', sub: 'สำรองแบบเรียลไทม์' },
        { label: 'ความเสียหายที่ป้องกันได้', value: '฿2,500,000', sub: 'ค่าปรับภาษีและค่าชดเชย' },
        { label: 'ต้านทาน Ransomware', value: '100%', sub: 'ระบบ Immutable Lock' }
      ],
      challenges: [
        'เคยเกิดเหตุไฟฟ้าลัดวงจรที่ห้องเซิร์ฟเวอร์จนเมนบอร์ดและฮาร์ดดิสก์ไหม้เสียหายทั้งหมด',
        'วิธีสำรองเดิมคือเสียบ Flash Drive สำรองไว้สัปดาห์ละครั้ง ทำให้ข้อมูล 6 วันสูญหายไป',
        'กังวลอย่างยิ่งว่าหากโดน Ransomware ล็อกไฟล์ ข้อมูลภาษีของลูกค้า 200 บริษัทจะเสียหาย'
      ],
      solution: [
        'ติดตั้งระบบ AIS Cloud Backup สำรองฐานข้อมูลอัตโนมัติทุกคืนแบบเข้ารหัส AES-256',
        'เปิดฟังก์ชัน Immutable Storage ข้อมูลที่สำรองแล้วไม่สามารถแก้ไขหรือสั่งลบได้ 30 วัน',
        'จำลองระบบสำรอง Disaster Recovery บน AIS Cloud พร้อมเปิดเครื่องเสมือนทดแทนได้ทันที'
      ],
      quote: '“ตอนที่เซิร์ฟเวอร์ไหม้ ทีมงานแทบช็อก แต่ด้วยระบบ AIS Cloud Backup เรากู้ข้อมูลทั้ง 200 บริษัทกลับมาได้ใน 25 นาที ขอบคุณ AIS มากจริงๆ ครับ”',
      quoteAuthor: 'คุณวิมลวรรณ โชคอภิบาล (Managing Partner)'
    },
    deck: [
      { num: 1, title: 'AIS Backup and DR Solution', subtitle: 'Ransomware-Proof Business Continuity & Data Protection', badge: 'Slide 1: Cover', desc: 'ประกันภัยข้อมูลองค์กร สำรองอัตโนมัติ กู้คืนฉับไวใน 15 นาที', notes: '🗣️ ชี้ให้เห็นว่าข้อมูลคือสินทรัพย์ที่มีค่าที่สุดขององค์กรยุคนี้' },
      { num: 2, title: 'ทำไมการสำรองข้อมูลแบบเดิมถึงไม่ปลอดภัย', subtitle: 'The Danger of Traditional USB Backups', badge: 'Slide 2: Hidden Risks', desc: 'ฮาร์ดดิสก์พกพาเสี่ยงชำรุด, เสี่ยงโดนแรนซัมแวร์ล็อกพร้อมกัน, ลืมสำรอง', notes: '🗣️ ถามลูกค้าถึงวิธีการสำรองข้อมูลในปัจจุบันว่าปลอดภัยจริงหรือไม่' },
      { num: 3, title: 'สถาปัตยกรรม Immutable Cloud Backup', subtitle: 'WORM (Write Once, Read Many) Technology', badge: 'Slide 3: Architecture', desc: 'ข้อมูลถูกล็อกบนคลาวด์ แม้แฮกเกอร์ได้รหัสผ่านก็ไม่สามารถลบหรือเข้ารหัสซ้ำได้', notes: '🗣️ อธิบายคำว่า Immutable Storage ที่เป็นมาตรฐานต้านแรนซัมแวร์' },
      { num: 4, title: 'กรณีศึกษาสำนักงานบัญชีที่เซิร์ฟเวอร์ไหม้', subtitle: 'Accounting Firm Recovery Case', badge: 'Slide 4: Case Study', desc: 'กู้คืนฐานข้อมูล 200 บริษัทได้ใน 25 นาที ป้องกันความเสียหายกว่า 2.5 ล้านบาท', notes: '🗣️ เล่าเคสจริงที่พิสูจน์แล้วว่าระบบสามารถกู้คืนได้จริงในเวลาคับขัน' },
      { num: 5, title: 'แพ็กเกจพื้นที่สำรองข้อมูลรายเดือน', subtitle: 'Storage Capacity Packages', badge: 'Slide 5: Packages', desc: '500 GB (฿1,800/ด), 2 TB (฿4,500/ด), 10 TB (฿12,500/ด) รวมซอฟต์แวร์และคลาวด์', notes: '🗣️ นำเสนอแพ็กเกจ 2TB ที่เพียงพอสำหรับสำนักงานขนาดกลางส่วนใหญ่' }
    ],
    datasheet: {
      model: 'AIS Cloud Backup & Instant DR',
      overview: 'โซลูชันสำรองข้อมูลและกู้คืนระบบจากภัยพิบัติระดับองค์กร รองรับทั้งเซิร์ฟเวอร์จริง (Physical) และเครื่องเสมือน (Virtual Machines)',
      specs: [
        { label: 'Supported Platforms', val: 'Windows Server, Linux, VMware vSphere, Microsoft Hyper-V, Nutanix' },
        { label: 'Encryption Standard', val: 'เข้ารหัสข้อมูลตั้งแต่ต้นทางและปลายทางด้วยมาตรฐาน AES-256' },
        { label: 'Ransomware Protection', val: 'Immutable Storage Lock (WORM) ป้องกันการลบและดัดแปลงไฟล์ 100%' },
        { label: 'Instant Recovery (RTO)', val: 'เปิดรันเครื่องเสมือนจากไฟล์สำรองข้อมูลได้ทันทีภายใน 15 นาที' },
        { label: 'Deduplication Ratio', val: 'เทคโนโลยีบีบอัดและลดความซ้ำซ้อนข้อมูล ประหยัดพื้นที่จัดเก็บบนคลาวด์สูงสุด 70%' },
        { label: 'Datacenter Location', val: 'ดาต้าเซ็นเตอร์มาตรฐานสากลของ AIS ภายในประเทศไทย สอดคล้องตามเกณฑ์ PDPA' },
        { label: 'Management Portal', val: 'หน้าจอควบคุมผ่านคลาวด์ พร้อมรายงานผลการสำรองข้อมูลผ่านอีเมลทุกเช้า' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'Backup Scope Assessment', desc: 'สำรวจเครื่องเซิร์ฟเวอร์ ปริมาณข้อมูล และกำหนดรอบเวลาการสำรองข้อมูล' },
        { phase: 'Phase 2 (1 วัน)', title: 'Agent Deployment', desc: 'ติดตั้งซอฟต์แวร์ Backup Agent บนเซิร์ฟเวอร์เป้าหมายโดยไม่ต้องรีสตาร์ท' },
        { phase: 'Phase 3 (1-2 วัน)', title: 'Initial Full Backup Seed', desc: 'ทำการสำรองข้อมูลเต็มรูปแบบชุดแรกขึ้นสู่ AIS Cloud' },
        { phase: 'Phase 4 (1 วัน)', title: 'Disaster Recovery Drill', desc: 'จำลองการกู้คืนระบบเสมือนและส่งมอบคู่มือขั้นตอนการกู้คืนฉุกเฉิน' }
      ],
      acceptance: 'สำรองข้อมูลสำเร็จ 100% ไม่มี Error • ทดสอบกู้คืนไฟล์ได้ถูกต้อง • ได้รับรายงานยืนยันทางอีเมล'
    },
    pricing: {
      packS: { name: 'Starter 500 GB', price: '฿1,800 /ด.', ap: '1-2 เซิร์ฟเวอร์', fit: 'SME ที่มีเซิร์ฟเวอร์หลัก 1 ตัว' },
      packM: { name: 'Business 2 TB (แนะนำ)', price: '฿4,500 /ด.', ap: 'สูงสุด 5 เซิร์ฟเวอร์', fit: 'องค์กรขนาดกลาง ฐานข้อมูล ERP' },
      packL: { name: 'Enterprise 10 TB', price: '฿12,500 /ด.', ap: 'ไม่จำกัดเซิร์ฟเวอร์', fit: 'องค์กรขนาดใหญ่ คลังข้อมูล' },
      slider1: { label: 'ปริมาณข้อมูลที่ต้องการสำรอง (GB/TB)', min: 100, max: 5000, step: 100, val: 1000, unit: 'GB' },
      slider2: { label: 'จำนวนเซิร์ฟเวอร์และเครื่องคอมพิวเตอร์', min: 1, max: 20, step: 1, val: 3, unit: 'เครื่อง' },
      calc: (gb, servers) => {
        let monthly = 1800;
        if (gb > 2000) monthly = 12500 + (gb - 2000) * 1.5;
        else if (gb > 500) monthly = 4500 + (gb - 500) * 2;
        const potentialLoss = 2500000;
        const annualBenefit = (servers * 25000) + 180000;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'sme-mpbx': {
    name: 'SME Smart MPBX & Voice Bot',
    code: 'COM-MPBX-01',
    category: 'Communication Service',
    video: {
      title: 'วิธี Pitch SME Smart MPBX ใน 60 วินาที: มือถือกลายเป็นเบอร์ออฟฟิศ มีบอทรับสาย 24 ชม.',
      duration: '01:10',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยพลาดออเดอร์สำคัญเพราะลูกค้าโทรเข้าเบอร์ออฟฟิศตอน 2 ทุ่มแล้วไม่มีคนรับสาย หรือพนักงานขายใช้เบอร์ส่วนตัวโทรจนลูกค้าไม่ไว้ใจไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“ตู้สาขาโทรศัพท์แบบเดิม (PABX) มีราคาเป็นแสน ต้องเดินสายโทรศัพท์ยุ่งยาก และโทรศัพท์ได้เฉพาะเวลาที่นั่งอยู่ที่โต๊ะทำงานเท่านั้น”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS SME Smart MPBX เปลี่ยนมือถือพนักงานให้เป็นเบอร์ต่อออฟฟิศ โทรหากันฟรี โทรออกโชว์เบอร์กลางบริษัท พร้อมระบบ AI Voice Bot ช่วยตอบคำถามลูกค้าตลอด 24 ชม.”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เริ่มต้นเพียงเดือนละ 990 บาท ไม่ต้องซื้อตู้ฮาร์ดแวร์ วันนี้ขอทดลองโทรเข้าเบอร์ตัวอย่างให้ฟังเสียงเมนูตอบรับนะครับ”' }
      ],
      tips: 'ให้ลูกค้าลองคิดถึงยอดขายที่หลุดไปในแต่ละเดือนจากการที่ไม่มีคนรับโทรศัพท์นอกเวลาทำการ'
    },
    siteRef: {
      clientName: 'บริษัท เจริญทรัพย์ โฮมแคร์ แอนด์ เซอร์วิส จำกัด',
      industry: 'บริการซ่อมบำรุง & ค้าปลีกออนไลน์',
      profile: 'ช่างเทคนิคและทีมงานบริการ 25 คน • ลูกค้าโทรสอบถามและจองคิวบริการตลอดวัน',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'อัตราการรับสายลูกค้า', value: '100%', sub: 'ไม่พลาดสายแม้ตอนกลางคืน' },
        { label: 'ค่าโทรศัพท์สำนักงาน', value: '-52%', sub: 'โทรภายในกลุ่มฟรีไม่จำกัด' },
        { label: 'ยอดจองคิวบริการเพิ่มขึ้น', value: '+28%', sub: 'จากระบบ AI Voice Bot 24 ชม.' },
        { label: 'ภาพลักษณ์องค์กร', value: 'มืออาชีพ', sub: 'โชว์เบอร์กลาง 02 ทุกสาย' }
      ],
      challenges: [
        'ลูกค้าโทรเข้ามาจองคิวซ่อมตอนหัวค่ำแล้วไม่มีคนรับสาย ลูกค้าจึงเปลี่ยนไปจ้างเจ้าอื่น',
        'ช่างใช้เบอร์มือถือส่วนตัวโทรหาลูกค้า ทำให้ลูกค้าไม่ยอมรับสายเพราะกลัวมิจฉาชีพ',
        'ค่าโทรศัพท์มือถือของฝ่ายขายและช่างเบิกจ่ายสูงมากในแต่ละเดือน'
      ],
      solution: [
        'ติดตั้งระบบ AIS SME Smart MPBX ใช้เบอร์กลาง 02 นิติบุคคล เชื่อมต่อเข้ามือถือทีมงาน 25 คน',
        'ตั้งระบบเสียงตอบรับอัตโนมัติ (IVR) กด 1 จองคิว กด 2 แผนกบัญชี กด 3 สายด่วนฉุกเฉิน',
        'เปิดระบบ AI Voice Bot รับเรื่องและบันทึกข้อมูลลูกค้านอกเวลาทำการส่งเข้าไลน์แอดมิน'
      ],
      quote: '“ยอดขายเราโตขึ้น 28% ทันทีตั้งแต่มีระบบนี้ ลูกค้าประทับใจที่โทรมาตอนไหนก็มีระบบรับเรื่อง ช่างโทรหากันฟรี ประหยัดค่าโทรไปเยอะมากครับ”',
      quoteAuthor: 'คุณวิลาสินี วัฒนากูล (General Manager)'
    },
    deck: [
      { num: 1, title: 'AIS SME Smart MPBX & Voice Bot', subtitle: 'Next-Gen Mobile PBX for Modern Business', badge: 'Slide 1: Cover', desc: 'ระบบตู้สาขาโทรศัพท์บนมือถือ โทรฟรีในกลุ่ม พร้อม AI ช่วยรับสาย 24 ชม.', notes: '🗣️ อธิบายว่าภาพลักษณ์ของเบอร์โทร 02 นิติบุคคลสร้างความเชื่อมั่นได้ทันที' },
      { num: 2, title: 'ทำไมการใช้เบอร์มือถือส่วนตัวถึงเสียโอกาสทางธุรกิจ', subtitle: 'The Mobile Selling Dilemma', badge: 'Slide 2: Business Pain', desc: 'ลูกค้าไม่รับสายเบอร์แปลก, พนักงานลาออกลูกค้าหลุดตาม, พลาดสายกลางคืน', notes: '🗣️ ชี้ให้เห็นว่าคนยุคนี้ระแวงเบอร์มือถือแปลก แต่ไว้ใจเบอร์ 02 ของบริษัท' },
      { num: 3, title: 'ทำงานได้ทุกที่ผ่านสมาร์ทโฟนของพนักงาน', subtitle: 'Anywhere Office Softphone', badge: 'Slide 3: Architecture', desc: 'โทรออกโชว์เบอร์กลางบริษัท • โอนสายข้ามแผนกได้ใน 1 วินาที • โทรฟรีในกลุ่ม', notes: '🗣️ โชว์ความง่ายที่ไม่ต้องเดินสายโทรศัพท์ในออฟฟิศอีกต่อไป' },
      { num: 4, title: 'กรณีศึกษาธุรกิจบริการและค้าปลีก', subtitle: 'Service Business Success Story', badge: 'Slide 4: Case Study', desc: 'ยอดจองคิวโต 28% และลดค่าโทรศัพท์ลง 52% ทันทีในเดือนแรก', notes: '🗣️ เล่าถึงการที่ AI Voice Bot ช่วยเก็บ Lead ลูกค้ายามค่ำคืน' },
      { num: 5, title: 'แพ็กเกจเบอร์และคู่สายรายเดือน', subtitle: 'MPBX Subscription Packages', badge: 'Slide 5: Packages', desc: 'Pack S 5 สาย (฿990/ด), Pack M 15 สาย (฿2,490/ด), Pack L 30 สาย (฿4,500/ด)', notes: '🗣️ สรุปค่าใช้จ่ายที่ถูกกว่าการติดตั้งตู้โทรศัพท์ฮาร์ดแวร์เดิมนับสิบเท่า' }
    ],
    datasheet: {
      model: 'AIS SME Smart MPBX Cloud Service',
      overview: 'ระบบตู้สาขาโทรศัพท์เสมือนบนโครงข่ายโทรศัพท์เคลื่อนที่ AIS ไม่ต้องลงทุนตู้สาขาและไม่ต้องเดินสายโทรศัพท์ในอาคาร',
      specs: [
        { label: 'Central Number Type', val: 'เบอร์พื้นฐานนิติบุคคล 02 / 053 หรือเบอร์มือถือ AIS องค์กร' },
        { label: 'Internal Extension', val: 'ผูกกับเบอร์โทรศัพท์เคลื่อนที่ของพนักงาน (AIS SIM / eSIM)' },
        { label: 'Group Free Call', val: 'โทรหากันภายในกลุ่มหมายเลขบริษัท ฟรีตลอด 24 ชั่วโมง ไม่จำกัดนาที' },
        { label: 'Interactive Voice (IVR)', val: 'ระบบเสียงตอบรับอัตโนมัติหลายชั้น (Multi-level Auto Attendant)' },
        { label: 'Voice Recording', val: 'ระบบบันทึกเสียงสนทนา (Voice Recording) เพื่อตรวจสอบมาตรฐานการบริการ' },
        { label: 'AI Voice Bot Support', val: 'ระบบตอบคำถามพื้นฐานและบันทึกข้อความลูกค้าส่งแจ้งเตือนผ่าน LINE' },
        { label: 'Web Management Portal', val: 'หน้าจอจัดการเบอร์ต่อ กำหนดเวลาทำการ และดูสถิติสายโทรเข้า-ออก' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1-2 วัน)', title: 'Number Selection & Routing Design', desc: 'เลือกเบอร์กลางของบริษัทและออกแบบผังการโอนสายตามแผนก' },
        { phase: 'Phase 2 (1 วัน)', title: 'Audio Script Recording', desc: 'บันทึกเสียงเมนูตอบรับ (IVR) ภาษาไทยและภาษาอังกฤษตามบทที่กำหนด' },
        { phase: 'Phase 3 (1 วัน)', title: 'SIM & Extension Mapping', desc: 'ผูกเบอร์ต่อเข้ากับซิมพนักงานและตั้งค่าเวลาทำการของบริษัท' },
        { phase: 'Phase 4 (1 วัน)', title: 'Call Testing & Handover', desc: 'ทดสอบการโทรเข้า-ออก การโอนสาย และส่งมอบสิทธิ์ดูแลระบบ' }
      ],
      acceptance: 'โทรเข้าเบอร์กลางติดระบบเสียงตอบรับถูกต้อง • โอนสายไปยังมือถือพนักงานได้ราบรื่น • โทรภายในกลุ่มฟรี'
    },
    pricing: {
      packS: { name: 'Pack S (5 เบอร์ต่อ)', price: '฿990 /ด.', ap: '1 เบอร์กลาง + 5 เบอร์ต่อ', fit: 'ร้านค้า/ธุรกิจขนาดเล็ก' },
      packM: { name: 'Pack M (15 เบอร์ต่อ)', price: '฿2,490 /ด.', ap: '1 เบอร์กลาง + 15 เบอร์ต่อ', fit: 'บริษัทขนาดกลาง (แนะนำ)' },
      packL: { name: 'Pack L (30 เบอร์ต่อ)', price: '฿4,500 /ด.', ap: '1 เบอร์กลาง + 30 เบอร์ต่อ', fit: 'บริษัทที่มีฝ่ายขาย/บริการ' },
      slider1: { label: 'จำนวนพนักงานที่ต้องการเบอร์ต่อ', min: 3, max: 50, step: 1, val: 10, unit: 'คน' },
      slider2: { label: 'จำนวนเบอร์กลาง 02/มือถือ', min: 1, max: 5, step: 1, val: 1, unit: 'เบอร์' },
      calc: (ext, nums) => {
        let monthly = 990;
        if (ext > 15) monthly = 4500 + (ext - 15) * 180;
        else if (ext > 5) monthly = 2490 + (ext - 5) * 150;
        const phoneBillSaved = ext * 450 * 12; // Free internal call & corporate rate
        const leadsGained = 120000; // Extra leads captured after hours
        const annualBenefit = phoneBillSaved + leadsGained;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'smart-vision': {
    name: 'AI-Vision (Video Analytics)',
    code: 'SMT-VIS-02',
    category: 'Smart Property & Retail',
    video: {
      title: 'วิธี Pitch AI-Vision ใน 60 วินาที: เปลี่ยนกล้องวงจรปิดเป็นเซลส์ ช่วยเพิ่มยอดขายหน้าร้าน',
      duration: '01:15',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยสงสัยไหมครับว่า ในแต่ละวันมีลูกค้าเดินผ่านหน้าร้านกี่คน เดินเข้ามาดูกี่คน และแวะดูที่ชั้นวางสินค้าไหนนานที่สุด?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“กล้องวงจรปิดที่มีอยู่ทุกวันนี้ทำได้แค่ย้อนดูเวลาของหายหรือเกิดเรื่อง แต่ไม่ได้ช่วยให้เจ้าของร้านรู้วิธีเพิ่มยอดขายหรือปรับปรุงการจัดร้านเลย”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS AI-Vision เชื่อมต่อกับกล้องเดิมของคุณ แล้วใช้ AI นับจำนวนคนทำ Heatmap ดูจุดที่ลูกค้าหยุดดูสินค้า และวิเคราะห์ช่วงเวลาขายดี ช่วยเพิ่มยอดขายได้ 15-20%”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:15', text: '“เรามีกล่อง AI Box มาทดลองต่อกับกล้องหน้าร้านให้ดูผลวิเคราะห์จริง 1 สัปดาห์ฟรี สะดวกให้ทีมเข้าไปเชื่อมต่อวันไหนดีครับ?”' }
      ],
      tips: 'เน้นคุยกับเจ้าของร้านค้าปลีก ร้านอาหาร หรือโชว์รูมสินค้าที่ต้องการข้อมูลในการเพิ่มยอดขาย'
    },
    siteRef: {
      clientName: 'เครือข่ายร้านเสื้อผ้าและไลฟ์สไตล์ แฟชั่นเฮาส์ (12 สาขา)',
      industry: 'ค้าปลีกแฟชั่น & ห้างสรรพสินค้า',
      profile: 'ร้านค้าปลีก 12 สาขาในห้างชั้นนำ • มีกล้องวงจรปิด IP Camera เดิม 60 ตัว',
      date: 'ติดตั้ง ม.ค. 2569',
      kpis: [
        { label: 'ยอดขายเติบโต', value: '+18.5%', sub: 'จากการจัดชั้นวางตาม Heatmap' },
        { label: 'ความแม่นยำนับคน (Footfall)', value: '98.2%', sub: 'แยกพนักงานออกจากลูกค้า' },
        { label: 'ค่าอุปกรณ์ใหม่ที่ประหยัดได้', value: '฿180,000', sub: 'ใช้กล้องวงจรปิดเดิมต่อได้' },
        { label: 'ระยะเวลาคืนทุน (ROI)', value: '3.5 เดือน', sub: 'ยอดขายเพิ่มคุ้มค่าบริการ' }
      ],
      challenges: [
        'ผู้บริหารไม่ทราบ Conversion Rate ที่แท้จริง รู้แค่ยอดขายจากเครื่อง POS แต่ไม่รู้ว่ามีคนเดินเข้าร้านกี่คน',
        'จัดวางสินค้าคอลเลกชันใหม่ในจุดที่คิดว่าดี แต่ลูกค้าไม่เดินเข้าไปดู ทำให้สต็อกค้าง',
        'ไม่อยากเสียเงินรื้อระบบกล้องวงจรปิดเดิมที่เพิ่งติดตั้งไปไม่กี่ปี'
      ],
      solution: [
        'ติดตั้ง AIS AI-Vision Edge Box เชื่อมต่อกับกล้อง IP Camera เดิมของร้านทั้ง 12 สาขา',
        'เปิดใช้งานฟังก์ชัน Heatmap Analytics วิเคราะห์ความหนาแน่น และ Footfall Counting นับคน',
        'สรุปข้อมูลพฤติกรรมลูกค้าผ่านหน้า Web Dashboard ให้ผู้จัดการฝ่ายการตลาดวิเคราะห์ทุกวัน'
      ],
      quote: '“AI-Vision ทำให้เรารู้ว่าจุดไหนของร้านขายดีที่สุด พอย้ายสินค้าโปรโมชั่นมาวาง ยอดขายพุ่งขึ้น 18% ภายในเดือนเดียว คุ้มค่ามากครับ”',
      quoteAuthor: 'คุณกัญญาภัค วงศ์สว่าง (Retail Brand Manager)'
    },
    deck: [
      { num: 1, title: 'AIS AI-Vision Video Analytics', subtitle: 'Turn CCTV into Business Intelligence & Sales Growth', badge: 'Slide 1: Cover', desc: 'เปลี่ยนกล้องวงจรปิดให้เป็นระบบวิเคราะห์พฤติกรรมลูกค้า เพิ่มยอดขายหน้าร้าน', notes: '🗣️ อธิบายว่ากล้องวงจรปิดยุคนี้ไม่ได้มีไว้แค่ความปลอดภัย แต่ช่วยขายของได้' },
      { num: 2, title: 'ทำไมข้อมูลหน้าร้านถึงเป็นจุดบอดของธุรกิจ', subtitle: 'The Blind Spot of Retail Operations', badge: 'Slide 2: Business Pain', desc: 'รู้ยอดเงินใน POS แต่ไม่รู้ว่าลูกค้าเดินดูโซนไหน และหลุดออกไปกี่คน', notes: '🗣️ ถามลูกค้าว่าทราบหรือไม่ว่ามีคนเดินเข้าร้านวันละกี่คนและซื้อกี่คน' },
      { num: 3, title: 'ฟังก์ชันอัจฉริยะที่เชื่อมต่อกับกล้องเดิมได้ทันที', subtitle: 'Plug-and-Play AI Edge Box', badge: 'Slide 3: Technology', desc: '1. Footfall Counting 2. Customer Heatmap 3. Dwell Time 4. Safety Alert', notes: '🗣️ เน้นย้ำว่าไม่ต้องเปลี่ยนกล้องใหม่ ใช้กล้องเดิมของร้านต่อเข้ากล่อง AI ได้เลย' },
      { num: 4, title: 'กรณีศึกษาเชนร้านแฟชั่น 12 สาขา', subtitle: 'Fashion Retail Case Study', badge: 'Slide 4: Case Study', desc: 'ยอดขายโต 18.5% จากการจัดผังร้านตามข้อมูล Heatmap คืนทุนใน 3.5 เดือน', notes: '🗣️ แสดงภาพ Heatmap สีแดง-เหลือง-เขียวให้ลูกค้าเห็นภาพความชัดเจนของข้อมูล' },
      { num: 5, title: 'แพ็กเกจการวิเคราะห์รายกล้อง', subtitle: 'Analytics Subscription Packages', badge: 'Slide 5: Packages', desc: 'Pack S 4 กล้อง (฿3,900), Pack M 8 กล้อง (฿6,900), Pack L 16 กล้อง (฿12,900)', notes: '🗣️ แนะนำให้เริ่มต้นทดลองติดที่สาขาหลัก 1 สาขาก่อนขยายผล' }
    ],
    datasheet: {
      model: 'AIS AI-Vision Edge Analytics Box',
      overview: 'กล่องประมวลผลปัญญาประดิษฐ์สำหรับเชื่อมต่อกล้องวงจรปิด (IP CCTV) วิเคราะห์ภาพวิดีโอแบบ Edge Computing มีความแม่นยำสูง',
      specs: [
        { label: 'Compatible Cameras', val: 'รองรับกล้อง IP Camera ทุกยี่ห้อที่รองรับมาตรฐาน RTSP / ONVIF' },
        { label: 'Video Analytics AI', val: 'Footfall Counting, Area Heatmap, Dwell Time, Queue Management' },
        { label: 'Detection Accuracy', val: 'ความแม่นยำเฉลี่ยสูงกว่า 98% พร้อมระบบกรองพนักงานออกจากลูกค้า' },
        { label: 'Edge Processing', val: 'ประมวลผลที่ตัวกล่อง ไม่กินแบนด์วิดท์อินเทอร์เน็ต ส่งเฉพาะข้อมูลสรุปขึ้นคลาวด์' },
        { label: 'Dashboard & Reports', val: 'Web Dashboard แสดงผลแบบ Real-time, Export ข้อมูลเป็น Excel/PDF ได้' },
        { label: 'Privacy & PDPA', val: 'ไม่เก็บภาพใบหน้าบุคคล (Anonymized Data) สอดคล้องตามกฎหมาย PDPA 100%' },
        { label: 'Hardware Warranty', val: 'อุปกรณ์เปลี่ยนใหม่ทันทีหากชำรุด พร้อมทีมซัพพอร์ตตลอดอายุสัญญา' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'Camera & Angle Audit', desc: 'ตรวจสอบยี่ห้อกล้อง มุมมององศากล้อง และความสว่างในพื้นที่ร้าน' },
        { phase: 'Phase 2 (1 วัน)', title: 'AI Edge Box Installation', desc: 'ติดตั้งกล่อง AI Box ในตู้เครือข่ายและเชื่อมต่อสาย LAN เข้ากับสวิตช์กล้อง' },
        { phase: 'Phase 3 (1-2 วัน)', title: 'AI Calibration & Zone Setup', desc: 'กำหนดเส้นนับคน (Counting Line) และตีกรอบพื้นที่วัด Heatmap' },
        { phase: 'Phase 4 (1 วัน)', title: 'Dashboard Training & Handover', desc: 'อบรมวิธีการอ่านรายงานสถิติให้ทีมการตลาดและส่งมอบระบบ' }
      ],
      acceptance: 'กล่องดึงภาพจากกล้องได้เสถียร • ความแม่นยำการนับคนไม่ต่ำกว่า 95% • แดชบอร์ดแสดงผล Real-time'
    },
    pricing: {
      packS: { name: 'Retail Starter (4 กล้อง)', price: '฿3,900 /ด.', ap: '4 จุดตรวจจับ', fit: 'ร้านค้า 1 สาขา' },
      packM: { name: 'Retail Pro (8 กล้อง)', price: '฿6,900 /ด.', ap: '8 จุดตรวจจับ', fit: 'ร้านขนาดใหญ่/โชว์รูม (แนะนำ)' },
      packL: { name: 'Chain Store (16 กล้อง)', price: '฿12,900 /ด.', ap: '16 จุดตรวจจับ', fit: 'มินิมาร์ท/ห้างสรรพสินค้า' },
      slider1: { label: 'จำนวนกล้องวงจรปิดที่ต้องการต่อ AI', min: 2, max: 32, step: 2, val: 8, unit: 'กล้อง' },
      slider2: { label: 'จำนวนสาขาของร้าน', min: 1, max: 10, step: 1, val: 1, unit: 'สาขา' },
      calc: (cams, branches) => {
        let monthly = 3900;
        if (cams > 8) monthly = 12900 + (cams - 8) * 800;
        else if (cams > 4) monthly = 3900 + (cams - 4) * 750;
        monthly = monthly * branches;
        const salesUplift = branches * 65000 * 12; // 15% estimated sales increase
        const annualBenefit = salesUplift;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  },

  'smart-logistics': {
    name: 'Smart Tracking Plus & TMS',
    code: 'SMT-TMS-03',
    category: 'Smart Transportation',
    video: {
      title: 'วิธี Pitch Smart Logistics ใน 60 วินาที: คุมรถทุกคันแบบเรียลไทม์ ลดค่าน้ำมัน 15-20%',
      duration: '01:10',
      beats: [
        { name: '1. The Hook (เปิดประเด็น)', time: '00:00 - 00:15', text: '“คุณลูกค้าเคยเจอปัญหาคนขับรถแอบขับออกนอกเส้นทาง ขับรถเร็วเปลืองน้ำมัน หรือลูกค้าโทรตามว่าสินค้าจะถึงกี่โมงแล้วตอบไม่ได้ไหมครับ?”' },
        { name: '2. Relatable Pain (ขยี้ปัญหา)', time: '00:15 - 00:30', text: '“ค่าน้ำมันคือต้นทุนที่ใหญ่ที่สุดของธุรกิจขนส่ง การที่คนขับสตาร์ทรถนอนเปิดแอร์ หรือขับกระชาก ทำให้บริษัทสูญเสียเงินไปปีละเป็นแสน”' },
        { name: '3. Solution Story (ทางออก AIS)', time: '00:30 - 00:50', text: '“AIS Smart Tracking Plus ติดตามตำแหน่งรถแบบเรียลไทม์บนโครงข่าย AIS 4G/IoT ตรวจวัดระดับน้ำมัน แจ้งเตือนเมื่อขับเร็วเกินกำหนด และคำนวณเส้นทางส่งของที่ประหยัดที่สุด”' },
        { name: '4. Call-to-Action (ปิดนัดหมาย)', time: '00:50 - 01:10', text: '“เริ่มต้นเพียงคันละ 300 กว่าบาทต่อเดือน ช่วยประหยัดค่าน้ำมันได้ทันที ขออนุญาตนำกล่อง GPS ไปติดทดสอบที่รถคันแรกให้ดูผล 1 สัปดาห์นะครับ”' }
      ],
      tips: 'ชี้ให้เห็นว่าการประหยัดน้ำมันได้เพียง 10-15% ก็คุ้มเกินค่าบริการรายเดือนของกล่อง GPS แล้ว'
    },
    siteRef: {
      clientName: 'บริษัท สยาม โลจิสติกส์ เอ็กซ์เพรส จำกัด',
      industry: 'ขนส่ง & กระจายสินค้า',
      profile: 'รถกระบะตู้ทึบและรถบรรทุก 35 คัน • วิ่งกระจายสินค้าทั่วภาคกลางและภาคตะวันออก',
      date: 'ติดตั้ง ธ.ค. 2568',
      kpis: [
        { label: 'ค่าน้ำมันเชื้อเพลิง', value: '-16.8%', sub: 'ประหยัดเดือนละ 55,000 บาท' },
        { label: 'การส่งของตรงเวลา (On-Time)', value: '98.5%', sub: 'วางแผนเส้นทางด้วย TMS' },
        { label: 'อุบัติเหตุบนท้องถนน', value: '0 ครั้ง', sub: 'แจ้งเตือนขับเร็วเกินกำหนด' },
        { label: 'การนำรถไปใช้นอกเวลา', value: 'ลดลง 100%', sub: 'ระบบแจ้งเตือน Geo-fencing' }
      ],
      challenges: [
        'คนขับรถชอบจอดรถติดเครื่องเปิดแอร์นอนรอลูกค้า ทำให้ค่าน้ำมันพุ่งสูงผิดปกติในแต่ละเดือน',
        'มีกรณีคนขับแอบเอารถบริษัทไปรับงานขนส่งส่วนตัวในวันหยุดโดยที่ผู้จัดการไม่ทราบ',
        'ลูกค้าปลายทางโทรสอบถามตลอดเวลาว่ารถถึงไหนแล้ว เจ้าหน้าที่ต้องคอยโทรตามคนขับเสียเวลา'
      ],
      solution: [
        'ติดตั้งกล่อง AIS Smart GPS Tracker ซ่อนในรถขนส่งทั้ง 35 คัน เชื่อมต่อโครงข่าย IoT',
        'เชื่อมต่อเซ็นเซอร์วัดการสตาร์ทเครื่องยนต์ (Idling Sensor) และแจ้งเตือนเมื่อจอดติดเครื่องเกิน 15 นาที',
        'สร้างลิงก์แชร์สถานะตำแหน่งรถให้ลูกค้าปลายทางเปิดดูสถานะการเดินทางได้เองแบบเรียลไทม์'
      ],
      quote: '“ค่าน้ำมันลดลงทันทีเดือนละห้าหมื่นกว่าบาท คนขับมีวินัยขึ้นมาก ไม่ขับเร็วและไม่เอารถไปใช้นอกเส้นทาง คุ้มค่าที่สุดครับ”',
      quoteAuthor: 'คุณมนตรี เจริญพานิช (Fleet & Logistics Director)'
    },
    deck: [
      { num: 1, title: 'AIS Smart Tracking Plus & TMS', subtitle: 'Real-Time Fleet Management & Fuel Efficiency', badge: 'Slide 1: Cover', desc: 'ระบบติดตามยานพาหนะและบริหารการขนส่งอัจฉริยะ ลดค่าน้ำมัน ปลอดภัย', notes: '🗣️ อธิบายว่าค่าน้ำมันและเวลาคือสองสิ่งสำคัญที่สุดในการบริหารกองรถ' },
      { num: 2, title: 'หลุมพรางต้นทุนที่รั่วไหลของกองรถ', subtitle: 'Hidden Fuel & Operations Waste', badge: 'Slide 2: Cost Leaks', desc: 'จอดติดเครื่องทิ้งไว้, ขับรถเร็วเปลืองน้ำมัน, นำรถไปใช้นอกงาน', notes: '🗣️ ถามลูกค้าว่าในแต่ละเดือนมีวิธีตรวจสอบการใช้น้ำมันของคนขับอย่างไร' },
      { num: 3, title: 'เห็นตำแหน่งและสถานะรถทุกคันแบบเรียลไทม์', subtitle: 'IoT Fleet Telematics on AIS Network', badge: 'Slide 3: Architecture', desc: 'อัปเดตตำแหน่งทุก 30 วินาที พร้อมเซ็นเซอร์วัดน้ำมันและพฤติกรรมคนขับ', notes: '🗣️ โชว์หน้าจอแอปพลิเคชันบนมือถือที่เจ้าของรถสามารถดูได้ตลอดเวลา' },
      { num: 4, title: 'กรณีศึกษาบริษัทขนส่ง 35 คัน', subtitle: 'Logistics Fleet Case Study', badge: 'Slide 4: Case Study', desc: 'ประหยัดค่าน้ำมันเดือนละ 55,000 บาท และส่งมอบสินค้าตรงเวลา 98.5%', notes: '🗣️ เล่าถึงตัวเลขการประหยัดน้ำมันที่เกิดขึ้นจริง' },
      { num: 5, title: 'แพ็กเกจรายคัน รวมซิม IoT และแอปพลิเคชัน', subtitle: 'Fleet Subscription Packages', badge: 'Slide 5: Packages', desc: 'ราคาเริ่มต้น ฿350/คัน/เดือน รวมกล่อง GPS ซิมการ์ด และระบบคลาวด์', notes: '🗣️ นำเสนอแพ็กเกจที่คิดเป็นรายคัน คืนทุนทันทีตั้งแต่เดือนแรก' }
    ],
    datasheet: {
      model: 'AIS Smart Tracker IoT OBD-II / Hardwire',
      overview: 'อุปกรณ์ติดตามยานพาหนะมาตรฐานกรมการขนส่งทางบก (ขบ.) เชื่อมต่อผ่านเครือข่าย AIS 4G / NB-IoT แม่นยำสูง',
      specs: [
        { label: 'GPS / GNSS Module', val: 'Multi-GNSS (GPS, GLONASS, Galileo) ค่าความคลาดเคลื่อนต่ำกว่า 2.5 เมตร' },
        { label: 'Network Connectivity', val: 'AIS 4G LTE-M / NB-IoT พร้อมซิมการ์ดระดับอุตสาหกรรมในตัว' },
        { label: 'Sensor Inputs', val: 'ACC Ignition Status, Fuel Level, Temperature Sensor (ห้องเย็น), SOS Button' },
        { label: 'Driver Behavior Alert', val: 'ตรวจจับการเร่งความเร็วกะทันหัน, เบรกกระชาก, เลี้ยวโค้งแรง, ขับเกินความเร็ว' },
        { label: 'DLT Certified', val: 'ผ่านการรับรองจากกรมการขนส่งทางบก (ต่อทะเบียนรถบรรทุกและรถตู้ได้ถูกต้อง)' },
        { label: 'Backup Battery', val: 'แบตเตอรี่สำรองในตัว ส่งสัญญาณเตือนเมื่อถูกตัดสายไฟจากแบตเตอรี่รถยนต์' },
        { label: 'Software Platform', val: 'แอปพลิเคชันบน iOS, Android และ Web Portal รายงานประวัติย้อนหลัง 6 เดือน' }
      ]
    },
    sow: {
      phases: [
        { phase: 'Phase 1 (1 วัน)', title: 'Fleet & Vehicle Assessment', desc: 'สำรวจรุ่นรถยนต์ ประเภทเครื่องยนต์ และจุดติดตั้งกล่อง GPS ที่ปลอดภัย' },
        { phase: 'Phase 2 (1-2 วัน)', title: 'Tracker Installation', desc: 'ทีมช่างเข้าติดตั้งกล่อง GPS และเซ็นเซอร์ซ่อนใต้คอนโซลรถตามนัดหมาย' },
        { phase: 'Phase 3 (1 วัน)', title: 'Platform & Alert Setup', desc: 'ลงทะเบียนเลขทะเบียนรถ กำหนดเขตพื้นที่ (Geo-fence) และความเร็วจำกัด' },
        { phase: 'Phase 4 (1 วัน)', title: 'Training & Certificate Issuing', desc: 'อบรมเจ้าหน้าที่จัดคิวรถ และออกใบรับรองกรมการขนส่งทางบก (ถ้ามี)' }
      ],
      acceptance: 'สัญญาณ GPS อัปเดตทุก 30 วินาที • ระบบแจ้งเตือนดับเครื่อง/สตาร์ทรถถูกต้อง • ดูข้อมูลย้อนหลังได้'
    },
    pricing: {
      packS: { name: 'Standard GPS', price: '฿350 /คัน/ด.', ap: 'ระบุตำแหน่งเรียลไทม์', fit: 'รถกระบะ/รถเซลส์' },
      packM: { name: 'DLT + Fuel (แนะนำ)', price: '฿490 /คัน/ด.', ap: 'ผ่านเกณฑ์กรมขนส่ง + น้ำมัน', fit: 'รถบรรทุก/รถตู้โดยสาร' },
      packL: { name: 'Cold Chain / Video', price: '฿890 /คัน/ด.', ap: 'เซ็นเซอร์อุณหภูมิ + กล้อง', fit: 'รถห้องเย็น/ขนส่งยา' },
      slider1: { label: 'จำนวนยานพาหนะในองค์กร', min: 1, max: 100, step: 1, val: 15, unit: 'คัน' },
      slider2: { label: 'ประเภทรถและฟังก์ชันที่ต้องการ', min: 1, max: 3, step: 1, val: 2, unit: 'ประเภท' },
      calc: (vehicles, tier) => {
        const rate = (tier === 1 ? 350 : (tier === 2 ? 490 : 890));
        const monthly = vehicles * rate;
        const fuelSavedPerMonth = vehicles * 1500; // Estimated 1,500 THB fuel saved per vehicle/month
        const annualBenefit = fuelSavedPerMonth * 12;
        const payback = ((monthly * 12 / annualBenefit) * 12).toFixed(1);
        return { monthly, annualBenefit, payback };
      }
    }
  }
};

// Helper function to get kit or fallback to corp-wifi
function getSolutionKit(solId) {
  return SOLUTION_KITS[solId] || SOLUTION_KITS['corp-wifi'];
}

// ==========================================
// EDS PRICE DATA & CALCULATOR (From chimerical-eclair-a480bb.netlify.app)
// ==========================================
const EDS_DATA = {
  SERVICE_RADIUS_KM: 3,
  INDUSTRIAL_ESTATES: [
    { id: 'amata-nakorn', name: 'นิคมอมตะนคร', lat: 16.4811162, lng: 102.8170736, radiusKm: 2.5 },
    { id: 'khonkaen', name: 'นิคมอุตสาหกรรมขอนแก่น', lat: 16.3950000, lng: 102.7500000, radiusKm: 2.0 },
    { id: 'ladkrabang', name: 'นิคมอุตสาหกรรมลาดกระบัง', lat: 13.7295000, lng: 100.7838000, radiusKm: 2.0 },
    { id: 'maptaphut', name: 'นิคมอุตสาหกรรมมาบตาพุด', lat: 12.7060000, lng: 101.1520000, radiusKm: 4.0 },
  ],
  SERVICE_NODES: [
    { id: 'node-mk-01', name: 'ชุมสายมหาสารคาม', lat: 16.1850000, lng: 103.3000000 },
    { id: 'node-kk-01', name: 'ชุมสายขอนแก่นกลาง', lat: 16.4322000, lng: 102.8236000 },
    { id: 'node-kk-02', name: 'ชุมสายบ้านไผ่', lat: 16.5050000, lng: 102.8500000 },
    { id: 'node-bkk-01', name: 'ชุมสายลาดกระบัง', lat: 13.7200000, lng: 100.8000000 },
    { id: 'node-ry-01', name: 'ชุมสายระยอง', lat: 12.6800000, lng: 101.2500000 },
  ],
  SPEED_PLANS: [
    { value: '100/100', label: '100/100 Mbps', basePrice: 12500 },
    { value: '200/200', label: '200/200 Mbps', basePrice: 18000 },
    { value: '300/300', label: '300/300 Mbps', basePrice: 23500 },
    { value: '500/500', label: '500/500 Mbps', basePrice: 32000 },
    { value: '1000/1000', label: '1000/1000 Mbps', basePrice: 48000 },
  ],
  CONTRACT_TERMS: [
    { value: '1', label: 'สัญญา 1 ปี (1 year) [ไม่มีส่วนลด]', discount: 0.00 },
    { value: '2', label: 'สัญญา 2 ปี (2 years) [ลด 7%]', discount: 0.07 },
    { value: '3', label: 'สัญญา 3 ปี (3 years) [ลด 12%]', discount: 0.12 },
  ],
  AREA_SURCHARGE: {
    estate: 0.00,
    service: 0.05,
  },
  TEST_CASES: [
    {
      title: 'อยู่ในนิคมอมตะนคร',
      coord: '16.4811162,102.8170736',
      badge: 'ในนิคม (0% เพิ่ม)',
    },
    {
      title: 'นอกนิคม ใกล้ชุมสายขอนแก่น (1.1 กม.)',
      coord: '16.4400000,102.8300000',
      badge: 'ในรัศมีบริการ (+5%)',
    },
    {
      title: 'อยู่นอกพื้นที่บริการ (22.5 กม.)',
      coord: '16.2500000,103.1000000',
      badge: 'นอกรัศมี (สำรวจหน้างาน)',
    },
  ]
};

function edsDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371.0088;
  const rad = d => (d * Math.PI) / 180;
  const dLat = rad(lat2 - lat1);
  const dLng = rad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function checkEdsLocation(lat, lng) {
  for (const e of EDS_DATA.INDUSTRIAL_ESTATES) {
    const d = edsDistanceKm(lat, lng, e.lat, e.lng);
    if (d <= e.radiusKm) return { status: 'estate', estate: e, distanceKm: d };
  }

  let nearest = null;
  for (const n of EDS_DATA.SERVICE_NODES) {
    const d = edsDistanceKm(lat, lng, n.lat, n.lng);
    if (!nearest || d < nearest.distanceKm) nearest = { node: n, distanceKm: d };
  }

  if (nearest && nearest.distanceKm <= EDS_DATA.SERVICE_RADIUS_KM) {
    return { status: 'service', node: nearest.node, distanceKm: nearest.distanceKm };
  }
  return {
    status: 'out',
    node: nearest ? nearest.node : null,
    distanceKm: nearest ? nearest.distanceKm : Infinity,
  };
}

function parseEdsLatLng(text) {
  const parts = String(text).trim().split(/[,\s]+/).filter(Boolean);
  if (parts.length !== 2) return { ok: false, message: 'กรุณากรอกรูปแบบ: ละติจูด, ลองจิจูด เช่น 16.4811162,102.8170736' };
  const lat = Number(parts[0]);
  const lng = Number(parts[1]);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return { ok: false, message: 'พิกัดต้องเป็นตัวเลขเท่านั้น' };
  if (lat < -90 || lat > 90) return { ok: false, message: 'ละติจูดต้องอยู่ระหว่าง -90 ถึง 90' };
  if (lng < -180 || lng > 180) return { ok: false, message: 'ลองจิจูดต้องอยู่ระหว่าง -180 ถึง 180' };
  return { ok: true, lat, lng };
}

function calcEdsPrice(speedValue, contractValue, locationStatus) {
  const plan = EDS_DATA.SPEED_PLANS.find(p => p.value === speedValue) || EDS_DATA.SPEED_PLANS[0];
  const term = EDS_DATA.CONTRACT_TERMS.find(t => t.value === contractValue) || EDS_DATA.CONTRACT_TERMS[0];
  const surcharge = locationStatus === 'estate' ? EDS_DATA.AREA_SURCHARGE.estate : EDS_DATA.AREA_SURCHARGE.service;

  const base = plan.basePrice;
  const areaFee = Math.round((base * surcharge) / 100) * 100;
  const discount = Math.round((base * term.discount) / 100) * 100;
  return {
    plan,
    term,
    base,
    areaFee,
    discount,
    total: base + areaFee - discount,
    status: locationStatus
  };
}

