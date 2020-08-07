import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../axios/axios'
import { Layout } from 'antd';
import Sidebar from '../Components/Sidebar'
import Lists from '../Components/Lists'
import Cards from '../Components/Cards'

const { Content } = Layout;

const Spam = () => {

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
        axios.get('/folders/5/emails', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            setMails(response.data)
        }).catch(err => {
            console.log(err)
        })

        axios.get(`emails/8`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            setMailWindow(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    if (token === null) {
        return <Redirect to="/login" />
    } else {
        return (
            <>

                <Layout style={{ minHeight: '100vh' }}>

                    <Layout className="site-layout" >
                        <Sidebar defaultKey={'5'} />
                        <Content style={{ padding: "0 5px", width: '40vw', height: '100vh', scrollbarWidth: 'none' }}>
                            <>
                                <div className="nav-bar" style={{ backgroundColor: '#fff', position: 'fixed', zIndex: '160' }}>
                                    <div className="" >
                                        <span style={{ fontSize: 16 }}>Spam</span>
                                    </div>
                                </div>
                            </>
                            <Lists inbox={mails} handleClick={handleClick} />

                        </Content>

                        <Content style={{ width: '60vw', height: '100vh', scrollbarWidth: 'none' }}>
                            <>
                                <div className="nav-bar" style={{ backgroundColor: '#fff', position: 'fixed', zIndex: '160', borderLeft: '1px solid #e8e8e8' }}>
                                    <div className="">
                                        <a>{mailWindow.title} </a>

                                    </div>
                                </div>
                            </>
                            <Cards subject={mailWindow.subject} body={mailWindow.body} />

                        </Content>

                    </Layout>
                </Layout>
            </>
        );
    }


}

export default Spam
