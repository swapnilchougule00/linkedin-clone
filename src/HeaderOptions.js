import React from 'react'
import './HeaderOptions.css'
import { Avatar } from '@mui/material'


function HeaderOptions({avatar,Icon,title}) {

  return (
    <div className='header_option'>
      {Icon && <Icon className='header_option_icon'/>}
      {avatar && (
        <Avatar className="header_option_icon"/>
      )}
      <h3 className='header_option_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
