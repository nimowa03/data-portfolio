'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { StatsOverview } from '@/components/dashboard/StatsOverview'
import { ProjectGrid } from '@/components/dashboard/ProjectGrid'
import { SkillsChart } from '@/components/dashboard/SkillsChart'
import { ContactPanel } from '@/components/dashboard/ContactPanel'

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview')

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <StatsOverview />
      case 'projects':
        return <ProjectGrid />
      case 'skills':
        return <SkillsChart />
      case 'contact':
        return <ContactPanel />
      default:
        return <StatsOverview />
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Dashboard Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">데이터 분석가 대시보드</h1>
              <p className="text-slate-600">실시간 포트폴리오 및 성과 지표</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600">실시간 데이터</span>
              </div>
              <div className="text-sm text-slate-500">
                최종 업데이트: {new Date().toLocaleDateString('ko-KR')}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-slate-50">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6"
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  )
}