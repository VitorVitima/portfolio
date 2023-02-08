import { useState } from "react"

import Projetos from "./projetos/projetos"
function Body(){
    const [projeto, setProjeto] = useState('nada')
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