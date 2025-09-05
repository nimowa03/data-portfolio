'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Code, Database, BarChart3, Cpu, GraduationCap, Briefcase, MapPin, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const skillCategories = [
    {
      title: 'Core Analysis',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      glowColor: 'shadow-blue-500/25',
      skills: [
        { name: 'Python', level: 90, description: 'Pandas, NumPy, 데이터 처리 및 분석', icon: '🐍' },
        { name: 'SQL', level: 85, description: 'PostgreSQL, MariaDB, 복잡한 쿼리 작성', icon: '🗄️' },
        { name: 'Statistics', level: 80, description: '가설검정, EDA, 인과관계 분석', icon: '📊' }
      ]
    },
    {
      title: 'AI/ML Applications',
      icon: Cpu,
      color: 'from-purple-500 to-purple-600',
      glowColor: 'shadow-purple-500/25',
      skills: [
        { name: 'OpenAI API', level: 85, description: 'GPT 모델 활용, 프롬프트 엔지니어링', icon: '🤖' },
        { name: 'NLP/Text Mining', level: 75, description: '감성분석, 키워드 추출, 텍스트 분류', icon: '📝' },
        { name: 'scikit-learn', level: 70, description: '머신러닝 모델링, 분류 및 회귀', icon: '🧠' }
      ]
    },
    {
      title: 'Visualization & Dashboard',
      icon: BarChart3,
      color: 'from-emerald-500 to-emerald-600',
      glowColor: 'shadow-emerald-500/25',
      skills: [
        { name: 'Streamlit', level: 90, description: '인터랙티브 대시보드, 실시간 분석 툴', icon: '📈' },
        { name: 'Plotly', level: 80, description: '동적 차트, 데이터 시각화', icon: '📉' },
        { name: 'Tableau', level: 60, description: '비즈니스 인텔리전스, 리포팅', icon: '📋' }
      ]
    },
    {
      title: 'Infrastructure & Tools',
      icon: Database,
      color: 'from-orange-500 to-orange-600',
      glowColor: 'shadow-orange-500/25',
      skills: [
        { name: 'Docker', level: 80, description: '컨테이너화, 환경 격리, 배포 자동화', icon: '🐳' },
        { name: 'Git/GitHub', level: 85, description: '버전 관리, 협업, CI/CD', icon: '📚' },
        { name: 'Cloud/API', level: 75, description: '작업 스케줄링, 자동화 시스템', icon: '☁️' }
      ]
    }
  ]

  const experienceHighlights = [
    {
      title: '이커머스 창업 및 운영',
      period: '2023.01 ~ 현재',
      icon: Briefcase,
      color: 'from-green-400 to-emerald-600',
      description: '1인 기업으로 전체 비즈니스 사이클 경험',
      achievements: [
        '고객 관리, 마케팅, 재고, 손익 분석 전 과정 담당',
        '데이터 기반 의사결정의 중요성을 실전에서 체감',
        'VOC 분석의 필요성을 인식하고 직접 솔루션 개발'
      ],
      stats: { label: '운영 기간', value: '2년+' }
    },
    {
      title: '한국방송통신대학교 AI학과',
      period: '2025 ~ 현재 (재학)',
      icon: GraduationCap,
      color: 'from-blue-400 to-indigo-600',
      description: '체계적인 AI 및 데이터 과학 이론 학습',
      achievements: [
        '통계학, 머신러닝, 딥러닝 이론 체계화',
        '수학적 기초 위에 실무 경험 융합',
        '대학원 진학을 통한 지속적 성장 계획'
      ],
      stats: { label: '목표', value: '대학원' }
    }
  ]

  // Animated Progress Bar Component
  const AnimatedProgressBar = ({ skill, index, categoryIndex }: { 
    skill: any, 
    index: number, 
    categoryIndex: number 
  }) => {
    const [currentLevel, setCurrentLevel] = useState(0)
    
    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          const increment = skill.level / 50
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= skill.level) {
              setCurrentLevel(skill.level)
              clearInterval(interval)
            } else {
              setCurrentLevel(Math.floor(current))
            }
          }, 20)
          return () => clearInterval(interval)
        }, (categoryIndex * 200) + (index * 100))
        
        return () => clearTimeout(timer)
      }
    }, [isInView, skill.level, index, categoryIndex])

    return (
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: categoryIndex * 0.1 + index * 0.1,
              duration: 0.5
            }
          }
        }}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-medium text-sm">{skill.name}</span>
          </div>
          <motion.span 
            className="text-xs text-muted-foreground font-mono"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {currentLevel}%
          </motion.span>
        </div>
        
        <div className="relative">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-primary-foreground rounded-full relative overflow-hidden"
              style={{ width: `${currentLevel}%` }}
              transition={{ duration: 0.5 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: categoryIndex * 0.2 + index * 0.2 
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed">
          {skill.description}
        </p>
      </motion.div>
    )
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-background via-indigo-50/30 to-background">
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
            <Zap className="w-4 h-4 mr-2 text-primary" />
            <span className="gradient-text">Skills & Experience</span>
            <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">기술 스택</span> & 경험
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            실전 프로젝트를 통해 검증된 기술 스택과 창업 경험을 바탕으로 한 비즈니스 이해도
          </p>
        </motion.div>

        {/* Skills Grid with Animated Progress Bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            const isHovered = hoveredSkill === categoryIndex
            
            return (
              <motion.div
                key={category.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.8 }}
                onHoverStart={() => setHoveredSkill(categoryIndex)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <Card className={`data-card relative overflow-hidden transition-all duration-500 ${
                  isHovered ? `shadow-2xl ${category.glowColor}` : ''
                }`}>
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative z-10 pb-4">
                    {/* Category Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                      
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-lg bg-gradient-to-br ${category.color} blur-lg opacity-0 group-hover:opacity-50`}
                        animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <AnimatedProgressBar
                        key={skill.name}
                        skill={skill}
                        index={skillIndex}
                        categoryIndex={categoryIndex}
                      />
                    ))}
                  </CardContent>

                  {/* Particle Effects */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                        style={{
                          left: `${15 + i * 10}%`,
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

        {/* Experience Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">주요 경험</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {experienceHighlights.map((experience, index) => {
              const Icon = experience.icon
              
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                >
                  <Card className="data-card relative overflow-hidden group hover:shadow-2xl">
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${experience.color} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {/* Stats Badge */}
                        <motion.div
                          className="text-right glass-effect px-3 py-2 rounded-lg border"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`text-lg font-bold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                            {experience.stats.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{experience.stats.label}</div>
                        </motion.div>
                      </div>
                      
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {experience.title}
                        </CardTitle>
                        <p className="text-sm text-primary font-medium">{experience.period}</p>
                        <p className="text-muted-foreground">{experience.description}</p>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <ul className="space-y-3">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start text-sm leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1.0 + index * 0.2 + achievementIndex * 0.1 }}
                          >
                            <motion.div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${experience.color} mt-2 mr-3 flex-shrink-0`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>

                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Growth Commitment */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Card className="glass-effect border-2 border-primary/20 relative overflow-hidden">
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-2 rounded-lg"
              animate={{
                borderColor: [
                  "rgba(59, 130, 246, 0.2)", 
                  "rgba(147, 51, 234, 0.4)", 
                  "rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <CardHeader className="text-center relative z-10">
              <CardTitle className="text-3xl mb-4 flex items-center justify-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="gradient-text">지속적 성장에 대한 약속</span>
                <TrendingUp className="w-8 h-8 text-primary" />
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  className="space-y-3"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    6개월
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">
                    비즈니스 도메인 이해와<br/>A/B 테스트 고급 통계 학습
                  </p>
                </motion.div>
                
                <motion.div
                  className="space-y-3"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    1년+
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">
                    고객 행동 예측 모델링과<br/>새로운 데이터 소스 발굴
                  </p>
                </motion.div>
                
                <motion.div
                  className="space-y-3"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="text-4xl font-bold gradient-text"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    궁극적
                  </motion.div>
                  <p className="text-muted-foreground leading-relaxed">
                    데이터 기반 문화 전파하는<br/>제네럴리스트로 성장
                  </p>
                </motion.div>
              </div>
            </CardContent>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}