'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  Code, 
  Brain, 
  BarChart3, 
  Cloud, 
  Wrench, 
  TrendingUp,
  Star,
  Award,
  CheckCircle
} from 'lucide-react'

export function SkillsChart() {
  const skillCategories = [
    {
      category: '데이터 분석',
      icon: BarChart3,
      color: 'blue',
      skills: [
        { name: 'Python', level: 90, experience: '2년+' },
        { name: 'SQL', level: 85, experience: '2년+' },
        { name: 'Pandas', level: 88, experience: '2년' },
        { name: 'NumPy', level: 82, experience: '2년' },
        { name: 'Tableau', level: 75, experience: '1년+' }
      ]
    },
    {
      category: 'AI/ML',
      icon: Brain,
      color: 'purple',
      skills: [
        { name: 'OpenAI API', level: 85, experience: '1년+' },
        { name: 'LangChain', level: 80, experience: '1년' },
        { name: 'NLP', level: 75, experience: '1년' },
        { name: 'Scikit-learn', level: 70, experience: '1년' }
      ]
    },
    {
      category: '데이터베이스',
      icon: Database,
      color: 'green',
      skills: [
        { name: 'PostgreSQL', level: 80, experience: '2년' },
        { name: 'MySQL', level: 75, experience: '1년+' },
        { name: 'Redis', level: 65, experience: '6개월' },
        { name: '데이터 모델링', level: 78, experience: '1년+' }
      ]
    },
    {
      category: '개발 도구',
      icon: Code,
      color: 'orange',
      skills: [
        { name: 'Git', level: 85, experience: '2년+' },
        { name: 'Docker', level: 75, experience: '1년' },
        { name: 'Streamlit', level: 88, experience: '1년+' },
        { name: 'FastAPI', level: 70, experience: '6개월' }
      ]
    }
  ]

  const certifications = [
    {
      name: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: '2023',
      status: 'completed'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon',
      date: '2024 예정',
      status: 'planned'
    }
  ]

  const projects = [
    {
      name: 'VOC 분석 시스템',
      technologies: ['Python', 'OpenAI', 'Streamlit', 'PostgreSQL'],
      impact: '고객 만족도 15% 향상'
    },
    {
      name: '자동거래 시스템',
      technologies: ['Python', 'Docker', 'PostgreSQL', 'API'],
      impact: '거래 성공률 68.4%'
    },
    {
      name: '데이터 파이프라인',
      technologies: ['Python', 'Docker', 'AI', 'Database'],
      impact: '처리량 99.9% 달성'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">기술 스택 & 역량</h2>
          <p className="text-slate-600 mt-1">데이터 분석 전문 기술과 실무 경험</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-600">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>10+ 기술 스택</span>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}-100`}>
                  <Icon className={`w-5 h-5 text-${category.color}-600`} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{category.category}</h3>
                  <p className="text-sm text-slate-500">{category.skills.length}개 기술</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.experience}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-${category.color}-500 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.8 }}
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <span className="text-xs font-medium text-slate-600">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Project Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
      >
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
          <Wrench className="w-5 h-5 mr-2 text-slate-600" />
          프로젝트별 기술 활용
        </h3>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.name} className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-slate-900">{project.name}</h4>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {project.impact}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-slate-100 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications & Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
        >
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2 text-slate-600" />
            자격증 & 인증
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={cert.name} className="flex items-center space-x-3">
                <div className={`p-1 rounded-full ${
                  cert.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <CheckCircle className={`w-4 h-4 ${
                    cert.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100"
        >
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-blue-600" />
            학습 현황
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">현재 학습 중</span>
              <span className="text-sm font-medium text-blue-600">AWS, 머신러닝</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">올해 목표</span>
              <span className="text-sm font-medium text-green-600">3개 자격증</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">학습 시간/주</span>
              <span className="text-sm font-medium text-purple-600">15시간</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-xs text-slate-600 italic">
              "끊임없는 학습을 통해 데이터 분석 전문성을 높여가고 있습니다"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}