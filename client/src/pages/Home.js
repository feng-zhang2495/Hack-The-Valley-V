import './Home.css';
import { Link } from 'react-router-dom';
import BLOODD from "../assets/BLOODD.png";
import donateblood from "../assets/donateblood.png";


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
                    <h3 style = {{marginBottom: 30 }}>Why you should donate blood</h3>
                    <p>Donating blood helps save lives. Blood is used in all kinds of medical treatments, and is used for a large range of medical complications. Anyone could end up needing blood, and the blood someone donates may end up saving their lives. Because blood can only be stored for a certain period of time, there is a constant demand for blood, making it even more precious. By donating blood, you may end up giving someone the most precious thing to them, their life.</p>
                </div>

                <div className='rightcolumn'>
                    <h3 style = {{marginBottom: 30 }}> More about blood donations</h3>
                    <p>Read more at <a href='https://blood.ca/' target='_blank'>blood.ca</a></p>
                </div>
            </div>

            <footer>
                <img className='logo' src={BLOODD} alt='blood.png' /> 
                <div>
                    <h3> Contact us </h3>
                    <h4 className='tab'>Email  tab Instagram tab Facebook</h4>
                    <p>Bloodsocietyinc@gmail.com </p>
                </div>    
            </footer>
        </div>
    )
}





export default Content

//RACFE
