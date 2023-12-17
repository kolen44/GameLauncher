import React from 'react'


import Backgrund from "../assets/lol.jpg"
import GameCard from './GameCard/index'
import Recommended from './Recommended/index'
import Sidebar from './Sidebar/index'
import Header from './Header/header'

export default function Main(){
	return(
    <main className="main" style={{backgroundImage: `url(${Backgrund})`}}>
      <Sidebar />
      <div className='content'>
        <div className='content__header'>
          <Header />
        </div>
        <GameCard />
        <div className='content__recommended'>
          <Recommended />
        </div>
      </div>
    </main>		
	)
}