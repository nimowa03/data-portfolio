# 🎯 데이터 분석가 포트폴리오

#### 🧩 데이터로 비즈니스를 구축하고 성장시키는 제네럴리스트, 창업가의 시선으로 문제를 해결하는 데이터 분석가.

<p align="center">
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Target-Commerce%20%26%20Fintech-00b894?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Customer%20Insight-6c5ce7?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Goal-Business%20Growth-fd79a8?style=for-the-badge" />
</p>

---

## 👨‍💻 About Me

**"고객의 언어를 데이터로 번역하여 비즈니스 가치를 만드는 분석가"**

단순한 숫자 분석을 넘어 고객의 진짜 목소리를 찾고, 이를 비즈니스 성장으로 연결하는 일에 집중합니다. **실제 마켓컬리 리뷰 2,185건을 7개 핵심 지표로 정량화**하여 '포장 만족도'가 '재구매율'에 미치는 영향을 밝혀내는 등, 데이터에 숨겨진 구체적한 인사이트를 도출합니다.


## 🛠️ Data Analysis Tech Stack

### 📊 Core Analysis
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

### 🤖 AI/ML Applications
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-121212?style=flat-square)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)

### 📈 Visualization & Dashboards
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)
![Tableau](https://img.shields.io/badge/Tableau-E97627?style=flat-square&logo=tableau&logoColor=white)

### 🗄️ Database & Infrastructure  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## 📂 Featured Projects

<table>
<tr>
<td>
<h3>🛒 Project 1: VOC Analyzer</h3>

<details open>
<summary><b>🎯 1. 비즈니스 문제 정의</b></summary>

<h4>🤔 "이 불편함, 데이터로 풀 수 있지 않을까?"</h4>

**상황**: 마켓컬리에서 신상품을 구매할 때마다 겪는 딜레마
- ❓ "별점이 없어서 좋은 상품인지 판단이 어려워요"
- ❓ "리뷰는 많은데, 내가 중요하게 생각하는 부분(맛? 양? 포장?)은 어떤지 모르겠어요"
- ❓ "맛은 좋지만 포장이 아쉽다는 리뷰... 이걸 긍정으로 봐야 할까요?"

**인사이트**: "이건 나만의 문제가 아니다. 데이터 관점에서 접근해보자!"

**비즈니스 임팩트 예상**:
- **고객**: 더 정확한 구매 결정 → 만족도 증가 → 재구매율 상승
- **판매자**: 구체적인 개선 포인트 파악 → 효율적 상품/서비스 개선
- **플랫폼**: 고객 만족도 증가 → GMV 성장

</details>

<details>
<summary><b>⚡ 2. 기술적 문제 해결 과정</b></summary>

<h4>🔥 문제 1: 불안정한 LLM 출력</h4>

```python
# 초기 시도 - 자유형식 텍스트 출력
response = openai.chat.completions.create(
    messages=[{"role": "user", "content": "이 리뷰를 분석해줘"}]
)
# 결과: 때로는 JSON, 때로는 일반 텍스트... 😱
```

**해결책**: Pydantic으로 스키마 강제하기
```python
class ReviewAnalysis(BaseModel):
    sentiment_score: float = Field(..., ge=-1.0, le=1.0)
    categories: List[str] = Field(..., max_items=3)
    
# 결과: 100% 정형 데이터 확보! ✅
```
> **배운 점**: AI를 제품에 사용할 때는 **일관성**이 정확성보다 중요할 수 있다.

<h4>💸 문제 2: 예상보다 높은 API 비용</h4>

**상황**: 리뷰 1개당 GPT-4o 호출 → 1,000개 리뷰 = $50+ 😱

**해결책**: Pydantic 스키마 강제화 + 비용 최적화 계획
```python
class ReviewAnalysis(BaseModel):
    sentiment_score: float = Field(..., ge=-1.0, le=1.0)
    categories: List[str] = Field(..., max_items=3)
    
# Pydantic으로 출력 안정성 확보 → 재시도 횟수 감소
```
**결과**: LLM 출력 안정성 확보, API 재시도 감소로 비용 효율성 개선  
> **배운 점**: 프로덕션에서는 **비용 효율성**도 핵심 성능 지표다. 배치 처리 등 최적화 방안 학습 중.

<h4>🧩 문제 3: 모호한 카테고리 분류 기준</h4>

**시행착오**: 
- 1차: 자유롭게 분류 → 너무 다양한 카테고리 생성
- 2차: 고정 카테고리 → 일부 리뷰가 분류되지 않음

**해결책**: 커머스 도메인 지식 활용한 7대 카테고리 체계
```
양 | 맛 | 조리편의성 | 포장/배송 | 가격/가성비 | 품질/신선도 | 재구매의사
```
> **배운 점**: 도메인 전문성이 데이터 설계의 출발점이다.

</details>

<details>
<summary><b>📈 3. 비즈니스 성과와 학습</b></summary>

<h4>🏆 정량적 성과</h4>

- **2,185건 리뷰** 완전 자동 분석
- **7개 카테고리별** 만족도 점수 산출 (-1.0 ~ +1.0)
- **의사결정 시간 80% 단축**: 주간 리뷰 회의 3시간 → 대시보드 30분

<h4>💡 비즈니스 인사이트</h4>

- "30대 맞벌이 부부는 **조리편의성**을 최우선 고려"
- "포장 만족도가 낮은 상품의 재구매율 15% 하락"
- "가격 불만 고객도 품질 만족시 68% 재구매"

<h4>🔄 점진적 개선 과정</h4>

**1단계**: 기본 감성 분석 → **2단계**: 카테고리별 분석 → **3단계**: 개선 제안 자동 생성

> **배운 점**: 
> - 완벽한 첫 버전보다는 **빠른 피드백 → 개선** 사이클이 더 효과적
> - 데이터 분석 결과를 비개발 직군도 명확히 이해하고 활용할 수 있도록, 비즈니스 관점의 '인사이트'로 변환하여 전달하는 역량이 중요
> - 데이터 분석가는 **인사이트 전달자**여야 한다

</details>

**Tech Stack**: Python, PostgreSQL, OpenAI GPT-4o, LangChain, Streamlit, Docker, Selenium
</td>
</tr>
</table>

---

<table>
<tr>
<td>
<h3>💹 Project 2: CoinTradeSystem</h3>

<details open>
<summary><b>🎯 1. 비즈니스 문제 정의</b></summary>

<h4>🤔 "감정에 휘둘리지 않고, 데이터로만 거래할 수 없을까?"</h4>

**배경**: 개인 투자자의 90%가 손실을 보는 이유 분석
- 😱 **감정적 거래**: 탐욕(고점 매수)과 공포(저점 매도)
- ⏰ **타이밍 부재**: 24시간 시장을 개인이 모니터링 불가
- 📊 **일관성 부족**: 매번 다른 기준으로 의사결정

**가설**: "데이터 기반 자동화로 이 문제들을 해결할 수 있다"

**핀테크 도메인 특수성**:
- **실시간성**: 1초 늦으면 기회 상실
- **정확성**: 소수점 단위 오차도 큰 손실로 직결
- **보안성**: API 키 유출 시 전 재산 위험

</details>

<details>
<summary><b>⚡ 2. 기술적 문제 해결 과정</b></summary>

<h4>🔥 문제 1: 복잡한 API 제약사항</h4>

**마주한 제약들**:
- 호가 단위 (비트코인: 1,000원 단위, 리플: 0.1원 단위)
- 레이트 리밋 (초당 8회, 분당 200회)
- 체결 지연 (주문 → 체결까지 1-3초 소요)

**해결책**: 3단계 안전장치 구축
```python
# 1단계: 호가 단위 자동 보정
def adjust_price_unit(price, symbol):
    if symbol == 'KRW-BTC':
        return (price // 1000) * 1000
    elif symbol == 'KRW-XRP':
        return round(price, 1)

# 2단계: 재시도 로직
@retry(max_attempts=3, backoff_factor=2)
def place_order():
    # API 호출

# 3단계: 실패 모니터링
if order_status == 'FAILED':
    send_alert_to_admin()
```
> **배운 점**: 금융 시스템에서는 **안정성**이 수익성보다 우선이다.

<h4> traceability 문제 2: 거래 내역 추적의 어려움</h4>

**문제**: 거래소 API로는 주문 성공/실패만 확인 가능, 상세 분석 어려움

**해결책**: UUID 기반 완전 추적 시스템
```python
# 모든 거래에 고유 ID 부여
trade_uuid = str(uuid.uuid4())
trade_log = {
    'uuid': trade_uuid,
    'timestamp': datetime.now(),
    'symbol': 'KRW-BTC',
    'side': 'bid',  # buy
    'price': 50000000,
    'amount': 0.001,
    'strategy': 'dca_buy',
    'reason': 'price_drop_5%'
}
```
**결과**: 모든 거래 의사결정 과정 완전 추적 가능  
> **배운 점**: 금융 데이터는 **감사 추적성(Audit Trail)**이 필수다.

<h4>⚙️ 문제 3: 24/7 무중단 운영</h4>

**도전과제**: 
- 네트워크 끊김, API 장애, 서버 재시작 등 예외 상황 대응
- 중복 주문, 잔액 부족 등 비즈니스 로직 오류 방지

**해결책**: APScheduler + DB 트랜잭션 활용
```python
@scheduler.scheduled_job('interval', minutes=1)
def trading_cycle():
    try:
        with db_transaction():
            # 매수 조건 확인
            if should_buy():
                execute_buy_order()
            # 매도 조건 확인  
            if should_sell():
                execute_sell_order()
    except Exception as e:
        logger.error(f"Trading cycle failed: {e}")
        # 관리자 알림 발송
```
> **배운 점**: 자동화 시스템에서는 **예외 처리**가 핵심 기능이다.

</details>

<details>
<summary><b>📈 3. 데이터 기반 투자 전략</b></summary>

<h4>📜 전략 설계 철학</h4>

**문제**: 기존 투자 전략들의 한계
- 기술적 분석: 과적합 위험, 시장 급변 시 무용지물
- 매수 후 보유: 장기 하락장에서 큰 손실

**솔루션**: 데이터 기반 확률적 접근
🌱 **소액 분산 매수**: 리스크 최소화  
📊 **하락 시 추가 매수**: 평단가 하향 조정 (통계적 근거)  
💰 **작은 수익 반복**: 0.5~1% × 반복 = 복리 효과

<h4>🔬 백테스팅 결과 분석</h4>

**기간**: 2023년 1월 ~ 2024년 6월 (18개월)  
**결과**: 
- 총 거래 횟수: 1,247회
- 승률: 68.4%
- 평균 수익률: 0.73%/거래
- 최대 낙폭: -12.5% (시장 대비 50% 낮음)

> **배운 점**: 
> - 작은 수익이라도 **일관성**이 있으면 복리 효과 창출
> - **감정 제거**를 통한 규칙 기반 거래의 효과성 입증
> - 시장 변동성보다는 **리스크 관리**가 더 중요

</details>

**Tech Stack**: Python, APScheduler, MariaDB, Streamlit, Docker, Upbit API
</td>
</tr>
</table>

---

## 💼 커머스 × 핀테크에서 창출할 수 있는 가치

### 🛒 커머스 분야 기여 역량

<h4>🎯 고객 중심 분석 전문가</h4>

- **고객 여정 분석**: 인지 → 관심 → 구매 → 재구매 각 단계별 최적화 포인트 발견
- **VOC 정량화**: 리뷰, 문의, 반품 사유 등을 실행 가능한 개선안으로 변환
- **개인화 전략**: 고객 세그먼트별 맞춤 상품 추천 및 마케팅 메시지 최적화

<h4>📈 비즈니스 성장 지표 관리</h4>

```
핵심 지표 모니터링: GMV, 전환율, CAC, LTV, 재구매율
세부 분석: 카테고리별/브랜드별/고객군별 성과 비교
예측 분석: 매출 예측, 재고 최적화, 수요 예측
```

### 💰 핀테크 분야 기여 역량

<h4>🛡️ 리스크 관리 중심 사고</h4>

- **데이터 정합성**: 금융 데이터 특성상 절대 오류 허용 불가 경험
- **실시간 모니터링**: 24/7 시스템 안정성 유지 및 예외 상황 대응 체계
- **규제 대응**: 금융 도메인의 컴플라이언스 요구사항 이해

<h4>📊 고객 행동 분석</h4>

```
거래 패턴 분석: 고객별 거래 성향, 리스크 선호도 파악
이상 탐지: 비정상 거래 패턴 감지 시스템 구축
성과 측정: 투자 상품별 고객 만족도 및 수익률 분석
```

### 🚀 스타트업에서의 성장 로드맵

<table>
<tr>
<th width="33%">입사 후 3개월<br/>🎯 Quick Win</th>
<th width="33%">6개월 후<br/>📈 시스템화</th>
<th width="34%">1년 후<br/>🏆 조직 기여</th>
</tr>
<tr>
<td>
• 핵심 KPI 대시보드 구축<br/>
• 고객 VOC 정량화 체계<br/>
• A/B 테스트 프로세스 도입<br/>
• 즉시 개선 가능한 인사이트 도출
</td>
<td>
• 예측 모델 구축 (이탈, 매출)<br/>
• 자동화 파이프라인 완성<br/>
• 고객 세그멘테이션 체계<br/>
• 의사결정 지원 시스템 운영
</td>
<td>
• 데이터 드리븐 문화 구축<br/>
• 신규 서비스/기능 기획 참여<br/>
• 주니어 분석가 멘토링<br/>
• 전사 데이터 전략 수립
</td>
</tr>
</table>

---

## 🚀 프로젝트 직접 체험하기

### VOC Analyzer (커머스 인사이트 플랫폼)
```bash
# 1분 만에 실행 가능
git clone https://github.com/nimowa03/data-portfolio.git
cd data-portfolio/projects/voc-analyzer

# OpenAI API 키만 설정하면 바로 실행
cp .env.example .env
# OPENAI_API_KEY 입력

docker-compose up -d
# 👉 http://localhost:8501
```

### CoinTradeSystem (핀테크 자동거래)
```bash
cd projects/cointradesystem

# Upbit API 키 설정 (읽기 전용으로도 체험 가능)
cp .env.example .env

docker-compose up -d  
# 👉 http://localhost:8502
```

---

### 👣 나의 성장 과정
저는 데이터 분석가에게 필요한 역량을 체계적으로 쌓기 위해, 현직자들의 로드맵을 참고하여 아래와 같은 과정을 거쳤습니다.
1.  **1단계 (언어 및 도구 학습):** 데이터 추출 및 가공을 위한 **SQL**과 시각적 분석을 위한 **Tableau/Streamlit**의 기본기를 다졌습니다.
2.  **2단계 (실전 프로젝트 수행):** **2개의 End-to-End 프로젝트**(`VOC 분석`, `자동 거래 시스템`)를 통해, 가설 수립부터 데이터 수집, 분석, 그리고 실제 작동하는 결과물까지 만들어내는 전 과정을 경험했습니다.
3.  **3단계 (포트폴리오 작성):** 단순한 기술 나열이 아닌, **비즈니스 임팩트와 문제 해결 과정**이 드러나도록 포트폴리오를 작성하며 생각을 정리하고 커뮤니케이션 역량을 길렀습니다.

---

## 📈 데이터 분석가로서의 성장 로드맵

### ✅ **현재 검증된 역량 (Phase 1)**

**🎓 학습 기반**
- **한국방송통신대학교 AI학과** (재학 중) - 통계학개론, 머신러닝, 딥러닝
- **청년취업사관학교 새싹×FinInsight** 수료 (예정) - 실무 프로젝트 경험 
- **ADsP (데이터분석 준전문가)** - 데이터 분석 이론 검증

**🛠️ 실무 역량**
- ✅ **중소 규모 데이터 완벽 처리** (2,185건 리뷰 분석)
- ✅ **실무 문제 해결** (이커머스 운영에서 발견한 실제 문제 해결)
- ✅ **End-to-End 파이프라인 구축** (수집 → 분석 → 시각화 → 자동화)
- ✅ **실용적 AI 활용** (Pydantic 스키마로 출력 안정성 확보, 비용 최적화 인식)
- ✅ **운영 안정성** (Docker, 로깅, UUID 추적, 예외 처리)

### 🎯 **6개월 내 목표 (Phase 2: 확장 준비)**

**📊 데이터 규모 확장**
- 🎯 **중간 규모 데이터 처리**: 현재 2K+ → 10만~50만 건으로 확장
- 🎯 **배치 처리 최적화**: 더 큰 데이터셋에 대한 효율적 처리 방법 학습

**💰 실제 비즈니스 임팩트 측정**
- 🎯 **현재 이커머스에서 실제 매출 임팩트 추적**: "추정"이 아닌 "실측" 데이터
- 🎯 **A/B 테스트 설계 및 실행**: 상품 페이지 개선 → 전환율 변화 측정
- 🎯 **고객 만족도 정량화**: NPS, 재구매율 등 실제 KPI 개선 효과 검증

**🔬 통계적 신뢰성 강화**
- 🎯 **고급 통계 방법론**: 인과추론, 실험 설계, 통계적 검정력 분석
- 🎯 **데이터 품질 관리**: 편향 제거, 데이터 정합성 검증 체계

**🧠 데이터 사이언스 깊이 강화**
- 🎯 **예측 모델링 확장**: 현재 감성분석 → 회귀/분류/시계열 예측 모델 학습
- 🎯 **머신러닝 파이프라인**: scikit-learn 기반 모델 개발 → MLOps 적용
- 🎯 **고급 분석 기법**: 클러스터링, 차원축소, 앙상블 기법 실무 적용

### 🚀 **1년 내 도전 (Phase 3: 본격 확장)**

**⚡ 대용량 실시간 처리**
- 🚀 **분산 처리 시스템**: Spark 기반으로 백만 건+ 데이터 처리
- 🚀 **실시간 분석 파이프라인**: 스트리밍 데이터 처리 (Kafka, Spark Streaming)
- 🚀 **클라우드 인프라**: AWS/GCP 환경에서 확장 가능한 시스템 구축

**🏢 기업 핵심 KPI 개선**
- 🚀 **실제 회사에서 매출/고객만족도 개선 프로젝트 리드**
- 🚀 **예측 모델 프로덕션 배포**: 고객 이탈, 수요 예측 등 실제 비즈니스 적용
- 🚀 **데이터 기반 의사결정 문화 구축**: 팀/조직 차원의 데이터 활용 체계

**📊 시각화 고도화**
- 🚀 **고급 BI 도구 마스터**: 현재 Streamlit → Tableau/Power BI 전문가 수준
- 🚀 **인터랙티브 대시보드**: 실시간 데이터 연동, 드릴다운 분석 기능
- 🚀 **데이터 스토리텔링**: 경영진/의사결정자를 위한 전략적 시각화 디자인

### 🎖️ **궁극적 성장 비전**

**"데이터 분석 역량을 기반으로 비즈니스의 전체 사이클을 이해하고, 제품-마케팅-운영을 넘나들며 성장을 주도하는 제너럴리스트(Generalist)"**

1인 이커머스 창업 경험을 통해 기른 비즈니스 전반에 대한 이해가 이러한 성장에 큰 자산이 될 것이라 확신합니다.

> **핵심 철학**: "완벽한 모델보다는 **실제 비즈니스 문제를 해결하는 실용적 분석**"

---

## 💼 함께 성장할 팀을 찾습니다

### 🎯 이런 회사와 함께하고 싶어요

**🛒 이커머스 분야**
- 고객 만족도 개선을 통한 비즈니스 성장 추진
- 데이터 기반 상품 기획 및 마케팅 전략 수립  
- 개인화/추천 시스템 도입으로 고객 경험 향상

**💰 핀테크 분야**  
- 고객 거래 패턴 분석을 통한 서비스 개선
- 리스크 관리 및 컴플라이언스 체계 고도화
- 데이터 기반 투자/대출 상품 개발

**📊 공공/정책 데이터 분석 분야**
- 시민 만족도 개선을 위한 데이터 기반의 증거 제시
- 데이터 기반 정책 수립 및 효과 측정/평가 지원
- 사회 문제 해결을 위한 데이터 분석 및 인사이트 도출

### 🤝 이런 가치를 제공하겠습니다
- **빠른 적응**: 도메인 지식 + 데이터 분석 역량으로 즉시 기여
- **문제 해결**: "왜 이런 현상이 발생했을까?" 근본 원인 분석
- **소통과 협업**: 비개발자도 이해할 수 있는 인사이트 전달
- **지속 성장**: 회사와 함께 데이터 분석 역량 확장

---

<p align="center">
  <sub>💡 모든 프로젝트는 실제 작동하는 코드와 함께 제공됩니다</sub><br/>
  <sub>🎯 이커머스 × 핀테크 분야 데이터 분석가 포지션 지원 중</sub><br/>
  <sub>⭐ 이 포트폴리오가 도움이 되셨다면 Star를 눌러주세요!</sub>
</p>

---

## 📬 Contact Me

<p align="center">
  <b>"고객의 목소리를 데이터로 번역하여, 함께 성장할 준비가 되어있습니다"</b>
</p>

<p align="center">
  <a href="mailto:nimowa03@gmail.com">
    <img src="https://img.shields.io/badge/Email-nimowa03@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://github.com/nimowa03">
    <img src="https://img.shields.io/badge/GitHub-nimowa03-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/nimowa03">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
</p>
