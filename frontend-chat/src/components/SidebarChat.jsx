import React from 'react'
import { Avatar } from '@mui/material'
import { DonutLarge as DonutLargeIcon, Chat as ChatIcon, MoreVert as MoreVertIco } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { SearchOutlined as SearchOutlinedIcon } from '@mui/icons-material'
import './SidebarChat.css'
 

const SidebarChat = () => {
  return (
    <div className='sidebarChat'>
        <Avatar />
        <div className="sidebarChat__info">
            <h2>Room Name</h2>
            <p>Last Message</p>
        </div>
    </div>
  )
}

export default SidebarChat