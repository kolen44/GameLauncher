import React from 'react'
import './styles.css'

export default function Badge({ children, size='big' }){
	return (
		<span className={`badge size__${size}`}>{children}</span>
	)
}