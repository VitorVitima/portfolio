import { useState } from "react"
import Cat from "./cats/Cat"
import Chao from "./chao/Chao"
function Body(){
    const [cat, setCat] = useState(1)
    return(
        <>
            <h2>Body funcionando</h2>
            <Cat
                cat={cat}
                setCat={setCat}
            ></Cat>
            <Chao></Chao>
        </>
    )
}
export default Body