# Dự án: BurgerPrintsAgent - AI Fulfillment Advisor

**Github:** [HoangDiine/BurgerPrintAgent](https://github.com/HoangDiine/BurgerPrintAgent)

---

## 📖 Tổng Quan Dự Án
**BurgerPrintsAgent** là một trợ lý ảo AI thông minh (AI Agent) được phát triển nhằm tự động hóa và hỗ trợ tối đa cho các nhà bán hàng (seller) mô hình Print-On-Demand (POD) trên nền tảng BurgerPrints. 

Hệ thống giúp người dùng tìm kiếm, so sánh sản phẩm, đối chiếu chất lượng và giá cả giữa các xưởng in (factory/partner), đồng thời theo dõi tồn kho và chuẩn bị đơn hàng một cách hoàn toàn tự động thông qua giao diện hội thoại tương tác trực tiếp.

## 🎯 Mục Tiêu & Vấn Đề Giải Quyết
1. **Tối ưu hóa Fulfillment (Xử lý đơn hàng):** Phân tích dữ liệu vận hành từ các xưởng in để đưa ra tư vấn cho seller lựa chọn xưởng có chi phí cơ bản (base cost) rẻ nhất hoặc thời gian sản xuất (production time) nhanh nhất.
2. **Khắc phục tình trạng Out-of-Stock (Hết hàng):** Tự động đối chiếu trạng thái tồn kho thực tế thông qua BurgerPrints API. Hệ thống có khả năng tự đề xuất sản phẩm thay thế phù hợp khi sản phẩm chính hết hàng.
3. **Trải nghiệm hội thoại thời gian thực (Real-time Chat):** Tích hợp cơ chế **Server-Sent Events (SSE) streaming** giúp đẩy trực tiếp từng token từ AI xuống giao diện người dùng, giảm thiểu độ trễ Time-to-First-Token (TTFT), mang lại cảm giác phản hồi tức thì.
4. **Vận hành & Quản lý đơn hàng:** Hỗ trợ tạo, xem và thanh toán đơn hàng trực tiếp ngay trên giao diện chat của ứng dụng.

## ⚙️ Kiến Trúc Hệ Thống & Công Nghệ
Dự án được xây dựng theo mô hình **SPA (Single Page Application)**, chia tách Frontend và Backend rõ ràng:

### Tech Stack
- **Backend:** Django, Django REST Framework, Python.
- **Frontend:** React 19, Vite, Tailwind CSS.
- **AI & NLP:** LangGraph, Google Gemini AI (`gemini-3.1-flash-lite`).
- **Database & Cache:** SQLite (lưu session hội thoại), In-memory Caching.

### Các Luồng Xử Lý Chính (Agent Workflow)
Hệ thống sử dụng **LangGraph** để xây dựng luồng tư duy và ra quyết định cho AI, bao gồm các bước:
- **Intent Analysis (Phân tích ý định):** Xử lý ngôn ngữ tự nhiên (NLP) để hiểu rõ yêu cầu của seller.
- **Router (Định tuyến):** Chuyển hướng yêu cầu đến các Agent chuyên trách.
- **Data Agent:** Gọi API (BurgerPrints API) lấy dữ liệu thật (thông tin sản phẩm, tồn kho, xưởng in).
- **Function/Action:** Ra quyết định và thực thi các thao tác như tính toán tối ưu, tạo đơn hàng.
- **Output Validator:** Kiểm duyệt câu trả lời trước khi stream về cho người dùng.

## ⚡ Điểm Nổi Bật Kỹ Thuật (Key Highlights)
- **Smart Catalog Cache:** Hệ thống lưu cache trong bộ nhớ trong 5 phút đối với danh sách lớn (500 sản phẩm) và 2 phút đối với sản phẩm Out-Of-Stock, giúp giảm tải đáng kể số lượng request gọi lên BurgerPrints API và tối ưu độ trễ.
- **Real-time SSE Streaming:** Vượt qua bộ lọc JSON chặn, đẩy stream dữ liệu thô thẳng tới người dùng để mang lại UX xuất sắc nhất.
- **Cơ chế triển khai tự động (Auto-deployment):** Cung cấp sẵn các script `deploy.bat` và `deploy.sh` tự động thiết lập môi trường, tải thư viện, cấu hình cơ sở dữ liệu và build React SPA.