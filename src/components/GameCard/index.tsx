import React from 'react'
import './styles.css'
import Dota2 from "../../assets/dota2.jpg"
import Badge from '../Badge/index.tsx'

export default function GameCard({size='big'}){
	return(
		<section className={`game-card size__${size}`} >
		<img className='game-card__background' src={Dota2} alt="Dota2" />
			<div className='game-card__footer'>
				<div className='game-card__info'>
				<span className='game-card__name'>Dota2</span>
				<ul className='game-card__tags'>
					{['Adventure','Pazzle','Platformer']
					.map(text=><li className='tags__tag'><Badge size={size}>{text}</Badge></li>)}
				</ul>
				</div>
			
				<strong className='game-card__price'>Rp 165 999</strong>
				</div>
		</section>
	)
}