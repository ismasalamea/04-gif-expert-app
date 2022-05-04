import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';


export const GiftGrid = ( { categoria } ) => {
  
  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, []);
  
  const getGifs = async () => {
  
  const url = 'https://api.giphy.com/v1/gifs/search?q=RickyMorty&limit=10&api_key=AItTk5gkG2oQSZKcBarIKiMM1sRAKWCS';
  
  const resp =  await fetch( url );
  
  const { data } = await resp.json();
  
  const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
      
  })

  console.log(gifs)
  setImages(gifs)
  }
  
  return (
    <div>
      <h3> { categoria } </h3>

      {
        images.map( img => (
          <GifGridItem 
              key = { img.id }
              img = { img }/>
        )
        )
      }

    </div>
  )
}
