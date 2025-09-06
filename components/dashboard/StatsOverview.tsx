'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Award, Clock, BarChart3, Database, Brain, Zap, FolderOpen, Mail } from 'lucide-react'

export function StatsOverview() {
  const stats = [
    {
      title: '프로젝트 완료',
      value: '15+',
      change: '+20%',
      trend: 'up',
      icon: Target,
      color: 'blue'
    },
    {
      title: '데이터 분석 경험',
      value: '2년+',
      change: '지속 성장',
      trend: 'up',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: '기술 스택',
      value: '10+',
      change: '확장 중',
      trend: 'up',
      icon: Award,
      color: 'purple'
    },
    {
      title: '응답 속도',
      value: '24h',
      change: '평균',
      trend: 'stable',
      icon: Clock,
      color: 'orange'
    }
  ]

  const highlights = [
    {
      title: 'VOC 분석 프로젝트',
      description: '고객 리뷰 2,185건 분석으로 숨은 인사이트 발견',
      metric: '재구매율 15% 향상',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: '자동거래 시스템',
      description: '24/7 무인 암호화폐 거래 시스템 구축',
      metric: '성공률 68.4%',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '데이터 파이프라인',
      description: '실시간 데이터 처리 및 시각화 시스템',
      metric: '처리량 99.9%',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 flex items-center ${
                    stat.trend === 'up' ? 'text-green-600' : 
                    stat.trend === 'down' ? 'text-red-600' : 'text-slate-500'
                  }`}>
                    {stat.trend === 'up' && <TrendingUp className="w-4 h-4 mr-1" />}
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => {
          const Icon = highlight.icon
          return (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 4) * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${highlight.gradient}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">{highlight.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{highlight.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                    <BarChart3 className="w-3 h-3 mr-1" />
                    {highlight.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 border border-slate-200"
      >
        <h3 className="font-semibold text-slate-900 mb-4">빠른 액세스</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="p-2 bg-blue-100 rounded-lg">
              <FolderOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">최신 프로젝트</p>
              <p className="text-xs text-slate-600">VOC 분석기</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">핵심 스킬</p>
              <p className="text-xs text-slate-600">Python, SQL</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Mail className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">연락하기</p>
              <p className="text-xs text-slate-600">24시간 내 응답</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}