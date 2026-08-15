# Lolly 비교

이 플랫폼이 더 넓은 크리에이티브 도구 지형 속에서 어디에 위치하는지, 그리고 의도적으로 **관여하지 않는** 영역은 어디인지 설명해요.

> **파일럿 상태:** Lolly는 완성된 제품이 아니라 비공개 파일럿 단계의 프로토타입이며, 현재 엔터프라이즈 규모에 대비해 SUSE의 엄격한 인프라 강화 과정을 거치고 있어요. 이 포지셔닝은 Lolly가 지향하는 위치를 보여줄 뿐——실제로 이것이 어떻게 검증되고 있는지는 [도입과 거버넌스](/info/adoption-governance.html#status) 페이지를 참고하세요.

## 지형

![Design's free canvas, where the colours, faces and assets on offer are the brand's own](/t/url-shot?url=%2F%23%2Ftool%2Fdesign%3Ftemplate%3D__blank__&width=1440&height=900&dpi=192&waitMs=2400&walker=1&format=svg&dark=1&filename=aud-open-canvas)

| 기능 | Canva(열린 캔버스) | Brand portals(DAM 템플릿화) | Illustrator(데스크톱 프로) | Figma / Penpot(온라인 프로) | **Lolly(제약 우선)** |
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

격차의 모양은 명확해요. 기존 지형 어디에도 제약 우선·오프라인 가능·낮은 숙련도·사내 접근 가능한 생성형 결과물을 제공하는 것은 없어요. Lolly는 이제 직접 조작 방식의 프리 캔버스인 **Design**라는 자체 열린 캔버스도 제공하지만, Canva 열과는 결정적으로 달라요. 그 위에 배치되는 색상, 타이포그래피, 에셋이 브랜드 전역 설정을 따르기 때문에, 자유로운 배치조차 제약 우선을 유지해요. Lolly가 여전히 **아닌** 것은 제약 없는 디자인 스위트예요——맞춤형 작업에는 디자이너가 계속 Illustrator와 Figma를 사용할 거예요——그리고 그 작업이 거버넌스가 적용된 재현 가능한 에셋이 되어야 할 때는, Design의 [디자인 가져오기](/info/design-import.html)가 완성된 Figma/Illustrator/Penpot 파일을 편집 가능하고 브랜드에 맞춰진 상자로 캔버스에 옮겨줘요.

## 이런 용도로 사용하세요

![Deck Studio in the split view - the deck's slides listed as blocks on the left, the laid-out deck rendering on the right](/t/url-shot?url=%2F%23%2Ftool%2Fdeck-studio&width=1440&height=900&dpi=192&waitMs=2600&walker=1&format=svg&dark=1&filename=ov2-deck-studio-output)

Deck Studio는 여기서의 천장이 얼마나 높은지 잘 보여줘요: 슬라이드 덱 전체를 데이터로 선언하고, 캔버스에서 실시간으로 배치한 뒤, 편집 가능한 네이티브 PowerPoint로 내보내요.

- 운영화된 크리에이티브 에셋의 빠른 생성(이벤트 타일, 배지, 서명, 경고 등)
- 열린 캔버스(Design)에서의 자유로운 배치——색상, 타이포그래피, 아이콘, 이미지 같은 요소들이 브랜드 전역 설정에 계속 맞춰져야 할 때
- 완성된 Figma, Illustrator, InDesign, Penpot 디자인을 들여오기(Design의 디자인 가져오기)——편집하고 거버넌스를 적용하고 모든 Lolly 포맷으로 결정론적으로 다시 렌더링할 수 있도록
- "세 개 항목만 채우면 완성된 에셋이 나오는" 일대다 흐름——`/pro` 배치 그리드에서 스프레드시트/CSV로 대량 실행하는 것도 포함(행을 붙여넣거나 가져와서, 행마다 완성된 에셋 하나씩, zip으로 다운로드)
- 상시 가동되는, 반복적인 브랜드 출력물
- 표현의 자유보다 브랜드 표현의 중앙 통제가 더 중요한 경우

## 이런 용도로는 사용하지 마세요

- 맞춤형이거나 대표적인 히어로 콘텐츠(빌보드, 대형 동영상 등)
- 진짜 디자이너가 필요한 유일무이한 캠페인 작업
- 브랜드 시스템에서 완전히 벗어나야 하는 아이디어 구상 단계——Lolly의 열린 캔버스는 여전히 색상, 타이포그래피, 에셋을 브랜드 전역 설정에 맞추고, 그것이 바로 핵심이에요

## 파일이 아니라 도구를 승인하세요

![The producer's whole job: type the words. Type, colour and spacing were settled when the tool was approved](/t/url-shot?url=%2F%23%2Ftool%2Fwordmark%3Ftext%3DApproved&width=1440&height=900&dpi=192&waitMs=2000&walker=1&format=svg&dark=1&filename=aud-approve-the-tool)

이 지형에 있는 다른 도구들은 모두 *파일*을 만들어내고, 그 파일은 그다음에 검사를 받아야 해요——Slack 스레드에서 브랜드 매니저가 보고, 법무가 면책 문구를 확인하고, 수정이 한 바퀴 돌고, 또 한 번 검토가 들어와요. Lolly는 승인을 **한 단계 위로** 옮겨요. 브랜드 규칙——정확한 hex 코드, 라이선스된 폰트 파일, 도련 여백, 간격——이 도구의 HTML과 CSS에 하드코딩돼 있어서, 템플릿은 브랜드에서 벗어난 에셋을 *물리적으로 만들어낼 수 없어요*. 레이아웃 자체가 하중을 지탱하는 구조예요.

그래서 결과물을 승인하는 대신, 그것을 만드는 **도구**를 승인하게 돼요. 한 번 승인하면 그 도구가 이후에 만들어내는 모든 에셋은 구조상 이미 승인된 것이에요——사람이 중간에 들어갈 일도, 검토 사이클도, 물량이 얼마든 필요 없어요.

이것이 결정론적 엔진이 실제로 가져오는 패러다임 전환이에요. 기존 승인 절차를 더 빠르게 만든 게 아니라, 절차 자체를 없애버려요. 크리에이티브 팀에게는 대체물이 아니라 가드레일이에요——공(데이터, 카피, 이미지)은 여전히 여러분이 던지고, 코드는 어떤 공도 옆 홈에 빠지지 않게 막아주는 볼링 레인의 범퍼예요.

| 예전 방식의 에셋 승인 | Lolly 방식의 도구 승인 |
|---|---|
| 완성된 파일을 하나씩 전부 검사해요 | 도구를 한 번만 검사해요 |
| 요청 → 디자이너 제작 → 브랜드 검토 → 법무 확인 → 수정 → 재검토 | 파라미터 하나 변경 → 완성된 에셋 |
| 디자이너, 브랜드 매니저, 법무, 요청자가 모두 관여해요 | 제작 담당자 혼자로 끝나요 |
| 에셋 하나에 며칠 | 에셋 하나에 몇 초 |
| 에셋 10,000개 = 검토 사이클 10,000번 | 에셋 10,000개 = 0번(템플릿이 이미 승인됐어요) |

## Lolly만이 제공하는 가치

![Amsterdam's canal rings and road network drawn edge to edge in the brand's own ink, every stroke placed by the template rather than by hand](/t/url-shot?url=%2F%23%2Ftool%2Fstreet-map%3Fcity%3Damsterdam%26theme%3Dlight%26full&width=1440&height=900&dpi=96&waitMs=3200&walker=1&format=svg&cropSelector=%23tool-canvas&dark=1&filename=ov2-street-map-poster)

- **문맥 안에서 안전하게 발휘되는 대담한 디자인 잠재력.** 도구는 하드코딩된 가드레일 안에서 과감한 디자인 아이디어를 표현할 수 있어요.
- **최종 에셋을 그대로 돌려주는 소프트웨어 정의 콘텐츠 자동화.** 입력 → 완성 파일. "디자인 도구에서 저장한 다음 후처리하기"가 필요 없어요.
- **도구가 도구를 조합해요.** 하나의 도구가 다른 도구의 렌더링을 임베드해 하나의 완성된 에셋의 일부로 돌려줄 수 있고, 도구 간 코드 결합은 전혀 없어요——이는 지형에 있는 어떤 열린 캔버스나 DAM 템플릿화 제품도 제공하지 않는 원시 기능이에요.
- **벤더 중립성.** 기능과 비용을 완전히 통제해요. 오픈소스 엔진. 도구와 에셋은 SaaS 데이터베이스에 갇히지 않는, git으로 관리되는 콘텐츠예요.

그중 첫 번째가 사람들이 가장 과소평가하는 부분이에요. 포스터급 도시 지도가 도로와 수역 모두 진짜 벡터 패스로 그려지는데, 입력은 드롭다운 하나와 색상 필드 두 개뿐이고 그 필드는 브랜드 밖을 가리킬 수도 없어요.
