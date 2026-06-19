// Data thật của Nguyễn Hoàng Duy – Data Analyst Portfolio

export const personalInfo = {
  name: "Nguyễn Hoàng Duy",
  nameEn: "Nguyen Hoang Duy",
  role: "Data Analyst",
  roles: ["Data Analyst", "Business Analyst", "Data Engineer"],
  tagline: "Translating complex business problems into robust data architectures and actionable strategic insights.",
  bio: "Sinh viên năm cuối Khoa học Dữ liệu & Phân tích Kinh doanh tại Đại học Kinh tế – ĐH Đà Nẵng. Tôi đam mê chuyển đổi dữ liệu phức tạp thành insight chiến lược, xây dựng hệ thống dữ liệu scalable và tự động hóa quy trình phân tích để hỗ trợ ra quyết định kinh doanh.",
  email: "hoangdiine2412@gmail.com",
  github: "https://github.com/HoangDiine",
  linkedin: "https://linkedin.com/in/duy-nguyen24122005",
  tableau: "https://public.tableau.com/app/profile/duy.nguyen8847/vizzes",
  facebook: "https://www.facebook.com/violet.24122005",
  resume: "/resume.pdf",
  avatar: "/images/Avatar/Anh_ca_nhan.jpg",
  stats: [
    { label: "Projects", value: "5+" },
    { label: "GPA", value: "3.63" },
    { label: "Award", value: "Top 5" },
  ]
};

export const education = {
  university: "Đại học Kinh tế – Đại học Đà Nẵng (DUE)",
  major: "Khoa học Dữ liệu & Phân tích Kinh doanh (BA)",
  gpa: "3.63 / 4.00",
  graduation: "12/2026",
};

export const awards = [
  { title: "Top 5 Central Vietnam", event: "GDGoC Hackathon 2025 (AI Track)", icon: "🏆" },
  { title: "Participant", event: "Cross-Border AI Hackathon Da Nang 2026", icon: "🚀" },
  { title: "TOEIC 660", event: "Listening & Reading Certificate", icon: "🌐" },
];

export const skills = {
  "Business Analysis": {
    icon: "🧠",
    items: ["BPMN 2.0", "BRD / SRS", "KPIs Framework", "Root Cause Analysis", "Funnel Analysis", "Agile / Scrum"],
  },
  "Analytics & Automation": {
    icon: "📈",
    items: ["Python", "R", "SQL", "Pandas", "Scikit-Learn", "K-Means", "Association Rules", "Selenium"],
  },
  "Visualization & BI": {
    icon: "🎨",
    items: ["Power BI", "Tableau", "Looker Studio", "Data Storytelling", "Dashboard Design"],
  },
  "Data Engineering": {
    icon: "🏗️",
    items: ["SQL Server", "Apache Spark", "Hadoop (HDFS)", "Docker", "GCP", "Django", "ERD Design", "LangGraph"],
  },
};

export const projects = [
  {
    id: 1,
    title: "Instacart Customer Behavior Analysis",
    shortTitle: "Instacart BA",
    category: "Business Analysis",
    description: "Phân tích hành vi mua trên Instacart (206K khách hàng, 3.4M+ đơn hàng) để hiểu cách khách hàng hình thành giỏ hàng và tìm cơ hội tăng basket size. Luồng phân tích: BPMN → Funnel Drop-off → KPI → K-Means / Association Rules → Recommendation.",
    // Full content from MD file
    fullContent: {
      overview: "Dự án phân tích hành vi khách hàng trên Instacart nhằm làm rõ cách người dùng hình thành giỏ hàng, nơi họ dễ rời hành trình mua sắm và cách doanh nghiệp có thể can thiệp để tăng basket size. Với quy mô 206,209 khách hàng, hơn 3.4 triệu đơn hàng và hơn 32 triệu dòng chi tiết sản phẩm, bộ dữ liệu cho phép đi từ góc nhìn hành vi đến góc nhìn tăng trưởng.",
      objectives: [
        "Làm rõ hành vi mua và cách khách hàng hình thành giỏ hàng",
        "Xác định điểm đứt gãy trong phễu chuyển đổi doanh thu",
        "Xây dựng KPI để đo mức độ ảnh hưởng của từng vấn đề",
        "Đề xuất hướng cải thiện cho cross-sell, retention và recommendation",
      ],
      methodology: [
        { step: "01", title: "Quy trình hình thành giỏ hàng", desc: "Dùng BPMN mô tả User Purchasing Journey từ lúc vào app đến khi hình thành giỏ hàng. Nối logic user → order → product → department để làm rõ bước nào khách hàng dễ thoát app." },
        { step: "02", title: "Funnel Analysis & Root Cause", desc: "Phân tích điểm rơi rụng trong phễu chuyển đổi, xây dựng KPI đo mức độ nghiêm trọng: basket size, reorder rate, order frequency và tỷ lệ rơi rụng theo từng bước." },
        { step: "03", title: "Giỏ hàng & Customer Segmentation", desc: "K-Means Clustering phân khúc khách hàng theo mức độ gắn bó. Association Rules đề xuất sản phẩm phù hợp ngay tại điểm rơi rụng để tăng cross-sell." },
      ],
      results: [
        "Chỉ ra phần lớn đơn hàng còn nhỏ và còn dư địa để tăng basket size",
        "Xác định được chu kỳ mua lặp lại và nhóm ngành hàng đóng góp chính",
        "Phân biệt được các nhóm khách hàng theo mức độ gắn bó",
        "Tạo được nền tảng phân tích phục vụ cross-sell, recommendation và cải thiện chuyển đổi",
      ],
      skills: ["Tư duy đi từ nghiệp vụ → KPI → dữ liệu → insight", "Khả năng nối BPMN → Funnel → KPI → Recommendation", "Ứng dụng nhiều phương pháp phân tích trong cùng một bài toán thực tế"],
    },
    image: "/images/Bussiness analyst/1. Phân tích nghiệp vụ quy trình hoạt động/BPMN quy trình đặt hàng.jpg",
    images: [
      { src: "/images/Bussiness analyst/1. Phân tích nghiệp vụ quy trình hoạt động/BPMN quy trình đặt hàng.jpg", caption: "BPMN – Quy trình đặt hàng & User Purchasing Journey" },
      { src: "/images/Bussiness analyst/2. Nguyên nhân gây nghẽn hệ thống/Dashboard RootCause.jpg", caption: "Dashboard Root Cause Analysis – Phễu chuyển đổi" },
      { src: "/images/Bussiness analyst/2. Nguyên nhân gây nghẽn hệ thống/Db Trend Line.jpg", caption: "Trend Analysis – Xu hướng và biến động KPI" },
      { src: "/images/Bussiness analyst/3. Giỏ hàng và hành vi mua/1.  Overview ( phân tích xu hướng mua ).jpg", caption: "Overview – Phân tích xu hướng mua tổng quan" },
      { src: "/images/Bussiness analyst/3. Giỏ hàng và hành vi mua/3. Product ( Sản phẩm chủ lực ).jpg", caption: "Product Analysis – Sản phẩm chủ lực & hành vi mua kèm" },
    ],
    tags: ["Python", "BPMN", "K-Means", "Association Rules", "Tableau", "KPI Analysis"],
    github: "https://github.com/HoangDiine/Instacart_Analysis",
    demo: "https://public.tableau.com/views/LeDienTuan_NguyenHoangDuy_BuiQuangHuy_DinhHoaiNam/Overview?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    demoLabel: "Tableau Dashboard",
    highlights: [
      "206K khách hàng, 3.4M đơn hàng, 32M+ dòng chi tiết",
      "Xác định điểm đứt gãy trong phễu chuyển đổi doanh thu",
      "Phân khúc khách hàng & đề xuất cross-sell bằng Association Rules",
    ],
  },
  {
    id: 2,
    title: "ZorinLab – E-Business & Marketing Automation",
    shortTitle: "ZorinLab E-com",
    category: "Business Analysis",
    description: "Xây dựng hệ sinh thái thương mại điện tử và marketing automation cho ZorinLab. Tối ưu hành trình khách hàng, tự động hóa lead scoring và chăm sóc khách hàng qua HubSpot CRM, kết nối real-time dashboard trên Looker Studio.",
    fullContent: {
      overview: "Dự án tối ưu hành trình khách hàng và quy trình bán hàng của ZorinLab nhằm tăng tỷ lệ chuyển đổi, nâng cao chất lượng lead và tự động hóa vận hành thương mại điện tử.",
      objectives: [
        "Hiểu hành vi khách hàng từ truy cập đến mua hàng",
        "Xác định điểm rơi rụng trong phễu chuyển đổi",
        "Xây dựng KPI đo lường hiệu quả marketing và bán hàng",
        "Tự động hóa quản lý lead, chăm sóc khách hàng và thanh toán",
      ],
      methodology: [
        { step: "01", title: "Customer Journey & Funnel Analysis", desc: "Mô tả hành trình khách hàng: Website → Product View → Lead → Order → Repeat Purchase. Funnel Analysis xác định bước làm giảm tỷ lệ chuyển đổi." },
        { step: "02", title: "KPI & Lead Performance", desc: "Xây dựng KPI: Traffic, Lead Conversion Rate, Order Conversion Rate, Revenue, Repeat Purchase Rate. Đo lường mức độ ảnh hưởng của từng điểm rơi rụng đến doanh thu." },
        { step: "03", title: "CRM Automation", desc: "Triển khai HubSpot CRM, Lead Scoring và Email Workflow để phân loại, nuôi dưỡng và chuyển đổi khách hàng tự động." },
        { step: "04", title: "Analytics Dashboard", desc: "Kết nối WooCommerce + HubSpot + Google Analytics vào Looker Studio để theo dõi doanh thu và hiệu suất chuyển đổi real-time." },
      ],
      results: [
        "Tự động hóa quy trình bán hàng và chăm sóc khách hàng",
        "Xác định các điểm rơi rụng chính trong hành trình mua hàng",
        "Chuẩn hóa hệ thống báo cáo hỗ trợ ra quyết định dựa trên dữ liệu",
        "Tạo nền tảng cải thiện conversion, retention và hiệu quả vận hành",
      ],
      skills: ["Customer Journey Analysis • Funnel Analysis • KPI Analysis", "Lead Scoring • Marketing Automation • CRM Integration", "Dashboard Design & Real-time Monitoring"],
    },
    image: "/images/E-comerce/1.WordPress Trang web bán hàng.png",
    images: [
      { src: "/images/E-comerce/1.WordPress Trang web bán hàng.png", caption: "ZorinLab – WordPress E-commerce Website" },
      { src: "/images/E-comerce/2. Wp chi tiết sp.png", caption: "Product Detail Page – UX & Conversion Optimization" },
      { src: "/images/E-comerce/3. WP Sản phẩm.png", caption: "Product Catalog – WooCommerce Integration" },
      { src: "/images/E-comerce/4. Truy caapj .png", caption: "Traffic Analytics – Google Analytics Dashboard" },
    ],
    tags: ["WordPress", "WooCommerce", "HubSpot CRM", "Looker Studio", "Funnel Analysis"],
    github: "",
    demo: "",
    demoLabel: "Dashboard",
    highlights: [
      "Tích hợp WooCommerce + HubSpot CRM + SePay API",
      "Tự động hóa lead scoring và email nurturing workflow",
      "Real-time dashboard theo dõi conversion & revenue",
    ],
  },
  {
    id: 3,
    title: "BurgerPrintsAgent – AI Fulfillment Advisor",
    shortTitle: "BurgerPrint AI",
    category: "AI & Engineering",
    description: "AI Agent thông minh tự động hóa quy trình fulfillment cho seller Print-On-Demand trên BurgerPrints. Sử dụng LangGraph + Gemini AI để phân tích ý định, tư vấn xưởng in tối ưu và streaming response real-time qua SSE.",
    fullContent: {
      overview: "BurgerPrintsAgent là một trợ lý ảo AI thông minh được phát triển nhằm tự động hóa và hỗ trợ tối đa cho các nhà bán hàng (seller) mô hình Print-On-Demand (POD) trên nền tảng BurgerPrints. Hệ thống giúp tìm kiếm, so sánh sản phẩm, đối chiếu chất lượng và giá cả giữa các xưởng in, đồng thời theo dõi tồn kho và chuẩn bị đơn hàng hoàn toàn tự động.",
      objectives: [
        "Tối ưu hóa Fulfillment: phân tích dữ liệu xưởng in để tư vấn lựa chọn tối ưu",
        "Khắc phục Out-of-Stock: tự động đề xuất sản phẩm thay thế qua BurgerPrints API",
        "Real-time Chat: SSE streaming giảm thiểu Time-to-First-Token",
        "Vận hành đơn hàng: tạo, xem và thanh toán trực tiếp trên giao diện chat",
      ],
      methodology: [
        { step: "01", title: "LangGraph Agent Workflow", desc: "Intent Analysis (NLP) → Router (định tuyến đến Agent chuyên trách) → Data Agent (gọi BurgerPrints API) → Function/Action (ra quyết định) → Output Validator." },
        { step: "02", title: "Smart Catalog Cache", desc: "Cache trong bộ nhớ 5 phút cho danh sách 500+ sản phẩm, 2 phút cho Out-of-Stock. Giảm số lượng API calls đáng kể, tối ưu độ trễ response." },
        { step: "03", title: "SSE Real-time Streaming", desc: "Server-Sent Events streaming đẩy từng token từ Gemini AI xuống giao diện người dùng, vượt qua JSON filter để mang lại UX tức thì." },
      ],
      results: [
        "Smart Cache giảm 80%+ API calls với TTL 5 phút",
        "Real-time SSE streaming – tối ưu Time-to-First-Token tối đa",
        "LangGraph workflow: Intent → Router → Data Agent → Output Validator",
        "Auto-deployment qua script deploy.bat / deploy.sh",
      ],
      skills: ["AI Agent Architecture với LangGraph", "Real-time Streaming (SSE) Backend Engineering", "API Integration & Caching Strategy", "Full-stack: Django REST + React 19"],
    },
    image: "/images/Data Analyst/BugerPrintAgent/Chatbot Agent.jpg",
    images: [
      { src: "/images/Data Analyst/BugerPrintAgent/Chatbot Agent.jpg", caption: "BurgerPrintsAgent – AI Chat Interface & Real-time SSE Streaming" },
    ],
    tags: ["LangGraph", "Gemini AI", "Django", "React", "SSE Streaming", "Python"],
    github: "https://github.com/HoangDiine/BurgerPrintAgent",
    demo: "",
    demoLabel: "Demo",
    highlights: [
      "Smart Catalog Cache: giảm 80%+ API calls với TTL 5 phút",
      "Real-time SSE streaming – tối ưu Time-to-First-Token",
      "LangGraph workflow: Intent → Router → Data Agent → Output Validator",
    ],
  },
  {
    id: 4,
    title: "Financial Analysis – AGG (2020–2024)",
    shortTitle: "AGG Finance",
    category: "Finance & Analytics",
    description: "Phân tích báo cáo tài chính của CTCP BĐS An Gia (AGG) giai đoạn 2020–2024. Đánh giá sức khỏe tài chính, khả năng thanh khoản, cơ cấu vốn và đòn bẩy tài chính trong bối cảnh thị trường bất động sản biến động mạnh.",
    fullContent: {
      overview: "Dự án tập trung phân tích tình hình tài chính của CTCP Đầu tư và Phát triển Bất động sản An Gia (AGG) giai đoạn 2020–2024 nhằm đánh giá sức khỏe tài chính, hiệu quả hoạt động và khả năng tăng trưởng trong bối cảnh thị trường bất động sản biến động mạnh.",
      objectives: [
        "Đánh giá sức khỏe tài chính tổng thể của doanh nghiệp",
        "Phân tích xu hướng doanh thu, lợi nhuận và dòng tiền",
        "Đánh giá khả năng thanh khoản, cơ cấu vốn và mức độ đòn bẩy tài chính",
        "Xác định các yếu tố ảnh hưởng đến hiệu quả kinh doanh",
        "Hỗ trợ đưa ra nhận định đầu tư dựa trên dữ liệu tài chính",
      ],
      methodology: [
        { step: "01", title: "Phân tích Doanh nghiệp & Ngành", desc: "Nghiên cứu mô hình kinh doanh AGG, vị thế thị trường BĐS nhà ở và các yếu tố vĩ mô: tín dụng, lãi suất, pháp lý dự án." },
        { step: "02", title: "Phân tích Báo cáo Tài chính", desc: "Phân tích chi tiết Bảng CĐKT, KQHĐKD và Lưu chuyển tiền tệ. Horizontal Analysis & Vertical Analysis qua các năm 2020–2024." },
        { step: "03", title: "Phân tích Chỉ số Tài chính", desc: "5 nhóm chỉ số: Thanh khoản, Cơ cấu nợ & Đòn bẩy, Hiệu quả hoạt động, Khả năng sinh lợi (ROE/ROA), và Chỉ số thị trường (P/E, P/B)." },
        { step: "04", title: "Trend & Benchmark Analysis", desc: "Theo dõi biến động 5 năm và đối chiếu với doanh nghiệp cùng ngành để xác định điểm mạnh, yếu và tiềm năng tăng trưởng của AGG." },
      ],
      results: [
        "Đánh giá mức độ ổn định tài chính qua nhiều giai đoạn thị trường",
        "Xác định tác động của biến động ngành BĐS đến doanh thu, lợi nhuận và dòng tiền",
        "Làm rõ mối quan hệ giữa đòn bẩy tài chính, thanh khoản và khả năng sinh lợi",
        "Đưa ra nhận định về cơ hội, rủi ro và triển vọng phát triển của AGG",
      ],
      skills: ["Đọc hiểu và phân tích báo cáo tài chính doanh nghiệp", "Ratio Analysis & Benchmark ngành", "Chuyển đổi dữ liệu tài chính thành insight hỗ trợ đầu tư"],
    },
    image: "/images/Finance/Finance.jpg",
    images: [
      { src: "/images/Finance/Finance.jpg", caption: "AGG Financial Dashboard – Phân tích tài chính 2020–2024" },
    ],
    tags: ["Power BI", "Excel", "Financial Analysis", "Ratio Analysis", "Trend Analysis"],
    github: "",
    demo: "",
    demoLabel: "Report",
    highlights: [
      "Phân tích 5 năm: doanh thu, lợi nhuận, dòng tiền, ROE, ROA",
      "So sánh ngành BĐS để xác định vị thế cạnh tranh của AGG",
      "Đưa ra nhận định đầu tư dựa trên dữ liệu tài chính thực",
    ],
  },
  {
    id: 5,
    title: "Retail Sales Management Database",
    shortTitle: "ZorinLab DB",
    category: "Data Engineering",
    description: "Xây dựng hệ thống CSDL quản lý bán hàng cho ZorinLab trên SQL Server. Thiết kế ERD chuẩn hóa, triển khai Stored Procedures & Triggers tự động hóa nghiệp vụ, tối ưu hiệu năng với Indexing và đảm bảo bảo mật dữ liệu.",
    fullContent: {
      overview: "Dự án xây dựng hệ thống quản lý bán hàng cho ZorinLab nhằm chuẩn hóa dữ liệu kinh doanh, quản lý giao dịch bán hàng - nhập kho và hỗ trợ vận hành dựa trên dữ liệu. Luồng phân tích từ thiết kế quy trình nghiệp vụ, mô hình dữ liệu, KPI vận hành đến tối ưu hiệu năng và bảo mật.",
      objectives: [
        "Chuẩn hóa dữ liệu bán hàng và kho vận",
        "Thiết kế cơ sở dữ liệu đạt chuẩn, đảm bảo tính toàn vẹn dữ liệu",
        "Xây dựng KPI phục vụ theo dõi hoạt động kinh doanh",
        "Tối ưu hiệu năng, bảo mật và khả năng mở rộng hệ thống",
      ],
      methodology: [
        { step: "01", title: "Business Process & Data Modeling", desc: "Phân tích quy trình bán hàng và nhập kho. Thiết kế ERD và chuẩn hóa CSDL quản lý: Sản phẩm, Khách hàng, Nhà cung cấp, Nhân viên, Hóa đơn, Kho." },
        { step: "02", title: "KPI & Operational Analysis", desc: "Xây dựng KPI: Revenue, Order Volume, Inventory Level, Top Products, Customer Purchase History. Hỗ trợ theo dõi hiệu quả và tình trạng tồn kho real-time." },
        { step: "03", title: "Database Automation", desc: "Stored Procedures, Functions và Triggers tự động hóa: cập nhật tồn kho, kiểm soát toàn vẹn dữ liệu. Indexing tối ưu truy vấn trên dữ liệu giao dịch lớn." },
        { step: "04", title: "Security & Reliability", desc: "Phân quyền người dùng, mã hóa dữ liệu nhạy cảm, audit log và chiến lược backup đảm bảo an toàn và khả năng phục hồi hệ thống." },
      ],
      results: [
        "Thiết kế CSDL bán hàng đạt chuẩn hóa và khả năng mở rộng cao",
        "Tự động hóa nghiệp vụ cốt lõi qua Stored Procedures và Triggers",
        "Xử lý và kiểm thử trên tập dữ liệu giao dịch quy mô lớn",
        "Triển khai đầy đủ cơ chế bảo mật, sao lưu và phục hồi dữ liệu",
      ],
      skills: ["Tư duy: Business Process → Data Model → KPI → DB Solution", "Thiết kế CSDL phục vụ bài toán vận hành thực tế", "Tối ưu hiệu năng và bảo mật SQL Server"],
    },
    image: "/images/Sql Sever/ERD.jpg",
    images: [
      { src: "/images/Sql Sever/ERD.jpg", caption: "ERD – Entity Relationship Diagram – Retail Sales Management Database" },
    ],
    tags: ["SQL Server", "Django", "ERD Design", "Stored Procedures", "Database Security"],
    github: "https://github.com/HoangDiine/Retail-Sales-Management-db",
    demo: "",
    demoLabel: "Docs",
    highlights: [
      "Quản lý: Sản phẩm, Khách hàng, NCC, Nhân viên, Hóa đơn, Kho",
      "Auto-update tồn kho & kiểm tra toàn vẹn qua Triggers",
      "Indexing tối ưu + phân quyền user + audit log + backup strategy",
    ],
  },
];

export const CATEGORIES = ["All", "Business Analysis", "AI & Engineering", "Finance & Analytics", "Data Engineering"];
