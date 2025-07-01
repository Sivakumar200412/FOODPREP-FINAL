import React from 'react'
import {NavLink} from 'react-router-dom'
import {assets} from '../../assets/assets'
import './Sidebar.css'
const ListIcon = ({ width = 24, height = 24, fill = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="list" viewBox="0 0 48 48" fill={fill}>
    <path d="M4 34h4v1H6v2h2v1H4v2h6v-8H4v2zm2-18h2V8H4v2h2v6zm-2 6h3.6L4 26.2V28h6v-2H6.4l3.6-4.2V20H4v2zm10-12v4h28v-4H14zm0 28h28v-4H14v4zm0-12h28v-4H14v4z"></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
)
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add'  className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <ListIcon width={20} height={20} fill="var(--theme-color)" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders'  className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar