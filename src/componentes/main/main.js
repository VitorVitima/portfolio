import { useState } from "react"

import Projetos from "./projetos/projetos"
import SobreMim from "./sobreMim/SobreMim"
import Contato from "./contato/contato"
import './main.css'

function Body(){
    const [projeto, setProjeto] = useState('Todos')
    const projetos = {
        html_css: ()=>{
            return(
                <>
                    <div id='projeto1' className='html_css'>
                        <a
                            href="https://vitorvitima.github.io/login/"
                            target='_blank'
                        > 
                        <div className="dados">
                            <p>
                                Pagina de login focada no css e no visual, com um pouco de JavaScript
                            </p>
                            <img
                                src="./imgs/projetos/login.png"
                            ></img>
                        </div>
                        </a>
                    </div>
                    <div id='projeto2' className='html_css'>
                    <a
                            href="https://vitorvitima.github.io/android/"
                            target='_blank'
                        > 
                        <div className="dados">
                            <p>
                                One page focada na responsividade (sem Media Query)
                            </p>
                            <img
                                src="./imgs/projetos/android.png"
                            ></img>
                        </div>
                        </a>
                    </div>
                    <div id='projeto3' className='html_css'>
                    <a
                            href="https://vitorvitima.github.io/cordel/"
                            target='_blank'
                        > 
                        <div className="dados">
                            <p>
                                Pagina, responsiva, sobre o poema de cordel, com efeito parallax
                            </p>
                            <img
                                src="./imgs/projetos/cordel.png"
                            ></img>
                        </div>
                        </a>
                    </div>
                    <div id='projeto4' className='html_css'>
                    <a
                            href="https://vitorvitima.github.io/Replica_Spotify/"
                            target='_blank'
                        > 
                        <div className="dados">
                            <p>
                                Recriação da interface Spotify web apenas com HTML e CSS
                            </p>
                            <img
                                src="./imgs/projetos/spotify.png"
                            ></img>
                        </div>
                        </a>
                    </div>
                </>
            )
        
        },
        js: ()=>{
            return(
                <>
                    <div id='projeto1' className='js'></div>
                    <div id='projeto2' className='js'></div>
                    <div id='projeto3' className='js'></div>
                    <div id='projeto4' className='js'></div>
                </>
            )
        },
        react: ()=>{
            return (
                <>
                    <div id='projeto1' className='react'></div>
                    <div id='projeto2' className='react'></div>
                    <div id='projeto3' className='react'></div>
                    <div id='projeto4' className='react'></div>
                </>
            )
        }
    }
    return(
        <main>
            <SobreMim></SobreMim>
            <Projetos
                projeto={projeto}
                setProjeto={setProjeto}
                projetos={projetos}
            ></Projetos>
            <Contato></Contato>
        </main>
    )
}
export default Body