import { useState } from "react"

import Projetos from "./projetos/projetos"
function Body(){
    const [projeto, setProjeto] = useState('nada')
    const projetos = {
        html_css: ()=>{
            return(
                <>
                    {/* faz um objeto para os projetos e colocar eles no lugar la */}
                </>
            )
        }
    }
    return(
        <main>
            <Projetos
                projeto={projeto}
                setProjeto={setProjeto}
            ></Projetos>
        </main>
    )
}
export default Body