'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, TrendingUp, Database, Clock, Target, CheckCircle, Code, Sparkles, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 'voc',
      title: 'VOC Analyzer',
      subtitle: '커머스 고객 인사이트 플랫폼',
      icon: ShoppingCart,
      iconColor: 'from-emerald-500 to-green-600',
      description: '"별점만으로는 알 수 없는 고객의 진짜 목소리를 데이터로 분석"',
      image: '/docs/voc_overview.png',
      tags: ['Python', 'PostgreSQL', 'OpenAI', 'Streamlit', 'Docker'],
      metrics: [
        { label: '리뷰 분석', value: '2,185건', icon: Database, color: 'text-blue-600' },
        { label: '시간 단축', value: '80%', icon: Clock, color: 'text-emerald-600' },
        { label: '분석 카테고리', value: '7개', icon: Target, color: 'text-purple-600' }
      ],
      highlights: [
        '카테고리별 감성분석으로 고객 만족도 정량화',
        'Pydantic 스키마로 LLM 출력 안정성 확보',
        '배치 처리로 API 비용 80% 절약',
        'Streamlit 대시보드로 비개발자도 쉽게 활용'
      ],
      businessImpact: [
        '"30대 맞벌이 부부는 조리편의성을 최우선 고려"',
        '"포장 만족도가 낮은 상품의 재구매율 15% 하락"',
        '"가격 불만 고객도 품질 만족시 68% 재구매"'
      ],
      techChallenges: [
        {
          problem: '불안정한 LLM 출력',
          solution: 'Pydantic으로 스키마 강제하여 100% 정형 데이터 확보',
          code: `class ReviewAnalysis(BaseModel):
    sentiment_score: float = Field(..., ge=-1.0, le=1.0)
    categories: List[str] = Field(..., max_items=3)`
        },
        {
          problem: '예상보다 높은 API 비용',
          solution: '배치 처리 + 캐싱으로 API 호출 80% 감소',
          code: `# 10개씩 묶어서 한 번에 처리
batch_reviews = reviews[i:i+10]
batch_analysis = analyze_batch(batch_reviews)`
        }
      ],
      github: 'https://github.com/nimowa03/data-portfolio/tree/main/projects/voc-analyzer',
      demo: null
    },
    {
      id: 'coin',
      title: 'CoinTradeSystem',
      subtitle: '핀테크 자동 거래 시스템',
      icon: TrendingUp,
      iconColor: 'from-blue-500 to-indigo-600',
      description: '"감정을 배제한 24/7 데이터 기반 자동 거래 시스템"',
      image: '/docs/coin_architecture.png',
      tags: ['Python', 'APScheduler', 'MariaDB', 'Streamlit', 'Upbit API'],
      metrics: [
        { label: '거래 승률', value: '68.4%', icon: Target, color: 'text-green-600' },
        { label: '총 거래', value: '1,247회', icon: Database, color: 'text-blue-600' },
        { label: '평균 수익', value: '0.73%', icon: TrendingUp, color: 'text-purple-600' }
      ],
      highlights: [
        '24/7 무중단 자동 거래 시스템',
        '3단계 리스크 관리 안전장치',
        'UUID 기반 완전한 거래 추적성',
        '호가 단위 자동 보정으로 API 제약 해결'
      ],
      businessImpact: [
        '감정적 거래 배제로 일관된 투자 전략 실행',
        '24시간 시장 모니터링으로 기회 손실 최소화',
        '체계적인 리스크 관리로 최대 낙폭 -12.5% 제한'
      ],
      techChallenges: [
        {
          problem: '복잡한 API 제약사항',
          solution: '3단계 안전장치로 호가 단위, 레이트 리밋, 체결 지연 대응',
          code: `def adjust_price_unit(price, symbol):
    if symbol == 'KRW-BTC':
        return (price // 1000) * 1000
    elif symbol == 'KRW-XRP':
        return round(price, 1)`
        },
        {
          problem: '거래 내역 추적의 어려움',
          solution: 'UUID 기반 완전 추적 시스템으로 모든 거래 의사결정 과정 기록',
          code: `trade_log = {
    'uuid': str(uuid.uuid4()),
    'timestamp': datetime.now(),
    'strategy': 'dca_buy',
    'reason': 'price_drop_5%'
}`
        }
      ],
      github: 'https://github.com/nimowa03/data-portfolio/tree/main/projects/cointradesystem',
      demo: null
    }
  ]

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => {
    const Icon = project.icon

    return (
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.iconColor} flex items-center justify-center`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
              <DialogDescription className="text-lg">{project.subtitle}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Hero Image */}
          <div className="relative group">
            <motion.div
              className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">{project.title}</p>
                  <p className="text-sm">프로젝트 스크린샷</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <div className="glass-effect p-6 rounded-xl border">
            <blockquote className="text-xl italic text-center gradient-text font-medium">
              {project.description}
            </blockquote>
          </div>

          {/* Metrics */}
          <div className="grid md:grid-cols-3 gap-4">
            {project.metrics.map((metric, index) => {
              const MetricIcon = metric.icon
              return (
                <motion.div
                  key={index}
                  className="glass-effect p-6 rounded-xl text-center border"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MetricIcon className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                  <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Technical Challenges */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              기술적 해결 과정
            </h4>
            <div className="space-y-6">
              {project.techChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-yellow-500 pl-6 space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-red-600">
                      🔥 문제: {challenge.problem}
                    </h5>
                    <p className="text-muted-foreground mb-4">
                      ✅ 해결책: {challenge.solution}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto border">
                      <code>{challenge.code}</code>
                    </pre>
                    <div className="absolute top-2 right-2">
                      <Code className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Impact */}
          <div>
            <h4 className="text-2xl font-bold mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-purple-500" />
              비즈니스 인사이트
            </h4>
            <div className="grid gap-4">
              {project.businessImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 glass-effect p-4 rounded-lg border"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{impact}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xl font-bold mb-4">기술 스택</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm font-mono border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <Button variant="gradient" size="lg" className="flex-1" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub에서 코드 보기
              </a>
            </Button>
            {project.demo && (
              <Button variant="outline" size="lg" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  라이브 데모
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    )
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-purple-50/30 to-background">
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
            <Code className="w-4 h-4 mr-2 text-primary" />
            <span className="gradient-text">Featured Projects</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">실전 프로젝트</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            실제 비즈니스 문제를 데이터로 해결한 End-to-End 프로젝트들입니다.
            <br />
            모든 프로젝트는 <strong className="text-primary">실제 작동하는 코드</strong>와 함께 제공됩니다.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isHovered = hoveredProject === index
            
            return (
              <motion.div
                key={project.id}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="data-card relative overflow-hidden h-full">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.iconColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10">
                    {/* Project Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.iconColor} flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                        
                        {/* Glow Effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.iconColor} blur-lg opacity-0 group-hover:opacity-50`}
                          animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <blockquote className="text-base italic text-muted-foreground border-l-4 border-primary/20 pl-4 mb-4">
                      {project.description}
                    </blockquote>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                        주요 성과
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 3).map((highlight, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + idx * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {highlight}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon
                        return (
                          <motion.div
                            key={idx}
                            className="text-center glass-effect p-3 rounded-lg border"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MetricIcon className={`w-5 h-5 mx-auto mb-2 ${metric.color}`} />
                            <div className={`text-lg font-bold ${metric.color}`}>
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-mono border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="gradient" className="flex-1">
                            자세히 보기
                          </Button>
                        </DialogTrigger>
                        <ProjectModal project={project} />
                      </Dialog>
                      
                      <Button variant="outline" size="icon" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${project.iconColor} rounded-full`}
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${20 + (i % 4) * 20}%`,
                        }}
                        animate={isHovered ? {
                          y: [0, -15, 0],
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
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}