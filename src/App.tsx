import { Sidebar } from './components/Sidebar/Sidebar'
import { Hero } from './components/Hero/Hero'
import { FeaturedProjects } from './components/FeaturedProjects/FeaturedProjects'
import { MyProcess } from './components/MyProcess/MyProcess'
import { InfoCards } from './components/InfoCards/InfoCards'
import { FAQ } from './components/FAQ/FAQ'
import { ContactBanner } from './components/ContactBanner/ContactBanner'
import './App.css'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <div className="content-column">
          <FeaturedProjects />
          <MyProcess />
          <InfoCards />
          <FAQ />
          <ContactBanner />
        </div>
      </main>
    </div>
  )
}

export default App
