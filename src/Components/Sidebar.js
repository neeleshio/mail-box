import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { AiOutlineInbox, AiOutlineFolder, AiOutlineStop } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiSendPlane2Line, RiArchiveLine } from 'react-icons/ri'
import '../Styles/Sidebar.scss'

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = (props) => {

    return (
        <>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

            >
                <div className="logo" />


                <Menu theme="light" defaultSelectedKeys={[props.defaultKey]} mode="inline" defaultOpenKeys={['sub1', 'sub2']} style={{ backgroundColor: "#f4f4f4" }}>
                    <SubMenu key="sub1" title="Favorites">
                        <Menu.Item key="1"><Link to="/inbox"><AiOutlineInbox /><span>Inbox</span></Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/draft"><BsPencil /><span>Draft</span></Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/sent"><RiSendPlane2Line /><span>Sent</span></Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/flagged"><RiArchiveLine /><span>Flagged</span></Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/spam"><AiOutlineStop /><span>Spam</span></Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Folders">
                        <Menu.Item key="6"><AiOutlineFolder /><span>Office</span></Menu.Item>
                        <Menu.Item key="7"><AiOutlineFolder /><span>Contacts</span></Menu.Item>
                        <Menu.Item key="8"><AiOutlineFolder /><span>Travel</span></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar