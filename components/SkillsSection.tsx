'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, BarChart3, GraduationCap, Award } from 'lucide-react'

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const skills = [
    { name: 'OpenAI API', level: 85, icon: '🤖', description: 'GPT-4, 프롬프트 엔지니어링' },
    { name: 'LangChain', level: 80, icon: '🔗', description: 'RAG, 체인 구축' },
    { name: 'Python', level: 85, icon: '🐍', description: 'Pydantic, FastAPI' },
    { name: 'Hugging Face', level: 75, icon: '🤗', description: 'Transformers, 파인튜닝' },
    { name: 'Vibe Coding', level: 80, icon: '⚡', description: 'Claude Code, Gemini CLI' },
    { name: 'Prompt Engineering', level: 85, icon: '📝', description: 'Chain-of-Thought, 최적화' }
  ]

  const achievements = [
    { title: 'ADsP', description: '데이터 분석 준전문가' },
    { title: '부트캠프', description: '새싹×FinInsight 수료' },
    { title: '대학 재학', description: '한국방송통신대 AI학과' }
  ]

  return (
    <section ref={ref} className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-4">
            스킬 & 자격
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            LLM 서비스 개발 기술 스택
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            LLM 기반 서비스 기획·개발에 필요한 핵심 기술들을 학습하고 실전 프로젝트에 적용했습니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 기술 스택 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-600" />
                기술 스택
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    className="p-4 border border-blue-100 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <div>
                        <div className="font-medium text-gray-900">{skill.name}</div>
                        <div className="text-sm text-gray-500">{skill.description}</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>숙련도</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 자격증 및 교육 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-600" />
                자격 & 교육
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="p-4 bg-blue-50 rounded-lg"
                  >
                    <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{achievement.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 학습 현황 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                현재 학습 중
              </h3>
              <div className="space-y-2 text-sm">
                <div>• 머신러닝 및 딥러닝 이론</div>
                <div>• 통계학 및 확률론</div>
                <div>• LLM 기반 서비스 설계 방법론</div>
                <div>• AI 프로덕트 기획 및 개발 프로세스</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}