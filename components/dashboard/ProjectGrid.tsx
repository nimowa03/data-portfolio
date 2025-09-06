'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, TrendingUp, Users, Database, Bot, BarChart3, Clock } from 'lucide-react'
import Image from 'next/image'

export function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: 'VOC Analyzer',
      category: '커머스 분석',
      description: '고객 리뷰 2,185건을 분석하여 숨은 인사이트를 발견하고 비즈니스 가치를 창출',
      image: '/docs/voc_overview.png',
      tags: ['Python', 'OpenAI', 'Streamlit', 'NLP'],
      metrics: [
        { label: '분석 리뷰', value: '2,185건', icon: Users },
        { label: '인사이트', value: '15개', icon: TrendingUp },
        { label: '정확도', value: '92%', icon: BarChart3 }
      ],
      highlights: [
        '카테고리별 감성분석으로 고객 만족도 정량화',
        '핵심 구매요인 발견 및 상관관계 도출',
        '특정 고객 그룹의 핵심 니즈 파악'
      ],
      status: 'completed',
      demoUrl: '#',
      githubUrl: 'https://github.com/nimowa03'
    },
    {
      id: 2,
      title: 'CoinTradeSystem',
      category: '핀테크 자동화',
      description: '24/7 무인 암호화폐 자동거래 시스템으로 감정을 배제한 데이터 기반 투자',
      image: '/docs/coin_architecture.png',
      tags: ['Python', 'PostgreSQL', 'Docker', 'API'],
      metrics: [
        { label: '거래 성공률', value: '68.4%', icon: TrendingUp },
        { label: '운영 시간', value: '24/7', icon: Clock },
        { label: '안정성', value: '99.9%', icon: Database }
      ],
      highlights: [
        '3단계 리스크 관리 시스템으로 안정성 확보',
        'UUID 기반 완전한 거래 추적 및 분석',
        'API 제약 및 시스템 장애 대응 자동화'
      ],
      status: 'completed',
      demoUrl: '#',
      githubUrl: 'https://github.com/nimowa03'
    },
    {
      id: 3,
      title: 'AI 데이터 파이프라인',
      category: '데이터 엔지니어링',
      description: '실시간 데이터 수집, 처리, 분석을 위한 확장 가능한 파이프라인 구축',
      image: '/docs/coin_market_analysis.png',
      tags: ['Python', 'Docker', 'PostgreSQL', 'AI'],
      metrics: [
        { label: '처리량', value: '99.9%', icon: Database },
        { label: 'AI 정확도', value: '85%', icon: Bot },
        { label: '응답시간', value: '<100ms', icon: Clock }
      ],
      highlights: [
        '실시간 대용량 데이터 처리 최적화',
        'AI 모델 통합 및 자동 학습 파이프라인',
        '확장 가능한 마이크로서비스 아키텍처'
      ],
      status: 'in-progress',
      demoUrl: '#',
      githubUrl: 'https://github.com/nimowa03'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">프로젝트 포트폴리오</h2>
          <p className="text-slate-600 mt-1">실제 비즈니스 문제를 해결한 데이터 분석 프로젝트</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>3개 프로젝트 활성화</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-3 left-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status === 'completed' ? '완료' :
                   project.status === 'in-progress' ? '진행중' : '계획중'}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/20 rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.demoUrl}
                  className="p-2 bg-black/20 rounded-lg text-white hover:bg-black/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.category}</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {project.metrics.map((metric, idx) => {
                  const Icon = metric.icon
                  return (
                    <div key={idx} className="text-center p-2 bg-slate-50 rounded-lg">
                      <Icon className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs font-medium text-slate-900">{metric.value}</p>
                      <p className="text-xs text-slate-500">{metric.label}</p>
                    </div>
                  )
                })}
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-700 mb-2">주요 성과</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
      >
        <h3 className="font-semibold text-slate-900 mb-4">프로젝트 요약</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
            <div className="text-sm text-slate-600">완료된 프로젝트</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
            <div className="text-sm text-slate-600">평균 성공률</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">10+</div>
            <div className="text-sm text-slate-600">기술 스택</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-sm text-slate-600">시스템 운영</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}