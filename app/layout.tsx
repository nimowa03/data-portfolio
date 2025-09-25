import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '이창수 - LLM 서비스 기획·개발자 포트폴리오',
  description: 'LLM 기술로 비즈니스 아이디어를 실제 가치로 만드는 서비스 기획·개발자. OpenAI API, Gemini 2.5 Flash + A2A Protocol 경험.',
  keywords: [
    'LLM 서비스 기획',
    'PoC 개발',
    'AI 서비스 기획자',
    'OpenAI API',
    'Gemini 2.5 Flash',
    'A2A Protocol',
    'Chain-of-Thought',
    'Prompt Engineering',
    'Vibe Coding',
    '포트폴리오'
  ],
  authors: [{ name: '이창수' }],
  creator: '이창수',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://data-portfolio-rkko.vercel.app/',
    title: '이창수 - LLM 서비스 기획·개발자 포트폴리오',
    description: 'LLM 기술로 비즈니스 아이디어를 실제 가치로 만드는 서비스 기획·개발자',
    siteName: '이창수 포트폴리오',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '이창수 LLM 서비스 기획·개발자 포트폴리오',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '이창수 - LLM 서비스 기획·개발자 포트폴리오',
    description: 'LLM 기술로 비즈니스 아이디어를 실제 가치로 만드는 서비스 기획·개발자',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <div className="relative min-h-screen">
          {/* Background Pattern */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}