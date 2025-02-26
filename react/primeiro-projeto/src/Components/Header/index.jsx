import "./style.css";

export default function  Header(props){
  
  /*
    o props cria propriedades no componentes
  */
  
  console.log(props)
    return(
        <header>
          <h1>{props.title}</h1>
      </header>
    )


}