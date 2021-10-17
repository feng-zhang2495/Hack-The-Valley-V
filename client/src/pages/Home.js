import './Home.css';
import { Link } from 'react-router-dom';

const Content = (props) => {
    return ( 
        <div>
            <header className='title'>
                <h1 class= 'red'> Donate For Life </h1>
            </header>

            <div className='about backimg'>
                <h2 className='spaceTop'> About us </h2>
                <p className='spaceBottom spaceSides'> We are a non-profit organization whose goal is to increase awareness surrounding blood donations. We plan to do this by educating others on the importance of blood donations and by also linking all relevant sources relating to donating blood.</p>  
            </div>
            
            <div>
                <div className='leftcolumn'>
                    <h3>Why you should donate blood</h3>
                    <p>Donating blood helps save lives. Blood is used in all kinds of medical treatments, and is used for a large range of medical complications. Anyone could end up needing blood, and the blood someone donates may end up saving their lives. Because blood can only be stored for a certain period of time, there is a constant demand for blood, making it even more precious. By donating blood, you may end up giving someone the most precious thing to them, their life.</p>
                </div>

                <div className='rightcolumn'>
                    <h3>More about blood donations</h3>
                </div>    
            </div>
        </div>
    )
}





export default Content

//RACFE
