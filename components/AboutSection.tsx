'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Lightbulb, Cog, Users, ShoppingCart, TrendingUp, Sparkles, Brain } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const coreCompetencies = [
    {
      icon: Target,
      title: "도메인-우선 문제정의",
      description: "리뷰 문맥, 호가·레이트리밋 등 현실 제약을 먼저 모델링하여 실용적인 해결책 도출",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25"
    },
    {
      icon: Cog,
      title: "End-to-End 구현",
      description: "수집 → 전처리/LLM 분석 → 대시보드/자동화 파이프라인까지 전 과정 구현",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25"
    },
    {
      icon: Lightbulb,
      title: "운영 안정성",
      description: "스키마/로그/UUID 추적, Docker/.env/CI로 재현성 확보 및 안정적인 서비스 운영",
      color: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/25"
    },
    {
      icon: Users,
      title: "비즈니스 커뮤니케이션",
      description: "인사이트를 우선순위·KPI·실행 티켓으로 전환하여 팀과 효과적으로 협업",
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25"
    }
  ]

  const domainExpertise = [
    {
      icon: ShoppingCart,
      title: "커머스 도메인 전문성",
      subtitle: "실제 이커머스 1인 운영 경험 (2023.01~현재)",
      points: [
        "고객 리뷰 2,185건 분석을 통한 VOC 정량화",
        "구매 여정별 최적화 포인트 발견 및 개선안 도출",
        "실제 마케팅, 재고, 손익 분석 등 전체 비즈니스 사이클 경험"
      ],
      color: "from-green-400 to-emerald-600",
      stats: { label: "리뷰 분석", value: "2,185건" }
    },
    {
      icon: TrendingUp,
      title: "핀테크 도메인 이해",
      subtitle: "자동매매 시스템 구축을 통한 금융 데이터 특성 이해",
      points: [
        "24/7 자동 거래 시스템 설계 및 운영",
        "3단계 리스크 관리로 68.4% 승률 달성",
        "API 제약사항과 실시간 데이터 처리 경험"
      ],
      color: "from-blue-400 to-indigo-600",
      stats: { label: "거래 승률", value: "68.4%" }
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium border mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Brain className="w-4 h-4 mr-2 text-primary" />
            <span className="gradient-text">About Me</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">데이터로 말하는</span> 분석가
          </h2>
          
          {/* Philosophy Quote */}
          <motion.div
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative glass-effect p-8 rounded-2xl border">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl blur-xl" />
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                <span className="text-primary text-6xl absolute -top-4 -left-2">"</span>
                <span className="gradient-text">고객의 언어를 데이터로 번역하여 비즈니스 가치를 만드는 분석가</span>
                <span className="text-primary text-6xl absolute -bottom-8 -right-2">"</span>
              </blockquote>
            </div>
          </motion.div>
          
          <motion.p
            className="text-lg text-muted-foreground mt-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            단순한 숫자 분석을 넘어 고객의 진짜 목소리를 찾고, 이를 비즈니스 성장으로 연결하는 일에 집중합니다. 
            실제 이커머스 창업 경험을 통해 발견한 문제들을 기술적으로 해결하며, 
            <strong className="text-primary"> 데이터가 전하는 진짜 이야기를 논리적으로 해석</strong>합니다.
          </motion.p>
        </motion.div>

        {/* Core Competencies - 3D Rotating Cards */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">핵심 역량</span>
            <span className="text-muted-foreground"> (Core Competencies)</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => {
              const Icon = competency.icon
              const isHovered = hoveredCard === index
              
              return (
                <motion.div
                  key={competency.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <motion.div
                    className={`data-card relative overflow-hidden cursor-pointer transition-all duration-500 ${
                      isHovered ? `shadow-2xl ${competency.glowColor}` : ''
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${competency.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={isHovered ? { 
                        background: [
                          `linear-gradient(45deg, ${competency.color})`,
                          `linear-gradient(135deg, ${competency.color})`,
                          `linear-gradient(225deg, ${competency.color})`,
                          `linear-gradient(315deg, ${competency.color})`,
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Icon with Glow */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${competency.color} flex items-center justify-center mb-4 relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <motion.div
                        className={`absolute inset-0 rounded-xl blur-lg ${competency.color} opacity-0 group-hover:opacity-50`}
                        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                      {competency.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {competency.description}
                    </p>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${competency.color} rounded-full`}
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                          }}
                          animate={isHovered ? {
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1],
                          } : {}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Domain Expertise */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">도메인 전문성</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {domainExpertise.map((domain, index) => {
              const Icon = domain.icon
              
              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.8 }}
                >
                  <Card className="data-card group hover:shadow-2xl relative overflow-hidden">
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {/* Stats Badge */}
                        <motion.div
                          className="text-right glass-effect px-3 py-2 rounded-lg border"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`text-lg font-bold bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                            {domain.stats.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{domain.stats.label}</div>
                        </motion.div>
                      </div>
                      
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {domain.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm">{domain.subtitle}</p>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {domain.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            className="flex items-start text-sm leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.7 + index * 0.2 + pointIndex * 0.1 }}
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${domain.color} mt-2 mr-3 flex-shrink-0`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Personal Statement */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.9, duration: 0.8 }}
        >
          <Card className="glass-effect border-2 border-primary/20 hover:border-primary/40 transition-colors relative overflow-hidden">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-lg"
              animate={{
                borderColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                <span className="gradient-text">왜 데이터 분석가가 되었는가?</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              <p className="mb-6">
                직접 이커머스 쇼핑몰을 운영하며 고객 피드백을 관리하는 과정에서, 
                <strong className="text-primary"> 리뷰 한 줄에도 서비스 개선과 매출 향상의 단서가 숨어 있음</strong>을 깨달았습니다. 
                이 경험은 제가 데이터를 단순히 다루는 것이 아니라, 비즈니스 성장을 이끄는 무기로 활용할 수 있다는 확신을 준 출발점이었습니다.
              </p>
              
              <motion.p
                className="mb-0"
                whileInView={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                viewport={{ once: false }}
              >
                VOC Analyzer에서는 마켓컬리 리뷰 2,185건을 감성 분석·키워드 추출로 처리하여, 
                <strong className="text-emerald-600"> "별점만으로는 알 수 없는 고객의 진짜 목소리"</strong>를 인사이트로 전환했습니다. 
                CoinTradeSystem에서는 감정적 판단을 배제한 데이터 기반 자동매매로 68.4%의 승률을 달성했습니다.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}