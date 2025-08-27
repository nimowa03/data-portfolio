# Charlee — Data / Business / Data Science Portfolio

데이터를 무기로 삼아 **문제를 정의→해결→검증(MVP)**까지 빠르게 연결합니다.  
지원 직무: **데이터 분석가 · 비즈니스 분석가 · 데이터 사이언티스트**

---

## 🔍 One‑liner
고객의 목소리와 운영 로그에서 **의사결정에 바로 쓰이는 인사이트**를 뽑아내고,  
**SQL → Python → 대시보드**로 이어지는 **End‑to‑End 파이프라인**을 구현합니다.

## 🧰 Tech Stack
- **Language/Analysis**: Python, SQL, R, Statistics (EDA, Hypothesis Test)
- **AI/LLM**: OpenAI API, LangChain (감성/키워드/주제 추출, RAG 기초)
- **Data**: PostgreSQL, MariaDB, Pandas, NumPy
- **Viz & App**: Streamlit, Tableau, Plotly/Matplotlib
- **Ops**: Docker, docker‑compose, Git/GitHub

---

## 📂 Projects

### 1) 🛒 VOC Analyzer — 고객의 소리(리뷰) 분석 대시보드
리뷰 텍스트를 자동 수집·정제하고 **감성/키워드/주제**를 추출해 대시보드로 시각화.  
별점만으로는 보이지 않는 **구체적 개선 포인트**를 드러내 **제품/운영 개선**에 바로 쓰이도록 합니다.

**카테고리 체계(본 프로젝트 사용)**  
- **양**, **맛**, **조리 편의성**, **포장/배송**, **가격/가성비**, **품질/신선도**, **재구매의사**

**빠른 실행 (로컬)**  
```bash
conda create -n voc python=3.11 -y && conda activate voc
pip install -r projects/voc-analyzer/requirements.txt
cp projects/voc-analyzer/.env.example projects/voc-analyzer/.env  # 키 입력
psql -f projects/voc-analyzer/schema.sql
streamlit run projects/voc-analyzer/app.py
```

**.env.example** (요약)
```dotenv
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=voc
DB_URL=postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}
OPENAI_API_KEY=your-key
OPENAI_MODEL=gpt-4o-mini
```

---

### 2) 💹 CoinTradeSystem — 실시간 자동매매 파이프라인 (Live‑ready with safety)
업비트 API 기반 **실시간 시세 수집 → 전략(이동평균/거래량/밴드) → 주문 실행/로깅**.  
**토큰·레이트리밋·로그/알림** 등 **운영 안정성**과 **재현성(Docker)**을 우선 설계합니다.

**중요**: 실거래를 염두에 두되, 기본은 **안전 가드레일**을 적용하세요.  
- 계좌 잔고가 0이면 주문은 거절됩니다.  
- `.env`는 절대로 커밋하지 말고, **.env.example**만 공개하세요.

**빠른 실행 (Docker Compose)**  
```bash
cp projects/cointradesystem/.env.example projects/cointradesystem/.env  # 키/DB 설정
docker compose -f projects/cointradesystem/docker-compose.yml up -d --build
# services: scheduler(core), mariadb, streamlit (http://localhost:8501)
```

**.env.example** (요약)
```dotenv
# Upbit API
UPBIT_OPEN_API_ACCESS_KEY=your-access-key
UPBIT_OPEN_API_SECRET_KEY=your-secret-key
UPBIT_OPEN_API_SERVER_URL=https://api.upbit.com

# MariaDB
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=secret
DB_NAME=cointrade
```

---

## 🧩 What I bring
- **End‑to‑End 구현력**: 수집→전처리→LLM 분석→대시보드, 실시간 파이프라인까지
- **비즈니스 감각**: 분석을 **결정/실행(우선순위/티켓/KPI)**으로 연결
- **데이터 엔지니어링 감각**: 스키마/스케줄링/로그/재현성(Docker)

---

## 📸 Screenshots
`docs/` 폴더에 대시보드 이미지를 넣으면 README에서 자동으로 렌더링됩니다.

---

## 📜 Education
- 한국방송통신대 **AI학과** (통계, Python, R)
- 청년취업사관학교 **새싹×FinInsight** (SQL/수집/LLM·RAG/심화 프로젝트)

---

## ⚠️ Safety (Trading)
- 본 저장소는 **학습·연구 목적**의 데모를 포함할 수 있습니다.
- 실거래 전, **주문 한도/일일 한도/호가 단위 보정/취소-재발주** 로직을 반드시 점검하세요.
- 키/토큰은 로컬 `.env`에만 보관하고, **공개 금지**.

---

## Contact
- Email: your.email@domain
- GitHub / LinkedIn: (add link)