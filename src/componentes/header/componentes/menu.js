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
    const hab = () => {
        if(window.innerWidth >= 900){
            return (
                <a 
                    href='#allProjectsConteiner'
                >
                    Habilidades
                </a>
            )
            
        } else {
            return (
                <Link to='habilidades'>
                    Habilidades
                </Link>
            )
        }
    }
    const sob = () => {
        if(window.innerWidth >= 900){
            return (
                <a
                    href='#contato'
                >
                    Sobre Mim
                </a>
            )
        } else {
            return (
                <Link
                    to='sobreMim'
                >
                    Sobre Mim
                </Link>
            )
        }
    }
    const con = () => {
        if(window.innerWidth >= 900){
            return (
                <a
                    href='#contato'
                >
                    Contato
                </a>
            )
        } else {
            return (
                <Link
                    to='contato'
                >
                    Contato
                </Link>
            )
        }
    }
    return(
        <nav>  
            <div 
                id="menuTag"
                className='close'
                
                >
                <div id="menuDivs" onClick={()=>clickMenu()}>
                    <div id='menu1'></div>
                    <div id='menu2'></div>
                    <div id='menu3'></div>
                </div>
                <div id='links'>
                    {sob()}
                    {hab()}
                    {con()}
                </div>
                <div id='iconsTag'>
                    <a target={'_blank'} href='https://twitter.com/VVitima'><i id='twitter' className="fa-brands fa-twitter"></i></a>
                    <a target={'_blank'} href='https://github.com/VitorVitima'><i id='git' className="fa-brands fa-github"></i></a>
                    <a target={'_blank'} href='https://www.linkedin.com/in/henrique-sousa-1b4b12263/'><i id='linkedin' className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>  
        </nav>
    )
}
export default Menu