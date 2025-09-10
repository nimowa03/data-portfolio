'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, TrendingUp, ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<{[key: number]: number}>({})

  const projects = [
    {
      id: 1,
      title: 'VOC Analyzer',
      subtitle: '커머스 고객 인사이트 플랫폼',
      description: '"별점만으로는 알 수 없는 고객의 진짜 목소리를 데이터로 분석"',
      problem: '마켓컬리에서 신상품을 구매할 때마다 겪는 딜레마 - 별점이 없어서 좋은 상품인지 판단이 어려운 상황',
      solution: '리뷰 2,185건을 7개 핵심 지표로 정량화하여 "포장 만족도"가 "재구매율"에 미치는 영향을 밝혀냄',
      highlights: [
        '카테고리별 감성분석으로 고객 만족도 정량화',
        'Pydantic 스키마로 LLM 출력 안정성 확보',
        '배치 처리로 API 비용 80% 절약',
        'Streamlit 대시보드로 비개발자도 쉽게 활용'
      ],
      insights: [
        '"30대 맞벌이 부부는 조리편의성을 최우선 고려"',
        '"포장 만족도가 낮은 상품의 재구매율 15% 하락"',
        '"가격 불만 고객도 품질 만족시 68% 재구매"'
      ],
      techStack: ['Python', 'PostgreSQL', 'OpenAI GPT-4o', 'LangChain', 'Streamlit', 'Docker'],
      metrics: {
        reviews: '2,185건',
        categories: '7개',
        timeReduction: '80%'
      },
      github: 'https://github.com/nimowa03/AI_review',
      icon: ShoppingCart,
      color: 'emerald',
      images: [
        { src: '/voc_overview.png', title: '전체 개요' },
        { src: '/voc_product.png', title: '상품 분석' },
        { src: '/voc_buyer_strengths.png', title: '구매자 분석' },
        { src: '/voc_category_detail.png', title: '카테고리 상세' }
      ]
    },
    {
      id: 2,
      title: 'CoinTradeSystem',
      subtitle: '핀테크 자동 거래 시스템',
      description: '"감정을 배제하고 데이터 규칙에만 기반하여 24/7 자동으로 거래하는 시스템을 구축"',
      problem: '개인 투자자의 90%가 손실을 보는 이유 - 감정적 거래, 타이밍 부재, 일관성 부족',
      solution: '데이터 기반 자동화로 3단계 안전장치와 UUID 거래 추적 시스템을 구축하여 휴먼 에러 제거',
      highlights: [
        '24/7 무중단 자동 거래 시스템',
        '3단계 리스크 관리 안전장치',
        'UUID 기반 완전한 거래 추적성',
        '호가 단위 자동 보정으로 API 제약 해결'
      ],
      insights: [
        '감정적 거래 배제로 일관된 투자 전략 실행',
        '24시간 시장 모니터링으로 기회 손실 최소화',
        '체계적인 리스크 관리로 최대 낙폭 -12.5% 제한'
      ],
      techStack: ['Python', 'APScheduler', 'MariaDB', 'Streamlit', 'Docker', 'Upbit API'],
      metrics: {
        trades: '1,247회',
        winRate: '68.4%',
        avgReturn: '0.73%'
      },
      github: 'https://github.com/nimowa03/CoinTradeSystem',
      icon: TrendingUp,
      color: 'blue',
      images: [
        { src: '/coin_architecture.png', title: '시스템 구조' },
        { src: '/coin_market_analysis.png', title: '시장 분석' },
        { src: '/coin1.png', title: '거래 로그' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="section-padding bg-blue-50">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants} className="badge-modern mb-4">
              Featured Projects
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gradient mb-4">
              실전 프로젝트
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto">
              실제 비즈니스 문제를 데이터로 해결한 End-to-End 프로젝트들
            </motion.p>
          </div>

          {/* Projects */}
          <div className="space-y-24">
            {projects.map((project, index) => {
              const Icon = project.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="card-modern hover:shadow-lg transition-shadow duration-300">
                    <div className="grid lg:grid-cols-2 gap-8 lg:items-center">
                      {/* Content */}
                      <div className={isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                        <div className="space-y-4">
                          {/* Header - 더 미니멀하게 */}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 rounded-full bg-slate-900"></div>
                              <span className="text-sm text-slate-500 uppercase tracking-wide">
                                {project.id === 1 ? 'Commerce' : 'Fintech'}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                              {project.title}
                            </h3>
                            <p className="text-slate-600">{project.subtitle}</p>
                          </div>

                        {/* Description */}
                        <blockquote className="text-lg italic text-slate-700 border-l-4 border-blue-300 pl-4">
                          {project.description}
                        </blockquote>

                        {/* Problem & Solution */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-red-600 mb-2">🔥 문제</h4>
                            <p className="text-slate-600">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-600 mb-2">✅ 해결책</h4>
                            <p className="text-slate-600">{project.solution}</p>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-white rounded-lg border">
                              <div className="text-xl font-bold text-slate-900">{value}</div>
                              <div className="text-xs text-slate-500 capitalize">
                                {key === 'reviews' && '리뷰 분석'}
                                {key === 'categories' && '분석 카테고리'}
                                {key === 'timeReduction' && '시간 단축'}
                                {key === 'trades' && '총 거래'}
                                {key === 'winRate' && '거래 승률'}
                                {key === 'avgReturn' && '평균 수익'}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack - 미니멀 태그 스타일 */}
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full"
                              >
                                #{tech}
                              </span>
                            ))}
                          </div>
                        </div>

                          {/* Actions */}
                          <div>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-slate-900 hover:text-blue-600 transition-colors group"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              <span className="border-b border-transparent group-hover:border-blue-600 transition-colors">
                                GitHub에서 보기
                              </span>
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>

                    {/* Visual */}
                    <div className={isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                      <div className="space-y-4">
                        {/* Image Tabs */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.images?.map((img, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setActiveImageIndex(prev => ({...prev, [project.id]: imgIndex}))}
                              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                                (activeImageIndex[project.id] || 0) === imgIndex
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                              }`}
                            >
                              {img.title}
                            </button>
                          ))}
                        </div>
                        
                        {/* Main Image */}
                        <div className="aspect-[4/3] bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                          <img
                            src={project.images?.[activeImageIndex[project.id] || 0]?.src || '/voc_overview.png'}
                            alt={`${project.title} - ${project.images?.[activeImageIndex[project.id] || 0]?.title}`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        
                        {/* Business Insights */}
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold text-slate-900 mb-3 text-sm">핵심 인사이트</h4>
                          <div className="space-y-2">
                            {project.insights.map((insight, idx) => (
                              <div key={idx} className="text-sm text-slate-600 flex items-start">
                                <span className="text-slate-400 mr-2">•</span>
                                <span>{insight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}