import React from 'react'
import './projeto.css'
function Projetos(props){
    const allButtons = [...document.querySelectorAll('.buttonProjetos')]
    const sectionFlexD = ()=>{
            return 'conteinerProjetos'
    }
    const trocaProjeto = (e) =>{
        allButtons?.map((el)=>{
            if(el.innerHTML == e.target.innerHTML){
                el.id = 'marcado'
            } else {
                el.id = el.innerHTML
            }
        })
        props.setProjeto(e.target.innerHTML)
    }
    const projetoSelecionado = () => {
        if(props.projeto == 'HTML-CSS'){
            return(
                <section id={sectionFlexD()}>
                    <div id='projeto1' className='html_css'></div>
                    <div id='projeto2' className='html_css'></div>
                    <div id='projeto3' className='html_css'></div>
                    <div id='projeto4' className='html_css'></div>
                </section>
            )
        } else if (props.projeto == 'JavaScript'){
            return(
                <section id={sectionFlexD()}>
                    <div id='projeto1' className='js'></div>
                    <div id='projeto2' className='js'></div>
                    <div id='projeto3' className='js'></div>
                    <div id='projeto4' className='js'></div>
                </section>
            )
        }else if (props.projeto == 'React.JS'){
            return (
                <section id={sectionFlexD()}>
                    <div id='projeto1' className='react'></div>
                    <div id='projeto2' className='react'></div>
                    <div id='projeto3' className='react'></div>
                    <div id='projeto4' className='react'></div>
                </section>
            )
        }
    }
    return (
        <article id='allProjectsConteiner'>
            <div id="buttonsTP">
                <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos">HTML-CSS</button>
                <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos">JavaScript</button>
                <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos">React.JS</button>
            </div>
            {projetoSelecionado()}

        </article>
    )
}
export default Projetos