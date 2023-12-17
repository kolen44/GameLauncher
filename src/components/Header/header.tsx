import React from 'react'
import './header.css'
import Search from '../Search/index'
import HeaderControls from '../HeaderControls/index'

export default function Header(){
	return (
		<header className='header'>
			<Search />
			<HeaderControls />
		</header>
	)
}