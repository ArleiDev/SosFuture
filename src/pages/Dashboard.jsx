import React from 'react'
import Sidebar from '../components/Sidebar'
import banner from './imgs/banner.png'
import Cardsquare from '../components/Carrdsquare'
import { useState } from 'react'
import img1 from "./imgs/cadastro-e-atualizacao-icon.png"
import img2 from "./imgs/geraca-e-impressao-de-senha-icon.png"
import img3 from "./imgs/triagem-e-classificacao-icon.png"
import Modal from '../components/ModalSituations'

const Dashboard = () => {
  

  const handleClick = () => {
      


  }

  const [menu , setMenu] = useState([
    { id: 1, img: img1, description: 'Cadastro e Atualização', fnclick: handleClick},
    {  id: 2 , img: img2, description: 'Geração e Impressão de senha' , link:"/gerar&imprimir-senha" },
    {  id: 3 , img: img3, description: 'Triagem e Classificação' },
   
  ])
  
  return (
    
    <div className='flex'>
      <Sidebar></Sidebar>
    <div className='flex-col h-full w-full'>
        <div className="colBanner w-full  p-6  ">
          <img src={banner} className='rounded-xl w-full object- h-[400px] rounded-xl' alt="" srcset="" />
        </div>
        <div className='flex p-6 gap-10 justify-center'>
          {
            menu.map((item) => (
              <Cardsquare fnclick={item.fnclick} link={item.link} key={item.id} img={item.img} description={item.description} />
            ))
          }
        </div>

    </div>
    </div>
    
  )
}

export default Dashboard
