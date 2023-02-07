import { useState } from "react"

import Projetos from "./projetos/projetos"

import Cat from "./cats/Cat"
import Chao from "./chao/Chao"
function Body(){
    const [cat, setCat] = useState(1)
    const [projeto, setProjeto] = useState()
    return(
        <>
            <h2>Body funcionando</h2>
            <Projetos
                projeto={projeto}
                setProjeto={setProjeto}
            ></Projetos>
            <Cat
                cat={cat}
                setCat={setCat}
            ></Cat>
            <Chao></Chao>
        </>
    )
}
export default Body