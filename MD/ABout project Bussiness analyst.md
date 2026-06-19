Instacart Customer Behavior Analysis
Tổng quan
Dự án phân tích hành vi khách hàng trên Instacart nhằm làm rõ cách người dùng hình thành giỏ hàng, nơi họ dễ rời hành trình mua sắm và cách doanh nghiệp có thể can thiệp để tăng basket size. Với quy mô 206,209 khách hàng, hơn 3.4 triệu đơn hàng và hơn 32 triệu dòng chi tiết sản phẩm, bộ dữ liệu cho phép đi từ góc nhìn hành vi đến góc nhìn tăng trưởng: BPMN, funnel, KPI, basket analysis, customer segmentation và recommendation.

Mục tiêu chính
Làm rõ hành vi mua và cách khách hàng hình thành giỏ hàng
Xác định điểm đứt gãy trong phễu chuyển đổi doanh thu
Xây dựng KPI để đo mức độ ảnh hưởng của từng vấn đề
Đề xuất hướng cải thiện cho cross-sell, retention và recommendation
Luồng nội dung dự án
1. Quy trình hình thành giỏ hàng của khách hàng
Dùng BPMN để mô tả User Purchasing Journey từ lúc vào app đến khi hình thành giỏ hàng
Nối logic user -> order -> product -> department
Làm rõ bước nào khách hàng dễ thoát app hoặc dừng mua giữa hành trình
2. Điểm đứt gãy trong phễu chuyển đổi doanh thu
Dùng Funnel Analysis, Trend và Root Cause Analysis để chứng minh khách hàng rớt ở bước nào
Xây dựng KPI để đo mức độ nghiêm trọng như basket size, reorder, order frequency và tỷ lệ rơi rụng theo từng bước
Xác định điểm đứt gãy có tác động trực tiếp đến doanh thu và giá trị đơn hàng
3. Giỏ hàng và hành vi mua
Phân tích sản phẩm chủ lực, chu kỳ mua lặp lại và hành vi mua kèm
Phân khúc khách hàng theo mức độ gắn bó
Ứng dụng K-Means và Association Rules để đề xuất sản phẩm phù hợp ngay tại điểm rơi rụng
Công cụ và phương pháp
EDA
Dashboard
BPMN
KPI Analysis
Root Cause Analysis
Funnel / Trend Analysis
K-Means Clustering
Association Rules
Kết quả nổi bật
Chỉ ra phần lớn đơn hàng còn nhỏ và còn dư địa để tăng basket size
Xác định được chu kỳ mua lặp lại, nhóm ngành hàng đóng góp chính và các bước dễ mất khách
Phân biệt được các nhóm khách hàng theo mức độ gắn bó để đưa đúng gợi ý ở đúng thời điểm
Tạo được nền tảng phân tích để phục vụ cross-sell, recommendation và cải thiện chuyển đổi
Năng lực thể hiện
Tư duy đi từ nghiệp vụ -> KPI -> dữ liệu -> insight
Khả năng nối BPMN -> Funnel -> KPI -> Recommendation
Ứng dụng nhiều phương pháp phân tích trong cùng một bài toán thực tế
Mô tả ngắn
Dự án phân tích hành vi khách hàng trên Instacart, tập trung vào quy trình hình thành giỏ hàng, điểm đứt gãy trong phễu chuyển đổi doanh thu và cơ hội tối ưu basket size. Luồng phân tích được nối thống nhất từ BPMN để xác định bước dễ rơi rụng, Funnel/KPI để đo mức độ ảnh hưởng, đến K-Means và Association Rules để đưa ra gợi ý sản phẩm phù hợp nhằm giữ chân khách hàng và tăng giá trị đơn hàng.

Hướng dẫn Agent
Khi agent viết mô tả cho project này, hãy giữ nội dung ngắn, định hướng portfolio và bám theo đúng luồng sau:

Mở đầu bằng bài toán: phân tích hành vi mua trên Instacart để hiểu cách khách hàng hình thành giỏ hàng và tìm cơ hội tăng basket size
Trình bày theo chuỗi logic: BPMN -> Funnel Drop-off -> KPI -> Basket Analysis -> K-Means / Association Rules -> Recommendation
Với phần hình ảnh, ưu tiên dùng các file PNG/JPG trong từng folder để minh họa đúng cho từng ý:
folder 1: ảnh mô tả BPMN / User Purchasing Journey
folder 2: ảnh dashboard, trend, root cause, funnel
folder 3: ảnh overview, product analysis, basket behavior
Nếu có dashboard link, đặt ở cuối phần mô tả với nhãn Dashboard
Nếu có GitHub link, đặt ở cuối phần mô tả với nhãn GitHub
Không kể lan man về dataset hay lý thuyết; chỉ giữ lại những gì giúp người xem hiểu nhanh bài toán, cách phân tích và giá trị tạo ra
Link tham chiếu hiện có:

Dashboard: [Tableau Public](https://public.tableau.com/views/LeDienTuan_NguyenHoangDuy_BuiQuangHuy_DinhHoaiNam/Overview?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link)
BPMN: lấy từ hình ảnh
GitHub: (https://github.com/HoangDiine/Instacart_Analysis)