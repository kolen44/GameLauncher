import React from 'react'
import './styles.css'

import PressableIcon from '../PressableIcon/index'
import notificationIcon from '../../assets/notice.png'
import basketIcon from '../../assets/basket.png'
import profileIcon from '../../assets/profile.png'

export default function HeaderControls(){
	return(
		<div className='header__controls'>
			<PressableIcon hasChanges={true} src={notificationIcon}/>
			<PressableIcon src={basketIcon}/>
			<PressableIcon src={profileIcon}/>
		</div>
	)
}