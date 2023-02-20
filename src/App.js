import Header from './componentes/header/header.js'
import Main from './componentes/main/main.js'
import Footer from './componentes/footer/footer.js';
import './App.css';

function App() {
  const returnFooter = () => {
    if(window.innerWidth < 900){
      return(
        <Footer></Footer>
      )
    }
  }
  return (
    <>
      <Header></Header>
      <Main></Main>
      {returnFooter()}
    </>
  );
}

export default App;
