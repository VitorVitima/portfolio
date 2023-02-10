import './sobreMim.css'
function SobreMim(){
    return(
        <article id='sobreMim'>
            <h1>Sobre Mim</h1>
            <div id="textAndImg">
                <div id="ps">
                    <p>
                        Me chamo Henrique, no presente tenho 17 anos e estou procurando meu primeiro emprego como programador Front-End.
                    </p>
                    <p>
                        Comecei na programação com 12 anos, fazendo coisas bestas no Dev-C++, uns anos depois conheci o Curso em Vídeo - canal do YouTube focado em programação - que me apresentou o conceito de Front-End, e de inicio já me encantou, e estudo desde então.
                    </p>
                    <p>
                        Atualmente estou estudando Node.js, para incrementar em meu conhecimento e porquê tem ligação com tudo que eu ando estudando.
                    </p>
                </div>
                <div id='imgs'>
                    <img id='salgadin' src='./imgs/salgadin.png'/>
                    <img id='pato' src='./imgs/pato.png' />
                    <img id='cois' src='./imgs/cois.png' />
                </div>
            </div>

        </article>
    )
}
export default SobreMim