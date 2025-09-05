'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('idle')
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: '이메일',
      value: 'contact@example.com',
      description: '24시간 내 답변',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      label: '전화',
      value: '+82-10-0000-0000',
      description: '평일 9:00-18:00',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: MessageCircle,
      label: '카카오톡',
      value: '@dataanalyst',
      description: '실시간 상담',
      color: 'from-yellow-400 to-yellow-600'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
      description: '프로젝트 코드',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      description: '경력 정보',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center px-4 py-2 glass-effect rounded-full text-sm font-medium border mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4 mr-2 text-primary" />
              <span className="gradient-text">연락하기</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              함께 데이터의 가치를
              <br />
              <span className="gradient-text">발견해보세요</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              새로운 프로젝트나 협업 기회에 대해 언제든 연락주세요.
              <br />
              데이터 분석을 통해 비즈니스 가치를 창출하는 방법을 함께 논의해보겠습니다.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect p-8 rounded-2xl border hover:shadow-2xl transition-all duration-500">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold gradient-text mb-2">메시지 보내기</h3>
                  <p className="text-muted-foreground">궁금한 점이 있으시면 언제든 연락주세요</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-medium">이름</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="홍길동"
                        className="glass-effect border-0 focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label className="text-sm font-medium">이메일</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="contact@example.com"
                        className="glass-effect border-0 focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium">제목</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="프로젝트 협업 문의"
                      className="glass-effect border-0 focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium">메시지</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="안녕하세요, 데이터 분석 프로젝트에 대해 문의드리고 싶습니다..."
                      rows={6}
                      className="glass-effect border-0 focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    />
                  </motion.div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="xl"
                    className="w-full group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        전송 중...
                      </motion.div>
                    ) : submitStatus === 'success' ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-white"
                      >
                        ✓ 전송 완료!
                      </motion.div>
                    ) : (
                      <>
                        메시지 전송
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    
                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full scale-0"
                      whileTap={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-6">연락 방법</h3>
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    className="group glass-effect p-6 rounded-xl border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`p-3 rounded-lg bg-gradient-to-r ${method.color} text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <method.icon className="w-6 h-6" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{method.label}</h4>
                        <p className="text-lg font-mono text-primary mb-1">{method.value}</p>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Location */}
              <motion.div
                className="glass-effect p-6 rounded-xl border"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-600 text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">위치</h4>
                    <p className="text-muted-foreground">서울특별시</p>
                    <p className="text-sm text-muted-foreground mt-1">원격 근무 가능</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group glass-effect p-4 rounded-xl border transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <social.icon className="w-6 h-6" />
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.description}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="glass-effect p-6 rounded-xl border-l-4 border-l-emerald-500 bg-emerald-50 dark:bg-emerald-950/20"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-3 h-3 bg-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div>
                    <h4 className="font-semibold text-emerald-700 dark:text-emerald-300">현재 상태</h4>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      새로운 프로젝트 및 협업 기회에 열려있습니다
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}