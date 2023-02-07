import { useState } from "react"

import Projetos from "./projetos/projetos"
function Body(){
    const [projeto, setProjeto] = useState('nada')
    return(
        <>
            <Projetos
                projeto={projeto}
                setProjeto={setProjeto}
            ></Projetos>
        </>
    )
}
export default Body