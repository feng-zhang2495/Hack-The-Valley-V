import '../stylesheets/Home.css';
import { Link } from 'react-router-dom';
import BLOODD from "../assets/BLOODD.png";
import donateblood from "../assets/donateblood.png";
import injection from "../assets/injection.png"
import clock from "../assets/clock.png"
import requirements from "../assets/requirements.png"


const Content = (props) => {
    return ( 
        <div>
            <header className='title'>
                <h1 class= 'red'> Donate For Life </h1>
            </header>

            <div className='about backimg'>
                <h2 className='spaceTop'> About us </h2>
                <img className='img1' src={donateblood} alt='donateblood.png' />
                <p className='spaceBottom spaceSides'> We are a non-profit organization whose goal is to increase awareness surrounding blood donations. We plan to do this by educating others on the importance of blood donations and by also linking all relevant sources relating to donating blood.</p>  
            </div>
            
            <div className='columns'>
                <div className='leftcolumn'>
                    <h3 style = {{marginBottom: 40 }}>Why you should donate blood</h3>
                    <p>Donating blood helps save lives. Blood is used in all kinds of medical treatments, and is used for a large range of medical complications. Anyone could end up needing blood, and the blood someone donates may end up saving their lives. Because blood can only be stored for a certain period of time, there is a constant demand for blood, making it even more precious. By donating blood, you may end up giving someone the most precious thing to them, their life.</p>
                </div>

                <div className='rightcolumn'>
                    <h3 style = {{marginBottom: 50 }}> More about blood donations</h3>
                    <p>Read more at <a href='https://blood.ca/' target='_blank'>blood.ca</a></p>
                </div>
            </div>

            <div className='FAQ'>
                <h2 className={{textAlign: 'center'}}>
                    Frequently Asked Questions
                </h2>
            </div>
            
            <div className="section2">
                
                <div class="column-left">
                    <img src={requirements} alt='requirement' height="150" width="150"/>
                    <h3 className='textContainers'>
                        Am I Eligible to Donate Blood? 
                    </h3>
                    <p className='paragraphs'>To be able to donate blood, you must:
                        be at least 17 years of age, weigh At least 110 lbs, and be able to perform everyday tasks. 
                        To see all eligibility requirements, visit this link: <a href="https://www.redcrossblood.org/faq.html#eligibility">Red Cross Blood</a>
                    </p>
                </div>

                <div className="column-center">
                    <img className='injectionImg' src={injection} alt='injection' height="150" width="150"/>
                    <h3 className='textContainers'>
                        Will the needle hurt?
                    </h3>
                    <p className='paragraphs'>Only for a moment. Pinch the fleshy, soft underside of your arm. 
                    That pinch is similar to what you will feel when the needle is inserted. 
                    </p>
                </div>
                    
                <div className="column-right">
                    <img src={clock} alt='clock' height="150" width="150"/>
                     <h3 className='textContainers'>
                        How Long Will The Process Take?
                    </h3>
                    <p className='paragraphs'>
                    The entire process takes just over 1 hour; 
                    the actual donation of blood takes 8 to 10 minutes. 
                    However, the time varies slightly with each person depending on several factors
                    including health history.
                    </p>
                </div>
                    
            </div>

            <footer>
                <img className='logo' src={BLOODD} alt='blood.png' /> 
                <div>
                    <h2> <Link to="signup">Sign Up Now</Link> </h2>
                    <h3> Contact us </h3>
                    <h4 className='tab'> Email Instagram Facebook</h4>
                    <p className='tab'>Bloodsocietyinc@gmail.com <a href='https://www.instagram.com/canadaslifeline/' target='blank'>BloodCanadaInstagram  </a> <a href='https://www.facebook.com/search/top?q=canadian%20blood%20services' target='blank'>BloodCanadaFacebook  </a></p>
                    <p> © Bloodsociety </p>
                </div>    
                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </div>
    )
}





export default Content

//RACFE
