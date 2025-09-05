'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Database, TrendingUp, Brain, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.5, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium border"
            >
              <Brain className="w-4 h-4 mr-2 text-primary" />
              <span className="gradient-text">데이터 분석가 포트폴리오</span>
              <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              데이터로 비즈니스를
              <br />
              <span className="gradient-text relative">
                구축하고 성장시키는
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-xl -z-10"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <br />
              <motion.span
                className="text-foreground/90"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                실전 분석가
              </motion.span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              창업가의 시선으로 문제를 발견하고, 데이터로 해결책을 만드는 분석가입니다.
              <br />
              실제 이커머스 운영 경험을 바탕으로 <strong className="text-primary">고객의 언어를 데이터로 번역</strong>하여 
              비즈니스 가치를 창출합니다.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div 
                className="flex items-center px-4 py-3 glass-effect rounded-lg border hover:border-primary/50 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <Database className="w-5 h-5 mr-3 text-emerald-500 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-lg gradient-text">2,185건</span>
                  <p className="text-xs text-muted-foreground">리뷰 분석</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center px-4 py-3 glass-effect rounded-lg border hover:border-primary/50 transition-colors group cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <TrendingUp className="w-5 h-5 mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="font-bold text-lg gradient-text">68.4%</span>
                  <p className="text-xs text-muted-foreground">거래 승률</p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                variant="gradient" 
                size="xl"
                className="group"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                프로젝트 보기
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="glass-effect hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                연락하기
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Interactive Data Visualization */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <InteractiveDataVisualization />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm">Scroll down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-current rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function InteractiveDataVisualization() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  
  const data = [
    { label: '맛', value: 85, color: 'from-red-400 to-red-600' },
    { label: '양', value: 72, color: 'from-orange-400 to-orange-600' },
    { label: '가격', value: 68, color: 'from-yellow-400 to-yellow-600' },
    { label: '품질', value: 91, color: 'from-green-400 to-green-600' },
    { label: '포장', value: 76, color: 'from-blue-400 to-blue-600' },
    { label: '배송', value: 88, color: 'from-indigo-400 to-indigo-600' },
    { label: '재구매', value: 94, color: 'from-purple-400 to-purple-600' },
  ]

  return (
    <motion.div 
      className="relative glass-effect p-8 rounded-2xl border hover:shadow-2xl transition-all duration-500"
      whileHover={{ scale: 1.02, rotateY: 5 }}
      style={{ perspective: '1000px' }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-xl font-bold gradient-text mb-2">VOC 분석 결과</h3>
          <p className="text-sm text-muted-foreground">실시간 고객 만족도 지표</p>
        </div>
        
        {/* Chart */}
        <div className="grid grid-cols-7 gap-3 h-40 items-end mb-6">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative group cursor-pointer"
              onHoverStart={() => setHoveredBar(index)}
              onHoverEnd={() => setHoveredBar(null)}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-full bg-gradient-to-t ${item.color} rounded-t-lg relative overflow-hidden`}
                style={{ height: `${item.value}%` }}
                initial={{ height: 0 }}
                animate={{ height: `${item.value}%` }}
                transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                />
              </motion.div>
              
              {/* Value Tooltip */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ 
                  opacity: hoveredBar === index ? 1 : 0,
                  y: hoveredBar === index ? -8 : 0 
                }}
              >
                {item.value}%
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Labels */}
        <div className="grid grid-cols-7 gap-3 text-xs text-muted-foreground text-center">
          {data.map((item) => (
            <span key={item.label}>{item.label}</span>
          ))}
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <motion.div 
            className="text-center p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-2xl font-bold text-emerald-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              80%
            </motion.div>
            <div className="text-xs text-muted-foreground">시간 단축</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="text-2xl font-bold text-blue-600"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              7개
            </motion.div>
            <div className="text-xs text-muted-foreground">분석 카테고리</div>
          </motion.div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}