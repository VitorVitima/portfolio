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
    const navFun = () => {
        if(props.menu){
            return(
                <div id='links'>
                    <Link to='./'>Sobre Mim</Link>
                    <Link to='./' >Habilidades</Link>
                    <Link to='./' >Contato</Link>
                </div>
            )
        }
    }
    return(
        <nav>  
            <div 
                id="menuTag"
                className='close'
                onClick={()=>clickMenu()}    
                >
                <div id='menu1'></div>   
                <div id='menu2'></div>
                <div id='menu3'></div>
            </div>  
            {navFun()}
        </nav>
    )
}
export default Menu