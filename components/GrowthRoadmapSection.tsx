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
    "OpenAI API 활용 (GPT-4o, 프롬프트 엔지니어링)",
    "LLM 기반 VOC 분석 시스템 구축 (2,185건 처리)",
    "Gemini 2.5 Flash + A2A Protocol 멀티에이전트 설계",
    "비용 효율적 LLM 활용 (API 80% 절감)",
    "Vibe Coding 경험 (Claude Code, Gemini CLI)"
  ]

  const sixMonthGoals = [
    { category: "LLM 서비스 확장", items: ["대용량 텍스트 처리 (10만~50만 건)", "멀티모달 LLM 통합", "실시간 AI 서비스 구축"] },
    { category: "프롬프트 엔지니어링", items: ["Chain-of-Thought 고도화", "Few-shot 학습 최적화", "도메인별 프롬프트 템플릿"] },
    { category: "AI 에이전트 협업", items: ["복합 에이전트 시스템 설계", "에이전트간 통신 프로토콜", "협업 플로우 최적화"] },
    { category: "LLM 기반 PoC", items: ["비즈니스 문제 발굴", "빠른 프로토타입 개발", "실사용자 피드백 수집"] }
  ]

  const oneYearGoals = [
    { category: "엔터프라이즈 LLM", items: ["대규모 LLM 파인튜닝", "도메인 특화 모델 개발", "클라우드 LLM 인프라"] },
    { category: "서비스 기획 리드", items: ["LLM 기반 신서비스 기획", "사용자 경험 설계", "비즈니스 모델 검증"] },
    { category: "워크플로우 설계", items: ["Airflow 기반 LLM 파이프라인", "데이터 처리 자동화", "AI 서비스 표준화 구축"] }
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
            LLM 서비스 기획·개발자로서의 성장 로드맵
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            현재 LLM 프로젝트 경험을 바탕으로 체계적이고 실무 중심적인 성장 계획을 세웠습니다
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
                <h3 className="text-2xl font-bold text-gray-900">Phase 1: 현재 검증된 LLM 역량</h3>
                <p className="text-gray-600">프로젝트에서 검증받은 LLM 서비스 개발 핵심 역량들</p>
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
                <h3 className="text-2xl font-bold text-gray-900">Phase 2: 6개월 내 LLM 심화</h3>
                <p className="text-gray-600">LLM 서비스 전문성 확장을 위한 구체적 목표들</p>
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
                <h3 className="text-2xl font-bold text-gray-900">Phase 3: 1년 내 서비스 기획 리드</h3>
                <p className="text-gray-600">LLM 서비스 기획자로서 프로젝트 리드 역량 구축</p>
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
              LLM 기술을 기반으로 실제 사용자들이 필요로 하는 서비스를 발굴하고,
              기획-개발-운영을 넘나들며 AI 서비스 혁신을 주도하는
              <br />
              <strong className="text-yellow-300">LLM 서비스 기획·개발 전문가</strong>
            </blockquote>

            <div className="flex items-center justify-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-300" />
              <p className="text-blue-100">
                <strong>핵심 철학:</strong> "완벽한 기술보다는 사람들이 실제로 필요로 하는 LLM 서비스"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}