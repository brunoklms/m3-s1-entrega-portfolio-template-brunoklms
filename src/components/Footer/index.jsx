import anna from '../../assets/Anna.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin2 from '../../assets/linkedin2.png';

export const Footer = () => {
    return(
        <footer className='footer'>
                <div className='footer-itens'>
                            <img src={anna} alt="Foto da Anna" />
                        <div className='footer-text'>
                            <h2>Thank you!</h2>
                            <p>Follow me on my social networks and let's talk</p>
                        </div>
                </div>
        
            <div className='footer-icons'>
                <a href="#"><img src={facebook} alt="icone facebook" /></a>
                <a href="#"><img src={instagram} alt="icone instagram" /></a>
                <a href="#"><img src={linkedin2} alt="icone linkedin" /></a>
            </div>
        </footer>
    )
}