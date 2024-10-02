import whats from '../../assets/whats.png';
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';

export const TechSection = () => {
    return (
        <section className='tech-section'>
            <div className='tech'>
                <div className='tech-title'>
                    <h2>Let's set up a conversation and <span>develop our creativity</span> together?</h2>
                    <p>Advertise your brand organically within Dribbble’s design inspiration feed.</p>
                </div>

                <div className='contact-section'>
                    <ul>
                        <li>
                             <img src={whats} alt="Icone whatsapp" />
                            <div className='contact-infos'>
                                <h2>My phone</h2>
                                <p>I'm available for a voice chat, let's about creativity together?</p>
                                <a href="#">Call now</a>
                            </div>
                        </li>
                        <li>
                              <img src={email} alt="Icone email" />
                            <div className='contact-infos'>
                                <h2>My email</h2>
                                <p>Send me an email reporting feedbacks, suggestions and ideas</p>
                                <a href="#">Send email now</a>
                            </div>
                        </li>
                        <li>
                              <img src={linkedin} alt="Icone linkedin" />
                            <div className='contact-infos'>
                                <h2>My LinkedIn</h2>
                                <p>We can create more constant interactions as well as a sharing network</p>
                                <a href="#">Go to LinkedIn Now</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}