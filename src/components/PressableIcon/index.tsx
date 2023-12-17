import React from 'react'
import './styles.css'

export default function PressableIcon({src, hasChanges, onClick = () => {}}){
	return(
		<button className='pressable-icon' onClick={onClick}>
			<img src={src} className='pressable-icon__img' alt="Image" />
			{hasChanges && <div className='pressable-icon__dot'></div>}
		</button>
	)
}