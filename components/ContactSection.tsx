'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, User, MessageCircle, Send } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nimowa03@gmail.com',
      href: 'mailto:nimowa03@gmail.com',
      description: '업무 문의 및 포지션 상담',
      color: 'red'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'nimowa03',
      href: 'https://github.com/nimowa03',
      description: '프로젝트 코드 및 포트폴리오',
      color: 'gray'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'changsoo-lee',
      href: 'https://www.linkedin.com/in/changsoo-lee-2870b3383',
      description: '커리어 및 네트워킹',
      color: 'blue'
    }
  ]

  const highlights = [
    {
      icon: User,
      title: '데이터 분석가',
      description: '커머스 × 핀테크 전문'
    },
    {
      icon: MapPin,
      title: '위치',
      description: '서울, 대한민국'
    },
    {
      icon: MessageCircle,
      title: '상태',
      description: '채용 기회 열려있음'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20 hover:bg-red-200 dark:hover:bg-red-900/30',
      blue: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20 hover:bg-blue-200 dark:hover:bg-blue-900/30',
      gray: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
    }
    return colors[color as keyof typeof colors] || colors.gray
  }

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900">
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
              연락하기
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gradient mb-4">
              함께 성장할 기회를 찾고 있습니다
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              고객의 목소리를 데이터로 번역하여, 함께 성장할 준비가 되어있습니다
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="card-modern">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  메시지 보내기
                </h3>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        이름
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                        placeholder="contact@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      메시지
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none"
                      placeholder="안녕하세요, 데이터 분석 프로젝트에 대해 문의드리고 싶습니다..."
                    />
                  </div>
                  
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm">
                      메시지가 성공적으로 전송되었습니다!
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm">
                      메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white dark:border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        메시지 전송
                      </>
                    )}
                  </button>
                </form>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                    직접 연락
                  </h4>
                
                  {/* Contact Methods */}
                  <div className="space-y-3">
                    {contactMethods.map((method) => {
                      const Icon = method.icon
                      return (
                        <motion.a
                          key={method.title}
                          href={method.href}
                          target={method.title !== 'Email' ? '_blank' : undefined}
                          rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                          whileHover={{ x: 2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`p-2 rounded-lg ${getColorClasses(method.color)}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                              {method.title}
                            </div>
                            <div className="text-slate-600 dark:text-slate-400 text-sm">
                              {method.value}
                            </div>
                          </div>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Profile Highlights */}
              <div className="card-modern">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  프로필 정보
                </h3>
                <div className="space-y-3">
                  {highlights.map((highlight) => {
                    const Icon = highlight.icon
                    return (
                      <div key={highlight.title} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                        <div>
                          <div className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                            {highlight.title}
                          </div>
                          <div className="text-slate-600 dark:text-slate-400 text-sm">
                            {highlight.description}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Interest Areas */}
              <div className="card-modern">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  관심 분야
                </h3>
                <div className="space-y-2">
                  {[
                    '이커머스 데이터 분석',
                    '핀테크 고객 인사이트',
                    '자동화 시스템 구축',
                    '비즈니스 성장 전략'
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="card-modern bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                  포트폴리오 한눈에
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      2
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      완료된 프로젝트
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      2,185
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      분석된 리뷰
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      68.4%
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      거래 승률
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                      80%
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      시간 단축
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}