import React from 'react'
import './styles.css'

import HomeIcon from "../../assets/home.png"
import Library from "../../assets/library.png"
import Store from "../../assets/store.png"
import Waitlist from "../../assets/waitlist.png"
import Discount from "../../assets/discount.png"
import Wallet from "../../assets/wallet.png"

import ChatButton from '../ChatButton/index'


export default function Sidebar(){
	return(
		<aside className="sidebar">
        <div>
          <h1 className='sidebar__title'>QHOF</h1>
          <div className="sidebar__divider"></div>
          <ul className="sidebar__menu">
            <li className="menu__item active">
              <img className="item__icon" src={HomeIcon} />
              <h1 className="item__text">Home</h1>
            </li>
            <li className="menu__item">
              <img className="item__icon" src={Library} />
              <h1 className="item__text">Library</h1>
            </li>
            <li className="menu__item">
              <img className="item__icon" src={Store} />
              <h1 className="item__text">Store</h1>
            </li>
            <li className="menu__item">
              <img className="item__icon" src={Waitlist} />
              <h1 className="item__text">Waitlist</h1>
            </li>
            <div className="sidebar__divider"></div>
            <li className="menu__item">
              <img className="item__icon" src={Discount} />
              <h1 className="item__text">Discount</h1>
            </li>
            <li className="menu__item">
              <img className="item__icon" src={Wallet} />
              <h1 className="item__text">Wallet</h1>
            </li>
          </ul>
          <div className="sidebar__divider"></div>
        </div>
        
        <div className='sidebar__chat-button'>
          <ChatButton />
        </div>
      </aside>
	)
}