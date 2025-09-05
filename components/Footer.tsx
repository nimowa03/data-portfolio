'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Github, Linkedin, Database, TrendingUp, Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '소개', href: '#about' },
    { name: '프로젝트', href: '#projects' },
    { name: '스킬', href: '#skills' },
    { name: '연락', href: '#contact' }
  ]

  const services = [
    { name: 'VOC 분석', icon: Database },
    { name: '데이터 시각화', icon: TrendingUp },
    { name: '머신러닝', icon: Brain }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
      color: 'hover:text-primary'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">데이터 분석가 포트폴리오</h3>
                  <p className="text-sm text-muted-foreground">Data-Driven Business Solutions</p>
                </div>
              </motion.div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                데이터로 비즈니스 가치를 창출하는 분석가입니다. 
                실전 경험을 바탕으로 고객의 니즈를 데이터로 번역하여 
                실질적인 인사이트를 제공합니다.
              </p>

              {/* Key Achievements */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  className="flex items-center px-3 py-2 glass-effect rounded-lg border text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Database className="w-4 h-4 mr-2 text-emerald-500" />
                  <span className="font-semibold gradient-text">2,185건</span>
                  <span className="text-muted-foreground ml-1">리뷰 분석</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center px-3 py-2 glass-effect rounded-lg border text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <TrendingUp className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="font-semibold gradient-text">68.4%</span>
                  <span className="text-muted-foreground ml-1">거래 승률</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 glass-effect rounded-xl border transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold">빠른 링크</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                      onClick={(e) => {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <span className="w-2 h-2 bg-primary/60 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold">전문 분야</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    className="flex items-center group cursor-pointer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 glass-effect rounded-lg border mr-3 group-hover:border-primary/50 transition-colors">
                      <service.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {service.name}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                className="pt-4"
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect hover:bg-primary/5 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  프로젝트 문의하기
                  <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>© {currentYear} 데이터 분석가 포트폴리오. Made with</span>
              <motion.div
                className="mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and Next.js</span>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Built for FinInsight Internship</span>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group glass-effect hover:bg-primary/5"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="sr-only">맨 위로</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </footer>
  )
}