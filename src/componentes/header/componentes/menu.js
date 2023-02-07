import './menu.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
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
            </div>  
        </nav>
    )
}
export default Menu