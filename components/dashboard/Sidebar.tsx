'use client'

import { motion } from 'framer-motion'
import { User, BarChart3, FolderOpen, Award, Mail, Github, Linkedin } from 'lucide-react'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: '개요', icon: BarChart3 },
    { id: 'projects', label: '프로젝트', icon: FolderOpen },
    { id: 'skills', label: '기술 스택', icon: Award },
    { id: 'contact', label: '연락처', icon: Mail },
  ]

  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900">이창수</h2>
            <p className="text-sm text-slate-600">데이터 분석가</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>포트폴리오 활성화</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6">
        <div className="px-6 mb-4">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">대시보드</h3>
        </div>
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-slate-50 transition-colors relative ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-slate-900'
                }`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </nav>

      {/* Social Links */}
      <div className="p-6 border-t border-slate-200">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/nimowa03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nimowa03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:nimowa03@gmail.com"
            className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}