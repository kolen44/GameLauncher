import React from 'react'
import './styles.css'

export default function PressableIcon({src, hasChanges}){
	return(
		<button className='pressable-icon'>
			<img src={src} className='pressable-icon__img' alt="Image" />
			{hasChanges && <div className='pressable-icon__dot'></div>}
		</button>
	)
}