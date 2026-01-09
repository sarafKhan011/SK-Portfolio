import './index.css'
import './App.css'

import NavbarMain from './components/nevbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ProjectMain from './components/projectSection/ProjectMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

function App() {
  return (
    <>
      <NavbarMain />
      <main className="font-body  flex-col w-full overflow-hidden">
        <HeroMain />
        <SubHeroSection />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        {/* <ExperienceMain /> */}
        <ProjectMain />
        {/* <HelperSection /> */}
        <ContactMeMain />
        <FooterMain />
      </main>
   
    </>
  )
}

export default App
