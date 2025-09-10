'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Target, TrendingUp, Award, Users, DollarSign, Clock, CheckCircle, Sparkles } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const achievements = [
    {
      icon: Trophy,
      title: "VOC 분석 자동화",
      metric: "87.5%",
      label: "시간 단축",
      description: "4시간 → 30분으로 리뷰 분석 시간 대폭 단축",
      impact: "일 3.5시간 업무 효율성 향상",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "거래 시스템 승률",
      metric: "68.4%",
      label: "수익 거래율",
      description: "38건 중 26건 수익 실현, 안정적 수익 창출",
      impact: "감정 배제한 일관된 투자 전략 실행",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "고객 인사이트 발굴",
      metric: "2,185건",
      label: "리뷰 분석",
      description: "7개 카테고리별 만족도 정량화 및 개선점 도출",
      impact: "데이터 기반 제품 개선 의사결정",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: DollarSign,
      title: "재고 효율성 개선",
      metric: "35%",
      label: "회전율 향상",
      description: "데이터 분석 기반 재고 최적화로 자금 효율성 증대",
      impact: "연간 운영자금 20% 절감",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Target,
      title: "마케팅 ROI 향상",
      metric: "2.8배",
      label: "ROAS 개선",
      description: "고객 세그먼트 분석 기반 타겟 마케팅 전략 수립",
      impact: "광고비 대비 매출 280% 달성",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Clock,
      title: "실시간 모니터링",
      metric: "24/7",
      label: "무중단 운영",
      description: "자동화 시스템으로 365일 안정적 서비스 운영",
      impact: "시스템 다운타임 0% 달성",
      color: "from-cyan-400 to-blue-500"
    }
  ]

  const businessImpact = [
    {
      category: "비용 절감",
      items: [
        { label: "인건비 절감", value: "월 140시간", description: "자동화로 반복 업무 시간 절감" },
        { label: "재고 비용", value: "20% 감소", description: "최적 재고 수준 유지" },
        { label: "마케팅 비용", value: "35% 효율화", description: "타겟팅 정확도 향상" }
      ]
    },
    {
      category: "매출 성장",
      items: [
        { label: "재구매율", value: "45% 향상", description: "VOC 기반 서비스 개선" },
        { label: "객단가", value: "23% 증가", description: "크로스셀링 전략 성공" },
        { label: "전환율", value: "2.3배 개선", description: "A/B 테스트 기반 최적화" }
      ]
    },
    {
      category: "운영 효율",
      items: [
        { label: "의사결정 속도", value: "3배 향상", description: "실시간 대시보드 활용" },
        { label: "오류율", value: "92% 감소", description: "자동화 프로세스 도입" },
        { label: "고객 만족도", value: "4.5/5.0", description: "데이터 기반 서비스 개선" }
      ]
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
            <Trophy className="w-4 h-4 mr-2 text-primary" />
            <span className="gradient-text">Achievements & Impact</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">성과와 비즈니스 임팩트</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            데이터 분석으로 창출한 실질적 가치와 성과
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            const isHovered = hoveredCard === index
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card className="data-card h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      <motion.div
                        className="text-right"
                        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                      >
                        <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.metric}
                        </div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </motion.div>
                    </div>
                    
                    <CardTitle className="text-lg mb-2">{achievement.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs font-medium">{achievement.impact}</span>
                    </div>
                  </CardContent>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-lg"
                    animate={isHovered ? {
                      borderColor: ["rgba(59, 130, 246, 0)", "rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0)"]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Business Impact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">비즈니스 임팩트 상세</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessImpact.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + categoryIndex * 0.1, duration: 0.6 }}
              >
                <Card className="data-card h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {categoryIndex === 0 && <DollarSign className="w-5 h-5 text-green-500" />}
                      {categoryIndex === 1 && <TrendingUp className="w-5 h-5 text-blue-500" />}
                      {categoryIndex === 2 && <Target className="w-5 h-5 text-purple-500" />}
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.label}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.0 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{item.label}</span>
                          <span className={`text-lg font-bold bg-gradient-to-r ${
                            categoryIndex === 0 ? 'from-green-500 to-emerald-500' :
                            categoryIndex === 1 ? 'from-blue-500 to-indigo-500' :
                            'from-purple-500 to-pink-500'
                          } bg-clip-text text-transparent`}>
                            {item.value}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                        <div className="w-full bg-slate-100 rounded-full h-1.5">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${
                              categoryIndex === 0 ? 'from-green-500 to-emerald-500' :
                              categoryIndex === 1 ? 'from-blue-500 to-indigo-500' :
                              'from-purple-500 to-pink-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '75%' } : { width: 0 }}
                            transition={{ delay: 1.2 + categoryIndex * 0.1 + itemIndex * 0.05, duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Statement */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Card className="glass-effect border-2 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">데이터가 만든 변화</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                단순한 숫자 분석을 넘어, <strong className="text-primary">실제 비즈니스 문제를 해결</strong>하고
                <br />
                <strong className="text-primary">측정 가능한 성과</strong>를 창출하는 데이터 분석가입니다.
                <br />
                <span className="text-base mt-4 block">
                  창업 경험으로 얻은 비즈니스 이해도와 기술력을 결합하여,
                  <br />
                  데이터에서 <strong className="text-emerald-600">진짜 가치</strong>를 찾아냅니다.
                </span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}