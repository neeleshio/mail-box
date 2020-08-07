import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal, message } from 'antd';
import axios from '../axios/axios'
import '../Styles/Modals.scss'

const Modals = (props) => {

    const [visible, setVisible] = useState(true)

    const { register, handleSubmit } = useForm()

    const token = localStorage.getItem("token")

    const onSubmit = (data) => {

        axios.post(`http://localhost:8082/emails`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(response => {
            setVisible(!visible)
            message
                .loading('Sending..', 1)
                .then(() => message.success('Sent', 1))
        }).catch(err => {
            console.log(err)
                .loading('Sending..', 1)
                .then(() => message.success('Mail not sent', 1))
        })
    }

    const handleCancel = () => {
        setVisible(!visible)
    };

    return (
        <>
            <Modal
                visible={visible}
                width={1000}
                title="New Message"
                onCancel={handleCancel}
            >
                <div className="input-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder="To" name="to" ref={register} required />
                        <br />
                        <input type="text" placeholder="Subject" name="subject" ref={register} required />
                        <br />
                        <textarea type="text" placeholder="Compose" name="body" ref={register} rows="10" cols="50" required />
                        <br />
                        <div className="button-container">
                            <button type="submit" name="folderId" value="2" ref={register}>Send</button>
                        </div>
                    </form>
                </div>

            </Modal>
        </>
    );
}

export default Modals