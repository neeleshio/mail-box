import React from 'react'
import { Layout, Menu, Dropdown } from 'antd';
import { BarChartOutlined, DownOutlined } from '@ant-design/icons';
import '../Styles/Navbar.scss'


const { Header } = Layout;

const Navbar = () => {

    return (
        <>
            <div className="nav-bar">
                <div className="container">
                    <a>New Message </a>
                    <a>Delete </a>
                    <a>Archive </a>
                    <a>Junk </a>
                    <a>Sent </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;