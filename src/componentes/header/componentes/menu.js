import './menu.css'
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
    const links = () => {
        if(window.innerWidth >= 900){
            return '#allProjectsConteiner'
        } else {
            return '#'
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
                    <a href={links()} >Habilidades</a>
                    <a href='#'>Sobre Mim</a>
                    <a href='#' >Contato</a>
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