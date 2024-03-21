import React from 'react'


type HeadingProps =  {
    title : string,
}

const Heading = (props : HeadingProps) => {
  return (
    <>
    <h1  className='text-3xl font-extrabold font-kadwa'>{props.title}</h1>
    </>
  )
}

export default Heading