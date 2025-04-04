import React from 'react'
import movieWidgetPic from '../media/Movie_Widget_Background_Picture.jpg'

const MoviesWidget = () => {
  return (
    <div className=''>
      <img src={movieWidgetPic} alt='Movie Poster' className='w-full p-10 h-[30rem] rounded-[10%]'/>
    </div>
  )
}

export default MoviesWidget;