# Portfolio maintenance guide

> Đọc file này trước khi sửa portfolio. Mục tiêu của tài liệu là giúp người hoặc agent mới xác định đúng nơi cần chỉnh mà không phải rà lại toàn bộ source code.

## 1. Mục tiêu sản phẩm

Portfolio một trang của **Nguyễn Xuân Trung**, định vị cho các vị trí:

- Fresher AI Engineer.
- Applied AI Engineer.
- Part-time opportunities through June 2027; full-time roles from July 2027.

Định hướng thiết kế đã được duyệt:

- Cảm giác senior/big-tech nhưng vẫn trẻ, có chất Gen Z.
- Dark mode: midnight navy, amber/orange và copper.
- Light mode: ivory, burgundy và bronze.
- Contact card trong light mode dùng wine-red/burgundy thay cho navy để không bị lẫn với dark mode.
- Animation có chủ đích, dùng được trên mobile và thiết bị yếu.
- Nội dung phải evidence-first: phân biệt đóng góp cá nhân, kết quả nhóm và trạng thái nghiên cứu.
- Không trình bày số minh họa như số đo thật; không thêm claim khi chưa có bằng chứng.

## 2. Stack và lệnh làm việc

- React 19.
- Vite 8.
- Tailwind CSS 4 được nạp qua Vite, nhưng giao diện hiện chủ yếu dùng CSS class tự viết.
- React Icons.
- Oxlint.
- Deploy theo cấu hình Vercel SPA rewrite.

Các lệnh chính trên Windows:

```powershell
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
git -c safe.directory=D:/portfolio diff --check
```

Sau mỗi thay đổi giao diện hoặc nội dung, tối thiểu phải chạy `lint`, `build` và `diff --check`.

## 3. Kiến trúc ứng dụng

Đây là single-page portfolio. Không có router package; navigation chính dùng hash và cuộn tới section, còn case study dùng URL riêng `/projects/<slug>` do `App.jsx` xử lý.

Thứ tự render nằm trong `src/App.jsx`:

1. `HomePage` — `#home`
2. `ProjectsPage` — `#work`
3. `AboutPage` — `#experience`
4. `SkillsPage` — `#capabilities`
5. `HonorsPage` — `#research`
6. `ProfilePage` — `#about`
7. `ContactPage` — `#contact`

`src/App.jsx` còn chịu trách nhiệm:

- Chuyển các URL cũ `/projects`, `/skills`, `/honors` về section tương ứng.
- Khôi phục project dialog từ `/projects/<slug>`, đồng bộ browser history và cập nhật title/meta description theo project.
- Bật motion profile `lite` khi người dùng bật reduced motion, Data Saver, hoặc thiết bị có RAM/CPU thấp.
- Giữ selected-project state dùng chung để capability card trong Hero có thể mở dialog do `ProjectsPage` render.

`src/components/layout/Layout.jsx` bọc toàn trang bằng skip link, navbar, main và footer.

## 4. Bản đồ file

### Root

- `about.md`: tài liệu bảo trì này.
- `README.md`: hướng dẫn public về stack, chạy local, performance và deployment.
- `index.html`: SEO metadata, Open Graph, favicon, theme bootstrap trước khi React mount.
- `package.json`: dependencies và scripts. Hiện chỉ có `dev`, `build`, `lint`, `preview`; chưa có automated test suite.
- `vite.config.js`: React + Tailwind plugins.
- `vercel.json`: rewrite mọi path về `/` cho SPA.
- `CV_image.jpg`: ảnh chân dung được import bởi `ProfilePage`.

### Dữ liệu

- `src/data/portfolio.js`: nguồn dữ liệu nội dung chính. Ưu tiên sửa file này trước khi hard-code dữ liệu vào JSX.

Các export trong file:

- `personalInfo`: tên, title, bio, vị trí, target roles, availability, ngày tốt nghiệp, email, phone, CV và social links.
- `experience`: kinh nghiệm làm việc và bullet trách nhiệm.
- `education`: trường, ngành, GPA, ngày tốt nghiệp.
- `skills`: nhóm kỹ năng và tag hiển thị.
- `projects`: toàn bộ dữ liệu project/case study.
- `honors`: academic recognition và research papers/manuscripts.
- `activities`: hoạt động cộng đồng.
- `certifications`: chứng chỉ và URL xác minh.
- `navLinks`: navbar anchors.

Không tạo thêm một object thống kê hard-code. Các số đếm phải được suy ra từ collection nguồn.

### Pages

- `src/pages/HomePage.jsx`
  - Hero copy, CTA, interactive capability map và academic proof points.
  - Capability map nối cả sáu domain tới project object thật; Reinforcement Learning mở DATU Offline RL, còn Time Series/RUL vẫn mở Bearing RUL trong archive.
  - GPA, tỷ lệ Top 100 và số paper hiện được suy ra từ `honors`; Hero ghép tỷ lệ thành `{top100}/{completed} semesters`, không hard-code hai con số.
  - Availability lấy từ `personalInfo.availability`.
- `src/pages/ProjectsPage.jsx`
  - Featured project cards, archive cards và native `<dialog>` case study.
  - `featured` và `featuredRank` trong `portfolio.js` quyết định main list và thứ tự.
  - Metrics và measurement scope nằm trong từng project object để card và dialog dùng chung một nguồn dữ liệu.
  - Project có `slug` mở được trực tiếp bằng `/projects/<slug>`; lịch sử trình duyệt đồng bộ trạng thái dialog.
  - Hình case study có lightbox phóng to, Escape/backdrop close và link mở asset gốc.
  - Toàn bộ card có hitbox mở dialog; GitHub/research/demo vẫn là link riêng.
- `src/pages/AboutPage.jsx`
  - Experience và education.
- `src/pages/SkillsPage.jsx`
  - Capability cards.
  - `capabilityMeta` nối mỗi category với icon, câu mô tả và các project case study làm bằng chứng có thể bấm mở.
- `src/pages/HonorsPage.jsx`
  - Research list, trạng thái Published/Accepted/Submitted, academic recognition và certifications.
  - Research được suy ra bằng `honors.filter(type === "research")`.
  - Sáu chứng chỉ đầu theo `priority` là featured; phần còn lại nằm trong expandable archive.
- `src/pages/ProfilePage.jsx`
  - Portrait, bio, location, current focus, target roles, graduation và activities.
- `src/pages/ContactPage.jsx`
  - Contact card, mailto CTA, copy-email interaction và LinkedIn.

### Shared components

- `src/components/ui/Card.jsx`: surface wrapper, hỗ trợ element type và trạng thái interactive.
- `src/components/ui/GoldButton.jsx`: render anchor hoặc button với variant `primary`, `secondary`, `ghost`.
- `src/components/ui/Reveal.jsx`: IntersectionObserver reveal; hỗ trợ delay, `once`, reduced motion fallback.
- `src/components/ui/SectionTitle.jsx`: heading dùng chung cho các section.
- `src/components/layout/Navbar.jsx`: desktop/mobile navigation, active section observer, theme toggle và resume CTA.
- `src/components/layout/Footer.jsx`: copyright, social links và tagline.

### Styling

- `src/index.css`: toàn bộ token, theme, layout, component styles, animations và responsive rules.

Các vùng quan trọng có thể tìm bằng comment hoặc selector:

- `:root` và `html[data-theme="light"]`: design tokens.
- `/* Navigation */`: navbar và mobile nav.
- `/* Hero */` và `/* Hero: project-backed capability map */`: hero.
- `/* Work */`: project cards.
- `/* Native project dialog */`: case-study modal.
- `/* Experience and about */`: experience/profile.
- `/* Capabilities */`: skills.
- `/* Research */`: papers, academic recognition và credentials.
- `/* Contact and footer */`: contact card/footer.
- `/* Approved visual direction: Midnight Ember / Ivory Intelligence */`: lớp override của design đã duyệt.

Lưu ý: file CSS có cả base rules ở nửa đầu và visual-direction overrides ở nửa sau. Khi một style không có tác dụng, kiểm tra selector trùng ở phía sau file và các media query trước khi tăng specificity.

Responsive breakpoints hiện có: `1120px`, `1023px`, `920px`, `767px`, `479px`, `419px`, cùng các query cho coarse pointer và reduced motion.

### Public assets

- `public/cv/NguyenXuanTrung_AI_Engineer_CV.pdf`: CV đang được navbar/hero mở trực tiếp.
- `public/images/projects/`: hình kiến trúc và ablation của project.
- `public/images/hero/ai-systems-hero-v1-960.webp`: social/hero artwork cỡ nhỏ.
- `public/images/hero/ai-systems-hero-v1-1920.webp`: Open Graph image.
- `public/favicon.svg`: favicon.

Hero đang hiển thị bằng HTML/CSS, không dùng ảnh hero WebP trên màn hình.

## 5. Theme, animation và performance

Theme được lưu ở local storage key `portfolio-theme`. `index.html` áp theme trước khi React chạy để tránh flash; `Navbar.jsx` quản lý toggle và cập nhật `theme-color`.

Hai mode dùng cùng hệ thống **vai trò màu**, nhưng mỗi mode có palette riêng:

| Vai trò | Dark — Midnight Ember | Light — Ivory Editorial |
| --- | --- | --- |
| Canvas / surface | `#06152F` / `#0B1931` | `#F4EAD8` / `#FFFAF1` |
| Text chính / phụ | `#FFF2D1` / `#C8C0AD` | `#281F1A` / `#66564B` |
| Primary signal | amber `#FF9B32` | burgundy `#7A1328` |
| Signal mạnh | `#FFB45D` | `#5D0D1E` |
| Top 100 | orange `#FF9B32` | burgundy `#7A1328` |
| Honor Student | muted amber `#98764F` | dusty burgundy `#B77987` |
| Technical secondary | ice blue `#75C5FF` | slate blue `#4F6788` |

Quy tắc palette:

- Không hard-code màu accent trong component; dùng semantic tokens ở đầu `src/index.css`.
- Dark dùng amber/orange làm màu hành động chính. Light dùng burgundy làm màu hành động chính và dusty burgundy cho achievement phụ; bronze/gold chỉ nằm trong contact feature card, không dùng cho text nhỏ.
- `--color-ranking` và `--color-honor` phải tách biệt để hai kỳ Top 100 nổi bật nhưng năm kỳ Honor vẫn được ghi nhận rõ.
- Research status có token riêng cho Published, Accepted và Submitted; không dùng một màu cho cả ba trạng thái.
- Contact card có bộ token `--contact-*` riêng cho từng mode vì đây là dark feature panel trong cả hai theme.
- Màu text nhỏ phải đạt tương phản đọc được; `--color-subtle` light đã được làm tối hơn cho metadata.

Motion được thiết kế theo hai profile:

- `full`: reveal, ambient drift, data packet, core/orbit/spark và các hover transition.
- `lite`: tắt bớt continuous animation và decorative nodes.

`prefers-reduced-motion: reduce` có fallback riêng trong CSS và `Reveal.jsx`.

Nguyên tắc khi thêm animation:

- Chỉ animate `transform` và `opacity` khi có thể.
- Không thêm video nền, WebGL hoặc canvas loop liên tục.
- Không làm nội dung phụ thuộc animation mới đọc được.
- Kiểm tra mobile/coarse pointer và motion `lite`.
- Ảnh project/profile phải có kích thước khai báo, lazy loading và async decoding.

## 6. Nguồn dữ liệu và quy tắc tính toán

### Positioning và availability

Thông tin định vị nghề nghiệp nằm trong `personalInfo` và phải được dùng thống nhất:

- `positioning`: AI Engineer tập trung vào evidence-grounded multimodal và RAG systems, kết hợp computer vision, model optimization và reliable backend engineering.
- `currentFocus`: nhãn chuyên môn ngắn trong About.
- `targetRoles`: AI Engineer và Applied AI Engineer.
- `availability`: bản ngắn cho hero — part-time hiện tại, full-time từ July 2027.
- `availabilityDetail`: bản đầy đủ cho About — part-time through June 2027, full-time from July 2027.
- `expectedGraduation`: June 2027; đây là mốc tốt nghiệp, không dùng thay cho availability.

Khi thời gian có thể bắt đầu làm việc thay đổi, cập nhật cả `availability`, `availabilityDetail`, Contact copy và SEO description. Không dùng cụm `Open to full-time roles` trước July 2027 nếu không nêu rõ mốc bắt đầu.

### Academic proof points

`HomePage.jsx` lấy dữ liệu từ academic item trong `honors`:

- GPA từ `academic.gpa`.
- Top 100 count từ số phần tử trong `Top 100 Excellent Students.semesters`.
- Tổng kỳ từ `academic.completedSemesters`.
- Số paper từ số item có `type: "research"`.

Vì vậy khi thêm paper vào `honors`, con số trên hero phải tự tăng; không sửa số bằng tay.

Academic semantics hiện tại:

- 7 học kỳ đã hoàn thành.
- 2 kỳ Top 100 Excellent Student: Summer 2025 và Fall 2025.
- 5 kỳ còn lại là Honor Student.
- GPA hiện tại: 3.75/4.0.

### Research status và links

Mỗi research item nên có:

```js
{
  title,
  organization,
  year,
  description,
  authors,
  status,
  statusLabel,
  credentialUrl,
  linkLabel,
  type: "research",
}
```

Quy tắc bắt buộc:

- Published: `statusLabel: "Published"`, `linkLabel: "View publication"`, URL đến DOI/trang bài báo.
- Accepted: `statusLabel: "Accepted at [venue]"`, `linkLabel: "Conference website"`, URL đến homepage hội nghị.
- Submitted: `statusLabel: "Submitted to [venue]"`, `linkLabel: "Conference website"`, URL đến homepage hội nghị.
- Không link accepted/submitted item tới acceptance email hoặc manuscript private.
- Chỉ dùng `Submitted` sau khi submission đã hoàn tất; nếu chưa thì dùng `In preparation for ...`.

Research hiện có 7 item:

- 2 Published.
- 2 Accepted: ICARCV 2026 và SIMC 2026.
- 3 Submitted: một short paper tại FISAT 2026 và hai manuscript tại RIVF 2026.

### Project schema

Mỗi project trong `projects` đang dùng các field:

```js
{
  id,
  slug,
  title,
  role,
  period,
  teamSize,
  status,
  description,
  metrics: [{ value, label }],
  highlights: [],
  tags: [],
  category,
  github,
  researchUrl,
  researchLabel,
  visualImage,
  visualAlt,
  visualCaption,
  visualWidth,
  visualHeight,
  visualTheme,
  measurementScope,
  caseStudy: {
    problem,
    dataset,
    baseline,
    evaluation,
    tradeoffs,
    limitations,
    engineering,
    reproduction,
  },
  demo,
  featured,
  featuredRank,
}
```

`featured` trực tiếp quyết định project nằm trong main hay archive. Các main project được sắp theo `featuredRank`; metrics cũng nằm trong data thay vì hard-code tại page component.

Project hiện có:

- ID 8: Subject Knowledge Hub — Version-Aware PDF RAG.
- ID 7: TraceVision — Evidence-Grounded Video Search.
- ID 9: DATU — Decision-Aware Trajectory Utility in Offline RL.
- ID 1: Multimodal Bearing RUL Prediction with WCA-GRU.
- ID 2: Noise-Robust Vietnamese ASR with Tone-Aware LoRA.
- ID 4: Secure Login System — Face Anti-Spoofing Module.
- ID 5: Learned Conditional Routing for Multi-Domain UAV Object Detection.
- ID 6: AQB-FAS for Edge Devices.

Portfolio hiện có 8 project: 4 main và 4 archive. Main project theo `featuredRank`: AQB-FAS → TraceVision → Subject Knowledge Hub → DATU Offline RL. Bearing RUL, Vietnamese ASR, Secure Login và Learned Conditional Routing nằm trong archive.

Khi thêm hoặc thay project:

1. Thêm/sửa object trong `portfolio.js`.
2. Đặt ảnh WebP hoặc SVG tối ưu trong `public/images/projects/`.
3. Khai báo đúng width/height và alt/caption.
4. Khai báo metrics trong chính project object; thêm `measurementScope` nếu metric dễ bị hiểu sai.
5. Đặt `featured: true` và `featuredRank` nếu là main project.
6. Kiểm tra card, dialog, GitHub/research/demo links và mobile.
7. Mọi project phải có `slug` duy nhất; kiểm tra reload trực tiếp tại `/projects/<slug>`.

Không ghi metric nếu thiếu dataset/split, hardware hoặc phạm vi đo cần thiết. Phân biệt rõ component latency và end-to-end pipeline latency.

### Skills

Skills trên website follow trực tiếp theo CV hiện tại và gồm 5 nhóm:

- Programming & ML Tools: Python, SQL, PyTorch, TensorFlow, scikit-learn, OpenCV.
- AI Domains: Machine Learning, Computer Vision, Natural Language Processing, Reinforcement Learning, Multimodal Learning, Time-Series Modeling.
- LLM & Agentic Systems: LangChain, LangGraph, Retrieval-Augmented Generation (RAG), Tool Calling.
- Backend & Engineering: FastAPI, REST APIs, PostgreSQL, SQL Server, ETL Pipelines, Git.
- Languages & Strengths: English (B2), Analytical Thinking, Problem Solving.

Khi CV thay đổi, cập nhật đồng thời `skills` trong `portfolio.js` và `capabilityMeta` trong `SkillsPage.jsx`. Các câu proof chỉ mô tả phạm vi năng lực; không dùng từ `production`, `shipped` hoặc claim deployment nếu chưa có case study/repository chứng minh.

## 7. Quy trình sửa nội dung thường gặp

### Sửa thông tin cá nhân

Sửa `personalInfo` trong `src/data/portfolio.js`. Hero, Profile, Contact, Navbar và Footer lấy phần lớn dữ liệu từ đây.

Nếu đổi định vị nghề nghiệp, rà thêm:

- Hero lead trong `HomePage.jsx`.
- Capability copy trong `SkillsPage.jsx`.
- Contact copy trong `ContactPage.jsx`.
- SEO description/keywords trong `index.html`.

### Thêm paper

1. Thêm research object vào `honors`.
2. Chọn đúng `statusLabel`, `linkLabel` và URL theo quy tắc ở trên.
3. Không sửa paper count trong hero; count tự tính.
4. Kiểm tra link mở tab mới và CTA trên mobile.

### Thêm certificate

Thêm object vào `certifications` với title, issuer, date, type, skills, priority và credential URL. `priority` nhỏ hơn sẽ xuất hiện trước; sáu item đầu là featured.

### Sửa project content

Project content và metrics nằm trong `portfolio.js`; cách render card/dialog nằm trong `ProjectsPage.jsx`; ảnh nằm trong `public/images/projects/`. Luôn kiểm tra cả ba nơi.

### Sửa màu/theme

Sửa semantic variables trong `:root` và `html[data-theme="light"]`, sau đó kiểm tra hero, project, research, academic recognition, contact và trạng thái hover/focus ở cả hai mode. Nếu đổi light canvas, cập nhật cả `theme-color` trong `Navbar.jsx`. Không dùng lại màu dark cho light chỉ vì cùng tên gọi trực quan; ánh xạ theo vai trò (`signal`, `ranking`, `honor`, `status`, `contact`) trước.

### Sửa animation

Rà cả `Reveal.jsx`, motion detection trong `App.jsx`, keyframes trong `index.css` và các rule `html[data-motion="lite"]`.

## 8. Accessibility và interaction đang có

- Skip link tới `#main-content`.
- Navbar có active-section state và mobile Escape close.
- Theme button có aria-label/title động.
- Project dialog dùng native `<dialog>`, đóng bằng Escape, close button hoặc click backdrop.
- Project images có alt; decorative/archive thumbnails có thể dùng alt rỗng.
- Research links có visible label và aria-label mô tả đích.
- Copy email có live status.
- Reduced-motion fallback.

Khi sửa, không loại bỏ focus-visible, aria labels hoặc keyboard behavior.

## 9. Hạng mục đang đóng băng hoặc chờ dữ liệu

### Project section — bộ main hiện tại

Portfolio đã có bộ 4 main project:

1. AQB-FAS — edge computer vision và model optimization.
2. TraceVision — multimodal video search.
3. Subject Knowledge Hub — version-aware PDF RAG.
4. DATU — decision-aware trajectory utility trong Offline RL.

Archive có 4 project: Multimodal Bearing RUL, Vietnamese ASR, Secure Login Face Anti-Spoofing và Learned Conditional Routing cho UAV detection.

Subject Knowledge Hub, TraceVision và DATU đã được đối chiếu với repository public, README, source/config và benchmark/report tương ứng. Measurement scope trong từng project object là bắt buộc vì các metric có phạm vi khác nhau.

DATU dùng kết quả của original frozen study: 86/86 full-training jobs, 17.8M downstream updates và matched-support IQL gap +10.0 pp trên năm seed. Đây là kết quả một PointMaze construction; DATU không có ranking superiority phổ quát. Historical datasets, checkpoints và run archive không nằm trong source-only public repository.

Mỗi case study mới cần chuẩn bị:

- Problem và constraint.
- Vai trò/đóng góp cá nhân.
- Dataset và split.
- Baseline.
- Metric có đơn vị.
- Hardware và điều kiện đo.
- Component metric so với toàn pipeline.
- Ablation/failure analysis.
- Trade-off và limitation.
- Testing, deployment, error handling, monitoring.
- Reproduction steps và repository/demo link.

### FISAT 2026 paper

Paper đã được thêm với trạng thái `Submitted to FISAT 2026`:

- Type: Short paper.
- Title: “TinyConformalAD: A Compact TCN Autoencoder with a Split-Conformal Alarm-Scoring Interface.”
- Authors: Anh Minh Phan; Hoai My Nguyen; Xuan Trung Nguyen; Nguyen Minh Phong Pham; Dang Thanh Ngan Ngo.
- Venue: EAI FPT International Conference on Intelligent Systems and Advanced Technologies 2026.
- Public link: conference homepage; không public manuscript hoặc submission email.

### Hero capability map

Hero không còn telemetry minh họa `12 ms`, `1.2K/s`, `99.9%` hoặc nhãn `Live inference`. Panel bên phải hiện là capability map code-native:

- Trung tâm: AI Engineer — Build · Evaluate · Deploy.
- Project-backed domains: AQB-FAS, Subject Knowledge Hub, TraceVision, Vietnamese ASR, Bearing RUL và DATU Offline RL.
- Nền tảng inference/deployment chỉ liệt kê công nghệ đã xuất hiện trong CV hoặc project evidence.
- Full motion chỉ dùng opacity/transform cho directional card entrance, core overshoot, connector, halo, icon pulse và panel sweep. Mobile bỏ sweep/icon pulse và dùng entrance theo trục dọc; motion `lite` tắt animation liên tục, còn reduced motion tắt toàn bộ animation của map.
- Hero name trên mobile dùng cỡ chữ và line-height riêng để dấu tiếng Việt không chạm dòng; role label có khoảng cách với tên nhưng được giữ gần tagline.

### Secure Login experiment wording

Repository public xác nhận Spatial Attention và CBAM được so sánh trên test benchmark; CBAM là model được báo cáo tốt nhất và được export ONNX. Website phải gọi đây là post-hoc test-set comparison, không mô tả là unbiased model selection.

### Dedicated case-study URLs

Mỗi case study có `slug` và mở tại `/projects/<slug>`. Vercel rewrite mọi route về app shell; `App.jsx` khôi phục dialog từ URL và xử lý browser back/forward. Khi đổi slug phải cập nhật mọi link ngoài website vì slug là public URL.

### CV

Repo chỉ có PDF `public/cv/NguyenXuanTrung_AI_Engineer_CV.pdf`, không có DOCX/LaTeX source. Muốn sửa nội dung/ngắt trang phải lấy source CV trước, sau đó mới thay PDF và đồng bộ với website.

## 10. Nguyên tắc handoff cho agent tiếp theo

1. Đọc `about.md` trước.
2. Chạy `git status`; không ghi đè thay đổi local của người dùng hoặc agent trước.
3. Sửa data ở `portfolio.js` trước, chỉ hard-code presentation copy khi thật sự thuộc component.
4. Không đổi bộ 4 Main/4 More hoặc project claims khi chưa có yêu cầu rõ và bằng chứng tương ứng.
5. Không biến số minh họa thành claim thật.
6. Không đổi Published/Accepted/Submitted nếu thiếu bằng chứng trạng thái.
7. Giữ cả dark/light mode, responsive và motion-lite.
8. Chạy lint/build/diff check trước khi bàn giao.
9. Chỉ commit/push khi người dùng yêu cầu rõ.
