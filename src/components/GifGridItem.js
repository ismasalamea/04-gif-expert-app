import React from 'react'

export const GifGridItem = ({id, title, url}) => {
   // console.log(id, title, url);
    return (
    <div className="card animate__animated animate__bounce">
    <img src= { url } alt={ title } height="100px"/>
    <p> { title } </p>
    </div>

  )
  
}

/*

1.- enzyme
2.- enzyme to JSON

*/