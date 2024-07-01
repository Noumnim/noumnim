import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Hom"
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
  import {Box} from '@mui/material'
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skill/skills";
const HomePage = () => {
    return (
        <Box sx={{backgroundColor:'white'}}>
            <Navbar />
            <Home />
            <About/>
            <Education/>
            <Experience/>
            <Skills/>
            <Contact/>
            
        </Box>
    )
}
export default HomePage;