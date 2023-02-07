import './cat.css'
function Cat(props){
    let n1 = 1
    setTimeout(()=>{
        if(props.cat == 9){
            props.setCat(1)
        }else{
            props.setCat(props.cat + n1)
        }
    },100)
    return(
        <div id="catConteiner">
            <div id="catTag" className={`cat${props.cat}`}>
            </div>
        </div>
    )
}
export default Cat