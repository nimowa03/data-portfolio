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
      title: "VOC Analyzer",
      subtitle: "LLM 기반 고객 인사이트 플랫폼",
      period: "2025.07 - 2025.08",
      type: "LLM PoC 프로젝트",
      description: "OpenAI API와 프롬프트 엔지니어링으로 마켓컬리 리뷰 2,185건을 7개 핵심 지표로 정량화하여 LLM 기반 서비스 구축",
      problem: "기존 별점 기반 평가의 한계: 고객의 진짜 의견과 상품별 세부 만족도를 정량화할 수 없는 문제",
      solution: "OpenAI GPT-4o + LangChain으로 Chain-of-Thought 프롬프트 설계, Pydantic 스키마로 구조화된 감성분석 및 키워드 추출",
      result: "LLM 기반 서비스로 의사결정 시간 80% 단축, 프롬프트 최적화로 API 비용 80% 절약, 99% 파싱 성공률 달성",
      techStack: ["OpenAI GPT-4o", "LangChain", "Pydantic", "Python", "Streamlit", "PostgreSQL"],
      metrics: {
        "LLM 처리량": "2,185건",
        "파싱 성공률": "99%",
        "API 비용절약": "80%"
      },
      githubUrl: "https://github.com/nimowa03/AI_review",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "CoinTradeSystem",
      subtitle: "핀테크 자동거래 (LLM 통합 예정)",
      period: "2025.06 - 2025.07",
      type: "핀테크 + LLM 계획",
      description: "현재: 데이터 기반 68.4% 승률 달성 / 향후: GPT-4 뉴스 감성분석과 시장 예측 모델을 통합한 차세대 AI 거래 시스템으로 발전 계획",
      problem: "기존 데이터 기반 거래의 한계: 뉴스/사건에 따른 시장 변동성 예측 불가, 감정적 시장 분위기 반영 부족",
      solution: "현재 시스템에 GPT-4 뉴스 감성분석, LangChain 기반 실시간 시장 분위기 분석, 프롬프트 엔지니어링을 통한 예측 정확도 향상 전략 수립",
      result: "현재: 승률 68.4% 달성 / 향후 목표: LLM 통합으로 예측 정확도 30% 개선, 뉴스 기반 리스크 관리 시스템 구축",
      techStack: ["Python", "APScheduler", "MariaDB", "Upbit API", "GPT-4 (예정)", "LangChain (예정)"],
      metrics: {
        "현재 승률": "68.4%",
        "목표 개선": "+30%",
        "LLM 적용": "예정"
      },
      githubUrl: "https://github.com/nimowa03/CoinTradeSystem",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "CarFin AI",
      subtitle: "Gemini 2.5 Flash + A2A 차량 컨시어지 서비스",
      period: "2025.09 - 진행중",
      type: "SeSAC DA1 파이널 + 핀테크 공모전",
      description: "Gemini 2.5 Flash + A2A Protocol로 구현한 3-Agent 협업 시스템으로 '니 취향만 말해, 나머지는 내가 다 해줄게' 올인원 차량 컨시어지 서비스",
      problem: "기존 차량 플랫폼의 한계: 사용자가 직접 비교/분석해야 하고, 숨은 니즈는 발굴하지 못하는 문제",
      solution: "Gemini 2.5 Flash + A2A Protocol 기반 3-Agent 시스템: ①컨시어지 매니저 ②니즈분석 전문가 ③데이터분석 전문가가 협업하여 숨은 니즈 발굴 및 완벽한 개인 맞춤 분석",
      result: "PM(서비스 기획·개발 총괄)으로서 Gemini 2.5 Flash + A2A 멀티에이전트 협업 플로우 설계, 3-Agent 시스템 아키텍처 구현, 117,129건 실시간 데이터 연동 성공",
      techStack: ["Gemini 2.5 Flash", "A2A Protocol", "Next.js 15", "React 19", "PostgreSQL", "Tailwind CSS"],
      metrics: {
        "역할": "PM (기획·총괄)",
        "시스템 설계": "3-Agent",
        "데이터 연동": "117,129건"
      },
      githubUrl: "https://github.com/SeSAC-DA1/CarFin_AI.git",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Business",
      subtitle: "개인 이커머스 운영 (LLM 적용 예정)",
      period: "2023.01 - 현재",
      type: "개인 사업",
      description: "쿠팡, 스마트스토어 등 오픈마켓에서 소규모 이커머스 운영하며 실제 비즈니스 경험 획득, 향후 LLM 기반 VOC 분석 시스템 적용 계획",
      problem: "상품 판매 패턴과 고객 행동 파악의 어려움, 고객 리뷰에서 구체적인 개선점 도출의 한계",
      solution: "현재: 매출 데이터 분석 및 고객 행동 추적 / 향후: OpenAI API 활용한 고객 리뷰 감성분석으로 세부 만족도 정량화 계획",
      result: "계절별 판매 패턴 파악으로 재고 관리 개선, 데이터 분석의 실제 비즈니스 가치 체감, 향후 LLM 기반 VOC 분석 적용 예정",
      techStack: ["쿠팡 마켓플레이스", "스마트스토어", "데이터 분석", "OpenAI API (예정)"],
      metrics: {
        "운영 기간": "2년+",
        "플랫폼": "오픈마켓",
        "LLM 적용": "계획 중"
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
            LLM 서비스 기획·개발 프로젝트
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LLM 기술을 활용한 비즈니스 문제 해결과 서비스 기획·개발 경험
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