import React from 'react'
import image  from '../bilder/Spain-Bucketlist-683x1024.jpg'

export default function Image() {
  const imageStyle = {
    float: 'right', // Align the image to the right
    marginRight: '50px', // Add some margin for better spacing
  };
  
  
  return (
    <div>
      <img src={image} height='400' width='200' 
      style={{ ...imageStyle }} alt=""/>
    </div>
  )
}
