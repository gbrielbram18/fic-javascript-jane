import React from 'react'

//importe a imagem diretamente
import img1 from "../../assets/img1.jpg"

import "./style.css"
export default function ImgCard(props) {
  console.log(props)
  return (
    <div className="image-card">
      <img src={props.newImg} />
      <p className="image-card-caption">
        {props.caption}
        </p>
      </div>
  )
}
