import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../axios/axios'
import { Layout } from 'antd';
import { Row, Col, Divider } from 'antd';
import Sidebar from '../Components/Sidebar'
import Lists from '../Components/Lists'
import Cards from '../Components/Cards'
import e from 'cors';

const { Content } = Layout;

const Inbox = () => {

    const token = localStorage.getItem("token")

    const [mails, setMails] = useState([])
    const [mailWindow, setMailWindow] = useState([])

    const handleClick = id => {
        axios.get(`emails/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            setMailWindow(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get('/folders/1/emails', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            setMails(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    if (token === null) {
        return <Redirect to="/login" />
    } else {
        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Layout className="site-layout">
                    <Sidebar />
                    <Content style={{ width: '40vw', height: '100vh', scrollbarWidth: 'none' }}>
                        <>
                            <div className="nav-bar">
                                <div className="container">
                                    <a>Focused </a>
                                    <a>Other </a>
                                </div>
                            </div>
                        </>
                        <Lists inbox={mails} handleClick={handleClick} />

                    </Content>

                    <Content style={{ width: '60vw', background: '#f4cafd', height: '100vh' }}>
                        <>
                            <div className="nav-bar">
                                <div className="container">
                                    <a>{mailWindow.title} </a>

                                </div>
                            </div>

                        </>
                        <Cards subject={mailWindow.subject} />

                    </Content>

                </Layout>
            </Layout>
        );
    }


}

export default Inbox
