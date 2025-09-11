'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, BarChart3, ExternalLink, Github, Calendar, Award } from 'lucide-react'

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: "AI_review",
      subtitle: "AI 기반 감정 분석 대시보드 프로젝트",
      period: "2025.07 - 2025.08",
      type: "개인 프로젝트",
      description: "마켓컬리 리뷰 2,185건을 감성분석하여 고객 의견을 7개 카테고리로 정량화",
      problem: "마켓컬리에서 신상품 구매 시 별점만으로는 좋은 상품인지 판단이 어려운 딜레마",
      solution: "OpenAI API 활용해 리뷰 텍스트를 감성분석하고 맛/양/가격 등 7개 카테고리별로 만족도 정량화",
      result: "의사결정 시간 80% 단축 예상 (3시간 → 30분 대시보드), 포장 만족도가 재구매율에 미치는 영향 발견",
      techStack: ["Python", "OpenAI GPT-4o", "Streamlit", "PostgreSQL", "Docker"],
      metrics: {
        "리뷰 분석": "2,185건",
        "시간 단축": "80% 예상",
        "카테고리": "7개"
      },
      githubUrl: "https://github.com/nimowa03/AI_review",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "CoinTradeSystem",
      subtitle: "실시간 암호화폐 자동매매",
      period: "2025.06 - 2025.07",
      type: "개인 프로젝트",
      description: "감정적 거래를 배제한 데이터 기반 24/7 자동매매 시스템 구축",
      problem: "개인 투자자 90%가 손실을 보는 이유: 감정적 거래, 타이밍 부재, 일관성 부족",
      solution: "호가 단위 보정, UUID 기반 추적, 3단계 안전장치를 갖춘 자동화 시스템 구축",
      result: "18개월 백테스팅으로 검증: 승률 68.4%, 최대 낙폭 -12.5% (시장 대비 50% 개선) \n실제 소액 운영으로 시스템 안정성 확인",
      techStack: ["Python", "APScheduler", "MariaDB", "Upbit API", "Docker"],
      metrics: {
        "총 거래": "1,247회",
        "승률": "68.4%",
        "평균 수익률": "0.73%"
      },
      githubUrl: "https://github.com/nimowa03/CoinTradeSystem",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CarFin",
      subtitle: "AI 차량 추천 및 금융 매칭 플랫폼",
      period: "2025.09 - 진행중",
      type: "청년취업사관학교 새싹×FinInsight",
      description: "사회초년생을 위한 차량 추천과 금융 상품을 통합한 원스톱 플랫폼 팀 프로젝트",
      problem: "사회초년생이 겪는 '어떤 차를 어떻게 살까?' 고민과 16~24% 고금리 대출 문제",
      solution: "라이프스타일 분석 기반 차량 추천 AI 모델 + 금융 매칭 시스템으로 정보 비대칭 해결",
      result: "팀 리더로서 프로젝트 총괄, Docker 인프라 구축 및 scikit-learn 기반 추천 모델 개발",
      techStack: ["React", "FastAPI", "PostgreSQL", "Docker", "scikit-learn", "pandas"],
      metrics: {
        "팀원": "4명",
        "기간": "진행중",
        "역할": "팀리더 & ML개발"
      },
      githubUrl: "https://github.com/SeSAC-DA1/backend",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Business",
      subtitle: "개인 이커머스 쇼핑몰 운영",
      period: "2023.01 - 현재",
      type: "개인 사업",
      description: "쿠팡, 스마트스토어 등 오픈마켓에서 소규모 이커머스 쇼핑몰 운영",
      problem: "상품 판매 패턴과 고객 행동 파악의 어려움, 어떤 상품이 언제 잘 팔리는지 예측 곤란",
      solution: "매출 데이터를 분석하고 차트를 만들어 판매 패턴 파악, Google Analytics로 고객 행동 추적",
      result: "계절별 판매 패턴 파악으로 재고 관리 개선, 데이터 분석의 실제 비즈니스 가치 체감",
      techStack: ["쿠팡 마켓플레이스", "스마트스토어", "데이터 분석"],
      metrics: {
        "운영 기간": "2년+",
        "플랫폼": "오픈마켓",
        "학습 동기": "데이터 분석"
      },
      githubUrl: null,
      color: "from-orange-500 to-red-500"
    }
  ]

  const selectedData = projects[selectedProject]

  return (
    <section ref={ref} className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-4">
            프로젝트 경험
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            실전 프로젝트
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            실제 데이터를 다뤄본 경험과 학습 과정을 소개합니다
          </p>
        </motion.div>

        {/* Project Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              onClick={() => setSelectedProject(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedProject === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:shadow-md border border-blue-100'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-2">
                {index === 0 && <BarChart3 className="w-4 h-4" />}
                {index === 1 && <Database className="w-4 h-4" />}
                {index === 2 && <Code className="w-4 h-4" />}
                {index === 3 && <ExternalLink className="w-4 h-4" />}
                <span className="text-sm">{project.title}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Project Detail */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Project Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedData.title}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-3">{selectedData.subtitle}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedData.period}
                    </span>
                    <span className="font-medium">{selectedData.type}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{selectedData.description}</p>
            </div>

            {/* Problem-Solution-Result */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 text-sm">🔥 문제</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedData.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2 text-sm">✅ 해결책</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedData.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2 text-sm">📈 결과</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {selectedData.result.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < selectedData.result.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics & Tech Stack */}
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                핵심 성과
              </h4>
              <div className="space-y-4">
                {Object.entries(selectedData.metrics).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="text-center p-4 bg-blue-50 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${selectedData.color} bg-clip-text text-transparent`}>
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{key}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-600" />
                기술 스택
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedData.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Project Links */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4">프로젝트 보기</h4>
              <div className="space-y-3">
                {selectedData.githubUrl ? (
                  <motion.a
                    href={selectedData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub 코드</span>
                  </motion.a>
                ) : (
                  <motion.div 
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white bg-opacity-10 rounded-lg text-white text-opacity-60 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">실제 비즈니스 경험</span>
                  </motion.div>
                )}
                <motion.div 
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white bg-opacity-10 rounded-lg text-white text-opacity-60 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">포트폴리오 프로젝트</span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}