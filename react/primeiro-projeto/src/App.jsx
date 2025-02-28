import Header from "./Components/Header"
import Banner from "./Components/Banner";
import ImgCard from "./Components/imgCard";
import Card from "./Components/Card";
import Txt from "./Components/Txt";
import Count from "./Components/Count";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";



import "./App.css";


function App() {


  return (
    <>
      <div className="container">
        <Header title="Logo new" subTitle="outros" />

        <Banner>
          <h1>seja bem vindo</h1>
          <p>aqui vc encontra as melhores oportunidades</p>
        </Banner>
        <div>

          <ImgCard caption="uma imagem legal" newImg={img1} />


        </div>
        <div>
        <Count/>

        </div>
        <Card />

        

        <div>
      
        <Txt/>

        </div>

        
        


      </div>


    </>
  )
}

export default App
