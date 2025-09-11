'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  CheckCircle, 
  Target, 
  Rocket, 
  Trophy, 
  TrendingUp, 
  Brain,
  BarChart3,
  Users,
  Lightbulb
} from 'lucide-react'

export function GrowthRoadmapSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const currentSkills = [
    "중소 규모 데이터 완벽 처리 (2,185건)",
    "실무 문제 해결 (이커머스 운영 경험)",
    "End-to-End 파이프라인 구축",
    "비용 효율적 AI 활용 (API 80% 절감)",
    "운영 안정성 (Docker, 로깅, UUID 추적)"
  ]

  const sixMonthGoals = [
    { category: "데이터 규모", items: ["중간 규모 데이터 처리 (10만~50만 건)", "배치 처리 최적화", "데이터 파이프라인 자동화"] },
    { category: "비즈니스 임팩트", items: ["실제 매출 임팩트 추적", "A/B 테스트 설계 및 실행", "고객 만족도 정량화"] },
    { category: "통계적 신뢰성", items: ["고급 통계 방법론", "데이터 품질 관리", "데이터 무결성 검증"] },
    { category: "데이터 사이언스", items: ["예측 모델링 확장", "머신러닝 파이프라인", "고급 분석 기법"] }
  ]

  const oneYearGoals = [
    { category: "대용량 실시간 처리", items: ["Spark 기반 분산 처리", "실시간 분석 파이프라인", "클라우드 인프라"] },
    { category: "기업 KPI 개선", items: ["매출/고객만족도 개선 프로젝트 리드", "예측 모델 프로덕션 배포", "데이터 기반 의사결정 문화 구축"] },
    { category: "시각화 고도화", items: ["Tableau/Power BI 전문가 수준", "인터랙티브 대시보드", "데이터 스토리텔링"] }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-4">
            성장 계획
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            데이터 분석가로서의 성장 로드맵
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            현재 검증된 역량을 바탕으로 체계적이고 단계적인 성장 계획을 세웠습니다
          </p>
        </motion.div>

        {/* Phase 1: 현재 검증된 역량 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-green-500">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 1: 현재 검증된 역량</h3>
                <p className="text-gray-600">실무에서 검증받은 핵심 역량들</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center p-3 bg-green-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phase 2: 6개월 내 목표 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 2: 6개월 내 목표</h3>
                <p className="text-gray-600">확장 준비 단계의 구체적 목표들</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sixMonthGoals.map((goal, goalIndex) => (
                <motion.div
                  key={goal.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + goalIndex * 0.1, duration: 0.5 }}
                  className="p-4 bg-blue-50 rounded-lg"
                >
                  <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    {goal.category}
                  </h4>
                  <div className="space-y-2">
                    {goal.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-center text-sm text-gray-700">
                        <Target className="w-3 h-3 text-blue-600 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Phase 3: 1년 내 도전 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-purple-500">
            <div className="flex items-center mb-6">
              <Rocket className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Phase 3: 1년 내 도전</h3>
                <p className="text-gray-600">본격적인 확장과 전문성 심화</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {oneYearGoals.map((goal, goalIndex) => (
                <motion.div
                  key={goal.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + goalIndex * 0.1, duration: 0.5 }}
                  className="p-4 bg-purple-50 rounded-lg"
                >
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    {goal.category}
                  </h4>
                  <div className="space-y-2">
                    {goal.items.map((item, itemIndex) => (
                      <div key={item} className="flex items-center text-sm text-gray-700">
                        <TrendingUp className="w-3 h-3 text-purple-600 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 궁극적 성장 비전 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-lg">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">궁극적 성장 비전</h3>
            <blockquote className="text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              데이터 분석 역량을 기반으로 비즈니스의 전체 사이클을 이해하고, 
              제품-마케팅-운영을 넘나들며 성장을 주도하는
              <br />
              <strong className="text-yellow-300">제너럴리스트(Generalist)</strong>
            </blockquote>
            
            <div className="flex items-center justify-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-300" />
              <p className="text-blue-100">
                <strong>핵심 철학:</strong> "완벽한 모델보다는 실제 비즈니스 문제를 해결하는 실용적 분석"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}