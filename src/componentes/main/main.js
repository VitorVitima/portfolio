import { useState } from "react"

import Projetos from "./projetos/projetos"
import SobreMim from "./sobreMim/SobreMim"
function Body(){
    const [projeto, setProjeto] = useState('Todos')
    const projetos = {
        html_css: ()=>{
            return(
                <>
                    <div id='projeto1' className='html_css'></div>
                    <div id='projeto2' className='html_css'></div>
                    <div id='projeto3' className='html_css'></div>
                    <div id='projeto4' className='html_css'></div>
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
            <Projetos
                projeto={projeto}
                setProjeto={setProjeto}
                projetos={projetos}
            ></Projetos>
            <SobreMim></SobreMim>
        </main>
    )
}
export default Body