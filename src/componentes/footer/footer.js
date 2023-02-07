import './footer.css'
import Chao from "./chao/Chao"
import Cat from "./cats/Cat"
import { useState } from "react"
function Footer(){
    const [cat, setCat] = useState(1)
    return(
        <footer>
            <Cat
                cat={cat}
                setCat={setCat}
            ></Cat>
            <Chao></Chao>
        </footer>
    )
}
export default Footer