import React from 'react'
import { Button } from "antd"
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
            {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
        </Button>
    </div>
  )
}
