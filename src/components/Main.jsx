import { useState } from "react"
import { Card } from "./Card"
import { Pokeinfo } from "./Pokeinfo"
import axios from "axios"


export const Main = () => {

  const [pokeData, setPokeData] = useState([])
  return (
    <>
    <div className="container">
        <div className="left-content">
         <Card/>
         <Card/>
         <Card/>
         <Card/>
         
        
         origin https://github.com/ashishpatel3012/Pokemon-App.git
        
         <div className="btn-group">
          <button>Previous</button>
          <button>Next</button>
         </div>
        </div>
        <div className="right-content">
        <Pokeinfo/>
        </div>
    </div>
    </>
  )
}
