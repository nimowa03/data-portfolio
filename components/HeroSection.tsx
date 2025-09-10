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
      className="relative min-h-screen flex items-center justify-center bg-white"
    >
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:pl-12">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-blue-700 border border-blue-200"
            >
              <span>데이터 분석가 지망생</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
            >
              안녕하세요, <span className="text-blue-600">이창수</span>입니다
              <br />
              <span className="text-gray-700 text-2xl sm:text-3xl lg:text-4xl">
                데이터에서 인사이트를, 인사이트에서 변화를
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            >
              작은 이커머스를 운영하며 <strong className="text-blue-600">고객 리뷰의 소중함</strong>을 배웠습니다.
              <br />
              그 경험으로 <strong className="text-blue-600">LLM과 RAG</strong>를 활용한 감성분석과 자동화 시스템을 만들어 보았습니다.
              <br />
              데이터 분석은 제게 <strong className="text-blue-600">문제를 해결하는 언어</strong>입니다.
              <br />
              이제 그 언어로 공공의 가치를 만들어가고 싶습니다.
            </motion.p>

            {/* Key Skills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {['Python', 'SQL', '머신러닝', 'LLM/RAG', '감성분석', 'Streamlit'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white text-blue-700 rounded-lg border border-blue-200 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button 
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium text-sm shadow-md hover:shadow-lg"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ✨ 프로젝트 보기
              </button>
              
              <a
                href="https://github.com/nimowa03/data-portfolio/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md text-center"
              >
                📋 GitHub Portfolio
              </a>

              <a
                href="https://github.com/nimowa03/data-portfolio/blob/main/resume.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white border border-emerald-200 text-emerald-700 rounded-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md text-center"
              >
                📄 Resume & CV
              </a>
              
              <button 
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💬 Contact
              </button>
            </motion.div>
          </div>

          {/* Right Content - Simple Profile */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">이창수</span>
                </div>
                <p className="text-blue-700 font-medium">데이터 분석가 지망생</p>
                <p className="text-blue-600 text-sm mt-2">한국방송통신대 AI학과</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-400">
          <span className="text-sm">아래로 스크롤</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  )
}