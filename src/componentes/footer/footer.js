import './footer.css'
import Chao from "./chao/Chao"
import Cat from "./cats/Cat"
import { useState } from "react"
function Footer(){
    const [cat, setCat] = useState(1)
    return(
        <footer>
            <div id="catEChao">
                <Cat
                    cat={cat}
                    setCat={setCat}
                ></Cat>
                <Chao></Chao>
            </div>
            <div id='Redes'>
                    <a target={'_blank'} href='https://twitter.com/VVitima'><i id='twitter' className="fa-brands fa-twitter"></i></a>
                    <a target={'_blank'} href='https://github.com/VitorVitima'><i id='git' className="fa-brands fa-github"></i></a>
                    <a target={'_blank'} href='https://www.linkedin.com/in/henrique-sousa-1b4b12263/'><i id='linkedin' className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </footer>
    )
}
export default Footer