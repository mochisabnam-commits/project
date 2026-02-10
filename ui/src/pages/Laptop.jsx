import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const Laptop = () => {

  let [LA,setLA] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/fetchbyCategory/Laptop")
    .then((data)=>{

      console.log(data.data);
    }
  )

  .catch((l)=>{
     console.log(l);
  }
)

  } )







  return (
    <div>Laptop</div>
  )
}
