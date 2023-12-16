import React from 'react'
import './styles.css'

export default function Badge({ children }){
	return (
		<span className='badge'>{children}</span>
	)
}