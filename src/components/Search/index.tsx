import React from 'react'
import './styles.css'
import SearchIcon from "../../assets/search.png"

export default function Search(){
	return(
		<div className='search'>
		<button className='search__submit'>
			<img src={SearchIcon} alt="SearchIcon" className='search__icon'/>
		</button>
			<input type="text" className='search__input' placeholder='Type to search'/>
		</div>
	)
}