'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChart3, PieChart, LineChart, TrendingUp, Database, FileText, ExternalLink, Github, Play, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function DataPortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: '전체', icon: Database },
    { id: 'analysis', label: '데이터 분석', icon: BarChart3 },
    { id: 'visualization', label: '시각화', icon: PieChart },
    { id: 'automation', label: '자동화', icon: TrendingUp }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "마켓컬리 리뷰 감성 분석",
      category: "analysis",
      description: "2,185건 리뷰 텍스트 마이닝으로 고객 인사이트 도출",
      image: "/portfolio/voc-analyzer.png",
      tags: ["Python", "NLP", "OpenAI API", "Streamlit"],
      metrics: {
        "분석 리뷰": "2,185건",
        "시간 단축": "87.5%",
        "정확도": "92%"
      },
      insights: [
        "맛(4.3점)과 재구매 의향(4.5점)이 가장 높은 만족도",
        "가격 대비 양에 대한 불만이 주요 개선점",
        "긍정 키워드: 신선함, 맛있어요, 재구매"
      ],
      links: {
        github: "https://github.com/",
        demo: "https://streamlit.app/",
        report: "/reports/voc-analysis.pdf"
      },
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 2,
      title: "암호화폐 자동매매 성과 분석",
      category: "analysis",
      description: "38건 거래 데이터 분석 및 전략 최적화",
      image: "/portfolio/trading-analysis.png",
      tags: ["Python", "pandas", "Plotly", "Statistics"],
      metrics: {
        "승률": "68.4%",
        "거래 건수": "38건",
        "수익 거래": "26건"
      },
      insights: [
        "볼린저 밴드 전략이 횡보장에서 효과적",
        "손절 기준 -3% 설정이 리스크 관리에 핵심",
        "거래량 증가 시점 진입이 승률 향상"
      ],
      links: {
        github: "https://github.com/",
        notebook: "https://colab.research.google.com/"
      },
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      title: "고객 구매 패턴 대시보드",
      category: "visualization",
      description: "이커머스 2년 판매 데이터 시각화",
      image: "/portfolio/customer-dashboard.png",
      tags: ["Tableau", "SQL", "Python", "Excel"],
      metrics: {
        "분석 기간": "2년",
        "고객 수": "1,200+",
        "매출 성장": "35%"
      },
      insights: [
        "계절성: 여름(6-8월) 매출이 겨울 대비 2.3배",
        "VIP 고객(상위 20%)이 전체 매출의 65% 차지",
        "재구매 주기 평균 45일, 타겟 마케팅 시점 도출"
      ],
      links: {
        tableau: "https://public.tableau.com/",
        report: "/reports/customer-analysis.pdf"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "실시간 VOC 모니터링 시스템",
      category: "automation",
      description: "리뷰 자동 수집 및 알림 시스템 구축",
      image: "/portfolio/voc-monitoring.png",
      tags: ["Docker", "PostgreSQL", "APScheduler", "Slack API"],
      metrics: {
        "자동화율": "100%",
        "처리 시간": "30분",
        "알림 정확도": "95%"
      },
      insights: [
        "부정 리뷰 실시간 알림으로 CS 대응 시간 80% 단축",
        "주간 리포트 자동 생성으로 업무 효율성 향상",
        "키워드 트렌드 변화 조기 감지 가능"
      ],
      links: {
        github: "https://github.com/",
        architecture: "/diagrams/system-architecture.png"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "A/B 테스트 결과 분석",
      category: "analysis",
      description: "마케팅 캠페인 효과성 통계 분석",
      image: "/portfolio/ab-test.png",
      tags: ["Statistics", "Python", "scipy", "seaborn"],
      metrics: {
        "표본 크기": "5,000",
        "신뢰수준": "95%",
        "전환율 향상": "23%"
      },
      insights: [
        "새 디자인이 기존 대비 전환율 23% 향상 (p<0.01)",
        "모바일 사용자에서 특히 효과적 (31% 향상)",
        "체류 시간과 전환율 간 강한 양의 상관관계 (r=0.72)"
      ],
      links: {
        notebook: "https://jupyter.org/",
        report: "/reports/ab-test-results.pdf"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "재고 예측 모델",
      category: "analysis",
      description: "시계열 분석으로 최적 재고 수준 예측",
      image: "/portfolio/inventory-forecast.png",
      tags: ["ARIMA", "Prophet", "scikit-learn", "pandas"],
      metrics: {
        "예측 정확도": "88%",
        "재고 회전율": "+35%",
        "비용 절감": "20%"
      },
      insights: [
        "계절성 반영한 SARIMA 모델이 가장 높은 정확도",
        "프로모션 효과 변수 추가로 예측력 15% 개선",
        "안전재고 수준 최적화로 품절률 5% 이하 유지"
      ],
      links: {
        github: "https://github.com/",
        dashboard: "https://streamlit.app/"
      },
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium border mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BarChart3 className="w-4 h-4 mr-2 text-primary" />
            <span className="gradient-text">Data Portfolio</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">데이터 분석</span> 포트폴리오
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            실제 데이터로 도출한 인사이트와 비즈니스 임팩트
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:shadow-md'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(item.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="data-card h-full hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                {/* Project Image/Visualization Preview */}
                <div className={`h-48 bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={hoveredProject === item.id ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.category === 'visualization' ? (
                        <PieChart className="w-20 h-20 text-white/80" />
                      ) : item.category === 'automation' ? (
                        <Database className="w-20 h-20 text-white/80" />
                      ) : (
                        <LineChart className="w-20 h-20 text-white/80" />
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Overlay with quick stats */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === item.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-4 text-white text-sm">
                      {Object.entries(item.metrics).slice(0, 2).map(([key, value]) => (
                        <div key={key}>
                          <span className="opacity-80">{key}:</span>
                          <span className="font-bold ml-1">{value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">
                    {item.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-blue-50 rounded">
                        <div className="text-xs text-muted-foreground">{key}</div>
                        <div className="font-bold text-sm">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Insights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">주요 인사이트</h4>
                    <ul className="space-y-1">
                      {item.insights.slice(0, 2).map((insight, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <TrendingUp className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {item.links.github && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {item.links.demo && (
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <Play className="w-4 h-4 mr-1" />
                        Demo
                      </Button>
                    )}
                    {item.links.report && (
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="w-4 h-4 mr-1" />
                        Report
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            더 많은 프로젝트와 상세 분석 결과가 궁금하신가요?
          </p>
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            전체 포트폴리오 보기
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}