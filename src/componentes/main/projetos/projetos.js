import React from 'react'
import './projeto.css'
function Projetos(props){
    const sectionFlexD = ()=>{
        return 'conteinerProjetos'
    }
    const trocaProjeto = (e) =>{
        const allButtons = [...document.querySelectorAll('.buttonProjetos')]
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
            return (
                <section id={sectionFlexD()}>
                    {props.projetos.html_css()}
                </section>
            )
        } else if (props.projeto == 'JavaScript'){
            return (
                <section id={sectionFlexD()}>
                    {props.projetos.js()}
                </section>
            )
        }else if (props.projeto == 'React.JS'){
            return (
                <section id={sectionFlexD()}>
                    {props.projetos.react()}
                </section>
            )
        } else if (props.projeto == 'Todos' && window.innerWidth >= 900){
            return(
                <section id={sectionFlexD()}>
                    {props.projetos.html_css()}
                    {props.projetos.js()}
                    {props.projetos.react()}
                </section>
            )
        }
    }
    return (
        <>
            <article id='allProjectsConteiner'>
                <h1>Habilidades</h1>
                <div id="buttonsTP">
                    <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos" id='Todos'>Todos</button>
                    <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos" id='HTML-CSS'>HTML-CSS</button>
                    <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos" id='JavaScript'>JavaScript</button>
                    <button onClick={(e)=>trocaProjeto(e)} className="buttonProjetos" id='React.JS'>React.JS</button>
                </div>
                {projetoSelecionado()}
            </article>
        </>
    )
}
export default Projetos