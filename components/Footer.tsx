'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Github, Linkedin } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:nimowa03@gmail.com',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/nimowa03',
      color: 'hover:text-gray-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/changsoo-lee-2870b3383',
      color: 'hover:text-blue-700'
    }
  ]

  return (
    <footer className="py-12 bg-slate-50 border-t border-blue-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-4 h-4" />
            맨 위로
          </motion.button>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`text-gray-500 ${link.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              )
            })}
          </div>

          {/* Footer Text */}
          <motion.div 
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="flex items-center justify-center gap-1 text-sm">
              © {currentYear} 이창수 • 데이터 분석 인턴십 지원자 • Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}