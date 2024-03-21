"use client"
import React, { useState } from 'react';

type ButtonComponentProps = {
    title:string[]
}
const ButtonComponent = (props:ButtonComponentProps) => {
    const [click , setClicked] = useState<boolean>(false);
  return (
    <>
    {
        props.title.map((title , i)=>{
            return (
                 <button key={i} className={`bg-gray-200 h-10 px-3 rounded-lg text-xs  font-kadwa ${click ? "bg-green-500" : ""}`} onClick={()=>{setClicked(!click)}}>{title}</button>
            
            )
        })
    }
    </>
  )
}

export default ButtonComponent