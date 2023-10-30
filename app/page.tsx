import AboutUs from './aboutus/page'
import Blog from './blog/page'
import Career from './career/page'
import Navbar from './components/navbar'
import Contact from './contact/page'
import Main from './home/page'
import Projects from './projects/page'
import Services from './services/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <Projects />
      <AboutUs />
      <Career />
      <Contact />
      <Blog />
    </>
  )
}
