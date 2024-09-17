import React from 'react'
import { Link } from 'react-router-dom'

const Cardsquare = (props) => {
  return (
    <Link to={props.link}>
      <div onClick={props.fnclick} className='h-72 w-72 bg-white items-center flex flex-col justify-center rounded-lg border-solid border-2 hover:cursor-pointer hover:scale-105 transition-all '>
        <div className="img m-2">
          <img className='w-36 ' src={props.img} alt="" srcset="" />
        </div>
        <div className=" items-center flex justify-center text-xl font-medium text-blue-800 px-10 text-center"><h1>{props.description}</h1></div>
    </div>
    </Link>

  )
}

export default Cardsquare
