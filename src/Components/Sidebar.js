import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { AiOutlineInbox, AiOutlineFolder, AiOutlineStop } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'
import { RiSendPlane2Line, RiDeleteBinLine, RiContactsBook2Line, RiArchiveLine } from 'react-icons/ri'
import '../Styles/Sidebar.scss'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };


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


                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" defaultOpenKeys={['sub1', 'sub2']} style={{ backgroundColor: "#f4f4f4" }}>
                    <SubMenu key="sub1" title="Favorites" >
                        <Menu.Item key="3"><AiOutlineInbox />Inbox</Menu.Item>
                        <Menu.Item key="4"><BsPencil />Draft</Menu.Item>
                        <Menu.Item key="5"><RiSendPlane2Line />Sent</Menu.Item>
                        <Menu.Item key="5"><RiDeleteBinLine />Delete</Menu.Item>
                        <Menu.Item key="5"><RiContactsBook2Line />Contacts</Menu.Item>
                        <Menu.Item key="5"><AiOutlineFolder />Travel</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Folders">
                        <Menu.Item key="5"><AiOutlineStop />Junk</Menu.Item>
                        <Menu.Item key="5"><RiArchiveLine />Archive</Menu.Item>
                        <Menu.Item key="5"><AiOutlineFolder />Travel</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </>
    );
}

export default Sidebar