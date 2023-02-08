import './menu.css'
import { Link } from 'react-router-dom'
function Menu(props){
    const clickMenu = () =>{
        const menu = document.querySelector('#menuTag')
        if(props.menu){
            menu.className = 'close'
            props.setMenu(false)
        } else {
            menu.className = 'open'
            props.setMenu(true)
        }
    }
    return(
        <nav>  
            <div 
                id="menuTag"
                className='close'
                onClick={()=>clickMenu()}    
                >
                <div id="menuDivs">
                    <div id='menu1'></div>
                    <div id='menu2'></div>
                    <div id='menu3'></div>
                </div>
                <div id='links'>
                    <Link to='./'>Sobre Mim</Link>
                    <Link to='./' >Habilidades</Link>
                    <Link to='./' >Contato</Link>
                </div>
                <div id='iconsTag'>
                    <Link target={'_blank'} to='https://twitter.com/VVitima'><i id='twitter' class="fa-brands fa-twitter"></i></Link>
                    <Link target={'_blank'} to='https://github.com/VitorVitima'><i id='git' class="fa-brands fa-github"></i></Link>
                    <Link target={'_blank'} to='https://www.linkedin.com/in/henrique-sousa-1b4b12263/'><i id='linkedin' class="fa-brands fa-linkedin-in"></i></Link>
                    
                </div>
            </div>  
        </nav>
    )
}
export default Menu