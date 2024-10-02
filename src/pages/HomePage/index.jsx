import { Header } from '../../components/Header';
import { AboutMeSection } from "../../components/AboutMeSection";
import { Footer } from "../../components/Footer";
import { ProjectsSection } from "../../components/ProjectsSection";
import { TechSection } from '../../components/TechSection';
import  '../../styles/index.css';


export const HomePage = () => {
    return(
        <>
        <Header />
        <main>
            <AboutMeSection />
            <ProjectsSection />
            <TechSection />
        </main>
        <Footer />
        </>
    )
}