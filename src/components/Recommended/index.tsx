import React from 'react'
import './styles.css'
import GameCard from '../GameCard/index'

export default function Recommended(){
	return(
		<section className='recommended'>
			<header className='recommended__header'>
				<span className='title__text'>Recomended for you 🔥</span>
				<button className='recommended__view-all'>View all</button>
			</header>
			<div className='recommended__cards'>
				<GameCard size={'small'}></GameCard>
				<GameCard size={'small'}></GameCard>
			</div>
		</section>
	)
}