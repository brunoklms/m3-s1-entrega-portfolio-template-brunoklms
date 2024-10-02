import  foto  from '../../assets/Anna.png';
import  git  from '../../assets/git.png';
import icons from '../../assets/icons.png';
import { BannerSection } from '../BannerSection';

export const AboutMeSection = () => {
    return(
        <>
        <section className='aboutme-section'>
            <div className='about-me'>
                <div className='aboutme-img-title'>
                    <img src={foto} alt="Foto Anna" />
                    <h2>Hello, my name is Anna</h2>
                </div>
                
                <div className='aboutme-title-secondary'>
                    <h2>I <span>love</span> creating and <span>developing</span> projects</h2>
                </div>

                <div className='aboutme-description'>
                        <p>Discover here in this environment, created especially for you, all my projects and technologies</p>
                </div>

                <div className='link-projects'>
                    <a href="#">See Projects</a>
                    <img src={git} alt="Icone Git" />
                </div>

                <div className='icons'>
                    <img src={icons} alt="icons" />
                </div>

            </div>
            <BannerSection />
        </section>
        </>
    )
}