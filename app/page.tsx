'use client'

import { AboutSection } from '@/components/AboutSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TechStackSection } from '@/components/TechStackSection'
import { ContactSection } from '@/components/ContactSection'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="tech-stack">
          <TechStackSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}