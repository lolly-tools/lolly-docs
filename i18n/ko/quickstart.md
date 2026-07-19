# 빠른 시작

![The tool gallery - every tool as a card, grouped by category](/t/url-shot?url=%2F%23%2F&width=1440&height=900&dpi=192&waitMs=1600&css=.welcome-dialog%2C.personalize-nudge%7Bdisplay%3Anone!important%7D&tolerance=0.03&format=png&localize=1&filename=gallery)

Lolly는 색상, 타이포그래피, 레이아웃, 로직 같은 규칙을 누구나 쓸 수 있는 도구로 바꿔줘요. 몇 가지 항목만 채우면 이미지, PDF, 소셜 카드, 동영상 같은 완성된 파일을 만들 수 있어요. 배울 것도 없고 업로드할 것도 없어요. 온라인이든 오프라인이든 모든 작업이 기기 안에서 실행돼요.

가장 먼저 읽어야 할 페이지가 바로 여기예요. 생산성을 끌어올리는 두 가지는 **Lolly를 내 것으로 만들기**와 **이미 가진 것을 가져오기**(디자인 파일과 토큰)예요. 그 외 나머지는 모두 링크 하나로 확인할 수 있어요.

> Lolly가 처음이고 일단 뭔가 만들어보고 싶으신가요? 앱을 열고 갤러리에서 아무 도구나 골라 빈칸을 채운 다음 **Render**를 눌러 보세요. *내* 브랜드를 입히고 싶어지면 그때 이 페이지로 돌아오면 돼요.

## 1. 내 것으로 만들기 — Design System 설정하기

Lolly에서 브랜드는 색상, 폰트, 몇 가지 규칙으로 이루어진 작은 **디자인 토큰** 문서예요. 모든 도구가 이 문서를 기준으로 렌더링돼요. 한 번 설정해두면 이후로 만드는 모든 것이 검토를 거쳐서가 아니라 구조적으로 브랜드에 맞게 나와요. 시작하는 방법은 세 가지예요. 브랜드가 지금 어디에 있는지에 맞는 방법을 고르세요.

### 처음부터 시작하기(디자인 시스템 빌더)

![The Brand Studio start screen - name, primary colour, and a derived palette](/t/url-shot?url=%2F%23%2Fstart&width=1440&height=900&dpi=192&waitMs=1600&format=svg&localize=1&filename=brand-studio)

처음 실행하면 **Start** 화면(`#/start`) — [**Brand Studio**](/info/brand-studio.html) — 이 나와요. 이름과 기본 색상을 입력하면 Lolly가 엔진이 다른 곳에서도 쓰는 것과 똑같은 색상 수학으로 라이트/다크 표면, 텍스트, 강조색까지 갖춘 완전하고 접근성 있는 팔레트를 *도출*해줘요. 폰트를 고르면 1분도 안 돼 바로 쓸 수 있는 브랜드가 완성돼요. 여기서부터는 스튜디오의 다섯 개 탭(Logos, Colours, Type, Tokens, Catalogue)으로 원하는 만큼 더 다듬을 수 있고, 언제든 다시 돌아와서 손볼 수 있어요. 브랜드가 잠긴 버전의 Lolly를 쓰고 있지 않다면, 대시보드에서 언제든 이 화면으로 다시 돌아올 수 있어요.

### 이미 가진 브랜드 가져오기

브랜드가 이미 **Penpot**, **Tokens Studio**(Figma), 또는 일반 **DTCG** 파일 같은 디자인 토큰 형태로 있다면, 다시 입력하지 말고 통째로 가져오세요. 방법은 두 가지예요.

- **앱 안에서:** [Brand Studio](/info/brand-studio.html)(`#/start`)가 토큰 파일, Penpot 내보내기 파일, `LollyBrand` 팩을 그대로 받아줘요 — 끌어다 놓으면 팔레트가 바로 반영돼요.
- **명령줄에서**, 재사용 가능한 브랜드 팩을 만들려면:

```bash
# a monolithic tokens.json, a one-file-per-set directory, or a Penpot project archive
npm run ingest:brand -- ./my-tokens.json --name acme --label "Acme" --activate
```

`ingest:brand`는 Penpot / Tokens Studio가 같은 문서를 내보낼 때 쓰는 세 가지 형식을 모두 받아들여요 — 단일 `tokens.json`, 디렉터리(`$metadata.json` + 세트별 파일), 또는 `project.penpot` 아카이브예요. `--activate`를 붙이면 그 브랜드를 프로필로 등록하고 전환한 뒤 카탈로그를 다시 빌드해요. 브랜드 팩과 프로필이 어떻게 맞물리는지는 [설정](/info/configuration.html)을 참고하세요.

### 앱에서 다듬기

![The Dashboard's Design-system tab - the active brand shown read-only](/t/url-shot?url=%2F%23%2Fd%3Ftab%3Dbrand&width=1440&height=900&dpi=192&waitMs=1800&format=png&localize=1&filename=dashboard-brand)

브랜드가 활성화된 뒤에도 [**Brand Studio**](/info/brand-studio.html)(`#/start`)에서 계속 다듬을 수 있어요 — 색상이나 역할을 바꾸면 앱 전체의 미리보기가 입력하는 대로 바로 업데이트돼요. (대시보드의 **Design system** 탭(`#/d`)은 브랜드를 읽기 전용으로 *보여주기만* 해요. 편집은 Studio에서 해요.) 같은 브랜드가 **프로필 → Your brand** 카드에도 요약돼서 나와요. 폰트는 실제 파일이에요. Google Fonts에서 고르면 Lolly가 그 파일을 브랜드 에셋으로 **기기에** 저장하기 때문에, 타이포그래피가 오프라인에서도 그대로 유지되고 렌더링할 때 아무것도 새로 내려받지 않아요.

원하는 만큼 다듬었다면 **브랜드를 `LollyBrand` 팩으로 내보내세요** — 동료가 이 파일 하나만 가져오면 완전히 똑같은 팔레트, 폰트, 규칙을 그대로 받아요. 서버 없이 브랜드가 사람과 기기 사이를 오가는 방법이 바로 이거예요.

> **브랜드 토큰은 양방향으로 오가요.** Lolly의 브랜드는 곧 DTCG 토큰이에요 — Penpot이 네이티브로 읽고 쓰고 Tokens Studio가 Figma로 가져오는 바로 그 형식이라서, *디자인할 때 쓰는* 팔레트와 Lolly가 *적용하는* 팔레트가 손으로 맞춰야 하는 두 개의 목록이 아니라 하나의 문서가 돼요. [디자인 토큰](/info/design-tokens.html)을 참고하세요.

## 2. 이미 가진 것 가져오기

빈 페이지에서 시작할 필요 없어요. Lolly는 이미 가진 디자인 결과물과 열린 포맷 파일을 그대로 열 수 있어요.

### 오픈소스 디자인 파일

**Figma, Penpot, Illustrator, InDesign**, 또는 어떤 SVG 앱에서든 완성한 작업물을 그린 앱 안에 가둬둘 필요 없어요. **Layout Studio**를 열고 **Import a design**을 클릭하면 파일이 평평한 그림이 아니라 *살아있는 레이아웃*으로 열려요. 모든 레이어가 편집 가능한 박스가 돼요 — 텍스트는 다시 입력할 수 있는 상태 그대로, 도형은 도형 그대로 유지되고, 이미지는 라이브러리에 들어가며, 복잡한 벡터 아트도 충실히 보존돼요. 가져온 순간 이미 브랜드 서체와 색상 규칙에 맞춰져 있어요.

| 가지고 있는 것 | 이렇게 가져오세요 |
|---|---|
| Figma 프레임 | 네이티브 `.fig`(File → Save local copy), 또는 SVG로 내보내기 |
| Penpot 디자인 | `.penpot` 내보내기, 또는 어떤 SVG든 |
| Illustrator 파일 | 네이티브 `.ai`(PDF 호환) 또는 `.pdf` — 바로 열려요 |
| InDesign 레이아웃 | `.idml`(File → Export → InDesign Markup) |
| 그 밖의 모든 것 | **어떤 SVG든** — 만능 입구예요 |

가져오기는 전부 **기기에서** 이뤄져요 — 파일은 브라우저 안에서 파싱되고 아무것도 업로드되지 않아요. 자세한 내용과 정확히 무엇이 그대로 유지되는지는 [디자인 가져오기](/info/design-import.html)에서 확인하세요.

### 일회성 디자인을 템플릿으로

진짜 이득은 여기서 나와요. 가져온 레이아웃은 그냥 평범한 Layout Studio 세션이기 때문에, **저장**하는 순간 하나의 URL로 남아요. Lolly를 쓸 수 있는 사람이면 누구나 그 URL을 열어 문구를 바꾸고 이미지를 교체해서 자기만의 버전을 렌더링할 수 있어요 — 디자인 앱은 필요 없고, 잠긴 부분은 계속 잠긴 채로 남아요. 일회성 디자인이 재사용 가능한 도구가 되는 거예요. 설정을 한 줄도 쓰지 않고 도달하는, 바로 그 아이디어 전체예요.

### 열린 데이터와 열린 도구

[커뮤니티 도구 세트](/info/builders.html)는 오픈소스이고 브랜드에 종속되지 않아요 — QR 코드, 시가지 지도, 필터, 프라이버시 유틸리티 등이 있어요 — 그리고 브랜드를 활성화하는 순간 그 브랜드에 맞춰 렌더링돼요. 직접 가진 열린 데이터도 도구에 먹일 수 있어요. **CSV**나 **JSON** 표를 붙여넣거나 끌어다 놓으면 도구의 반복 필드가 거기서 채워지고, 행마다 완성된 에셋이 하나씩 나와요.

## 3. 만들고, 공유하거나 자동화하기

브랜드가 활성화되고 자료가 준비되면, 어떤 도구든 완성된 파일을 만들어내요.

- 어떤 도구든 **SVG, PDF, PNG, JPG, WebP, 동영상** 등으로 **렌더링**하세요 — 필요하면 실제 인쇄 크기와 물리적 단위로도요. [내보내기와 포맷](/info/exporting.html)을 참고하세요.
- **링크를 공유하세요.** 모든 도구 상태는 URL이라서, 완성된 에셋은 재현 가능하고 파라미터로 주소를 지정할 수 있어요 — 링크를 커밋해두고 필요할 때 다시 생성하면 돼요.
- **대량으로 처리하세요.** [배치 그리드](/info/exporting.html)에서 스프레드시트로 템플릿을 구동하세요. 행마다 완성된 에셋이 하나씩 나와요.
- **자동화하세요.** 같은 렌더링이 [CLI](/info/cli.html)와 [AI 에이전트](/info/ai-agents.html)에서도 그대로 실행돼요 — URL이 곧 API예요.

## 다음으로 갈 곳

목적에 따라 세 가지 경로가 있어요.

- **[Lolly 크리에이터용](/info/creators.html)** — 무언가를 만드는 분들을 위한 곳이에요. 얻을 수 있는 이점과 앱을 최대한 활용하는 방법을 담았어요.
- **[Lolly 빌더용](/info/builders.html)** — 도구를 만들고 통합하고 배포하는 분들을 위한 곳이에요. 기술 문서예요.
- **[Lolly 운영자용](/info/operators.html)** — 조직 전체의 브랜드, 보안, 배포를 책임지는 분들을 위한 곳이에요.
