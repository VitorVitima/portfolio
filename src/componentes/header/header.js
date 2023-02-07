import React from "react"
import Menu from "./componentes/menu"
import { useState } from "react"
import './header.css'
function Header(){
    const [menu, setMenu] = useState(false)
    return(
        <header>
            <h1>Vitor Vitima</h1>
            <Menu menu={menu} setMenu={setMenu}></Menu>
        </header>
    )
}
export default Header