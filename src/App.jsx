import { useEffect, useState } from 'react'
import { getProfile } from './services/profileService'
import { getSkills } from './services/skillService'
// import { getExperiences } from './services/experienceService'
import { getProjects } from './services/projectService'
import { getSocialLinks } from './services/socialService'
import { getUi } from './services/i18nService'
import { getEducation } from './services/educationService'
import { getCourses } from './services/courseService'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
// import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState('es')
  const [, setDateTick] = useState(() => new Date())
  const ui = getUi(language)
  const profile = getProfile(language)
  const skills = getSkills(language)
  // const experiences = getExperiences(language)
  const education = getEducation(language)
  const courses = getCourses()
  const projects = getProjects(language)
  const socialLinks = getSocialLinks()

  useEffect(() => {
    const now = new Date()
    const nextDay = new Date(now)
    nextDay.setHours(24, 0, 0, 0)
    const timer = setTimeout(() => setDateTick(new Date()), nextDay.getTime() - now.getTime())

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`
    document.documentElement.lang = language
  }, [language, profile.name, profile.role])

  return (
    <div className="site-shell">
      <Navbar profile={profile} ui={ui} language={language} onLanguageChange={setLanguage} menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onNavigate={() => setMenuOpen(false)} />
      <main>
        <Hero profile={profile} ui={ui.hero} />
        <About profile={profile} ui={ui.about} />
        <Skills skillGroups={skills} ui={ui.skills} />
        {/* <Experience experiences={experiences} ui={ui.experience} /> */}
        <Education education={education} courses={courses} ui={ui.education} />
        <Projects projects={projects} ui={ui.projects} />
        <Contact profile={profile} socialLinks={socialLinks} ui={ui.contact} />
      </main>
      <Footer profile={profile} socialLinks={socialLinks} ui={ui} />
    </div>
  )
}

export default App
