'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Lightbulb, Cog, Users, ShoppingCart, TrendingUp, Sparkles, Brain, Calendar, Award, GraduationCap, Briefcase, BookOpen, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const coreCompetencies = [
    {
      icon: Target,
      title: "LLM 서비스 기획",
      description: "비즈니스 요구사항을 LLM 기반 솔루션으로 설계하고 프롬프트 엔지니어링으로 최적화",
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/25"
    },
    {
      icon: Cog,
      title: "PoC 개발",
      description: "OpenAI API, LangChain을 활용한 RAG/파인튜닝 적용 및 MVP 서비스 구축",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/25"
    },
    {
      icon: Lightbulb,
      title: "바이브코딩",
      description: "Claude Code, Gemini CLI 등 AI 도구를 활용한 빠른 프로토타이핑 및 개발 생산성 향상",
      color: "from-emerald-500 to-teal-500",
      glowColor: "shadow-emerald-500/25"
    },
    {
      icon: Users,
      title: "서비스 기획 역량",
      description: "사용자 요구사항을 LLM 기능으로 전환하고 비즈니스 가치를 창출하는 서비스 설계",
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/25"
    }
  ]

  const domainExpertise = [
    {
      icon: ShoppingCart,
      title: "LLM 기반 VOC 분석",
      subtitle: "OpenAI API를 활용한 감성분석 서비스 구축 (2023.01~현재)",
      points: [
        "고객 리뷰 2,185건 OpenAI API 감성분석 및 Pydantic 스키마 설계",
        "프롬프트 엔지니어링으로 의사결정 시간 80% 단축 달성",
        "LangChain을 활용한 RAG 시스템으로 개인화된 인사이트 제공"
      ],
      color: "from-green-400 to-emerald-600",
      stats: { label: "리뷰 분석", value: "2,185건" }
    },
    {
      icon: TrendingUp,
      title: "LLM 응용 서비스 개발",
      subtitle: "Python과 API를 활용한 AI 자동화 시스템 구축",
      points: [
        "24/7 자동 거래 시스템에 향후 GPT-4 예측 모델 통합 계획",
        "3단계 리스크 관리 알고리즘 개발로 68.4% 승률 달성",
        "실시간 API 연동과 데이터 처리 최적화 경험"
      ],
      color: "from-blue-400 to-indigo-600",
      stats: { label: "거래 승률", value: "68.4%" }
    }
  ]

  const timeline = [
    {
      date: "2025.03 - 현재",
      title: "한국방송통신대학교 AI학과",
      company: "학부 재학",
      description: "통계학, 머신러닝, 딥러닝 이론 학습 중",
      type: "education"
    },
    {
      date: "2024.09 - 2024.12",
      title: "청년취업사관학교 새싹×FinInsight",
      company: "부트캠프",
      description: "실무 프로젝트 기반 데이터 분석 교육 수료",
      type: "education"
    },
    {
      date: "2024.06 - 현재",
      title: "LLM 기반 서비스 개발 프로젝트",
      company: "포트폴리오 프로젝트",
      description: "OpenAI API, 프롬프트 엔지니어링, RAG 시스템 구축",
      type: "work"
    },
    {
      date: "2023.01 - 현재",
      title: "온라인 쇼핑몰 운영 (부업)",
      company: "개인사업",
      description: "LLM 기반 VOC 분석 시스템 실제 적용 경험",
      type: "work"
    }
  ]

  const certifications = [
    { name: "ADsP (데이터분석준전문가)", issuer: "한국데이터산업진흥원", date: "2024.09" },
    { name: "SQLD (SQL개발자)", issuer: "한국데이터산업진흥원", date: "준비 중" },
    { name: "빅데이터분석기사", issuer: "한국데이터산업진흥원", date: "2025년 목표" }
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
            <span className="gradient-text">About Me & Resume</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">LLM 기술로 서비스를 만드는</span> 개발자
          </h2>
          
          {/* Philosophy Quote */}
          <motion.div
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative bg-white p-6 rounded-xl border border-blue-200 shadow-sm">
              <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 text-center">
                "LLM 기술로 비즈니스 문제를 해결하고, 사용자 중심의 AI 서비스를 기획·개발하고 싶습니다"
              </blockquote>
            </div>
          </motion.div>
          
          <motion.p
            className="text-base text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            한국방송통신대학교 AI학과에서 머신러닝과 딥러닝을 학습하고 있으며,
            부트캠프에서 실무 프로젝트 경험을 쌓았습니다.
            <strong className="text-blue-600">OpenAI API, 프롬프트 엔지니어링, 바이브코딩(Claude Code, Gemini CLI)</strong> 경험을 바탕으로
            비즈니스 요구사항을 LLM 기반 서비스로 구현하는 PoC 개발에 집중하고 있습니다.
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

        {/* Timeline Section - Career & Education */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">경력 및 교육</span>
            <span className="text-muted-foreground"> (Timeline)</span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                {/* Content Card */}
                <motion.div
                  className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'pl-8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="data-card hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? 'justify-end' : ''
                      }`}>
                        {item.type === 'work' ? (
                          <Briefcase className="w-4 h-4 text-blue-500" />
                        ) : (
                          <GraduationCap className="w-4 h-4 text-purple-500" />
                        )}
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                  whileHover={{ scale: 1.5 }}
                />
                
                {/* Empty Space */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">자격증 및 수상</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="data-card hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                    <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-primary">{cert.date}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            이력서 PDF 다운로드
          </Button>
        </motion.div>

        {/* Personal Statement */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.1, duration: 0.8 }}
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
                <span className="gradient-text">왜 LLM 서비스 개발자가 되었는가?</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="prose prose-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              <p className="mb-6">
                직접 이커머스 쇼핑몰을 운영하며 고객 피드백을 관리하는 과정에서,
                <strong className="text-primary"> 리뷰 한 줄에도 서비스 개선과 매출 향상의 단서가 숨어 있음</strong>을 깨달았습니다.
                이 경험은 제가 LLM 기술을 단순한 도구가 아니라, 비즈니스 가치를 창출하는 서비스로 발전시킬 수 있다는 확신을 준 출발점이었습니다.
              </p>
              
              <motion.p
                className="mb-0"
                whileInView={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                viewport={{ once: false }}
              >
                VOC Analyzer에서는 마켓컬리 리뷰 2,185건을 OpenAI API와 프롬프트 엔지니어링으로 처리하여,
                <strong className="text-emerald-600"> "별점만으로는 알 수 없는 고객의 진짜 목소리"</strong>를 실시간 인사이트로 전환했습니다.
                CoinTradeSystem에서는 향후 GPT-4 예측 모델을 통합하여 더 정교한 자동매매 서비스로 발전시킬 계획입니다.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}