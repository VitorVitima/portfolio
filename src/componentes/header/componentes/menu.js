import './menu.css'
function Menu(props){
    const fecharMenu = () => {
        const menu = document.querySelector('#menuTag')
        menu.className = 'close'
        props.setMenu(false)
    }
    const abrirMenu = () => {
        const menu = document.querySelector('#menuTag')
        menu.className = 'open'
        props.setMenu(true)
    }
    const clickMenu = () =>{
        if(props.menu){
            fecharMenu()
        } else {
            abrirMenu()    
        }
    }
    const clickLink = () =>{
        const menu = document.querySelector('#menuTag')
        menu.className = 'close'
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
                    <a onClick={()=>clickMenu()} href='#sobreMim'>Sobre Mim</a>
                    <a onClick={()=>clickMenu()} href='#allProjectsConteiner'>Habilidades</a>
                    <a onClick={()=>clickMenu()} href='#contato'>Contato</a>
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