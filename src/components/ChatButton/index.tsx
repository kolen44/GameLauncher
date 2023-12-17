import React from 'react'
import './styles.css'

import PressableIcon from '../PressableIcon/index'
import messageIcon from '../../assets/message.png'

export default function ChatButton({onClick}){
	return(
		<div className='chat-button' onClick={onClick}>
			<PressableIcon src={messageIcon} />
			<span className='chat-button__text'>Chat to us</span>
		</div>
	)
}