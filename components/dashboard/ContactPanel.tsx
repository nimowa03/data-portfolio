'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Calendar,
  Phone,
  Send,
  User,
  Briefcase,
  Heart
} from 'lucide-react'

export function ContactPanel() {
  const contactMethods = [
    {
      icon: Mail,
      label: '이메일',
      value: 'nimowa03@gmail.com',
      description: '24시간 내 응답',
      href: 'mailto:nimowa03@gmail.com',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@nimowa03',
      description: '모든 프로젝트 코드',
      href: 'https://github.com/nimowa03',
      color: 'gray'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '이창수',
      description: '전문 네트워크',
      href: 'https://www.linkedin.com/in/nimowa03',
      color: 'blue'
    },
    {
      icon: Phone,
      label: '전화',
      value: '요청 시 제공',
      description: '긴급 연락용',
      href: '#',
      color: 'green'
    }
  ]

  const availability = [
    {
      day: '월-금',
      time: '09:00 - 18:00',
      status: 'available',
      note: '업무 시간'
    },
    {
      day: '토-일',
      time: '14:00 - 17:00',
      status: 'limited',
      note: '제한적 가능'
    },
    {
      day: '응급',
      time: '언제든지',
      status: 'emergency',
      note: '이메일로 연락'
    }
  ]

  const interests = [
    {
      icon: Briefcase,
      title: '관심 분야',
      items: ['커머스 데이터 분석', 'FinTech 솔루션', '자동화 시스템', 'AI/ML 응용']
    },
    {
      icon: Heart,
      title: '협업 스타일',
      items: ['데이터 기반 의사결정', '명확한 커뮤니케이션', '지속적 학습', '결과 중심']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">연락처 & 협업</h2>
          <p className="text-slate-600 mt-1">함께 성장할 기회를 만들어보세요</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>연락 가능</span>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all hover:scale-105"
            >
              <div className={`p-3 rounded-lg bg-${method.color}-100 mb-4 inline-block`}>
                <Icon className={`w-6 h-6 text-${method.color}-600`} />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{method.label}</h3>
              <p className="text-slate-600 text-sm mb-2">{method.value}</p>
              <p className="text-xs text-slate-500">{method.description}</p>
            </motion.a>
          )
        })}
      </div>

      {/* Quick Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
      >
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-blue-600" />
          빠른 연락
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg">
            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">이메일 문의</p>
            <p className="text-xs text-slate-600">24시간 내 응답 보장</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">화상 미팅</p>
            <p className="text-xs text-slate-600">사전 예약 후 진행</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <Send className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-900">프로젝트 제안</p>
            <p className="text-xs text-slate-600">상세한 검토 후 답변</p>
          </div>
        </div>
      </motion.div>

      {/* Availability */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
      >
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-slate-600" />
          연락 가능 시간
        </h3>
        <div className="space-y-3">
          {availability.map((schedule, index) => (
            <div key={schedule.day} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  schedule.status === 'available' ? 'bg-green-500' :
                  schedule.status === 'limited' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div>
                  <p className="text-sm font-medium text-slate-900">{schedule.day}</p>
                  <p className="text-xs text-slate-600">{schedule.note}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-700">{schedule.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Interests & Collaboration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {interests.map((interest, index) => {
          const Icon = interest.icon
          return (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1) }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
            >
              <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                <Icon className="w-5 h-5 mr-2 text-slate-600" />
                {interest.title}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {interest.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"
      >
        <User className="w-12 h-12 mx-auto mb-4 opacity-80" />
        <h3 className="text-xl font-bold mb-2">함께 성장할 준비가 되어있습니다</h3>
        <p className="text-blue-100 mb-6">
          데이터로 비즈니스 가치를 창출하고, 함께 문제를 해결해나갈 팀을 찾고 있습니다
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="mailto:nimowa03@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            이메일 보내기
          </a>
          <a
            href="https://github.com/nimowa03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub 보기
          </a>
        </div>
      </motion.div>
    </div>
  )
}