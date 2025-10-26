import './Header.css';
import menu from '../assets/menu.svg'
import star1 from '../assets/star1.svg'
import star2 from '../assets/star2.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import { useState } from 'react'; 
function Header(props){
    const [isOpen,setIsOpen] = useState(false)
    const handleClick =() =>{
        setIsOpen(!isOpen);
    };

    const changePage=(page)=>{
        setIsOpen(false);
        props.onPageChange(page)
    };
    return(
        <div className='HeaderStyle'>
            <div>
                <ul>
                    <li style = {{float: 'left'}}>
                        <div className="menuWrapper">
                            <img src= {menu} onClick={handleClick} alt="menu" />
                        </div>
                    </li>
                </ul>

                {isOpen &&(
                    <div className="menuDropdown" role="menu" aria-hidden={!isOpen}>
                        <ul>
                            <li onClick ={() => changePage('home')}><img src={star1} alt=""/>Home<img src={star1} alt=""/></li>
                            <li onClick ={() => changePage('about')}><img src={star1} alt=""/>About Me<img src={star1} alt=""/></li>
                            <li onClick ={() => changePage('project')}><img src={star1} alt=""/>Projects<img src={star1} alt=""/></li>
                            <li onClick ={() => changePage('education')}><img src={star1} alt=""/>Education<img src={star1} alt=""/></li>
                        </ul>
                    </div>
                )}

                {/* right-side icons participate in the header flex layout */}
                <div className="socialIcons">
                    <a href="https://github.com/CalieBear" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <img src={github} alt="github" className="socialIcon github" />
                    </a>
                    <a href="https://www.linkedin.com/in/calista-laporte/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <img src={linkedin} alt="linkedin" className="socialIcon linkedin" />
                    </a>
                </div>
             </div>
         </div>
     )
 }

 export default Header