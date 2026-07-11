# 개요

이 문서는 Lolly 플랫폼의 목적, 구조, 아키텍처 결정 사항을 정리했어요. 제품 비전과 코드베이스의 현재 상태를 모두 반영하고 있어요.

> **상태:** Lolly는 **아직 완료되지 않은 비공개 파일럿** 단계에 있는 사내 프로토타입이에요. 엔진은 결정론적이고 내부적으로 일관되지만, 제품은 아직 초기 단계이고——SUSE가 첫 번째 고객이에요——암호화 및 파일 파싱 엔진은 현재 엔터프라이즈 규모에 대비해 SUSE의 엄격한 인프라 강화 과정을 거치고 있어요(이 분야는 저희가 정말 잘하는 부분이에요). 아래 아키텍처는 완성되고 인증된 제품이 아니라, 검증 중인 설계 의도로 읽어 주세요. 파일럿이 어떻게 운영되고 측정되는지는 [도입과 거버넌스](/info/adoption-governance.html#status)를 참고하세요.

---

## 이 플랫폼이 존재하는 이유

팀들은 반복되는 문제에 부딪혀요. 매번 숙련된 인력을 투입할 만큼 예측 불가능하지는 않지만, 가드레일 없이 맡기기엔 품질에 너무 민감한 반복적인 크리에이티브·콘텐츠 작업이 그것이에요. 그 결과는 느린 처리 속도(전문가 병목 현상), 일관성 부족(각자 손에 잡히는 도구를 사용), 또는 벤더 종속(템플릿을 지배하는 SaaS형 DAM) 중 하나로 이어져요.

이 플랫폼은 그에 대한 구조적인 답이에요:

> **프로그래밍 방식의 대규모 크리에이티브·콘텐츠 제작** — 규칙을 중앙에서 통제하며, 직원, 벤더, 파트너를 위해 노동력 없이 에셋을 생성해요.

그 결과로 얻는 것은 **풍요로움**이에요. 모든 이벤트에 올바른 사이니지가 준비되고, 모든 CVE 경고가 하우스 스타일에 맞으며, 모든 라벨이 깔끔하게 인쇄되고, 모든 이메일 서명이 최신 상태를 유지해요——디자인 티켓을 등록할 필요 없이요. 이 플랫폼이 다루는 것은 반복적이고 운영화된 크리에이티브 작업이에요. 의도적으로 맞춤형 크리에이티브 도구는 아니에요——대표작은 여전히 디자이너가 맡아요.

### 시장 지형에서의 위치

| 기능 | Canva | Brand portals | Illustrator | Figma / Penpot | **Lolly** |
|---|---|---|---|---|---|
| 대량 콘텐츠 생성 | 부분 지원 | ✗ | ✗ | ✗ | **✓** |
| 완전 오프라인 동작 | ✗ | ✗ | ✓ | 부분 지원 | **✓** |
| 템플릿 로직과 강제 제약 | ✗ | 부분 지원 | ✗ | 부분 지원 | **✓** |
| 디자인 역량 불필요 | 부분 지원 | ✓ | ✗ | ✗ | **✓** |
| 자동 Content Credentials | ✗ | ✗ | 부분 지원 | ✗ | **✓** |
| 도구가 다른 도구를 조합 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 개방형 엔진, SaaS 종속 없음 | ✗ | ✗ | ✗ | 부분 지원 | **✓** |
| C2PA content credentials | ✗ | ✗ | ✗ | ✗ | **✓** |
| 옵트인 방식의 포렌식 수준 출처 정보 | ✗ | ✗ | ✗ | ✗ | **✓** |
| 모바일 및 데스크톱 앱 | ✓ | ✗ | ✗ | 부분 지원 | **✓** |
| 커맨드라인과 TUI | ✗ | ✗ | ✗ | ✗ | **✓** |

그 공백은 명확해요. 기존 시장 지형 어디에도 제약 우선·오프라인 가능·낮은 숙련도·사내 접근 가능이라는 조건을 모두 충족하는 결과물은 없어요. Lolly에는 열린 캔버스인 **Layout Studio**도 포함되어 있는데, 여기서도 색상·타이포그래피·에셋이 브랜드 전역 설정을 따르기 때문에 자유로운 배치도 제약 우선을 유지해요. 이 도구가 **아닌** 것은 제약 없는 디자인 스위트예요——맞춤형 대표작에는 디자이너가 여전히 Illustrator와 Figma를 사용해요. 순열 조합은 이 도구로 만들 수 있어요.

**이런 용도로 사용하세요:** 운영화된 크리에이티브 에셋의 빠른 생성——이벤트 타일, 네임 배지, 서명, CVE 경고, QR 코드, 소셜 카드, 탁송 라벨, 구조화된 보고서 등이에요.

**이런 용도로는 사용하지 마세요:** 맞춤형 히어로 콘텐츠.

---

## 전체 그림

```
                ┌─────────────────────────────────────────────┐
                │              Tools (data, not code)         │
                │   tool.json + template.html + hooks.js?     │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ talks to via Capability Bridge v1
                                    ▼
                ┌─────────────────────────────────────────────┐
                │                  Engine                     │
                │   loader · validator · runtime · template   │
                │   inputs · url-mode                         │
                │   PLATFORM AGNOSTIC. Knows nothing of DOM,  │
                │   filesystem, or You.                       │
                └─────────────────────────────────────────────┘
                                    ▲
                                    │ implements HostV1
                                    ▼
        ┌──────────────┬──────────────┬──────────────┬──────────────┐
        │  Web Shell   │ Tauri Desktop│ Tauri Mobile │  CLI Shell   │
        │   (PWA)      │              │              │              │
        └──────────────┴──────────────┴──────────────┴──────────────┘
                                    ▲
                                    │ fetches from
                                    ▼
                ┌─────────────────────────────────────────────┐
                │              Catalogs                       │
                │   catalog/tools/index.json + tool dirs      │
                │   catalog/assets/index.json + asset files   │
                └─────────────────────────────────────────────┘
```

### 리포지토리 구조

```
lolly/
├── engine/           # 플랫폼에 종속되지 않는 코어. 오픈소스(MPL-2.0).
│   └── src/
│       ├── index.ts          # 공개 영역 — loader, runtime, template, inputs, url-mode
│       ├── loader.ts         # 도구 파일을 가져오고 검증
│       ├── runtime.ts        # 5단계 라이프사이클을 조율
│       ├── template.ts       # Handlebars 하이드레이션 + annotateTemplate
│       ├── inputs.ts         # 매니페스트 → 런타임 입력 모델
│       ├── url-mode.ts       # URL ↔ 입력 상태 왕복 변환
│       ├── validate.ts       # 매니페스트의 JSON Schema 검증
│       ├── compose.ts        # 중첩된 도구 렌더링(composes) 해석
│       ├── embed.ts          # 이식 가능한 lolly.tools 임베드 URL 파싱
│       └── bridge/
│           └── host-v1.ts    # TypeScript 인터페이스 — 브리지 계약
│
├── shells/
│   ├── web/          # PWA — 온라인 호스팅; 주요 배포 경로
│   │   └── src/
│   │       ├── main.ts           # 부팅, 라우팅
│   │       ├── theme.ts          # 테마 적용/저장(FOUC 방지)
│   │       ├── bridge/           # HostV1 API의 web 구현체
│   │       │   ├── index.ts      # 브리지 구성 요소를 모두 합침
│   │       │   ├── db.ts         # IndexedDB 설정
│   │       │   ├── state.ts      # host.state — 저장된 편집 내용
│   │       │   ├── profile.ts    # host.profile — 사용자 정보
│   │       │   ├── assets.ts     # host.assets — 카탈로그 + 사용자 업로드
│   │       │   ├── clipboard.ts  # host.clipboard
│   │       │   ├── export.ts     # host.export — 래스터화/직렬화
│   │       │   ├── net.ts        # host.net — 허용 목록 기반 fetch
│   │       │   └── media.ts      # host.media — 실시간 카메라 프레임(onFrame)
│   │       ├── catalog/
│   │       │   └── sync.ts       # 부팅 시 카탈로그 동기화 + 오프라인 캐시
│   │       ├── styles/           # 앱 전역 CSS(app.css, picker.css, tokens.css)
│   │       └── views/
│   │           ├── gallery.ts    # 도구 라이브러리 목록 + 저장 상태 카드
│   │           ├── tool.ts       # 도구 하나를 마운트(입력 + 캔버스 + 액션)
│   │           ├── picker.ts     # 에셋 피커 UI(host.assets가 호출)
│   │           ├── profile.ts    # 사용자 정보 편집기
│   │           ├── projects.ts   # /p — 저장된 세션의 폴더(중첩 구조; 폴더/선택 항목 내보내기)
│   │           └── free-canvas.ts # render.layout:"editor" 도구를 위한 프리 캔버스 편집기 오버레이
│   │
│   ├── cli/          # Node.js CLI — 동일한 엔진, 헤드리스 jsdom
│   │   ├── bin/lolly.ts
│   │   └── src/
│   │       ├── run.ts    # loadTool → createRuntime → export → 파일 쓰기
│   │       └── bridge.ts # HostV1의 CLI 구현체
│   │
│   ├── tui/          # 대화형 터미널 셸(Ink) — CLI 브리지를 재사용
│   │   └── src/
│   │       ├── main.tsx  # 전체 화면 앱: Gallery / Projects / Profile / ToolView
│   │       └── bridge.ts # CLI 브리지 + ~/.lolly 아래의 디스크 상태
│   │
│   ├── tauri-desktop/ # 다운로드 가능한 데스크톱 앱
│   └── tauri-mobile/  # iOS/Android 앱
│
├── tools/            # 프로필 VIEW(gitignore 대상) — 코드가 아니라 데이터. 다음 팩에서 병합됨:
│                     #   community/(공개, 브랜드 비종속, MPL) + brands/<active>/tools(브랜드 소유).
│   ├── qr-code/
│   ├── quotes/
│   ├── email-signature/
│   ├── daily-card/        # "Day Brief" — 날씨/시간/지도(인라인 템플릿 스크립트가 가져옴)
│   ├── code-canvas/
│   ├── countdown-timer/
│   ├── color-palette/
│   ├── color-block/           # 타입이 있는/이종 블록(addMenu 판별자)
│   ├── dynamic-layout/
│   ├── tool-logo/         # "Logo" — 자동 전환되는 브랜드 로고
│   ├── street-map/        # 오프라인 벡터 시가지 블록 지도
│   ├── url-shot/          # "URL Screenshot"(capture 기능)
│   ├── strip-data/        # 온디바이스 메타데이터 제거 — JPEG/PNG/SVG/PDF(파일 입력 → 클린 파일 출력)
│   ├── compress-pdf/      # 온디바이스 PDF 압축기 — 이미지를 재압축(파일 입력 → 더 작은 파일 출력)
│   ├── brand-lockup/      # "Brand Lockup" — SUSE 로고 락업; HarfBuzz 텍스트-투-패스(wasm)
│   ├── bag-video/
│   ├── chart-creator/     # 구조화된 데이터로 만드는 SVG 차트
│   ├── filter-duotone/    # 2색 사진 보정
│   ├── filter-halftone/   # 사진 → 벡터 하프톤 도트 그리드
│   ├── filter-scanline/   # 사진 → 레트로 포스터화 스캔라인 그리드(SVG / 투명 래스터)
│   ├── meeting-planner/   # 전 세계 시간대 회의 스케줄러
│   ├── calendar-ics/      # 이벤트 → .ics 캘린더 파일과 카드
│   ├── digi-ad/           # "Animated Ad" — 장면으로 만드는 루핑 배너
│   ├── event-name-badge/  # 컨퍼런스 배지 — qr-code를 SVG로 조합
│   ├── wayfinding-signage/ # 이벤트 사이니지; 방향 블록이 라벨 텍스트를 자동으로 맞춤
│   ├── text-helper/       # 온디바이스 텍스트 작업대(포맷/디코드/해시/비식별화)
│   ├── layout-studio/     # "Layout Studio" — 자유형 WYSIWYG 편집기 캔버스(render.layout: editor)
│   ├── multi-page-pdf/    # 여러 페이지 PDF 문서 — 표지, 흘러가는 콘텐츠 블록, 뒤표지
│   ├── diagram-builder/   # 조직도 / 레이어케이크 / 프로세스 / 사이클 / 피라미드 다이어그램
│   ├── logo-wall/         # 여러 로고 → 자동 배치 그리드
│   ├── logo-lockup-partner/ # SUSE + 파트너 공동 브랜드 락업
│   ├── web-icon/          # 텍스트 + 색상으로 만드는 파비콘 .ico / png / svg
│   ├── filter-posterize/  # 사진 → 플랫하게 포스터화된 벡터 분판
│   ├── filter-pixel-stretch/ # 사진 → 픽셀 스미어 효과
│   ├── lottie-digi-ad/    # 애니메이션 Lottie 광고 배너
│   └── pose-geeko/        # SUSE Geeko 마스코트에 포즈를 지정 — 인쇄용 스틸컷
│
├── catalog/
│   ├── tools/index.json        # 도구 레지스트리
│   └── assets/
│       ├── index.json          # 에셋 레지스트리
│       └── suse/...            # 로고, 팔레트 등
│
├── schemas/          # tool.json, 에셋 항목, AssetRef를 위한 JSON Schema
├── scripts/          # build-catalog-index.ts, checksum-assets.ts, validate-catalog.ts
├── tests/            # 엔진 테스트
└── docs/             # 이 파일 + 작성 가이드 + 포지셔닝
```

---

## 플랫폼 배포 모델

이 플랫폼은 web PWA, Tauri 데스크톱/모바일, 스크립트 가능한 CLI, 대화형 TUI 등 여러 영역에서 동작해요. 이들 모두 동일한 엔진과 동일한 도구 파일을 사용해요.

### Web(PWA) — 주요 배포 경로
SUSE가 관리하는 URL에서 호스팅돼요. 서비스 워커가 도구와 에셋을 캐시하고 나면 오프라인에서도 동작해요. 대부분의 직원, 벤더, 파트너가 이 플랫폼을 사용하는 곳이 바로 여기예요. 계정이 필요 없어요——상태는 기기별로 IndexedDB에 저장돼요.

web 셸은 하나의 레이아웃에서 반응형으로 동작해요. 데스크톱에서는 도구가 크기 조절이 가능한 컨트롤 사이드바와, 트랙패드 네이티브 캔버스 내비게이션(Cmd/Ctrl-휠 또는 핀치로 커서 위치를 중심으로 확대/축소, Space 또는 가운데 버튼 드래그로 이동, `0`/`1`/`+`/`−` 키, Fit/% HUD)을 갖춘 미리보기 스테이지가 나란히 놓인 형태로 표시돼요. 모바일(640px 이하)에서는 컨트롤이 상단에 고정된 시트로 바뀌어, 드래그 그립으로 peek/half/full 사이를 스냅 전환하고(탭으로도 전환 가능), 정적인 전체 화면 미리보기 위에 떠 있어요. 떠 있는 **Render** 버튼을 누르면 바텀시트 팝업으로 **Export** 컨트롤이 열려요. 터치에서는 미리보기 화면에서 핀치 줌과 드래그 팬을 사용할 수 있어요. 렌더링 경로와 내보내기 컨트롤은 두 환경에서 동일해요——바뀌는 것은 크롬(외곽 UI)뿐이에요.

**배치 모드(`/pro`).** web 셸에는 하나 또는 여러 도구에 걸쳐 여러 행을 한 번에 렌더링하는, 스프레드시트 형식의 배치 그리드(`shells/web/src/pro/`)도 탑재되어 있어요. CSV/TSV 왕복 변환과 스프레드시트 붙여넣기, 행별 템플릿/포맷/크기/단위/DPI, 라이브 미리보기가 있는 블록 편집기 사이드 패널, 접을 수 있는 내보내기 열, 행별 "관련성" 태그 바, 왼쪽 드래그 핸들을 이용한 행 재정렬, 2단계 삭제 확인, 저장된 배치 세션, `.zip` 다운로드를 지원해요. 이것이 "대량 콘텐츠 생성" 포지셔닝을 뒷받침하는 일대다 영역이에요.

### Tauri 데스크톱 / 모바일
패키징된 네이티브 앱이에요(Tauri 덕분에 설치 용량이 작아요). 완전한 오프라인 사용 가능성, CLI 의존 도구(PDF Smasher, Font Outliner)를 위한 파일시스템 접근, 카메라 접근을 제공해요. 2026년 중반의 도구 강화가 예정되어 있어요.

### CLI
`lolly <tool-id> [--input=value ...] --output=file.png`

데스크톱 사용자는 터미널에서 여러 도구를 실행할 수 있어요. CLI 셸은 동일한 엔진을 로드하고, jsdom DOM을 생성하고, 동일한 렌더링 경로를 실행해서 파일을 써요. 트랜스포트는 URL 모드예요——CLI는 별도의 구현이 아니에요. 이 덕분에 CLI와 GUI의 출력이 동일하다는 것이 보장돼요.

```bash
lolly qr-code --url=https://suse.com --output=qr.svg
lolly quotes --quote="Ship it." --output=quote.png
lolly                        # 사용 가능한 도구 목록을 표시
lolly qr-code                # 해당 도구의 입력 목록을 표시
```

### TUI
`npm run tui`

CLI에 대응하는 대화형 버전이에요. 도구를 탐색하고, 입력을 채우고, 프로젝트를 저장하고, 내보내는 작업을 GUI 없이——전체 화면의 키보드 우선 터미널 앱(Ink 기반)으로 수행해요. 이 호스트 브리지는 DOM이 필요 없는 포맷(SVG/EMF/EPS/HTML + 텍스트/데이터)에 대해서는 **CLI의 구현을 재사용**하고, 여기에 `~/.lolly` 아래의 디스크 상태와 옵트인 방식의 인라인 미리보기를 추가해요. 그 밖에는 **브라우저 렌더링 티어**가 있어요. 스코프가 제한된 헤드리스 Chromium(MCP 서버가 설치하는 것과 동일)이 래스터/PDF/동영상과 라이브 URL 캡처를 온디맨드로 생성해요——빌드된 web 셸 사본을 구동하기 때문에 출력이 동일하고, 그런 포맷을 처음 내보낼 때만 실행돼요. 그래서 `url-shot`(크롭 + 색상 변경 + 벡터 PDF/SVG 포함)과 모든 래스터/pdf 도구도 터미널에서 실행할 수 있어요. 자세한 내용은 [TUI 가이드](/info/tui.html)를 참고하세요.

---

## 도구 카테고리

도구는 갤러리에서 그룹으로 묶이도록 매니페스트에서 `category`로 태그가 지정돼요.

각 행은 갤러리 섹션 순서로 나열돼요. `utility` 섹션은 갤러리에서 항상 **마지막**에 렌더링되고(향후 추가될 카테고리를 포함해 다른 모든 카테고리 뒤에), 이것이 온디바이스 "Offline Utilities" 서랍이에요.

| 카테고리 | 제공 중인 도구 | 계획 중 |
|---|---|---|
| `everyone` | QR Code Generator, Quote Card, Email Signature, Day Brief, Code Canvas, Color Block, Dynamic Layout, Logo, Web Icon Maker | Employee Image Stationery |
| `designer` | Brand Lockup, Bag Video, Chart Creator, Street Map, Animated Ad, Multi-Page PDF, Diagram Builder, Logo Lockup: Grid (NASCAR), Logo Lockup: Partner, Filter: Duotone, Filter: Halftone, Filter: Scanline, Filter: Posterize Bitmap, Filter: Pixel Stretch | Font Outliner |
| `event` | Meeting Planner, Event Name Badge, Wayfinding Signage, Calendar ICS | Event Stationery, Bulk Name Badges, Room Agenda Cards |
| `product` | — | CVE Alert, Product Release Announcement, Blog OG Image |
| `utility` | Countdown Timer, Color Palette, URL Screenshot, Strip Hidden Data, Text Helper, Compress PDF, Layout Studio | 단위/포맷 변환기, 그 밖의 온디바이스 프라이버시 유틸리티 |

도구는 `status`로도 분류돼요: `official`(브랜드 승인, 워터마크 없음), `community`(외부 기여), `experimental`(내보내기에 워터마크 적용). Dynamic Layout, URL Screenshot, Logo Lockup: Grid (NASCAR), Filter: Posterize Bitmap, Diagram Builder는 현재 `experimental` 상태이고, Web Icon Maker와 Layout Studio는 `community` 도구로 제공돼요.

**Layout Studio**는 `render.layout: "editor"` 프리 캔버스 모드로 만들어진 첫 번째 도구예요——텍스트, 도형, 이미지 상자를 드래그, 크기 조절, 회전, 스냅할 수 있는 크롬 없는 직접 조작 영역이며, 다른 모든 도구와 동일한 렌더링 경로로 내보내요.

**Strip Hidden Data**는 첫 번째 **온디바이스 유틸리티**(`privacy: "on-device"`)예요. *사용자 본인*이 제공한 파일을 받아 브라우저 안에서만 완전히 처리한 뒤 깨끗한 사본을 돌려주는 콘텐츠 변환 도구로——업로드도, 워터마크도, 출처 기록도 전혀 없어요. **Text Helper**는 두 번째로, 일상적으로 "웹사이트에 붙여넣는" 작업(JSON 포맷, JWT 디코딩, Base64, URL 인코딩/디코딩, SHA 해싱)을 위한 온디바이스 작업대예요. **Compress PDF**는 세 번째로, 이미지를 재압축해 PDF 용량을 줄이며 이 역시 완전히 온디바이스에서 이뤄져요. 이 세 도구 모두 "내 기기에서 실행——아무것도 업로드되지 않음"이라는 배지 문구를 달고 있어요. 이는 기밀 파일을 단일 목적 웹사이트에 넘기는 방식을 대체하는 프라이버시 유틸리티 카테고리의 시작이에요.

> 참고: `category`와 `status`는 각 `tool.json`에서 `catalog/tools/index.json`(갤러리가 읽는 레지스트리)으로 비정규화돼요. 신뢰할 수 있는 단일 정보원은 매니페스트이고——인덱스는 `npm run build:catalog`로 **생성**되며, 커밋된 인덱스가 매니페스트와 어긋나면 `npm run validate:catalog`가 CI를 실패시켜요.

---

## 아키텍처상의 확정 사항

이 결정들은 이미 확정된 사항이에요. 이 중 하나라도 바꾸려면 대규모 작업이 필요해요——이 결정들이 코드베이스 안의 다른 모든 결정을 형성하고 있어요.

### 1. 선언적 도구, 그리고 명령형 탈출구

도구는 매니페스트(`tool.json`) + 템플릿(`template.html`) + 선택적인 `hooks.js`로 이루어져요.

**입력을 선언하는 것은 매니페스트예요.** 템플릿이 아니에요. 입력은 Handlebars 토큰에서 추론되지 않아요. 매니페스트가 계약이고, 템플릿은 `{{id}}`로 이름이 지정된 변수를 사용해요.

**훅은 선택 사항이에요.** 대부분의 도구는 순수하게 선언적이라 매니페스트 + 템플릿만으로 충분해요. 계산된 값이 필요한 도구(QR 인코딩, 차트 데이터 정형화)는 이름이 지정된 라이프사이클 함수(`onInit`, `onInput`, `onFrame`——모션 반응형 도구를 위한 프레임 단위 라이브 카메라 훅——`beforeRender`, `beforeExport`, `afterExport`, 그리고 Strip Hidden Data 같은 온디바이스 유틸리티가 사용하는 파일 입력/파일 출력 변환 경로인 `exportFile`)를 노출하는 `hooks.js`를 제공해요. 호스트는 `new Function('host', …)`를 통해 훅을 로드하고, 기능 브리지를 클로저 스코프로 주입해요. 이것은 **이식성 계약이지 보안 샌드박스가 아니에요**. 훅은 여전히 페이지의 실행 환경 안에서 실행되고, 브라우저 셸에서는 `window`/`fetch`/`document`에 *접근할 수 있어요*——`host.*`는 지원되는 이식 가능한 영역이지, 강제되는 경계가 아니에요. 비동기 훅 결과는 시간 제한이 있고(onInit 5초, onInput 2초, 나머지는 5초) 지연된 결과는 폐기되지만, 폭주하는 *동기* 훅은 선점될 수 없어요. 따라서 신뢰할 수 없는 서드파티 훅 코드는 Worker 격리가 도입되기 전까지는 안전하게 실행할 수 없어요.

이것이 중요한 이유는 이래요. 선언적 도구는 개발자가 아닌 사람도 작성할 수 있어요. 만약 모든 도구가 웹 앱이었다면, "주력 템플릿을 만들고 유지할 수 있는 역량이 제한적"이라는 위험 요소가 영구적인 병목이 되고 말았을 거예요.

### 2. 도구와 에셋은 번들된 코드가 아니라 데이터예요

web과 Tauri 앱은 부팅 시 알려진 URL에서 도구와 에셋 카탈로그를 가져와 로컬에 캐시하고, 거기 있는 것을 그대로 사용해요. **새 이벤트 타일이나 시즌 에셋을 추가하는 데 앱 릴리스가 필요하지 않아요.**

에셋 바이트는 CDN 오염을 막기 위해 SHA-256으로 체크섬이 계산돼요. 에셋의 `id` + `version`이 캐시 무효화를 결정해요.

### 3. 기능 브리지는 도구가 볼 수 있는 유일한 API예요

도구는 자신의 템플릿 영역 밖에서 DOM을 건드리지 않고, `fetch`를 직접 호출하지 않으며, 파일시스템을 읽지 않아요. 대신 버전이 관리되는 `host.*` 메서드를 호출해요. 이 브리지는 `engine/src/bridge/host-v1.ts`에 정의되어 있어요:

| 브리지 API | 하는 일 |
|---|---|
| `host.profile` | 사용자의 이름, 이메일, 프로필 사진, 도시 등. `bindToProfile`을 통해 입력을 미리 채워요. |
| `host.assets` | 카탈로그 조회, 에셋 해석, 호스트가 제공하는 피커 UI. |
| `host.state` | 입력 슬롯 저장/불러오기. web은 IndexedDB, Tauri는 파일시스템, CLI는 메모리를 사용. |
| `host.clipboard` | 텍스트나 이미지를 클립보드에 씀(플랫폼별 폴백 포함). |
| `host.export` | 렌더링 대상을 래스터화하거나 직렬화. experimental 도구에는 워터마크를 적용. |
| `host.net` | 허용 목록 기반 fetch — 도구가 `"network"` 기능을 선언한 경우에만 사용 가능(현재 출시된 도구 중 이를 사용하는 것은 없음). |

선택적이고 추가적인 영역은 셸이 이를 제공할 때만 나타나요. 그중 둘은 **기능으로 게이팅**되어, 도구가 해당 플래그를 선언한 경우에만 노출돼요. `host.compose`(다른 도구의 렌더링을 임베드——`compose`)와 `host.capture`(URL Screenshot을 위한 페이지 캡처——`capture`)가 그것이에요. 나머지는 **기능 감지** 방식이라, 셸이 제공할 수 있으면 항상 존재해요. `host.text`(HarfBuzz WASM을 통한 텍스트-투-패스; 이에 의존하는 도구에는 `wasm` 기능 플래그가 붙어요), `host.pdf`(PDF 파싱/압축, Strip Hidden Data와 Compress PDF가 사용), `host.tokens`(DTCG 디자인 토큰)가 여기 속해요. 선언 가능한 기능은 다음과 같아요: `network`, `filesystem`, `clipboard`, `camera`, `ffmpeg`, `wasm`, `capture`, `compose`.

동일한 도구가 브라우저, Tauri, 헤드리스 CLI에서 모두 실행되는 이유는 각 셸이 이 인터페이스를 구현하기 때문이에요——도구는 자신이 어느 환경에 있는지 전혀 알지 못해요.

이 브리지는 버전이 관리돼요. 메서드를 추가하는 것은 마이너 버전이에요. 제거하거나 시그니처를 바꾸는 것은 메이저 버전 상승이에요. v2가 출시되어도 v1은 계속 동작해야 해요.

### 4. 에셋 ID는 영구적이에요

`suse/logo/primary`는 계약이에요. 한 번 게시되면:
- ID는 절대 바뀌지 않고, 재사용되지도 않아요.
- 바이트가 바뀌면 → 매니페스트의 `version`을 올려요.
- 새로운 에셋으로 교체되면 → `deprecated: true`를 설정하고, 필요하면 `replacedBy`도 설정해요.
- 기존 참조는 언제나 해석돼요.

덕분에 저장된 도구 상태와 URL로 공유된 링크는 몇 년이 지나도 유효해요.

### 5. URL 모드는 일급 기능이에요

모든 입력은 URL 파라미터로 표현할 수 있어야 해요:

```
lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H
```

CLI 모드는 다른 트랜스포트 위에서 동작하는 URL 모드예요——CLI 셸은 argv로부터 URL 상태 객체를 만들고 **동일한** 엔진 파이프라인을 실행해요. 렌더링 경로는 하나뿐이에요. CLI는 별도의 구현이 아니기 때문에 GUI에서 어긋날 수 없어요.

`url-mode.ts`가 왕복 변환(파싱과 직렬화)을 처리해요. 예약된 파라미터(도구에 입력으로는 절대 전달되지 않음): `format`, `export`, `copy`, `slot`, `output`, `filename`, `_v`, `z`(패킹된 상태——"Shortest link" 토큰), `width`/`w`, `height`/`h`, `unit`, `dpi`, `profile`, `password`, `bleed`, `marks`, `full`, `options`, `nostage`. URL 모드에서 에셋 입력은 `id`로 직렬화되고, 런타임은 하이드레이션 전에 `host.assets.get()`을 통해 이를 해석해요. `width`/`height`는 `unit`(기본값 `px`, 그 외 `mm`/`cm`/`in`/`pt`/`pc`) 단위의 값이에요. 물리 단위를 사용할 때는 `dpi`가 래스터 해상도를 설정해요. 이 값들은 캔버스 문서 크기를 정하고 내보내기 크기 패널을 미리 채워요.

### 6. 저장소는 직접이 아니라 브리지를 거쳐요

web 셸: IndexedDB. Tauri: 파일시스템. CLI: 인메모리. 도구가 보는 것은 `host.state.save(slot, data)`와 `host.state.load(slot)`뿐이에요. `localStorage`는 사용하지 않아요——용량이 너무 작고 blob을 담을 수 없기 때문이에요.

사용자는 도구마다 여러 개의 이름이 붙은 편집 슬롯을 저장하고 나중에 각 세션으로 돌아올 수 있어요. 계정 생성이 필요 없고, 상태는 기기별로 유지돼요. 브리지가 유일한 접점이기 때문에, 이 기기별 상태는 *이식 가능*하기도 해요. `shells/web/src/data-transfer.ts`는 `host.profile`/`host.state`/`host.assets`를 통해 모든 것을 다시 읽어내어, 다른 어떤 설치본에서도 가져올 수 있는 하나의 `lolly-backup` zip으로 묶어요——서버가 필요 없는 "새 기기로 이전"이라는 오프라인 방식의 답이에요(전체 사양: `docs/data-transfer.md`). SUSE ID 통합(멀티 디바이스 동기화)은 이 위에 세워질 향후 마일스톤이에요.

### 7. 성숙도 태그가 "브랜드 승인" 리스크에 구조적으로 답해요

모든 도구는 매니페스트에서 `status: official | community | experimental`을 선언해요. 갤러리는 상태별로 정렬돼요. experimental 도구는 내보내기에 자동으로 워터마크가 찍혀요——워터마크를 적용하는 것은 도구가 아니라 `host.export.render`이기 때문에, official이 아닌 도구의 작성자가 이를 끌 수는 없어요.

이는 어떤 도구를 사용하든 브랜드 승인을 의미한다고 받아들여질 수 있는 인식 리스크에 대한 구조적인 답이에요. 프로세스 차원의 대응(리뷰 큐, SUSE ID 게이팅)은 이 위에 추가로 쌓여요.

### 8. 도구 입력은 에셋을 포함해 매니페스트를 통해 타입이 지정돼요

입력은 `type`을 선언해요: `text`, `longtext`, `number`, `boolean`, `color`, `select`, `asset`, `date`, `time`, `datetime-local`, `url`, `profile`, `blocks`, `vector`, `file`. 호스트는 매니페스트를 바탕으로 타입별 범용 컨트롤을 렌더링해요——도구는 컨트롤 코드를 전혀 작성하지 않아요. 그중 세 가지는 나머지보다 더 무게가 있어요:

- **`asset`**(`filter`와 `allowUpload`를 동반)은 전역 에셋 시스템으로 연결되는 다리예요. `allowUpload: false`는 스폰서 타일 로고처럼 라이브러리 에셋만 허용되어야 하는 경우에 브랜드를 강제하는 레버예요. 사용자 업로드도 라이브러리 에셋과 동일한 `AssetRef` 형태를 사용하므로, 도구는 이를 동일하게 처리해요.
- **`blocks`**는 반복되는 필드 그룹이에요——하나의 입력 안에 들어 있는 미니 테이블로, 사이드 패널에서 편집되며, 타입이 지정된/판별 가능한 추가 메뉴와 블록별 에셋 필드를 가져요. 캔버스에 렌더링된 블록을 클릭하면 해당 블록의 행에 포커스가 가요. `meeting-planner`, `chart-creator`, `event-name-badge`, `wayfinding-signage`, `color-block`, `digi-ad`에서 사용돼요.
- **`vector`**는 고정된 숫자 집합(예: 변형 값)을 하나의 복합 컨트롤로 묶어요. **`file`**은 `strip-data`, `compress-pdf` 같은 온디바이스 변환 유틸리티를 위해 사용자 자신의 파일을 메모리 안의 바이트로 보관해요.

### 9. 템플릿은 로직이 없어요(EJS가 아니라 Handlebars)

Handlebars는 EJS 대신 의도적으로 선택됐어요:
- 로직이 없어요. 템플릿은 개발자가 아닌 사람도 작성할 수 있어요.
- 기본적으로 안전해요. `{{x}}`는 HTML 이스케이프되고, `{{{x}}}`는 옵트인 방식의 원본 출력이에요.
- 템플릿 안에 임의의 JS가 없다는 것은 템플릿별 XSS 감사 영역이 없다는 뜻이에요.

로직은 `hooks.js`에 있고, 그곳에서는 명시적이고 리뷰 가능해요. 사용 가능한 Handlebars 헬퍼: `{{default}}`, `{{upper}}`, `{{lower}}`, `{{eq}}`, `{{markdown}}`, `{{asset ref}}`, `{{asset ref "property"}}`(그리고 `.ics`/`.vcf`/`.csv` 자매 템플릿이 사용하는 데이터 포맷 헬퍼 `icsStamp`/`rfcText`/`csvCell`).

### 10. 도구가 도구를 조합해요

도구는 도구 간 임포트 없이 **다른** 도구의 렌더링을 임베드할 수 있어요——조합은 엔진이 해석하며, 도구 코드가 처리하는 일은 결코 없어요. 여기에는 두 가지 영역이 있어요:

- **선언적 매니페스트** — `composes: [{ id, tool, inputs, format?, width?, height? }]`. 엔진은 지정된 자식을 렌더링하고, 그 결과를 로직 없는 템플릿 안에 `{{asset <id>}}`로 배치해요. `event-name-badge`는 현재 `qr-code`를 SVG로 조합해요.
- **이식 가능한 임베드 URL** — `<img src="https://lolly.tools/tool/<id>.<ext>?<inputs>">`. 셸은 그 자식을 **로컬에서** 렌더링해요(로컬 렌더링이 완료될 때까지는 플레이스홀더 픽셀이 표시돼요). `lolly.tools`에서 실제로 무언가를 가져오는 일은 전혀 없어요.

어떤 도구의 렌더링이든 조합할 수 있어요. **SVG** 자식은 부모가 SVG나 PDF로 내보낼 때는 진짜 벡터로 유지되고, PNG에서는 선명하게 래스터화돼요. **PNG/JPG/WEBP** 자식은 이미지로 임베드돼요. `compose` 기능이 필요해요. 조합된 자식은 중간 산물이라——워터마크도, 출처 기록도 절대 남지 않아요——조합은 우아하게 저하돼요. 자식을 렌더링할 수 없는 셸은 그 슬롯을 그냥 생략하고, 부모는 계속 렌더링돼요.

---

## 우리가 의도적으로 하지 않기로 한 것

- **EJS 없음 / 템플릿 안 임의 JS 없음.** XSS 영역은 제로예요. 로직은 `hooks.js`에 있어요.
- **에셋 CMS 없음.** 에셋 카탈로그는 git이에요. 업데이트는 PR 리뷰를 거쳐요. 업로드 UI도, 인증도, 검수 큐도 없어요. git 리뷰 자체가 곧 검수예요.
- **MVP에는 RBAC 없음.** 공개 접근이에요. 브랜드 리스크는 성숙도 태그 + 워터마크 + 사용자가 보는 모든 에셋이 PR 리뷰를 거쳤다는 구조적 사실로 관리돼요.
- **중앙 데이터베이스 없음.** 모든 사용자 상태는 기기별로 유지돼요. SUSE ID 통합은 로드맵에 있지만 출시를 막는 요건은 아니에요.
- **도구/엔진 코드 경로 공유 없음.** 엔진은 오픈소스이고, `tools/`와 `assets/`는 각자의 리포지토리 안에서 SUSE의 독점 콘텐츠로 남아요. 이 분리는(상호 임포트 금지로) 강제되어 분할 상태가 깔끔하게 유지돼요.

---

## 라이프사이클, 처음부터 끝까지

한 사용자가 `lolly.tools/#/tool/qr-code?url=https://suse.com&ecl=H`를 열어요:

1. **부팅.** web 셸이 IndexedDB를 열고, 기능 브리지를 구성하고, 도구와 에셋 카탈로그를 동기화해요(오프라인이면 캐시에서 불러와요).
2. **라우팅.** URL 해시 → `tool` 뷰로 연결되고, `qr-code`와 URL 파라미터가 추출돼요.
3. **로드.** `loadTool('qr-code', fetchFile)`가 `tool.json`을 가져와 JSON Schema로 검증하고, `template.html`, `styles.css`, `hooks.js` 소스를 가져와요.
4. **URL 상태 파싱.** `parseUrlState`가 URL 파라미터를 초기 입력값으로 변환해요. 에셋 참조(`?logo=suse/logo/primary`)는 가벼운 `{ id, _unresolved: true }` 객체로 파싱돼요.
5. **런타임.** `createRuntime(tool, host, initialValues)`가(프로필 데이터, 기본값, 초기값을 병합해) 입력 모델을 만들고, `host.assets.get()`을 통해 에셋 참조를 해석하고, 훅을 로드하고(`host`는 클로저 스코프로 주입되며 샌드박스화되지 않음), `hooks.onInit`을 호출해요.
6. **렌더링.** 셸은 런타임을 구독하고, 상태가 바뀔 때마다 `{ model, hydrated }`를 받아요. 모델로부터 입력 컨트롤을 렌더링하고, 하이드레이션된 템플릿 HTML을 `#tool-canvas`에 써 넣어요.
7. **상호작용.** 사용자가 입력값을 타이핑 → `runtime.setInput(id, value)` → 제약이 적용됨 → `hooks.onInput` 호출 → 재하이드레이션 → 재렌더링. 캔버스가 실시간으로 업데이트돼요.
8. **내보내기.** 사용자가 Download(PNG)를 클릭 → `runtime.export(canvasNode, 'png')` → `host.export.render`(dom-to-image-more로 래스터화; SVG/PDF는 전용 DOM 순회 벡터화기를 거침) → blob → `host.export.download`. 도구가 선택할 수 있는 포맷의 범위는 넓어요: `svg`, `png`, `jpg`/`jpeg`, `webp`, `avif`, `pdf`, 벡터 포맷 `emf`, `eps`, 인쇄/CMYK 포맷 `pdf-cmyk`, `cmyk-tiff`, `eps-cmyk`, 동영상 포맷 `webm`, `mp4`, `gif`, 데이터/텍스트 포맷 `html`, `md`, `txt`, `json`, `csv`, `ics`, `vcf`, `ico`, `zip`이에요. (`render.export: false`를 설정한 도구——예를 들어 Color Palette, Countdown Timer, Strip Hidden Data, Text Helper, Compress PDF——는 다운로드/포맷/크기 컨트롤을 숨겨요.) 물리 단위는 여기서 포맷별로 변환돼요(PDF → 실제 페이지 포인트, 래스터 → DPI에 따른 픽셀과 `pHYs` 청크). 작성자/출처 메타데이터(작성자, 도구, 소스——`engine/src/metadata.ts`가 구성)는 포맷별로 임베드돼요: PNG는 iTXt, JPEG는 EXIF, PDF는 info dict, SVG는 `<metadata>`, GIF는 comment예요. experimental 도구에는 도구가 아니라 호스트가 워터마크를 삽입해요.

Tauri에서도 동일한 라이프사이클이에요. CLI에서도 동일한 라이프사이클이에요——jsdom이 헤드리스 DOM을 제공하고, 출력은 파일이나 stdout으로 나가요.

---

## 오픈소스 상태

`engine/`, `shells/`, `schemas/`, `docs/` 디렉터리는 **MPL-2.0** 아래 오픈소스로 공개되어 있어요——브랜드 툴링을 위한 벤더 중립적인 뼈대 플랫폼으로, 배포 가능한 단위마다 [github.com/lolly-tools](https://github.com/lolly-tools) 아래의 개별 리포지토리로 나뉘어 있어요. `tools/`와 `catalog/assets/`는 SUSE 고유의 콘텐츠이며 **SUSE의 독점 자산**으로 남아요(모든 권리 보유——각 리포지토리의 `NOTICE.md` 참고). 이들은 MPL의 적용을 받지 않아요.

이 분할은 강제돼요——`engine/`에서 `tools/`나 `assets/`로의 상호 임포트는 없어요——그래서 플랫폼과 콘텐츠의 경계가 깔끔하게 유지돼요.

---

## 로드맵

| 마일스톤 | 목표 시기 | 내용 |
|---|---|---|
| **Initial tools** | ✅ 완료 | QR Code, Quote Card, Email Signature, Day Brief, Code Canvas, Countdown Timer, Color Palette, Brand Lockup, Bag Video, Chart Creator, Filter: Duotone, Meeting Planner — web 셸 라이브 |
| **Enhance current tooling** | 2026년 중반 ✅ 완료  | 다운로드 가능한 오프라인 앱(Tauri); 추가 직원/이벤트 도구; 더 풍부해진 내보내기 파이프라인(텍스트-투-패스 안정성, 메타데이터, 추가 포맷 — `plans.md` 참고) |
| **Open source the engine** | 2026년 후반 ✅ 완료  | 엔진, 셸, 스키마, 문서가 공개됨 — 브랜드가 적용된 도구/에셋은 제외 |
| **Device-to-device transfer** | ✅ 완료 | 이식 가능한 `lolly-backup` 번들이 임의의 두 설치본 사이에 프로필, 저장된 세션, 업로드된 이미지, 설정을 옮겨요 — 오프라인이든 온라인이든, 계정 없이. 상위 호환성을 가지며 무결성이 검증되는 봉투 형식이에요(사양: `docs/data-transfer.md`) |
| **Establish formal tool roadmap** | 2026년 후반 | 고객 레퍼런스 키트, AI 디자인 인제스트, GET/URL 요청 모드 |
| **On-device privacy utilities** | 🚧 진행 중 | *사용자 자신*의 파일을 로컬에서 처리하는(파일 입력 → 클린 파일 출력) 콘텐츠 변환 도구로, 단일 목적 SaaS로의 데이터 유출을 대체해요. **완료:** `file` 입력 타입 + `exportFile` 변환 경로 + `privacy:"on-device"` 컨벤션(워터마크/출처 기록 없음) + **Strip Hidden Data**(JPEG/PNG/SVG/PDF 메타데이터, PDF는 `host.pdf` 브리지 경유)와 **Text Helper**(일상적인 "웹사이트에 붙여넣는" 작업을 위한 온디바이스 작업대——JSON 포맷, JWT 디코딩, Base64, URL 인코딩/디코딩, SHA 해싱, Novelty 그룹 포함). **다음:** 크롭/리사이즈, 이미지 변환/압축; 그다음 `host.image` 코덱 브리지(사양: `plans/exfiltration-app-content.md`) |
| **Design tokens (DTCG)** | 🚧 색상 출시됨 | 브랜드 기본값을 표준 [W3C Design Tokens (DTCG)](https://www.designtokens.org/TR/drafts/format/)로 표현해요 — [Penpot가 가져오기/내보내기하는](https://help.penpot.app/user-guide/design-systems/design-tokens/) 포맷이에요. **완료:** 색상 토큰(`suse/tokens/brand`), `host.tokens` 브리지, 참조로 연결된 값을 가진 피커 스와치(사양: `docs/design-tokens.md`). **다음:** 크기/타입 토큰, Penpot 가져오기/내보내기, 전송 번들 안의 사용자 토큰(`tokens.json`) |
| **MCP agent endpoint (render)** | ✅ 완료 | [MCP](https://modelcontextprotocol.io) 서버가 카탈로그와 렌더링 경로를 호출 가능한 도구(`lolly_list_tools` / `describe_tool` / `build_url` / `render` / `transform`)로 노출해서, 어떤 에이전트든 완성되고 규칙에 맞는 에셋을 만들어낼 수 있어요 — 어떤 MCP 클라이언트에도 커스텀 커넥터(OAuth 2.1)로 추가하거나, CLI/HTTP 클라이언트에서 베어러 토큰으로 직접 가리킬 수 있어요. `mcp.lolly.tools`(전체 엔드포인트: 호스팅된 헤드리스 브라우저를 통한 래스터/PDF/애니메이션/동영상)와 `lolly.tools/api/mcp`(서버리스, 브라우저 불필요 티어)에서 운영 중이에요. 아래에서 설명하는 Penpot *제작(authoring)* MCP와는 다른 것으로, 그 MCP는 도구 **생성**에 관한 것이에요(사양: `plans/mcp-server.md`; 가이드: `docs/mcp.md` + `docs/ai-agents.md`) |
| **Penpot file ingest as tools** | 2027년 이후 | Penpot 파일을 가져와 (선언적이고 제약 우선인) *Lolly 도구로* 노출해서, Penpot에서 작성한 디자인을 결정론적 생성기로 바꿔요 |
| **MCP + Penpot extension (online-only authoring)** | 2027년 이후 | Penpot MCP 서버가 AI로 새로운 도구를 구체화해요——결정론적 템플릿을 만드는 가장 시각적인 방법이에요. 브랜드를 반영한 첫 라운드를 사람이 개입해 다듬고, 시간이 지나면서 새로운 맥락에 원샷으로 대응하는 것을 목표로 해요. 도구 *생성*은 온라인 전용이지만, 만들어진 도구는 어디서든 실행돼요 |
| **RBAC + SUSE ID** | 2027년 이후 | 특정 도구를 SUSE ID 뒤에 게이팅; 멀티 디바이스 저장 상태; Google Drive 가져오기/내보내기 |

---

## 엔진이 끝나고 호스트가 시작되는 지점

순수한 데이터 + Handlebars로 설명할 수 있다면 → **엔진**.
DOM, 파일시스템, 네트워크, 또는 브라우저/OS API를 건드린다면 → **호스트**.

이 경계선은 의도적으로 선명하게 그어져 있어요. 엔진은 오픈소스 부분이에요. SUSE, 특정 플랫폼, 실행 환경을 아는 것은 모두 엔진 바깥에 머물러요.
