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
      description: '업무 문의 및 포지션 상담'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'nimowa03',
      href: 'https://github.com/nimowa03',
      description: '프로젝트 코드 및 포트폴리오'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'changsoo-lee',
      href: 'https://www.linkedin.com/in/changsoo-lee-2870b3383',
      description: '커리어 및 네트워킹'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-700 mb-4">
              연락하기
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              함께 일하고 싶습니다
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              LLM 서비스 기획·개발 인턴십 기회에 대해 언제든 연락해주세요
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-blue-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                메시지 보내기
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="contact@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    메시지
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="안녕하세요, LLM 서비스 기획·개발 인턴십에 대해 문의드리고 싶습니다..."
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                    메시지가 성공적으로 전송되었습니다!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    메시지 전송 중 오류가 발생했습니다. 다시 시도해주세요.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div className="bg-white rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  연락처
                </h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <motion.a
                        key={method.title}
                        href={method.href}
                        target={method.title !== 'Email' ? '_blank' : undefined}
                        rel={method.title !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-blue-50 border border-transparent hover:border-blue-200"
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">
                            {method.title}
                          </div>
                          <div className="text-slate-600 text-sm">
                            {method.value}
                          </div>
                          <div className="text-slate-500 text-xs mt-1">
                            {method.description}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Profile Summary */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  인턴십 지원 정보
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>서울, 대한민국</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>LLM 서비스 기획·개발 인턴십 지원 중</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>한국방송통신대 AI학과 재학 + 이커머스 운영 경험</span>
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