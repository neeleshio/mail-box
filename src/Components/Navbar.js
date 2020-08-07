import React, { useState } from 'react'
import { Layout } from 'antd';
import { FiPlus } from 'react-icons/fi'
import { AiOutlineStop } from 'react-icons/ai'
import { RiSendPlane2Line, RiDeleteBinLine, RiArchiveLine } from 'react-icons/ri'
import '../Styles/Navbar.scss'
import Modals from './Modals'

const { Header } = Layout;

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible(!visible)
    }

    return (
        <>
            <div className="nav-bar">
                <a onClick={handleClick}><FiPlus /><span>New Message</span> </a>
                <div className="container">
                    <a><RiDeleteBinLine /><span>Delete</span> </a>
                    <a><RiArchiveLine /><span>Archive</span> </a>
                    <a><AiOutlineStop /><span>Junk</span> </a>
                    <a><RiSendPlane2Line /><span>Sent</span> </a>
                </div>
            </div>

            {visible ? <Modals /> : ''}
        </>
    )
}

export default Navbar;